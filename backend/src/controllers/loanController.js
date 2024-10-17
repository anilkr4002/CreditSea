"use strict";
var __awaiter =
  (this && this.__awaiter) ||
  function (thisArg, _arguments, P, generator) {
    function adopt(value) {
      return value instanceof P
        ? value
        : new P(function (resolve) {
            resolve(value);
          });
    }
    return new (P || (P = Promise))(function (resolve, reject) {
      function fulfilled(value) {
        try {
          step(generator.next(value));
        } catch (e) {
          reject(e);
        }
      }
      function rejected(value) {
        try {
          step(generator["throw"](value));
        } catch (e) {
          reject(e);
        }
      }
      function step(result) {
        result.done
          ? resolve(result.value)
          : adopt(result.value).then(fulfilled, rejected);
      }
      step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
  };
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
exports.getLoanApplications = exports.createLoanApplication = void 0;

const LoanApplication_1 = __importDefault(require("../models/LoanApplication"));

// Create a new loan application
const createLoanApplication = (req, res) =>
  __awaiter(void 0, void 0, void 0, function* () {
    try {
      const newApplication = new LoanApplication_1.default(req.body);
      yield newApplication.save();
      res
        .status(201)
        .json({ message: "Loan application submitted successfully!" });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  });
exports.createLoanApplication = createLoanApplication;

// Get all loan applications
const getLoanApplications = (req, res) =>
  __awaiter(void 0, void 0, void 0, function* () {
    try {
      const applications = yield LoanApplication_1.default.find();
      res.status(200).json(applications);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  });
exports.getLoanApplications = getLoanApplications;
