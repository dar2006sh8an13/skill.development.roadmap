-- Migration: Remove OTP verification system
-- This script removes OTP-related columns from the users table
-- and sets all users to verified status

-- Step 1: Set all users to verified (optional - uncomment if needed)
-- UPDATE users SET is_verified = true WHERE is_verified = false;

-- Step 2: Remove OTP columns
ALTER TABLE users DROP COLUMN IF EXISTS otp;
ALTER TABLE users DROP COLUMN IF EXISTS otp_expires_at;

-- Verify the changes
DESCRIBE users;
