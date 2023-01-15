import express from 'express';
export declare const angularServer: {
    siteSlash: typeof siteSlash;
    siteRest: typeof siteRest;
};
/**
 * The equivalent of the Angular route '/'.
 * @param {express.Request} req - The parameter req from Express.
 * @param {express.Response} res - The parameter res from Express.
 * @param {string} base - The base link of you website.
 * @param {string} dirname - The directory name of your website.
 */
declare function siteSlash(req: express.Request, res: express.Response, base: string, dirname: string): void;
/**
 * The equivalent of the Angular route '/*'.
 * @param {express.Request} req - The parameter req from Express.
 * @param {express.Response} res - The parameter res from Express.
 * @param {string} base - The base link of you website.
 * @param {string} dirname - The directory name of your website.
 */
declare function siteRest(req: express.Request, res: express.Response, base: string, dirname: string): void;
export {};
