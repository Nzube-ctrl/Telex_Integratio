"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.performanceMiddleware = void 0;
const perf_hooks_1 = require("perf_hooks");
const performanceMiddleware = (req, res, next) => {
    const start = perf_hooks_1.performance.now();
    res.on("finish", () => {
        const duration = perf_hooks_1.performance.now() - start;
        console.log(`[${req.method}] ${req.url} - ${duration.toFixed(2)}ms`);
    });
    next();
};
exports.performanceMiddleware = performanceMiddleware;
