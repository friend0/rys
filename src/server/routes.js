const db = require("./db");
const auth = require("./authenticate");
const express = require("express");
const router = express.Router();
const path = require("path");
// const winston = require("winston");
// const logger = winston.createLogger({
//     json: true,
//     colorize: true,
//     transports: [new winston.transports.Console()]
// });

const asyncMiddleware = fn => (req, res, next) => {
    Promise.resolve(fn(req, res, next)).catch(next);
};

// const loggerMiddleware = (req, res, next) => {
//     logger.info({ method: req.method, time: Date.now() });
//     next();
// };
// router.use(loggerMiddleware);

router.get(
    "/dummy",
    asyncMiddleware(async (req, res) => {
        try {

            res.json({
                message: "FUCK DAMN YEAH!",
                status: 200
            });
        } catch (e) {
            res.json({
                message: "There was an error handling this request.",
                status: 400
            });
        }
    })
);

router.get(
    "/api/control",
    asyncMiddleware(async (req, res) => {
        try {
            await auth.authorizeWrite({
                email: req.query.email,
                password: req.query.password
            });

            res.json({
                message: "Authenticated.",
                status: 200
            });
        } catch (e) {
            res.json({
                message: "There was an error handling this request.",
                status: 400
            });
        }
    })
);

router.post(
    "/api/users",
    asyncMiddleware(async (req, res, next) => {
        await db("users")
            .insert({ email: req.body.email, password: req.body.password })
            .returning("*");
        res.json({ 
            status: 200,
        });
    })
);

// The "catchall" handler: for any request that doesn't
// match one above, send back React's index.html file.
router.get("*", async (req, res) => {
    res.sendFile(
        path.resolve(__dirname, "..", "client", "build", "index.html")
    );
    // res.sendFile(path.join(__dirname + "/../client/build"));
});

export default router;
