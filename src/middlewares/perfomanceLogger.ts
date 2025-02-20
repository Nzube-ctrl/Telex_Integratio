import { Request, Response, NextFunction } from "express";
import { performance } from "perf_hooks";
import axios from 'axios';
import { config } from '../config/telexConfig';

export const performanceMiddleware = (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    const start = performance.now();

    res.on("finish", async () => {
        const duration = performance.now() - start;
        console.log(`[${req.method}] ${req.url} - ${duration.toFixed(2)}ms`);

        if (config.telexWebhookUrl && duration > config.responseTimeThreshold) {
            const performanceData = {
                method: req.method,
                route: req.url,
                status: res.statusCode,
                duration: duration.toFixed(2),
                timestamp: new Date().toISOString()
            };

            try {
                await axios.post(config.telexWebhookUrl, performanceData);
                console.log("Performance data sent to Telex");
            } catch (error) {
                const errMessage = (error as Error).message || "Unknown error";
                console.error("Error sending data to Telex:", errMessage);
            }
        }
    });

    next();
};
