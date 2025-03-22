// frontend/assets/js/script.js
// Example: Handle seat selection on booking page
document.addEventListener("DOMContentLoaded", () => {
  const seats = document.querySelectorAll(".seat");
  const seatInput = document.getElementById("seat_number");

  seats.forEach((seat) => {
    seat.addEventListener("click", () => {
      // Remove selection from all seats
      seats.forEach((s) => s.classList.remove("selected"));
      // Mark current seat as selected
      seat.classList.add("selected");
      seatInput.value = seat.dataset.seat;
    });
  });
});
