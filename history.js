document.addEventListener('DOMContentLoaded', function() {
    var transactionCount = localStorage.getItem('transactionCount') || 0;
    var transactionHistoryHTML = '';
    var historyTable = document.getElementById('transaction-history');

    for (var i = 1; i <= transactionCount; i++) {
        var transactionName = localStorage.getItem('transactionName_' + i);
        var transactionProduct = localStorage.getItem('transactionProduct_' + i);
        var transactionPrice = localStorage.getItem('transactionPrice_' + i);
        var transactionLocation = localStorage.getItem('transactionLocation_' + i);

        if (transactionName && transactionProduct && transactionPrice && transactionLocation) {
            transactionHistoryHTML += `
                <tr>
                    <td>${i}</td>
                    <td>${transactionName}</td>
                    <td>${transactionProduct}</td>
                    <td>${transactionPrice}</td>
                    <td>${transactionLocation}</td>
                </tr>
            `;
        }
    }

    function saveTransactionDetails() {
        var transactionCount = localStorage.getItem('transactionCount') || 0;
        transactionCount++;
        localStorage.setItem('transactionCount', transactionCount);
    
        var transactionName = document.getElementById('name').value; // Assuming 'name' is the input field for customer name
        var transactionProduct = document.getElementById('product-details').value; // Assuming 'product-details' is an input field for product details
        var transactionPrice = document.getElementById('price').value; // Assuming 'price' is an input field for price
        var transactionLocation = 'Online'; // Assuming transaction occurs online
    
        localStorage.setItem('transactionName_' + transactionCount, transactionName);
        localStorage.setItem('transactionProduct_' + transactionCount, transactionProduct);
        localStorage.setItem('transactionPrice_' + transactionCount, transactionPrice);
        localStorage.setItem('transactionLocation_' + transactionCount, transactionLocation);
    }

    if (historyTable) {
        historyTable.innerHTML = transactionHistoryHTML;
        // Add fade-in animation to the table
        historyTable.classList.add('fade-in');
    } else {
        console.error("Transaction history table element not found.");
    }
});

// JavaScript for smooth scrolling to top
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}
