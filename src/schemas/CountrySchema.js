module.exports = {
  "code": {
    "description": "Universal country code",
    "example": "CA",
    "primaryKey": true,
    "type": "string",
    "required": true,
    "skipAll": true
  },
  "name": {
    "description": "Country name",
    "example": "Canada",
    "type": "string",
    "required": true,
    "skipAll": true
  },
  "createdAt": {
    "type": "datetime",
    "default": "NOW"
  },
  "updatedAt": {
    "type": "datetime",
    "default": "NOW"
  }
}