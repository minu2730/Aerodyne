document.addEventListener("DOMContentLoaded", function () {
    const paymentForm = document.getElementById("paymentForm");

    paymentForm.addEventListener("submit", function (event) {
        event.preventDefault();
        // Handle the payment logic here (e.g., send data to a backend server)
        alert("Payment successful!"); // Replace this with your actual payment processing code
    });
});
