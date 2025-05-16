const aiService = require("../services/ai.service");

module.exports.getReview = async (req, res) => {
    const code = req.body.code;

    if (!code) {
        return res.status(400).send("Prompt not provided.");
    }

    try {
        const response = await aiService(code);
        res.send(response);
    } catch (error) {
        console.error("Controller error:", error.message || error);
        res.status(500).send("Internal server error.");
    }
};
