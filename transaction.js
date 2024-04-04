document.addEventListener("DOMContentLoaded", function() {
    displayOrderDetails();

    var paymentForm = document.getElementById('payment-form');
    paymentForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent default form submission behavior

        // Your form submission logic can go here if needed

        // Save transaction details to localStorage
        saveTransactionDetails();

        // Redirect to thank.html
        window.location.href = 'thank.html';
    });
});

function displayOrderDetails() {
    var orders = JSON.parse(localStorage.getItem("orders"));
    if (orders && orders.length > 0) {
        var totalAmount = 0;
        var totalPrice = 0;
        var productDetails = '';

        orders.forEach(function(order) {
            var subtotal = order.price * order.quantity;
            totalAmount += subtotal;
            totalPrice += subtotal;
            productDetails += order.quantity + ' x ' + order.pastaName + ' - ₱' + subtotal.toFixed(2) + '<br>';
        });

        // Display product details and total amount
        document.getElementById('product-details').innerHTML = productDetails;
        document.getElementById('amount').textContent = '₱' + totalAmount.toFixed(2);

        // Display total price
        document.getElementById('price').textContent = totalPrice.toFixed(2);
    }
}

function saveTransactionDetails() {
    var transactionCount = localStorage.getItem('transactionCount') || 0;
    transactionCount++;
    localStorage.setItem('transactionCount', transactionCount);

    var transactionName = document.getElementById('name').value; // Assuming 'name' is the input field for customer name
    var transactionProduct = document.getElementById('product-details').innerHTML;
    var transactionPrice = document.getElementById('price').textContent;
    var transactionLocation = 'Online'; // Assuming transaction occurs online

    localStorage.setItem('transactionName_' + transactionCount, transactionName);
    localStorage.setItem('transactionProduct_' + transactionCount, transactionProduct);
    localStorage.setItem('transactionPrice_' + transactionCount, transactionPrice);
    localStorage.setItem('transactionLocation_' + transactionCount, transactionLocation);
}
