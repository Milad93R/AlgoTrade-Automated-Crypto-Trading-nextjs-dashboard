# NestJS User Management API Documentation

This document provides detailed information about the API endpoints available in the NestJS User Management System.

## Base URL

```
http://localhost:3003
```

## Authentication

Most endpoints require authentication using a JWT token. Include the token in the Authorization header:

```
Authorization: Bearer <your_jwt_token>
```

## API Endpoints

### Authentication

#### Register New User

```
POST /auth/register
```

Creates a new user account and sends a verification email.

**Request Body:**

```json
{
  "firstName": "John",
  "lastName": "Doe",
  "email": "john.doe@example.com",
  "password": "password123"
}
```

**Response (201 Created):**

```json
{
  "message": "Registration successful. Please check your email to verify your account."
}
```

**Error Responses:**

- `400 Bad Request` - Validation error
- `409 Conflict` - Email already exists

---

#### Login User

```
POST /auth/login
```

Authenticates a user and provides a JWT token.

**Request Body:**

```json
{
  "email": "john.doe@example.com",
  "password": "password123"
}
```

**Response (200 OK):**

```json
{
  "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
}
```

**Error Responses:**

- `400 Bad Request` - Validation error
- `401 Unauthorized` - Invalid credentials
- `401 Unauthorized` - Email not verified

---

#### Verify Email

```
GET /auth/verify-email?token=<verification_token>
```

Verifies a user's email address using the token sent via email.

**Query Parameters:**

- `token` (required) - Email verification token

**Response (200 OK):**

```json
{
  "message": "Email verified successfully"
}
```

**Error Responses:**

- `401 Unauthorized` - Invalid or expired verification token

---

#### Get User Profile

```
GET /auth/profile
```

Retrieves the authenticated user's profile information.

**Authentication:** Required (JWT)

**Response (200 OK):**

```json
{
  "message": "Profile endpoint"
}
```

**Error Responses:**

- `401 Unauthorized` - Missing or invalid token

---

#### Initiate Google OAuth Flow

```
GET /auth/google
```

Redirects the user to Google's OAuth consent screen.

**Response:**

- Redirects to Google authentication page

---

#### Google OAuth Callback

```
GET /auth/google/callback
```

Handles the callback from Google after successful authentication.

**Response:**

- Redirects to `APP_URL/auth-success?token=<jwt_token>`

---

#### Forgot Password

```
POST /auth/forgot-password
```

Sends a password reset email to the provided email address if it exists in the system.

**Request Body:**

```json
{
  "email": "john.doe@example.com"
}
```

**Response (200 OK):**

```json
{
  "message": "If your email is registered, you will receive a password reset link."
}
```

**Error Responses:**

- `400 Bad Request` - Validation error
- `400 Bad Request` - Google account cannot reset password this way

---

#### Reset Password

```
POST /auth/reset-password
```

Resets the user's password using the token sent via email.

**Request Body:**

```json
{
  "token": "your-reset-token",
  "newPassword": "newPassword123"
}
```

**Response (200 OK):**

```json
{
  "message": "Password successfully reset"
}
```

**Error Responses:**

- `400 Bad Request` - Validation error
- `401 Unauthorized` - Invalid or expired reset token

---

### Error Responses

All API endpoints may return the following error responses:

#### 400 Bad Request

Returned when the request is malformed or validation fails.

```json
{
  "statusCode": 400,
  "message": ["email must be an email"],
  "error": "Bad Request"
}
```

#### 401 Unauthorized

Returned when authentication fails.

```json
{
  "statusCode": 401,
  "message": "Unauthorized",
  "error": "Unauthorized"
}
```

#### 404 Not Found

Returned when the requested resource is not found.

```json
{
  "statusCode": 404,
  "message": "Not Found",
  "error": "Not Found"
}
```

#### 500 Internal Server Error

Returned when an unexpected error occurs on the server.

```json
{
  "statusCode": 500,
  "message": "Internal server error",
  "error": "Internal Server Error"
}
```

## Models

### User

```json
{
  "id": "string",
  "firstName": "string",
  "lastName": "string",
  "email": "string",
  "isEmailVerified": "boolean",
  "isActive": "boolean",
  "isGoogleUser": "boolean",
  "picture": "string",
  "createdAt": "date",
  "updatedAt": "date"
}
```

## Authentication Flows

### Email & Password Authentication

1. Register using `POST /auth/register`
2. Receive verification email
3. Verify email using `GET /auth/verify-email?token=<token>`
4. Login using `POST /auth/login`
5. Use the received JWT token for subsequent authenticated requests

### Google OAuth Authentication

1. Navigate to `GET /auth/google`
2. Complete Google authentication
3. User is redirected back with a JWT token
4. Use the received JWT token for subsequent authenticated requests

### Password Reset Flow

1. Request a password reset using `POST /auth/forgot-password`
2. Receive password reset email
3. Use the reset token to set a new password with `POST /auth/reset-password`
4. Login with the new password using `POST /auth/login`

## Rate Limiting

API endpoints are protected by rate limiting to prevent abuse:
- 100 requests per IP address per 15 minutes for public endpoints
- 300 requests per IP address per 15 minutes for authenticated endpoints

## Testing the API

You can test the API endpoints using tools like:
- Swagger UI at http://localhost:3003/api
- Postman
- curl

### Example curl commands

**Register a user:**
```bash
curl -X POST http://localhost:3003/auth/register \
  -H "Content-Type: application/json" \
  -d '{"firstName":"John","lastName":"Doe","email":"john.doe@example.com","password":"password123"}'
```

**Login:**
```bash
curl -X POST http://localhost:3003/auth/login \
  -H "Content-Type: application/json" \
  -d '{"email":"john.doe@example.com","password":"password123"}'
```

**Get profile (authenticated):**
```bash
curl -X GET http://localhost:3003/auth/profile \
  -H "Authorization: Bearer YOUR_JWT_TOKEN"
``` 