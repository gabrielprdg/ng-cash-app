"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.adaptMiddleware = void 0;
const adaptMiddleware = (middleware) => {
    return async (req, res, next) => {
        const httpRequest = {
            headers: req.headers
        };
        const httpResponse = await middleware.handle(httpRequest);
        console.log('aiperdr', httpRequest);
        if (httpResponse.statusCode === 200) {
            Object.assign(req, httpResponse.body);
            next();
        }
        else {
            res.status(httpResponse.statusCode).json({ error: httpResponse.body.message });
        }
    };
};
exports.adaptMiddleware = adaptMiddleware;
