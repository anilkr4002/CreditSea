"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const loanController_1 = require("../controllers/loanController");
const authMiddleware_1 = __importDefault(require("../middleware/authMiddleware"));
const loanRoutes = express_1.default.Router();
// Route for creating a loan application
loanRoutes.post('/loans', authMiddleware_1.default, loanController_1.createLoanApplication);
// Route for retrieving all loan applications
loanRoutes.get('/loans', authMiddleware_1.default, loanController_1.getLoanApplications);
exports.default = loanRoutes;
