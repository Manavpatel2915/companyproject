// Express server setup with TypeScript
import express from "express";
// Create Express app
const app = express();
// Middleware to parse JSON bodies
app.use(express.json());
// Middleware to parse URL-encoded bodies
app.use(express.urlencoded({ extended: true }));
// Basic route - Home
app.get("/", (req, res) => {
    res.json({
        message: " Express is connected with TypeScript!",
        status: "success",
        timestamp: new Date().toISOString(),
    });
});
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(" Express server is running!");
});
//# sourceMappingURL=index.js.map