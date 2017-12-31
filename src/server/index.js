import App from "../client/App";
import React from "react";
import { StaticRouter } from "react-router-dom";
import express from "express";
import passport from "passport";
import session from "express-session";
import { renderToString } from "react-dom/server";
import bodyParser from "body-parser";
import routes from "./routes";

const RedisStore = require("connect-redis")(session);
const assets = require(process.env.RAZZLE_ASSETS_MANIFEST);

const server = express();
require("./authenticate")(server);


server.use(
    session({
        store: new RedisStore({
            url:
                "redis://h:p49871d5c94fac6083da8b49f3bfa79b89094d78f70400e190fc934aee642d43d@ec2-34-206-75-227.compute-1.amazonaws.com:61439"
        }),
        secret: "secret",
        resave: false,
        saveUninitialized: false
    })
);

server.use(passport.initialize());
server.use(passport.session());

// BodyParser
server.use(bodyParser.json()); // to support JSON-encoded bodies
server.use(
    bodyParser.urlencoded({
        // to support URL-encoded bodies
        extended: true
    })
);

server
    .disable("x-powered-by")
    .use(express.static(process.env.RAZZLE_PUBLIC_DIR))
    .use("/api", routes)
    .get("/*", passport.authenticationMiddleware(), (req, res) => {
        const context = {};
        const markup = renderToString(
            <StaticRouter context={context} location={req.url}>
                <App />
            </StaticRouter>
        );

        if (context.url) {
            res.redirect(context.url);
        } else {
            res.status(200).send(`<!doctype html> 
                <html lang="">
                    <head>
                        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
                        <meta charSet='utf-8' />
                        <title>Welcome to Razzle</title>
                        <meta name="viewport" content="width=device-width, initial-scale=1">
                        ${
                            assets.client.css
                                ? `<link rel="stylesheet" href="${
                                      assets.client.css
                                  }">`
                                : ""
                        }
                        ${ process.env.NODE_ENV === "production" ? `<script src="${assets.client.js}" defer></script>` : `<script src="${assets.client.js}" defer crossorigin></script>`}
                    </head>
                    <body>
                        <div id="root">${markup}</div>
                    </body>
                </html>`);
        }
    });
export default server;
