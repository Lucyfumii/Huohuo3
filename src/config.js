require("dotenv").config();

module.exports = {
    token: process.env.TOKEN || "MTI0MjcxMjg3MzM5NTAzMjA3NA.G51gXw.xG41dUI0k1gJg_LM-GhRVL-UbGAoETxS_QrgaY",  // your bot token
    prefix: process.env.PREFIX || ".", // bot prefix
    ownerID: process.env.OWNERID || "694929989065506906", //your discord id
    mongourl: process.env.MONGO_URI || "mongodb+srv://c4clan1:c4clan1@c4clan.ohxsoxt.mongodb.net/?retryWrites=true&w=majority", // MongoDb URL
    embedColor: process.env.COlOR || "#F1C40F", // embed colour
    logs: process.env.LOGS || "950433521359527936", // channel id for guild create and delete logs
    langs:  process.env.LANGS || "vi", 

    nodes: [
    {
      host: process.env.NODE_HOST || "lava-v3.ajieblogs.eu.org",
      identifer: process.env.NODE_ID || "Main",
      port: parseInt(process.env.NODE_PORT || "80"),
      password: process.env.NODE_PASSWORD || "https://dsc.gg/ajidevserver",
      secure: parseBoolean(process.env.NODE_SECURE || "false"),

    }
  ],

}

function parseBoolean(value){
    if (typeof(value) === 'string'){
        value = value.trim().toLowerCase();
    }
    switch(value){
        case true:
        case "true":
            return true;
        default:
            return false;
    }
}
