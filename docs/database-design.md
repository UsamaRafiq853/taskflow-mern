
# TaskFlow - MongoDB Database Design

## 1. Database Overview

Database Name: taskflow

Database System: MongoDB Atlas

ODM: Mongoose

TaskFlow will use document-based storage.

MongoDB ObjectIds will be used for primary
identifiers and references.

## 2. Users Collection

Collection: users

Fields:

- _id: ObjectId
- name: String, required
- email: String, required, unique index
- passwordHash: String, required
- role: String, enum [admin, user]
- isActive: Boolean, default true
- createdAt: Date
- updatedAt: Date

Security considerations:
- Email addresses will be normalized.
- Plaintext passwords will never be stored.
- Registration will always create a user role.
- Administrator accounts will be provisioned
  through an authorized administrative process.
- Password hashes will not be returned by APIs.

## 3. Tasks Collection

Collection: tasks

Fields:

- _id: ObjectId
- title: String, required
- description: String
- status: String
- priority: String
- dueDate: Date
- owner: ObjectId, references users
- createdAt: Date
- updatedAt: Date

Allowed status values:
- todo
- in_progress
- completed

Allowed priority values:
- low
- medium
- high

Indexes:
- owner
- owner + status
- owner + dueDate

Security considerations:
- owner is assigned from the authenticated user.
- Clients cannot override task ownership.
- All task queries enforce ownership checks.
- Only validated fields may be updated.

## 4. Sessions Collection

Collection: sessions

Fields:

- _id: ObjectId
- user: ObjectId, references users
- tokenHash: String, required
- expiresAt: Date
- revokedAt: Date, nullable
- createdAt: Date

Purpose:
- Manage refresh sessions
- Support token rotation
- Support secure logout
- Revoke compromised sessions

Session tokens must not be stored in plaintext.

An expiration index may remove old sessions.
The API must still check expiration explicitly.

## 5. Password Reset Tokens Collection

Collection: password_reset_tokens

Fields:

- _id: ObjectId
- user: ObjectId, references users
- tokenHash: String, required
- expiresAt: Date
- usedAt: Date, nullable
- createdAt: Date

Purpose:
- Support password reset workflows
- Expire reset requests
- Prevent token reuse

Only a hash of the reset token is stored.

## 6. Data Relationships

One user can own multiple tasks.

One user can have multiple sessions.

One user can have password reset requests.

References:
- tasks.owner -> users._id
- sessions.user -> users._id
- password_reset_tokens.user -> users._id

## 7. Validation Rules

- Email must use a valid format.
- Password must meet the security policy.
- Task title must not be empty.
- Task status must match allowed values.
- Task priority must match allowed values.
- Referenced IDs must be validated.
- Unknown or restricted fields must be rejected.

Validation will be implemented at the API
boundary and within Mongoose models.

## 8. Data Security

- Database credentials in environment variables
- TLS for cloud database connections
- Least-privilege database account
- Restricted MongoDB Atlas network access
- No public database connection from React
- Authorization before data access
- Safe error handling
- No sensitive information in application logs

## 9. Example Task Document

{
  "_id": "507f1f77bcf86cd799439011",
  "title": "Complete project documentation",
  "description": "Prepare architecture documents",
  "status": "in_progress",
  "priority": "high",
  "dueDate": "2026-11-05T12:00:00.000Z",
  "owner": "507f191e810c19729de860ea"
}

This document represents the proposed schema.
The actual MongoDB collections and indexes
will be implemented during backend development.
