# Ecommerce-Follow-Along

*Milestone 1: Project Overview*

This project is designed to enhance the shopping experience by providing users with an efficient and personalized e-commerce platform. It allows users to browse, purchase, and manage products seamlessly while enjoying a user-friendly interface.

*Key Features*  

- This application uses *MERN Stack*
- *REST API Creation*: It is a style used for building web services that allow communication between a client and a server using standard HTTP methods.
- *Authentication*: This is the process of verifying the identity of a user before allowing them access to specific resources. 
- *Backend Development*: In MongoDB, schema design is the process of defining the structure and relationships of the data stored in the database.

*Tech Stack*  

- *Frontend*: React framework for building the user interface.  
- *Backend*: Node.js to handle server-side operations and APIs.  
- *Database*: MongoDB for storing user and product data efficiently.  


*Milestone 2: Project Setup and Login Page*

This milestone focuses on setting up the project structure and implementing a basic login page.

*Key Features*

- Project Setup: Initialized the project with the required dependencies and folder structure.
- Login Page: A simple login page with fields for username and password.

*Tech Stack Used*

- Frontend: React, Tailwindcss

*Milestone 3: Serevr setup and error handling.*


*Key Features:* 

Organized backend code with a clear folder structure.

Configured a Node.js server using Express to handle APIs.

Integrated MongoDB for data storage and management.

Implemented basic error handling for smooth server operations.

*Tech Stack* 

Backend: Node.js, Express  
Database: MongoDB, Mongoose


*Milestone 4: Creating User Model and Controller*

This project is a simple User Management System that allows the creation, retrieval, and management of user data. It also supports file uploads (like profile pictures) using **Multer**.

*Features*
- **User Model**: Blueprint for storing user data in the database.
- **User Controller**: Manages operations like adding, retrieving, and updating user information.
- **File Uploads**: Accepts and stores user-uploaded files (e.g., profile images).
- **Documentation**: Well-documented code for ease of 


*Milestone 5: Project Signup Setup*

This milestone focuses on setting up the project structure and implementing a basic signup page.

*Key Features*

- Project Setup: Initialized the project with the required dependencies and folder structure.
- Signup Page: A simple signup page with fields for Name Email Password User Photo.

*Tech Stack Used*

- Frontend: React

*Milestone 6: Password Encryption and User Data Storage*

Password Encryption: Used bcrypt to hash passwords.

User Data Storage: Saved user data securely in the database.

GitHub Updates: Committed changes for password encryption.

Tech stack used:
- nodejs


*Milestone 7:*
  In this milestone we are going to create a backend endpoint for user and  the focus is on validating user credentials and verifying the encrypted password stored in the database.



Key features:
   1)validate user credentials during login:
Protect User Data: Keeps passwords safe even if the database is compromised.
Privacy: Ensures passwords aren't stored in plain text.
Compliance: Meets security standards like GDPR and PCI-DSS.
Prevents Password Theft: Hashed passwords are difficult to decipher, increasing security.

   2) compare the encrypted password with the user’s input:
User Enters Credentials:

The user provides their email/username and password on the login page.

Fetch User Data from Database:

The backend retrieves the user record based on the provided email/username.
If the user is not found, return an error: "User does not exist."

Compare Encrypted Passwords:

Process the user's input password using the same hashing algorithm (e.g., bcrypt).
Compare the resulting hash to the stored hashed password.
If they match, the user is authenticated; if not, send an error.

Tech stalk:
 Backend : bcryptjs.


*Milestone 8:*
In this milestone,  we will create a frontend card component for products and design a homepage to display these cards for each product.

Key features:
  1) create a card component:
Showcase Products Effectively: Presents product details in a clear and visually appealing way.
Reusable Design: Can be used across multiple pages or sections of the app.
Improved User Experience: Makes it easy for users to browse and interact with products.
Organized Layout: Keeps the homepage clean and structured.
  2) display those cards on the products page:
Create a Dynamic Component: Design a single card component that accepts product details as props.
Use Mapping: Use array mapping to iterate over the product list and render a card for each product.
Pass Data Dynamically: Pass unique product information (e.g., name, price, image) to each card.
Maintain Consistency: Ensure the layout remains uniform for all products.



Tech stack :
Frontend: react


## MileStone-9 : CreateProduct Component


# Overview

CreateProduct is a React component that allows users to create a product by filling out a form with details such as name, description, category, price, stock, and images. It provides real-time image previews and validates required fields before submission.

# Features

User-friendly form for creating a product
Supports image uploads with previews  
Dynamically updates form state using React useState
Cleans up object URLs to prevent memory leaks
Uses Tailwind CSS for styling
Displays an alert upon successful submission

## Milestone 10: Updated models/product.js controller/product.js Createproductjs

# Controller/Product.js:

This Express.js route handles the creation of a new product. It validates the product data, checks if the user exists in the database, and ensures that at least one image is uploaded. If validation passes, the product is saved to the database and a success message is returned.

# model/Product.js

This code defines a Mongoose schema for a "Product" model in MongoDB. It specifies fields such as name, description, category, tags, price, stock, email, and images, with validation rules to ensure that required data is provided. Additionally, it includes automatic timestamping for creation and modification times. The schema is then used to create and export the Product model.

# src/Creatproduct.js

The CreateProduct component is a form for creating a new product. Here's a quick breakdown of its key features:

State Management: Uses useState to manage the form data for name, description, category, tags, price, stock, and email, along with image handling (images and previewImages).
File Handling: Allows users to upload multiple images, which are previewed before submission. The images are added to the form data using FormData.
Form Submission: When the form is submitted, the data is sent to the backend using axios. If the request is successful, a success message is displayed, and the form is reset. If there's an error, an alert is shown.
Category Options: Provides a set of predefined categories for the product (Electronics, Fashion, Books, and Home Appliances).



**Milestone 11 - Dynamic Home Page with MongoDB Integration**

In this milestone, we focused on making the home page dynamic by fetching and displaying product data stored in MongoDB. The objective was to write a backend endpoint that retrieves all saved product data and sends it to the frontend. On the frontend, we implemented a function to request this data and dynamically render it using the previously created product card component. This milestone helped in understanding how to extract data from MongoDB, send it through an API endpoint, receive it in the frontend, and display it efficiently using components. By completing this, we have successfully built a dynamic product listing system that enhances user interaction and improves the functionality of our application.

**Milestone 12 - My Products Page with User-Based Filtering**

In this milestone, we developed the My Products page, which displays only the products added by the logged-in user based on their email. We achieved this by writing a backend endpoint that filters product data in MongoDB using the user's email and sends only the relevant products to the frontend. On the frontend, we implemented a function to fetch this filtered data and dynamically render it using the existing product card component. This milestone provided valuable experience in filtering data based on specific constraints, handling API requests efficiently, and dynamically displaying user-specific content. Successfully completing this step enhances the personalization of the application, allowing users to manage their own products seamlessly. 🚀


**MileStone-13 - Creating an edit button**

In this milestone, we created a edit button to modify the already entered details which makes the product more customizable. It allows the user to change all the details of the product.
We have changed the product.js in controller and few major changes in frontend.


**MileStone -14 Creating an delete button**

In this milestone, we created a delete button to delete the already entered details which makes the product page more customizable. It allows the user to delete the product.
We have changed the product.js in controller and few major changes in frontend.


*Milestone 15 - Reusable Navigation Component*  

In this milestone, we created a reusable and responsive navigation bar for our eCommerce project. The Nav component includes links to essential pages like home, My Products, Add Product, and Cart. It was designed to be adaptive and user-friendly using CSS for responsiveness. This component was then integrated across multiple pages to ensure seamless navigation throughout the app. 


Tech Stalk :

Frontend:
React.js - For building the Nav component.



**Milestone 16 - Product Info Page**
In this milestone, we created a Product Info Page that displays detailed product data. Users can choose the quantity and click the Add to Cart button to add items to their cart.


Tech Stack:
Frontend:
 React.js - For building the Product Info Page.


**Milestone 17: Add Products to Cart 🛒**

Overview
In this milestone, you'll modify the user schema to store cart items and create an API endpoint to add products to the cart.

*Steps*
Update User Schema – Add a cart field to store products.
Create Cart Schema – Define how products are stored in the cart.
Implement API Endpoint – Receive and store product details in the cart.
By the end, your backend will support adding products to a user’s cart and storing them in the database.


*Milestone 18 - Backend API for Cart Page*
In this milestone, we created backend endpoints to interact with the cart page and manage cart data for users.

Features Implemented:
Create an endpoint to receive requests from the cart page.
Create a backend endpoint to fetch all products inside the cart using the user's email.

Tech Stack:
Backend:  MongoDB
Frontend: React.js


**Milestone 19 - Cart Page Frontend & Quantity Management API**

*Overview:*

In this milestone, we will create the cart page UI, display products from the backend API, and implement functionality to increase and decrease product quantity using backend endpoints.

Tech stalk :
Frontend: React.js
Backend : mongoDB

# 🚀 Milestone 20 - Profile Page & API  

## 🛠️ Steps  

### **Backend**  
- Create an API endpoint to fetch user data by email.  
- Ensure database connection & CORS setup.  

### **Frontend**  
- Fetch and display **profile photo, name, email**.  
- Show **addresses** (or "No address found").  
- Add **"Add Address"** button.  

✅ **Goal:** A profile page displaying user details dynamically. 🚀


# MIlestone-21 : Created Address Form Page

Designed a user-friendly form layout for entering address details.

Included input fields for:

Country, City, Address Line 1, Address Line 2 (optional),Zip Code

Address Type (e.g., Home, Office)

Implemented State Management

Utilized React state (useState) to manage form input values.

Ensured input fields dynamically update the state.

Navigation Integration

Configured navigation to the address form when "Add Address" is clicked in the profile.

Used React Router for seamless page transition.

📌 Outcome

Successfully implemented an address form that collects user input and navigates correctly from the profile section. This milestone enhances user experience by allowing them to save and manage addresses efficiently.


# Milestone 22: Store User Address in Database

*Overview*

Create a backend endpoint to store a user's address inside their profile in the database.

Steps to Complete

Set Up Route - Create an Express route to handle address submissions.

Implement Logic - Find user, update their address array, and save changes.

# Milestone 23 - Place Order Functionality

*Features Implemented:*

Added a "Place Order" button in the cart page.

Created a "Select Address" page to display and choose a delivery address.

Developed a backend endpoint to fetch user addresses.

Designed a Mongoose schema to store order details.

Tech Stack:

Frontend: React

Backend: Node.js, Express.js

Database: MongoDB


# Milestone 24: Order Confirmation Page

## Overview
In this milestone, we will build the Order Confirmation page for our application. This page will display the ordered products, the selected delivery address, and the total price details. Additionally, it will feature a "Place Order" button to finalize the purchase.

## Steps to Implement 📝
1. *Display Ordered Products:* Show all the products the user is purchasing, including images, names, prices, and quantities.
2. *Show Selected Address:* Retrieve and display the address the user has chosen for delivery.
3. *Calculate Total Price:* Compute the total cost of the order, including any applicable taxes or discounts.
4. *Add Place Order Button:* Provide a button to confirm the order and proceed with the checkout process.


#  Milestone 25: create an backend endpoint for place order

# Overview:

This milestone focuses on creating an Express backend endpoint that handles placing orders. It receives product details, user information, and address data, then processes and stores the order in MongoDB.


Features:

- Accepts user email, products, and address details.

- Retrieves user ID from the email.

- Creates individual orders per product.

- Saves orders to the MongoDB orders collection.


# Milestone 26 -Get User Orders Endpoint 

# Overview:

This milestone focuses on creating an Express backend endpoint that fetches all orders for a specific user. It receives the user's email, retrieves the user’s ID, and fetches the corresponding orders from MongoDB.

Features:

- Fetch User Orders: Get all orders by user email.

- Detailed Order Info: Includes product, quantity, address, and status.

- Error Handling: Handles missing users or orders.


*Milestone 27 - My Orders Page*

# Overview
In this milestone, we will create a My Orders page where users can view their order history. We will fetch user-specific orders from the backend by making a GET request to the /my-orders endpoint, passing the user's email. The retrieved orders will then be displayed on the frontend. Additionally, we will update the navigation bar to include a link to the My Orders page for easier access.

Tech Stack
- Backend: Node.js, Express.js
- Database: MongoDB
- Frontend: React

*Milestone 28 - Cancel Order Feature*

# Overview
In this milestone, we will enhance the My Order page by adding a Cancel Order button for each order. Users will be able to cancel an order unless it has already been canceled. We will implement a new backend endpoint to update the order status to Canceled when the button is clicked.

Tech Stack
- Backend: Node.js, Express.js
- Database: MongoDB
- Frontend: React


*Milestone 29 - PayPal Integration*

Overview

In this milestone, we will integrate PayPal as an online payment option in the Order Confirmation page. Users can choose between Cash on Delivery (COD) and Online Payment (PayPal). Selecting Online Payment will display the PayPal buttons.

Tech Stack

Backend: Node.js, Express.js

Database: MongoDB

Frontend: React

Payment Gateway: PayPal


# Milestone 30

1. Install the `@paypal/react-paypal-js` package in your project.
2. Wrap your app with `PayPalScriptProvider` and provide your PayPal Client ID.
3. Create a PayPal button to handle payments.
4. Add the PayPal button to your checkout page.
5. Use **Sandbox mode** for testing before going live.
6. Replace the sandbox `client-id` with a live Client ID for real transactions.

This integration allows users to make secure payments via PayPal, credit, and debit cards. 🚀


# Milestone 31: React-Redux Email State

Install `react-redux` and create a `store` folder. Add `store.js` and `userActions.js`. Set up email state in `store.js` and create `setEmail` function in `userActions.js`. Wrap `App` with `Provider` in `index.js` and pass the store to it. Email state is now global and can be used anywhere in the app. Next: Updating and accessing email state.


# Milestone 32: Managing Mail with Global State (Redux)

Overview:
- On the Login page, we used dispatch to save the email.

- On other pages, we used useSelector to access the email from the global state.

- This makes the email available across all pages without passing it as props.

Tech Stack:
- State Management: Redux, React-Redux

*Milestone 33 - Saving Password and Setting JWT Token in Cookie*

 Overview
In this milestone, you'll learn how to securely generate a JWT token upon user login and store it in the browser using cookies. This is essential for handling authenticated sessions in full-stack web applications.

Tech Stack:
Backend :Express.js,jsonwebtoken
Database: Mongodb


# Milestone 34: JWT Token Validation from Cookies.

Overview:
- In this milestone, we will learn how to validate a JWT token stored in cookies to ensure secure access to protected pages.

Key Features:
- Secure Token Storage: JWT stored in HTTP-only cookies for enhanced security.

- Token Extraction: Client reads and sends the JWT from cookies.

- Middleware Validation: Server verifies the JWT before granting access to protected routes.

- Route Protection: Unauthorized users are redirected to the login page.

- Reusable Middleware: Easily apply authentication logic across multiple backend routes.