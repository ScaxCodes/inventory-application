# Inventory Application

Inventory Application is a simple inventory management system built to train my Express.js and PostgreSQL skills. It allows the user to manage categories and items, including adding, editing, and deleting them. The app uses EJS as the view engine and follows a RESTful routing design.

## Table of Contents

- [Features](#features)
- [Technology Stack](#technology-stack)
- [Installation](#installation)
- [Configuration](#configuration)
- [Database Setup](#database-setup)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Reflection / Room for Improvement](#reflection--room-for-improvement)
- [License](#license)

## Features

- **Category Management:**  
  Create, edit, delete, and view categories.
- **Item Management:**  
  Add, edit, delete, and view items under specified categories.
- **Validation:**  
  Middleware for verifying input parameters (such as category names and item IDs).
- **Method Override:**  
  Supports PATCH and DELETE requests via method overriding for HTML forms.
- **Template Views:**  
  Uses EJS for dynamic HTML rendering.

## Technology Stack

- Node.js
- Express.js
- PostgreSQL
- EJS
- Method-Override (for non-GET/POST HTTP methods)

## Installation

1. **Clone the Repository**

   ```bash
   git clone https://github.com/ScaxCodes/inventory-application.git
   cd inventory-application
   ```

2. **Install Dependencies**

   ```bash
   npm install
   ```

3. **Set Up PostgreSQL Database**  
   Create a PostgreSQL database and update the connection string in your `.env` file.

## Configuration

Create a `.env` file in the root folder with the following content (adjust values as needed):

```env
PORT=8000
DATABASE_URL=postgresql://<username>:<password>@<host>:<port>/<database>
```

_Note: The `.env` file is gitignored to keep your credentials safe._

## Database Setup

To set up a dummy database for testing, run the following SQL statements in your PostgreSQL database:

```sql
CREATE TABLE categories (
    id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    name VARCHAR(255) NOT NULL
);

CREATE TABLE manufacturers (
    id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    name VARCHAR(255) NOT NULL,
    country VARCHAR(255)
);

CREATE TABLE items (
    id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    name VARCHAR(255) NOT NULL,
    amount INTEGER NOT NULL DEFAULT 0,
    category_id INTEGER NOT NULL,
    manufacturer_id INTEGER,
    price NUMERIC(10,2) NOT NULL DEFAULT 0.00,
    orderability VARCHAR(50)
);

INSERT INTO categories (name) VALUES
('Evidence & Field Supplies'),
('Investigator’s Gear'),
('Break Time & Office Essentials'),
('Miscellaneous Accessories');

INSERT INTO manufacturers (name, country) VALUES
('ForenTech', 'USA'),
('CrimeSolve Supplies', 'Germany'),
('Tactical Gear Co.', 'UK'),
('Investigators’ Choice', 'France'),
('CopLife Essentials', 'USA');

INSERT INTO items (name, amount, category_id, manufacturer_id, price, orderability) VALUES
('Evidence Bags (paper)', 500, 1, 1, 19.99, 'Unlimited'),
('Tamper-Proof Seals', 200, 1, 2, 24.99, 'Once a week'),
('Crime Scene Tape', 50, 1, 3, 14.99, 'Unlimited'),
('Disposable Gloves', 1000, 1, 4, 29.99, 'Unlimited'),
('Classic Paper Notebook', 150, 2, 5, 5.99, 'Unlimited'),
('High-Quality Pen', 300, 2, 5, 3.49, 'Unlimited'),
('Smartphone', 20, 2, 4, 799.99, 'Once a year'),
('Tactical Flashlight', 75, 2, 3, 49.99, 'Once a month'),
('Rain Proof Jacket', 40, 2, 2, 89.99, 'Once a year'),
('Police Armband', 100, 2, 1, 12.99, 'Unlimited'),
('Instant Coffee', 500, 3, 5, 7.99, 'Unlimited'),
('Leak-Proof Coffee Mug', 80, 3, 4, 19.99, 'Once a month'),
('Donuts', 300, 3, 5, 1.99, 'Unlimited'),
('Business Cards', 1000, 3, 2, 14.99, 'Once a year'),
('Reusable Water Bottle', 90, 3, 3, 24.99, 'Once a year'),
('Basic First Aid Kit', 50, 4, 4, 34.99, 'Once a month'),
('Multi-tool', 60, 4, 3, 39.99, 'Once a year'),
('Cable Ties', 500, 4, 1, 9.99, 'Unlimited'),
('Sunglasses', 70, 4, 5, 29.99, 'Once a year');
```

## Usage

Start the application using the following command:

```bash
npm run dev
```

The server will start on [http://localhost:8000](http://localhost:8000). Open the URL in your browser to access the app.

### Routes

- **GET /** – Display all categories.
- **POST /add-category** – Add a new category.
- **GET /:category** – Display items for a particular category.
- **POST /:category/add-item** – Add a new item under a category.
- **PATCH /:category/edit** – Edit a category.
- **PATCH /:category/:id/edit** – Edit an item.
- **DELETE /:category/:id** – Delete an item.
- **DELETE /:category/** – Delete a category.

_Note: HTML forms use method override to simulate PATCH/DELETE._

## Reflection / Room for Improvement

I decided to stop improving this project and continue learning more backend topics instead; the next stop will be authentication. The app could be improved in several ways. For a better user experience, a loading spinner during database calls would be important. Additionally, instead of manually entering IDs when editing items, it would be much nicer to select category names from a dropdown menu. Also, it was a really bad idea to fetch categories by their name rather than by their ID. I will not fall into this trap in my future projects.

## License

This project is licensed under the [MIT License](LICENSE).

## Author

© 2025 ScaxCodes
