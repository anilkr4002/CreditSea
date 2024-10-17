"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const authController_1 = require("../controllers/authController");
const authRoutes = express_1.default.Router();
// Route for user registration
authRoutes.post('/register', authController_1.registerUser);
// Route for user login
authRoutes.post('/login', authController_1.loginUser);
exports.default = authRoutes;
