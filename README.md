# User Management API

A modular Node.js backend for user registration, login, profile retrieval, and profile updates.

## 🔧 Features

- ✅ Strict phone validation (exactly 10 digits)
- ✅ Fixed OTP login (`123456`)
- ✅ Simple token format: `token_user_<userId>`
- ✅ Modular structure with clean separation of concerns

## 📦 Tech Stack

- Node.js
- Express.js

## 📁 Folder Structure

src/ ├── controllers/ ├── routes/ ├── services/ ├── middlewares/ ├── utils/ ├── validators/

## 🚀 API Endpoints

| Method | Endpoint             | Purpose               | Request Body / Header         | Response Format |
|--------|----------------------|------------------------|-------------------------------|------------------|
| POST   | `/users/register`    | Register new user      | `{ name, phone, email, address }` | `{ userId, token }` |
| POST   | `/users/login`       | Login with phone/OTP   | `{ phone, otp }`              | `{ userId, token, profile }` |
| GET    | `/users/:userId`     | Get user profile       | `Authorization: Bearer token_user_<userId>` | `{ userId, name, phone, address, rating }` |
| PUT    | `/users/:userId`     | Update profile         | `{ name, email, address }`    | `{ status }` |

## 🧪 Validation Rules

- Phone number must be **exactly 10 digits**
- OTP must be **exactly `"123456"`**
- Login must match the phone used during registration
- Token format is simple and readable

## 📦 Setup

```bash
npm install
npm start
