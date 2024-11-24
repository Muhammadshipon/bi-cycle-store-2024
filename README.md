🚴 Bicycle Store API
A robust RESTful API built with Express and TypeScript, integrating MongoDB with Mongoose for managing a Bicycle Store. This project supports creating, reading, updating, and deleting bicycles and orders, as well as calculating revenue from orders.

🌟 Features
Products (Bicycles):

Create, retrieve, update, and delete bicycles.
Support for querying bicycles by name, brand, or type.
Data validation for fields like price, type, and stock availability.
Orders:

Create orders with real-time inventory management.
Automatic updates to product stock and availability.
Validation to ensure sufficient inventory and valid order data.
Revenue Calculation:

Aggregates total revenue generated from all orders.
Error Handling:

Detailed and structured error responses.
Validation for input fields and proper HTTP status codes for errors.
📜 API Endpoints
Products
Method	Endpoint	Description
POST	/api/products	Create a new bicycle.
GET	/api/products	Get all bicycles.
GET	/api/products/:productId	Get a specific bicycle by ID.
PUT	/api/products/:productId	Update a bicycle's details.
DELETE	/api/products/:productId	Delete a bicycle.
Orders
Method	Endpoint	Description
POST	/api/orders	Place a new order.
GET	/api/orders/revenue	Calculate total revenue from orders.
📦 Installation
Prerequisites
Node.js (v16 or above)
MongoDB (local or cloud-based like MongoDB Atlas)
Steps
Clone the repository:

bash
Copy code
git clone <repository-url>
cd bicycle-store-api
Install dependencies:

bash
Copy code
npm install
Set up environment variables: Create a .env file in the root directory with the following:

env
Copy code
PORT=3000
MONGO_URI=mongodb://localhost:27017/bicycle-store
NODE_ENV=development
Start the application:

bash
Copy code
npm run dev
🛠️ Technologies Used
Node.js
Express
TypeScript
MongoDB (via Mongoose)
