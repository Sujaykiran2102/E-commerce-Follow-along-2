# Ecommerce-Follow-Along

# Milestone 1 - Project Overview :
The Ecommerce-Follow-Along project aims to build a fully-functional e-commerce application using the MERN stack (MongoDB, Express.js, React.js, and Node.js)
Key Features :
User Authentication: Secure user login and registration functionality.
Product Management: Add, update, and retrieve product data.
Order Handling: Manage customer orders with backend integration.
REST API: Build scalable and secure APIs for communication between client and server.
MongoDB Schema Design: Design and implement structured data models for managing users, products, and orders.
Tech Stack :
Frontend : React.js
Backend : Node.js, Express.js
Database : MongoDB
Authentication : JWT (JSON Web Tokens) for secure login
Introduction to MERN Stack : You gained an understanding of the MERN stack (MongoDB, Express.js, React.js, and Node.js) and its role in building full-stack web applications. The lesson highlighted the advantages of using JavaScript across both the frontend and backend, simplifying development.
Project Overview : You were introduced to the goals and key features of the "Ecommerce-Follow-Along" project, which includes user authentication, product management, and order handling, all built with the MERN stack.
API Structure and Endpoints : You learned about REST APIs and how they enable communication between the client and server. Key endpoints will be built for user registration, login, product management, and order handling.
Database Schema Design : The importance of schema design in MongoDB was covered, with a focus on creating structured models for data like users, products, and orders.
Authentication Basics : You learned the significance of user authentication in web applications, ensuring secure access to sensitive resources like purchases and personal information.

# Milestone 2: Project Setup and Login Page
This milestone focuses on setting up the project structure and implementing a basic login page.
Key Features
Project Setup: Initialized the project with the required dependencies and folder structure.
Login Page: A simple login page with fields for username and password.
Tech Stack Used
Frontend: React, Tailwindcss

# Milestone 3: Server setup and error handling.
Key Features:
Organized backend code with a clear folder structure.
Configured a Node.js server using Express to handle APIs.
Integrated MongoDB for data storage and management.
Implemented basic error handling for smooth server operations.
Tech Stack
Backend: Node.js, Express
Database: MongoDB, Mongoose

# Milestone 4: User Management System with File Upload
This project is a simple User Management System that allows the creation, retrieval, and management of user data. It also supports file uploads (like profile pictures) using Multer.
Features
User Model: Blueprint for storing user data in the database.
User Controller: Manages operations like adding, retrieving, and updating user information.
File Uploads: Accepts and stores user-uploaded files (e.g., profile images).
Documentation: Well-documented code for ease of

# Milestone 5: Project Signup Setup
This milestone focuses on setting up the project structure and implementing a basic signup page.
Key Features
Project Setup: Initialized the project with the required dependencies and folder structure.
Signup Page: A simple signup page with fields for Name Email Password User Photo.
Tech Stack Used
- Frontend: React

# Milestone 6: This milestone focus on the password Encryption and User Data Storage
Key Features
   1:Password Encryption: Used bcrypt to hash passwords.
   2:User Data Storage: Saved user data securely in the user inputs.
Tech stack used :
Backend : node.js

# Milestone 7: In this milestone we are going to create a backend endpoint for user and the focus is on validating user credentials and verifying the encrypted password stored in the database.
Key features:
validate user credentials during login: Protect User Data: Keeps passwords safe even if the database is compromised. Privacy: Ensures passwords aren't stored in plain text. Compliance: Meets security standards like GDPR and PCI-DSS. Prevents Password Theft: Hashed passwords are difficult to decipher, increasing security.
compare the encrypted password with the user’s input: User Enters Credentials:
The user provides their email/username and password on the login page.
Fetch User Data from Database:
The backend retrieves the user record based on the provided email/username. If the user is not found, return an error: "User does not exist."
Compare Encrypted Passwords:
Process the user's input password using the same hashing algorithm (e.g., bcrypt). Compare the resulting hash to the stored hashed password. If they match, the user is authenticated; if not, send an error.
Tech stalk: Backend : bcryptjs.

# Milestone 8: In this milestone, we will create a frontend card component for products and design a homepage to display these cards for each product.
Key features:
create a card component: Showcase Products Effectively: Presents product details in a clear and visually appealing way. Reusable Design: Can be used across multiple pages or sections of the app. Improved User Experience: Makes it easy for users to browse and interact with products. Organized Layout: Keeps the homepage clean and structured.
display those cards on the products page: Create a Dynamic Component: Design a single card component that accepts product details as props. Use Mapping: Use array mapping to iterate over the product list and render a card for each product. Pass Data Dynamically: Pass unique product information (e.g., name, price, image) to each card. Maintain Consistency: Ensure the layout remains uniform for all products.
Tech stack : Frontend: react

# Milestone 9 : In this milestone, we will create a Createproduct page using react.
Key features:
We can add and remove images from the webpage.
We can preview images.
We can add our names and descriptions on it.
We can specify content based on category.
We can specify tags.
We can specify prices range.
We can include our preferred stock.
We can add our e-mail.
Tech Stack : React

# Milestone 10 : In this we will create a mongoose schema for products and create and endpoint to store the product details.
Key features :
Wrote a product schema.
Create an end point to validate and store product details in mongodb.
Defined the structure of product data (e.g., name, description, price, image URL) using Mongoose. -Ensure each field has proper validation (e.g., required fields, correct data types).
Built a POST endpoint to receive product data.
Validated and saved the product details to MongoDB.
Ensured that only valid data is saved in the database, maintaining data integrity and preventing errors.
Tech Stack : React - frontend - multer.js, controller-product.js, model-product.js

# Milestone 11 : In this milestone, we will make our home page that will display all the products dynamic.
Key feautures :
We wrote an endpoint that will send all the data that was saved in mongodb using add products page earlier.
We wrote code for how to receive data at frontend.
We learnt how to display that data dynamically using product card created earlier.
Summarize : Wrote an endpoint that will send all products data to frontend. In frontend we wrote an function to get all the data Display these data dynamically passing to product card component.
Tech Stack : React - frontend - Home.jsx,Product.jsx 
Backend - user.js, multer.js,app.js

# Milestone 12 : In this milestone, we will make our My products page that will display all the products That I added according to my mail.
Key feautures : 
We will write an endpoint that will send all the products with mail that was saved in MongoDB using add products page earlier.
We wrote an endpoint that will send data by filtering with my mail and send data from mongodb.
We learnt how to receive data at frontend -How to display that data dynamically using product card created earlier.
Summary : Write an endpoint that will send all products with user mail to frontend In frontend write an function to get all the data Display these data dynamically passing to product card component.
Tech Stack : React - frontend - pages - myProduct.jsx.

# Milestone 13 : In this miletone,  we will add an functionality to edit the uploaded products.
Key feautures :
We will add edit button and then write and backend endpoint to update the new details inside MongoDB database.
How to write an endpoint that will update the existing data in MongoDB.
How to auto fill the form with previous data and give option to edit.
Summary : Write an endpoint that will receive new data and update the existing data inside MondoDB. In frontend we will add an edit button to the product card. When click on edit we will send the data to form and make it auto fill and have option to edit those data and save.
Tech Stack : React - frontend - components - MyProduct.jsx
Backend - controller - product.js

# Milestone 14 : In this milestone, we will add an functionality to delete button to the product data and write and backend endpoint to delete the product with the use of ID.
Key feautures:
How to write an endpoint that delete the product with specific ID from MongoDB.
Wrote an endpoint that will Delete the data form MongoDB using ID. 
In frontend we will add an delete button to the product card. 
When click on delete button we will send the product id to server endpoint.
Summary : We created an delete option in myproducts
Tech Stack : React - frontend - component - MyProduct.jsx
Backend - controller - product.js

# Milestone 15 : In this milestone, we will create and Navbar component and add nav component to every screen.
Key feautures:
Created an new Nav component with links to all pages: Home, My-products, Add product, Cart.
Made the Navbar responsive to all screen sizes.
We added the nav component to all the pages and make the navigations to all this pages smooth and easy.
Summary : We created a NavBar component where we can access different pages directly just creating a button instead of changing the URL. And also we made the NavBar responsive according to device (..like Desktop and Mobilephone).
Tech Stack : React - frontend - src - components - NavBar.jsx
React - frontend - pages - Cart.jsx

# Milestone 16 : In this milestone, we will create an product info page that display all the product data and choose quantity and add to card button.
Key feautures:
Created an new page that display all the product data.
Add quantity and add to card button.
Summary : We created an ProductDetails page to view the product with desired id, and added a count button with increase(+) and decrease(-) option in it.
Tech Stack : React - frontend - src - pages - ProductDetails 

# Milestone 17 : In this milestone, we will write an backend endpoint to add products to cart and store in database.
Key feautures:
We can edit the user schema to store cart products.
Write an end point to receive the product details and store in database.
Summary :  We updated the ProductDeatails page to store and recieve the Product deatails.
Tech Stack : Backend - controller - product.js
model - product.js & user.js
Frontend - pages - ProductDetails

# Milestone 18 : In this milestone, we will create an Backend endpoint for the cart page. We will write the backend logic to fetch all the products inside user cart to display in cart page.
Key feautures :
We will, create an endpoint to receive request from cart page.
And also, we will create an backend endpoint to fetch all the products inside cart with user mail.
Summary : We created an endpoint to get all types of products details in our page.
Tech Stack: Backend - product.js

# Milestone 19 : In this milestone, we will create an frontend page UI for cart and write an endpoint to increase and decrease the quantity of product inside cart.
Key feautures :
Created an cart page that display the products inside cart using endpoint we build in milestone 18.
For each product added an option to increase and decrease quantity using + and - buttons.
Wrote an endpoint to increase and decrease the quantityCreate an cart page that display the products inside cart using endpoint we build in 
For each product added an option to increase and decrease quantity using (+) and (-) buttons.
Wrote an endpoint to increase and decrease the quantity.
Summary : created an backend end point to increment and decrement product in cart.
Tech Stack : Backend - controller - product.js,
Frontend - src - components - Product.jsx,
pages - Cart.jsx.

# Milestone 20 : In this milestone, we will profile page frontend and write an endpoint to receive user data and display.
Key feautures :
Created an Backend endpoint that will sent user data
Created frontend profile page
Display profile photo, name and email in one section
In another section display address and add an button called "Add address"
If there are no address display "No address found".
Summary : Created an profile page with the user details like name ,address ,etc..,
Tech Stack : Backend - controller - user.js,
Frontend - components - AddressCard.jsx, NavBar.jsx,
pages - Profile.jsx

# Milestone 21 : In this milestone, we will create an frontend page form for address input.
Key feautures :
Create address form frontend page
Create an state that will store input address
When we click on add address in profile it should navigate to this form page.
Summary : Created an addAddress button in profile page to enter user address.
Tech Stack : Frontend - pages - createAddress.jsx, Profile.jsx

# Milestone 22 : In this milestone, we will create an backend endpoint that will save the address inside user profile in database.
Key feautures :
Created an endpoint that will receive the address from address form in frontend
Add the address to the address array inside user collection.
Summary : Created an endpoint(post) for createAddress.jsx .
Tech Stack : Backend - controller - user.js

# Milestone 23 : In this milestone, we will make our create an select address page in frontend and we will write product schema for the orders in the backend.
Key feautures :
We will add an button inside cart called "Place order"
We will create an select address page where we will display all the address and ask to select delivery address.
We will write mongoose schema for storing orders details.
Summary : If we click the Place order button, It will show all the available address.
Tech Stack : Frontend - pages - Cart.jsx, SelectAddress.jsx.
Backend - model - order.js,
controller - user.js.

# Milestone 24 : In this milestone, we will make our create an order conformation page in frontend where will display products ordering and address selected and total price details.
Key feautures :
First we will display all the products we are ordering.
Next we will display the address user selected to deliver.
We will display the total value of the cart.
We will have an place order button at the bottom.
Summary : We created an order conformation page.
Tech Stack - Frontend - pages - OrderConfirmation.jsx
Backend - model - product.js

# Milestone 25 : In this milestone, we will create an backend endpoint for place order.
Key feautures :
We had created an endpoint that will receive the products, user, address details.
We will get the mail of the user using that you need to retrive the _id of the user.
For each product the order will be different with same address.
Using order schema you created earlier you will store order details in mongodb order collection.
Summary : Created an endpoint for orders.
Tech Stack : Backend - model - order.js

# Milestone 26 : In this milestone, we will create an backend endpoint for place order.
Key feautures :
You need to create an endpoint that will receive the user mail.
You will get the mail of the user using that you need to retrive the _id of the user.
Using that _id you need to get all the orders of that user.
Send all the users orders in the response.
Summary : Updated an endpoint for orders.
Tech Stack : Backend - controller - order.js
Frontend - pages - OrderConfirmation.jsx

# Milestone 27 : In this milestone, we will create an frontend page for myorders.
Key feautures :
You need to create an my-orders page
You will send an get request to my-orders endpoint that we created in previous milestone.
We will send user mail in to endpoint to get all the user orders
Display all the user orders
We will add my-orders page in navbar for better navigation.
Summary : Created an frontend page that will display all the user orders.
Tech Stack : Backend - controller - order.js
Frontend - pages - MyOrdersPage.jsx

# Milestone 28 : In this milestone, we will add cancel button in my-orders and create an backend endpoint for cancel order.
Key feautures :
In my-orders page for every order add cancel order button
If the order is already canceled this button should not be displayed
You need to create an endpoint that will receive the order-id
Get the order using this id and mark the status canceled and save
Summary : The use will be able to cancel the placed orders.
Tech Stack : Backend - controller - order.js
Frontend - pages -  MyOrdersPage.jsx

# Milestone 29 : In this milestone, we will learn how to add online payment gateway to our application using Paypal api.
Key feautures :
Please create an PayPal account first PayPal developer dashboard
Once you login you can see an option for an sandbox accounts.
Copy the UserID of that account and save it.
In this sandbox accounts I can find my client id copy and save it.
In my order conformation page you need two options for payment one is COD and another is online payment.
Created radio buttons to select COD or online payment and when we click on online payment PayPal buttons need to be displayed.
In next milestone we wrote an code to display and use those PayPal online Payments buttons.
Summary : Learnt how to use PayPal API.
Learnt how to Integrate online payments.
Tech Stack : Frontend - OrderConfirmationPage.jsx -React

# Milestone 30 : In this milestone, we will learn how to add online payment gateway to our application using PayPal API. This is an continuous milestone of milestone 29 where you created PayPal account and get the userid.
Key feautures :
After creating PayPal account and getting the UserID inside sandbox account.
Implement online payment using PayPal API using the client key you created earlier.
Download NPM package called react-paypal-js that will provide an component called PayPalScriptProvider which will display online payment methods like credit or debit card etc..,
Tech Stack : Frontend - OrderConfirmationPage.jsx -React

# Milestone 31 : In this milestone, we will learn how to implement global state management using Redux.
Key feautures :
Install an npm package called react-redux.
create an new folder called store with two files store.js and userActions.js.
We will store user mail inside global state.
In store.js file configure an store with userReducer function that will handle global user email state.
Inside userActions.js file write an function called setEmail that will help in storing email state inside global state.
In Index.js file make sure to wrap APP component inside provider component with store as props.
Summary : How to use redux for global state management
Implement redux store to store all global states
Tech Stack : Frontend - store - store.js, userActions.js.