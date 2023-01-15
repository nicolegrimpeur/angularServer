import fs from 'fs';
export const angularServer = {
    siteSlash,
    siteRest
};
/**
 * The equivalent of the Angular route '/'.
 * @param {express.Request} req - The parameter req from Express.
 * @param {express.Response} res - The parameter res from Express.
 * @param {string} base - The base link of you website.
 * @param {string} dirname - The directory name of your website.
 */
function siteSlash(req, res, base, dirname) {
    if (req.originalUrl[req.originalUrl.length - 1] === '/') {
        res.sendFile(dirname + req.originalUrl + '/index.html');
    }
    else {
        res.redirect(base + '/' + req.originalUrl.split('/')[1] + '/');
    }
}
/**
 * The equivalent of the Angular route '/*'.
 * @param {express.Request} req - The parameter req from Express.
 * @param {express.Response} res - The parameter res from Express.
 * @param {string} base - The base link of you website.
 * @param {string} dirname - The directory name of your website.
 */
function siteRest(req, res, base, dirname) {
    fs.promises.access(dirname + req.originalUrl)
        .then(() => {
        res.sendFile(dirname + req.originalUrl);
    })
        .catch(() => {
        res.redirect(base + '/' + req.originalUrl.split('/')[1] + '/');
    });
}
