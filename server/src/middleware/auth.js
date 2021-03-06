const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
    try {
        const authHeader = req.headers['authorization']
        const token = authHeader && authHeader.split(' ')[1]
        console.log(token)

        if (!token) return res.status(403).send("Access denied.");

        const decoded = jwt.verify(token, process.env.ACESSTOKENSECRET);
        req.user = decoded;
         next();
    } catch (error) {
        res.status(400).send("Invalid token");
    }
};