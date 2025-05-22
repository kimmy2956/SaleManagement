const saleForm = document.getElementById('sale-form');
const salesTableBody = document.querySelector('#sales-table tbody');
const totalSalesElem = document.getElementById('total-sales');

let sales = [];

function renderSales() {
    salesTableBody.innerHTML = '';
    let total = 0;
    sales.forEach(({product, quantity, price}) => {
        const row = document.createElement('tr');
        const totalPrice = quantity * price;
        total += totalPrice;

        row.innerHTML = `
            <td>${product}</td>
            <td>${quantity}</td>
            <td>${price.toFixed(2)}</td>
            <td>${totalPrice.toFixed(2)}</td>
        `;
        salesTableBody.appendChild(row);
    });
    totalSalesElem.textContent = `ยอดขายรวม: ${total.toFixed(2)} บาท`;
}

saleForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const product = saleForm.product.value.trim();
    const quantity = parseInt(saleForm.quantity.value);
    const price = parseFloat(saleForm.price.value);

    if(product && quantity > 0 && price >= 0) {
        sales.push({product, quantity, price});
        renderSales();
        saleForm.reset();
    }
});