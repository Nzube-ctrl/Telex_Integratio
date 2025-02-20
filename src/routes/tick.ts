import express from "express";
import axios from "axios";
import { config } from "../config/telexConfig";

const tickRouter = express.Router();

tickRouter.get("/tick", async (req, res) => {
    console.log("Sending tick event to:", config.telexWebhookUrl);

    const startTime = performance.now();
    const payload: {
        event_name: string;
        username: string;
        status: string;
        message: string;
    } = {
        event_name: "server_tick",
        username: "Nzube Uwakwe", 
        status: "success",
        message: "✅ Tick received from server",
    };

    try {
        const response = await axios.post(config.telexWebhookUrl, payload, {
            timeout: 5000,
            headers: {
                "Content-Type": "application/json",
            }
        });

        const duration = (performance.now() - startTime).toFixed(2);
        // payload.response_time = `${duration}ms`;

        console.log("Telex Response:", response.data);
        res.status(200).json({ success: true, message: "Tick event sent to Telex", response_time: duration });
    } catch (error) {
        if (axios.isAxiosError(error)) {
            console.error("Axios Error:", error.response?.status, error.response?.data);
        } else {
            console.error("Unknown Error:", error);
        }
        res.status(500).json({ success: false, message: "Failed to send tick event" });
    }
});

export default tickRouter;