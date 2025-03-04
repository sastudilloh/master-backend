"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app_1 = __importDefault(require("./routes/app"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
const PORT = 3000;
app.get('/ping', (req, res) => {
    console.log('someone pinged here!!');
    res.send('pong');
});
app.use('/api/app', app_1.default);
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
