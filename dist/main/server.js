"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importStar(require("express"));
const app_data_source_1 = require("../infra/db/typeorm/helper/app-data-source");
require("reflect-metadata");
const routes_1 = __importDefault(require("./config/routes"));
const dotenv = __importStar(require("dotenv"));
// eslint-disable-next-line @typescript-eslint/no-var-requires
const cors = require('cors');
dotenv.config();
const app = (0, express_1.default)();
app.use(cors());
app.use((0, express_1.json)());
(0, routes_1.default)(app);
console.log(process.env.PORT, '4rd');
app_data_source_1.AppDataSource
    .getInstance()
    .initialize()
    .then(() => app.listen(process.env.PORT, () => console.log(`Server started at port ${process.env.PORT}`)))
    .catch(err => console.log(err));
