import fs from "fs";
import express from "express";

export function siteSlash(req: express.Request, res: express.Response, base) {
    if (req.originalUrl[req.originalUrl.length - 1] === '/') {
        res.sendFile(__dirname + req.originalUrl + '/index.html');
    } else {
        res.redirect(base + '/' + req.originalUrl.split('/')[1] + '/');
    }
}

export function siteReste(req: express.Request, res: express.Response, base) {
    fs.promises.access(__dirname + req.originalUrl)
        .then(() => {
            res.sendFile(__dirname + req.originalUrl);
        })
        .catch(() => {
            res.redirect(base + '/' + req.originalUrl.split('/')[1] + '/');
        });
}
