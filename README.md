# GoNow: Train Ticket Booking System

## Project Overview
GoNow is an enterprise-level train ticket booking system designed for seamless ticket reservations, cancellations, and management. It offers user-friendly features for guests, registered users, and administrators while ensuring security, efficiency, and scalability.

## Features

### Guest Users:
- Search trains by route, timing, and availability.
- View train schedules and real-time seat availability.
- Register an account for ticket booking.

### Registered Users:
- Secure login/logout functionality using JWT authentication.
- **Select Your Seat:** During the booking process, users can now visually select their preferred seat (with designated seat classes) from available options.
- Book train tickets online with multiple payment options.
- View booking history and manage reservations.
- Cancel tickets with automatic refund processing.
- Receive booking confirmation and cancellation emails.
- Update profile details and change passwords.

### Admin Panel:
- Manage trains (add, edit, delete, cancel).
- Configure emergency Tatkal seat reservations by reserving a block of General Class seats exclusively for last-minute bookings.
- Manage users and bookings.
- Generate reports in Excel based on time intervals.
- Process ticket cancellations and refunds.

## Technologies Used

### Front-End:
- **HTML5, CSS3, JavaScript (ES6+), Bootstrap** – for a responsive and user-friendly interface.

### Back-End:
- **Node.js, Express.js** – for handling API requests and business logic.
- **MySQL** – for data storage and retrieval.
- **JWT (JSON Web Token)** – for authentication and security.
- **Nodemailer** – for email notifications.
- **dotenv** – for environment variable management.

## Folder and File Structure
```
GoNow/
│── backend/                      # Backend (Node.js + Express + MySQL)
│   ├── config/                    # Configuration Files
│   │   ├── db.js                  # Database Connection
│   │   ├── dotenv.config.js       # Environment Variables
│   │
│   ├── controllers/               # Controllers for Business Logic
│   │   ├── authController.js      # User Authentication
│   │   ├── trainController.js     # Train Management
│   │   ├── bookingController.js   # Booking & Ticket Management
│   │   ├── paymentController.js   # Payments & Refunds
│   │   ├── adminController.js     # Admin Operations
│   │
│   ├── models/                    # Database Models
│   │   ├── userModel.js           # User Schema
│   │   ├── trainModel.js          # Train Schema
│   │   ├── bookingModel.js        # Booking Schema
│   │   ├── paymentModel.js        # Payment Schema
│   │   ├── refundModel.js         # Refund Schema
│   │
│   ├── routes/                    # API Routes
│   │   ├── authRoutes.js          # Authentication Routes
│   │   ├── trainRoutes.js         # Train Management Routes
│   │   ├── bookingRoutes.js       # Booking & Ticket Routes
│   │   ├── paymentRoutes.js       # Payments Routes
│   │   ├── adminRoutes.js         # Admin Panel Routes
│   │
│   ├── middleware/                # Authentication Middleware
│   │   ├── authMiddleware.js      # JWT Auth Middleware
│   │
│   ├── utils/                     # Utility Functions
│   │   ├── sendEmail.js           # Email Alerts for Bookings
│   │   ├── refundProcessor.js     # Automatic Refund Processing
│   │
│   ├── server.js                  # Main Server File
│   ├── package.json               # Node.js Dependencies
│
│── frontend/                      # Frontend (HTML, CSS, JS, Bootstrap)
│   ├── assets/                    # Static Assets
│   │   ├── css/                   # CSS Styles
│   │   │   ├── styles.css         # Main Stylesheet
│   │   ├── js/                    # JavaScript Files
│   │   │   ├── script.js          # Main JavaScript Logic
│   │   │   ├── api.js             # API Requests
│   │   ├── images/                # Images for UI
│   │
│   ├── pages/                     # HTML Pages
│   │   ├── index.html             # Homepage
│   │   ├── trains.html            # Train Search Page
│   │   ├── login.html             # Login Page
│   │   ├── register.html          # Register Page
│   │   ├── booking.html           # Booking Page (includes seat selection UI)
│   │   ├── admin.html             # Admin Panel
│   │
│   ├── components/                # Reusable UI Components
│   │   ├── navbar.html            # Navigation Bar
│   │   ├── footer.html            # Footer Section
│
│── database/                     # Database Files
│   ├── schema.sql               # MySQL Database Schema
│   ├── seed.sql                 # Sample Data for Testing
│
│── README.md                   # Documentation
│── .env                         # Environment Variables (DB Credentials, JWT Secret)
```

## Database Schema (MySQL)

```sql
CREATE TABLE trains (
    id INT AUTO_INCREMENT PRIMARY KEY,
    train_name VARCHAR(255) NOT NULL,
    train_number VARCHAR(10) UNIQUE NOT NULL,
    source VARCHAR(100) NOT NULL,
    destination VARCHAR(100) NOT NULL,
    departure_time TIME NOT NULL,
    arrival_time TIME NOT NULL,
    seat_capacity INT NOT NULL,
    tatkal_capacity INT DEFAULT 0  
);

CREATE TABLE bookings (
    id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT,
    train_id INT,
    seat_number VARCHAR(10),
    seat_class ENUM('AC', 'Sleeper', 'General', 'Tatkal') DEFAULT 'General',
    booking_status ENUM('confirmed', 'cancelled') DEFAULT 'confirmed',
    booking_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(id),
    FOREIGN KEY (train_id) REFERENCES trains(id)
);

CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    role ENUM('user', 'admin') DEFAULT 'user',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE payments (
    id INT AUTO_INCREMENT PRIMARY KEY,
    booking_id INT,
    amount DECIMAL(10,2) NOT NULL,
    payment_status ENUM('success', 'failed', 'refunded') DEFAULT 'success',
    payment_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (booking_id) REFERENCES bookings(id)
);

CREATE TABLE refunds (
    id INT AUTO_INCREMENT PRIMARY KEY,
    booking_id INT,
    refund_amount DECIMAL(10,2) NOT NULL,
    refund_status ENUM('processed', 'pending') DEFAULT 'pending',
    refund_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (booking_id) REFERENCES bookings(id)
);
```


## How to Run the Project

### 1. Setup the Backend
```sh
cd backend
npm install 
node server.js
```
## How to Load schema.sql
### 1. Start MySQL:

```
sh
mysql -u root -p
```

### 2. Create and Load the Schema:

```sh
source C:\path\gonow\database\schema.sql;
(Replace C:\path\to\schema.sql with your actual file location)
```


### 2. Setup the Frontend
Simply open `frontend/index.html` in a browser.

## Implemented Enhancements

- **Seat Selection:**  
  Users can now view a visual seating layout during the booking process and choose a specific seat, with the option to select the seat class (AC, Sleeper, General, or Tatkal). This ensures clarity and a more personalized booking experience.

- **Emergency Tatkal Seat Reservations:**  
  Administrators can configure a reserved block of seats in the `trains` table (using the `tatkal_capacity` field) to accommodate emergency or last-minute Tatkal bookings, ensuring availability during peak times.

---

This project is a college mini project and is open for collaboration! Feel free to contribute and further improve GoNow. 🚀