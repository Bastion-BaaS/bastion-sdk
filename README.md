<p align="center">
  <img src="Bastion_logo.png" width="200" height="200" />
</p>

# Bastion SDK
Client SDK for interacting with your Bastion application.

# Getting Started
- To install: `npm install bastion-sdk` within your project directory.
- Import the package in your JavaScript file: `import initialize from 'bastion-sdk'`
- Initialize the SDK: `const sdk = initialize("yourURL", "yourApiKey")`
    - You can get the URL and API key for your application instance in your Bastion admin app.
- You are now ready to use the SDK methods below in your JavaScript code.

# SDK Methods

## Authentication:

### `sdk.auth.register(email, password)`
Register a new user and password. Passwords are stored as encrypted values.

Inputs:
- email: String
- password: String

Outputs:
- Status 200

### `sdk.auth.login(email, password)`
Log in a user with the given email and password.

Inputs:
- email: String
- password: String

Outputs:
- Status 200

### `sdk.auth.logout(email)`
Logout a given user and invalidate their session.

Inputs:
- email: String

Outputs:
- Status 200

## Database:

### `sdk.db.getAllItems(collectionName)`
Get all items in a collection with the given collection name.

Inputs:
- collectionName: String

Outputs:
- The items in a collection specified as a JSON object
- Status 200

### `sdk.db.getItem(collectionName, itemId)`
Get a single database record with the given collection name and ID.

Inputs:
- collectionName: String
- itemId: String

Outputs:
- The database record as a JSON object
- Status 200

### `sdk.db.createItem(collectionName, data)`
Create a single database record in the collection specified. Pass in the JSON object you want to store in that collection.

Inputs:
- collectionName: String
- data: JSON object

Outputs:
- The newly created database record as a JSON object
- Status 201

### `sdk.db.overwriteItem(collectionName, itemId, data)`
Overwrite a single database record with the given collection name and ID. Pass in the JSON object with key-value pairs you wish to overwrite. Other key-value pairs remain unchanged.

Inputs:
- collectionName: String
- itemId: String
- data: JSON object

Outputs:
- The updated database record as a JSON object
- Status 201

### `sdk.db.updateItem(collectionName, itemId, data)`
Update a single database record in the collection specified. Pass in the updated JSON object you want to store in that collection. Replaces the entire record, so you must supply all key-value pairs, even if they have not changed.

Inputs:
- collectionName: String
- itemId: String
- data: JSON object

Outputs:
- The updated database record as a JSON object
- Status 201

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
