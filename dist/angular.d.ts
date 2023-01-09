import express from 'express';
export declare const angular: {
    siteSlash: typeof siteSlash;
    siteReste: typeof siteReste;
};
declare function siteSlash(req: express.Request, res: express.Response, base: string, dirname: string): void;
declare function siteReste(req: express.Request, res: express.Response, base: string, dirname: string): void;
export {};
