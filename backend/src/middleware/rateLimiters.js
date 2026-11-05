import rateLimit from "express-rate-limit";

// Global rate limiter (300 requests per 15 min per IP)
export const globalLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 300,
  standardHeaders: true,
  legacyHeaders: false,
  message: { error: "Too many requests. Please try again later." }
});

// Stricter limiter for authentication (20 login/register attempts per 15 min per IP)
export const authLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 20,
  message: { error: "Too many authentication attempts. Please wait 15 minutes." }
});

// Code execution limiter (15 executions per minute per IP)
export const executionLimiter = rateLimit({
  windowMs: 1 * 60 * 1000,
  max: 15,
  message: { error: "Code execution rate limit reached. Please wait a moment before trying again." }
});
