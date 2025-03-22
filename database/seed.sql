-- Use the database\ nUSE gonow_db;

-- Insert sample users
INSERT INTO users (name, email, password, role) VALUES
('GoNow', 'gonowtickets@gmail.com', 'rootgonow', 'admin'),
('Dhoom', 'dhoom@example.com', 'hashedpassword2', 'user'),
('John Doe', 'john@example.com', 'hashedpassword3', 'user');

-- Insert sample trains
INSERT INTO trains (train_name, train_number, source, destination, departure_time, arrival_time, seat_capacity, tatkal_capacity) VALUES
('Rajdhani Express', '12345', 'Delhi', 'Mumbai', '08:00:00', '20:00:00', 500, 50),
('Shatabdi Express', '67890', 'Chennai', 'Bangalore', '09:00:00', '12:00:00', 300, 30),
('Duronto Express', '11223', 'Kolkata', 'Delhi', '10:00:00', '22:00:00', 400, 40);

-- Insert sample bookings
INSERT INTO bookings (user_id, train_id, seat_number, seat_class, booking_status) VALUES
(1, 1, 'A1-21', 'AC', 'confirmed'),
(2, 2, 'B2-14', 'Sleeper', 'confirmed'),
(3, 3, 'C3-10', 'General', 'cancelled');

-- Insert sample payments
INSERT INTO payments (booking_id, amount, payment_status) VALUES
(1, 2500.00, 'success'),
(2, 1500.00, 'success'),
(3, 1200.00, 'failed');

-- Insert sample refunds
INSERT INTO refunds (booking_id, refund_amount, refund_status) VALUES
(3, 1200.00, 'processed');

