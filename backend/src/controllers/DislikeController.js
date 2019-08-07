const Dev = require("../model/Dev");

module.exports = {
  async store(req, res) {
    const { user } = req.headers;
    const { likedDev } = req.params;

    const loggedDev = await Dev.findById(user);
    const targetDev = await Dev.findById(likedDev);

    if (!targetDev) res.status(400).json({ error: "Dev not existis" });

    loggedDev.dislikes.push(targetDev._id);

    await loggedDev.save();

    return res.json(loggedDev);
  }
};
