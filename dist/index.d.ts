/// <reference types="qs" />
/// <reference types="express" />
export declare const ionicServeur: {
    angular: {
        siteSlash: (req: import("express").Request<import("express-serve-static-core").ParamsDictionary, any, any, import("qs").ParsedQs, Record<string, any>>, res: import("express").Response<any, Record<string, any>>, base: string, dirname: string) => void;
        siteReste: (req: import("express").Request<import("express-serve-static-core").ParamsDictionary, any, any, import("qs").ParsedQs, Record<string, any>>, res: import("express").Response<any, Record<string, any>>, base: string, dirname: string) => void;
    };
    react: {
        site: (req: import("express").Request<import("express-serve-static-core").ParamsDictionary, any, any, import("qs").ParsedQs, Record<string, any>>, res: import("express").Response<any, Record<string, any>>, base: string, dirname: string, listePages: string[]) => void;
    };
};
