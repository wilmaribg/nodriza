module.exports = {
  "createdBy": {
    "description": "User who created the resource",
    "model": "user",
    "skipAll": true
  },
  "updatedBy": {
    "description": "Last user who updated the resource",
    "model": "user",
    "skipAll": true
  },
  "provider": {
    "description": "Authentication provider",
    "example": "google",
    "required": true
  },
  "user": {
    "description": "User who own token",
    "model": "user",
    "required": true,
    "skipDependency": true
  },
  "accessToken": {
    "description": "Token in uuid format",
    "type": "string",
    "required": true
  },
  "lastTimeAccessed": {
    "description": "Last time when the token where requested",
    "type": "datetime"
  },
  "expirationDate": {
    "description": "Token expiration date",
    "type": "datetime"
  },
  "headers": {
    "description": "Headers sent when the token has been created",
    "example": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_2)",
    "type": "json"
  },
  "ip": {
    "description": "The device used in the request",
    "example": "192.168.0.234",
    "type": "string"
  },
  "createdAt": {
    "type": "datetime"
  },
  "updatedAt": {
    "type": "datetime"
  }
}