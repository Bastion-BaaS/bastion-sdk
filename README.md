<p align="center">
  <img src="Bastion_logo.png" width="200" height="200" />
</p>

# Bastion SDK

![shields.io npm version badge](https://img.shields.io/npm/v/bastion-sdk)
![shields.io npm license badge](https://img.shields.io/npm/l/bastion-sdk)
![shields.io custom website link badge](https://img.shields.io/static/v1?label=website&message=bastion.github.io&color=blue)

Client SDK for interacting with your Bastion application.

# Getting Started
- To install: `npm install bastion-sdk` within your project directory.
- Import the package in your JavaScript file: `import initialize from 'bastion-sdk'`
- Initialize the SDK: `const sdk = initialize("yourURL", "yourApiKey")`
    - You can get the URL and API key for your application instance in your Bastion admin app.
- You are now ready to use the SDK methods below in your JavaScript code.

# SDK Methods

## Authentication:

### `sdk.auth.register(username, email, password)`
Register a new user, email, and password. Passwords are stored as encrypted values.

Inputs:
- username: String
- email: String
- password: String

Outputs:
- Status 200

### `sdk.auth.login(username, password)`
Log in a user with the given username and password.

Inputs:
- username: String
- password: String

Outputs:
- Status 200

### `sdk.auth.logout()`
Logout current user and invalidate their session.

Inputs:
- None

Outputs:
- Status 200

## Database:

### `sdk.db.getAllItems(collectionName)`
Get all items in a collection with the given collection name.

Inputs:
- collectionName: String

Outputs:
- Status 200
- Array of items as JSON objects:
```json
[
  {
    "_id": "62506e75c2c8fa04b730e509",
    "name": "example_property",
    "createdAt": "2022-04-08T17:18:45.525Z",
    "updatedAt": "2022-04-08T17:18:45.525Z",
    "__v":0
  },
  {
    "_id": "62509a30c2c8fa04b730e521",
    "name": "another_example_property",
    "createdAt": "2022-04-08T20:25:20.040Z",
    "updatedAt": "2022-04-08T20:25:20.040Z",
    "__v":0
  },
]
```

### `sdk.db.getItem(collectionName, itemId)`
Get a single database record with the given collection name and ID.

Inputs:
- collectionName: String
- itemId: String

Outputs:
- Status 200
- The database record as a JSON object:
```json
{
  "_id": "62506e75c2c8fa04b730e509",
  "name": "example_property",
  "createdAt": "2022-04-08T17:18:45.525Z",
  "updatedAt": "2022-04-08T17:18:45.525Z",
  "__v":0
}
```

### `sdk.db.createItem(collectionName, data)`
Create a single database record in the collection specified. Pass in the JSON object you want to store in that collection.

Inputs:
- collectionName: String
- data: JSON object

Outputs:
- Status 201
- The newly created database record as a JSON object:
```json
{
  "_id": "62506e75c2c8fa04b730e509",
  "name": "newly_created_property",
  "createdAt": "2022-04-08T17:18:45.525Z",
  "updatedAt": "2022-04-08T17:18:45.525Z",
  "__v":0
}
```

### `sdk.db.overwriteItem(collectionName, itemId, data)`
Overwrite a single database record with the given collection name and ID. Pass in the JSON object with key-value pairs you wish to overwrite. Other key-value pairs remain unchanged.

Inputs:
- collectionName: String
- itemId: String
- data: JSON object

Outputs:
- Status 201
- The updated database record as a JSON object:
```json
{
  "_id": "62506e75c2c8fa04b730e509",
  "name": "overwritten_property",
  "createdAt": "2022-04-08T17:18:45.525Z",
  "updatedAt": "2022-04-08T17:18:45.525Z",
  "__v":0
}
```

### `sdk.db.updateItem(collectionName, itemId, data)`
Update a single database record in the collection specified. Pass in the updated JSON object you want to store in that collection. Replaces the entire record, so you must supply all key-value pairs, even if they have not changed.

Inputs:
- collectionName: String
- itemId: String
- data: JSON object

Outputs:
- Status 201
- The updated database record as a JSON object:
```json
{
  "_id": "62506e75c2c8fa04b730e509",
  "name": "updated_property",
  "createdAt": "2022-04-08T17:18:45.525Z",
  "updatedAt": "2022-04-08T17:18:45.525Z",
  "__v":0
}
```

### `sdk.db.deleteItem(collectionName, itemId)`
Delete a single database record with the given collection name and ID.

Inputs:
- collectionName: String
- itemId: String

Outputs:
- Status 204

## Cloud Code Functions:

### `sdk.ccf.run(cloudFunctionName, parameters)`
Runs the code for an existing cloud code function in your Bastion application and returns the resulting value.

Inputs:
- cloudFunctionName: String
- parameters (optional): determined by the user

Outputs:
- Return value of the cloud code function specified
- Status 200

## File Storage:

### `sdk.storage.getAllFiles()`
Retrieves all files that have been uploaded.

Inputs:
- None

Outputs:
- Status 200
- Array of files as JSON objects:
```json
[
  {
    "fileName":"exampleImage.png",
    "url":"https://s3_bucket_url.png",
    "createdAt":"2022-04-08T16:38:35.768Z",
    "updatedAt":"2022-04-08T16:38:35.768Z",
    "id":"6250650bc2c8fa04b730e4f1"
  },
  {
    "fileName":"exampleFile.zip",
    "url":"https://another_s3_bucket_url.zip",
    "createdAt":"2022-04-08T20:35:47.633Z",
    "updatedAt":"2022-04-08T20:35:47.633Z",
    "id":"62509ca3c2c8fa04b730e528"
  }
]
```

### `sdk.storage.getFile(fileId)`
Retrieve a single file with the given file ID.

Inputs:
- fileId: String

Outputs:
- Status 200
- File specified as a JSON object:
```json
{
  "fileName":"exampleImage.png",
  "url":"https://s3_bucket_url.png",
  "createdAt":"2022-04-08T16:38:35.768Z",
  "updatedAt":"2022-04-08T16:38:35.768Z",
  "id":"6250650bc2c8fa04b730e4f1"
}
```


### `sdk.storage.uploadFile(file, fileName)`
Uploads your file as multipart/form-data to a public S3 bucket.

Inputs:
- file: multipart/form-data
- fileName: String

Outputs:
- Status 201
- The newly created file as an object:
```json
{
  "fileName":"yourCreatedImage.png",
  "url":"https://s3_bucket_url.png",
  "createdAt":"2022-04-08T16:38:35.768Z",
  "updatedAt":"2022-04-08T16:38:35.768Z",
  "id":"6250650bc2c8fa04b730e4f1"
}
```

### `sdk.storage.deleteFile(fileId)`
Deletes a file with the given file ID.

Inputs:
- fileId: String

Outputs:
- Status 204
