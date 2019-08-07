const route = require("express").Router();

const DevController = require("./controllers/DevController");
const LikeController = require("./controllers/LikeController");
const DislikeController = require("./controllers/DislikeController");

route.get("/devs", DevController.index);
route.post("/devs", DevController.store);
route.post("/devs/:likedDev/likes", LikeController.store);
route.post("/devs/:likedDev/dislikes", DislikeController.store);

module.exports = route;
