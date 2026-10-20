const Url=require("../models/Url.js");
const genCode=require("../utils/generateCode.js");


module.exports.addUrl= async(req,res)=>{
    let originalUrl=req.body.originalUrl;
    if(!originalUrl){
        return res.status(400).json({message:"Bad Request"});
    }

    if (
        typeof originalUrl !== "string" ||
        originalUrl.trim() === ""
    ) {
        return res.status(400).json({
            message: "originalUrl must be a non-empty string"
        });
    }

    originalUrl = originalUrl.trim();

    let parsedUrl;

    try{
        parsedUrl=new URL(originalUrl);
    }catch(error){
        return res.status(400).json({message:"Invalid URL format"});
    }

    if (!["http:", "https:"].includes(parsedUrl.protocol)) {
        return res.status(400).json({
            message: "Only HTTP and HTTPS URLs are allowed"
        });
    }
    try{
        let shortCode=genCode();
        while (await Url.exists({ shortCode })) {
            shortCode = genCode();
        }

        const urlData=await Url.create({originalUrl,shortCode});

        return res.status(201).json({
            originalUrl:urlData.originalUrl,
            shortCode:urlData.shortCode,
            createdAt:urlData.createdAt,
            shortUrl: `${req.protocol}://${req.get("host")}/${shortCode}`
        });
    }catch(error){
        return res.status(500).json({message:"Failed to create short URL"});
    }
    
}

module.exports.getAllUrls= async(req,res)=>{
    try{
        const urls=await Url.find();
        return res.status(200).json(urls);
    }catch{
        return res.status(500).json({message:"Failed to fetch URLs"});
    }
}

module.exports.getUrlByCode= async(req,res)=>{
    try{
        let code=req.params.code;
        const urlData=await Url.findOne({shortCode:code});

        if(!urlData){
            return res.status(404).json({message:"URL not found"});
        }

        return res.status(200).json(urlData);
    }catch{
        res.status(500).json({message:"Failed to fetch URL"});
    }

}

module.exports.redirectUrl = async (req, res) => {
    try {
        const urlData = await Url.findOne({
            shortCode: req.params.code
        });

        if (!urlData) {
            return res.status(404).json({
                message: "URL not found"
            });
        }

        return res.redirect(urlData.originalUrl);
    } catch {
        return res.status(500).json({
            message: "Failed to redirect"
        });
    }
};

module.exports.deleteUrlByCode= async(req,res)=>{
    try{
        let code=req.params.code;
        const urlData=await Url.findOneAndDelete({shortCode:code});

        if (!urlData) {
            return res.status(404).json({message:"URL not found"});
        }

        return res.status(200).json({message:"URL deleted successfully"});
    }catch {
        return res.status(500).json({message:"Failed to delete URL"});
    }
}

