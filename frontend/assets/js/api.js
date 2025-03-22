// frontend/assets/js/api.js
// Example API requests using fetch
const API_BASE = "http://localhost:3000/api";

// Register user
const registerUser = async (userData) => {
  const response = await fetch(`${API_BASE}/auth/register`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(userData),
  });
  return response.json();
};

// Login user
const loginUser = async (credentials) => {
  const response = await fetch(`${API_BASE}/auth/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(credentials),
  });
  return response.json();
};

// Book ticket
const bookTicket = async (bookingData) => {
  const response = await fetch(`${API_BASE}/bookings`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(bookingData),
  });
  return response.json();
};

// Add more API calls as needed...
