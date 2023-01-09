import express from 'express';
import fs from "fs";

export const react = {
    site
}

function site(req: express.Request, res: express.Response, base: string, dirname: string, listePages: Array<string>) {
    const id = req.params.id;
    if (listePages.find(el => el === id))
        res.sendFile(dirname + req.originalUrl +'index.html');
    else
        fs.promises.access(dirname + req.originalUrl)
            .then(() => {
                res.sendFile(dirname + req.originalUrl);
            })
            .catch(() => {
                res.redirect(base + '/' + req.originalUrl.split('/')[1] + '/');
            });
}
