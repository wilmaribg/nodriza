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
  "createdAt": {
    "type": "datetime",
    "skipAll": true
  },
  "updatedAt": {
    "type": "datetime",
    "skipAll": true
  },
  "region": {
    "example": "us-east-1",
    "required": true,
    "mustExist": true,
    "type": "string",
    "model": "region"
  },
  "imageId": {
    "example": "ami-f4cc1de2",
    "primaryKey": true,
    "displayName": true,
    "required": true,
    "type": "string"
  },
  "platform": {
    "example": "Ubuntu",
    "displayName": true,
    "required": true,
    "type": "string",
    "enum": [
      "Red Hat",
      "Ubuntu",
      "Windows",
      "SUSE Linux",
      "Amazon Linux",
      "Debian",
      "Other Linux",
      "Cent OS",
      "Fedora",
      "Gentoo",
      "OpenSUSE"
    ]
  },
  "architecture": {
    "example": "x86_64",
    "required": true,
    "type": "string",
    "enum": [
      "x86_64",
      "i386"
    ]
  },
  "hypervisor": {
    "example": "xen",
    "required": true,
    "type": "string",
    "enum": [
      "xen",
      "ovm"
    ]
  },
  "creationDate": {
    "example": "2017-02-22T12:31:33.000Z",
    "required": true,
    "type": "string"
  },
  "imageLocation": {
    "example": "099720109477/ubuntu/images/hvm-ssd/ubuntu-xenial-16.04-amd64-server-20170221",
    "required": true,
    "type": "string"
  },
  "imageType": {
    "example": "machine",
    "required": true,
    "type": "string"
  },
  "isPublic": {
    "example": false,
    "required": true,
    "type": "boolean"
  },
  "name": {
    "example": "ubuntu/images/hvm-ssd/ubuntu-xenial-16.04-amd64-server-20170221",
    "required": true,
    "type": "string"
  },
  "ownerId": {
    "example": "099720109477",
    "required": true,
    "type": "string"
  },
  "productCodes": {
    "example": [],
    "type": "array"
  },
  "rootDeviceName": {
    "example": "/dev/sda1",
    "required": true,
    "type": "string",
    "enum": [
      "/dev/sda1",
      "/dev/xvda",
      "/dev/sda",
      "/dev/sda2",
      "/dev/xvdb",
      "/dev/sda3",
      "/dev/sda6",
      "xvda",
      "xvdf",
      "/dev/sdf",
      "/dev/sda5",
      "rpool/56@0",
      "rpool/52@0",
      "xvdh",
      "/dev/sdb"
    ]
  },
  "rootDeviceType": {
    "example": "ebs",
    "required": true,
    "type": "string",
    "enum": [
      "ebs",
      "instance-store"
    ]
  },
  "virtualizationType": {
    "example": "hvm",
    "required": true,
    "type": "string",
    "enum": [
      "hvm",
      "paravirtual"
    ]
  }
}