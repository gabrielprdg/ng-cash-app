"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.adaptRoute = void 0;
const adaptRoute = (controller) => {
    // eslint-disable-next-line @typescript-eslint/no-misused-promises
    return async (req, res) => {
        const httpRequest = {
            body: req.body,
            params: req.params,
            userId: req.userId
        };
        const httpResponse = await controller.handle(httpRequest);
        if (httpResponse.statusCode >= 200 && httpResponse.statusCode <= 299) {
            res.status(httpResponse.statusCode).json(httpResponse.body);
        }
        else {
            res.status(httpResponse.statusCode).json({ error: httpResponse.body.message });
        }
    };
};
exports.adaptRoute = adaptRoute;
