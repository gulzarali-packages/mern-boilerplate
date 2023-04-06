# mern-boilerplate
Nodejs MVC framework for the fast development process.

## Usage
Clone the project and install dependencies by running
```
npm install
```
### setting up enviroment variables
For this you have to create a .env file from example.env and put your own credentials into it.
Following are the required attributes
```
PORT = 'YOUR_SERVER_PORT'
DATABASE_URL   = 'DATABASE_SERVER_URL'
JWT_SECRET_KEY = 'JWT_SECRET_KEY'
```
### Running the project
To run the project after adding the necessary configurations you have to run the following command
```
npm run start
```
### The basics
#### Models
The models are the way to interact with your database schemas.
To create model run the following command
```
npm run make:model User
```
In this way you would have a minimal configuration of the user model under models/ directory.
Now you can customise your model schema as per your needs.
#### Controllers
To create a controller file you just need to provide a singular controller name as
```
npm run make:controller User
```
It will create the following controller for you
controllers/UserController.ts
The output controller would have basic operations for index, show, store, update & destroy
#### Services
The business logic should be written under the service class under /services directory.The purpose
of the controller should only be to control the request response flow.
#### resources
resource class can be a good way to reformate the request responses.
You can create a resource class by running the following command.
```
npm run make:resource UserUpdated 
```
it will create a resource class as /resources/UserUpdatedResource.ts
#### Module
Here is the megic part, you can create a complete module including controller, model,service, requests and resource classes just by running the simple command as
```
npm run make:crud Product
```
After running this command you would get a complete working module.