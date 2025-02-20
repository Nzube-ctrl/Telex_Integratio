"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const errorHandler_1 = require("./middlewares/errorHandler");
const perfomanceLogger_1 = require("./middlewares/perfomanceLogger");
dotenv_1.default.config();
const PORT = process.env.PORT || 8000;
const app = (0, express_1.default)();
app.use(perfomanceLogger_1.performanceMiddleware);
app.get('/', (req, res) => {
    res.json({ message: `Telex integration API` });
});
app.all('*', (req, res) => {
    res.status(404).json({ message: 'Page Not Found' });
});
app.use(errorHandler_1.errorHandler);
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
