"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

const authMiddleware = (req, res, next) => {
  // Allow all requests without authorization
  next(); // Proceed to the next middleware or route handler
};

exports.default = authMiddleware;
