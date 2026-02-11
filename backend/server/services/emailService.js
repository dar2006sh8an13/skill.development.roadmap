const nodemailer = require('nodemailer');
require('dotenv').config();

// Create email transporter
const transporter = nodemailer.createTransport({
    service: 'gmail', // Change to 'SendGrid' or configure SMTP for other providers
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
    }
});

// Verify transporter configuration
transporter.verify((error, success) => {
    if (error) {
        console.error('❌ Email service error:', error.message);
        console.error('Please check your EMAIL_USER and EMAIL_PASS in .env file');
    } else {
        console.log('✅ Email service ready');
    }
});

/**
 * Send OTP email
 * @param {string} to - Recipient email
 * @param {string} otp - 6-digit OTP
 * @param {string} purpose - 'signup' or 'reset'
 */
const sendOtpEmail = async (to, otp, purpose = 'signup') => {
    const subject = purpose === 'signup'
        ? 'Verify Your Account - OTP Code'
        : 'Reset Your Password - OTP Code';

    const message = purpose === 'signup'
        ? `Your verification code is: <strong>${otp}</strong>`
        : `Your password reset code is: <strong>${otp}</strong>`;

    const mailOptions = {
        from: `"${process.env.EMAIL_FROM_NAME || 'Skill Development Roadmap'}" <${process.env.EMAIL_FROM || process.env.EMAIL_USER}>`,
        to: to,
        subject: subject,
        html: `
            <!DOCTYPE html>
            <html>
            <head>
                <style>
                    body { font-family: Arial, sans-serif; background-color: #f4f4f4; margin: 0; padding: 0; }
                    .container { max-width: 600px; margin: 50px auto; background: white; padding: 30px; border-radius: 10px; box-shadow: 0 2px 10px rgba(0,0,0,0.1); }
                    .header { text-align: center; color: #333; }
                    .otp-box { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 20px; text-align: center; border-radius: 8px; margin: 20px 0; }
                    .otp-code { font-size: 32px; font-weight: bold; letter-spacing: 5px; }
                    .footer { text-align: center; color: #666; font-size: 12px; margin-top: 20px; }
                </style>
            </head>
            <body>
                <div class="container">
                    <div class="header">
                        <h2>🔐 ${subject}</h2>
                    </div>
                    <p>Hello,</p>
                    <p>${message}</p>
                    <div class="otp-box">
                        <div class="otp-code">${otp}</div>
                    </div>
                    <p><strong>This code will expire in ${process.env.OTP_EXPIRY_MINUTES || 10} minutes.</strong></p>
                    <p>If you didn't request this code, please ignore this email.</p>
                    <div class="footer">
                        <p>© ${new Date().getFullYear()} Skill Development Roadmap. All rights reserved.</p>
                    </div>
                </div>
            </body>
            </html>
        `
    };

    try {
        await transporter.sendMail(mailOptions);
        console.log(`✅ OTP email sent to ${to}`);
        return true;
    } catch (error) {
        console.error('❌ Error sending email:', error);
        throw new Error('Failed to send OTP email');
    }
};

module.exports = { sendOtpEmail };
