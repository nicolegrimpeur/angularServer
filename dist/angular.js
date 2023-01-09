import fs from 'fs';
export const angular = {
    siteSlash,
    siteReste
};
function siteSlash(req, res, base, dirname) {
    if (req.originalUrl[req.originalUrl.length - 1] === '/') {
        res.sendFile(dirname + req.originalUrl + '/index.html');
    }
    else {
        res.redirect(base + '/' + req.originalUrl.split('/')[1] + '/');
    }
}
function siteReste(req, res, base, dirname) {
    fs.promises.access(dirname + req.originalUrl)
        .then(() => {
        res.sendFile(dirname + req.originalUrl);
    })
        .catch(() => {
        res.redirect(base + '/' + req.originalUrl.split('/')[1] + '/');
    });
}
