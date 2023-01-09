import fs from 'fs';
import express from 'express';

export const angular = {
    siteSlash,
    siteReste
}

function siteSlash(req: express.Request, res: express.Response, base: string, dirname: string) {
    if (req.originalUrl[req.originalUrl.length - 1] === '/') {
        res.sendFile(dirname + req.originalUrl + '/index.html');
    } else {
        res.redirect(base + '/' + req.originalUrl.split('/')[1] + '/');
    }
}

function siteReste(req: express.Request, res: express.Response, base: string, dirname: string) {
    fs.promises.access(dirname + req.originalUrl)
        .then(() => {
            res.sendFile(dirname + req.originalUrl);
        })
        .catch(() => {
            res.redirect(base + '/' + req.originalUrl.split('/')[1] + '/');
        });
}
