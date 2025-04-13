// chart.js

// Function to load the chart items from local storage
function loadChart() {
    const chartItems = JSON.parse(localStorage.getItem('chartItems')) || [];
    const chartTableBody = document.querySelector('#chartTable tbody');

    // Clear existing rows
    chartTableBody.innerHTML = '';

    // Add each item to the table
    chartItems.forEach(item => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${item.name}</td>
            <td>${item.protein}</td>
            <td>${item.price}</td>
            <td>${item.notes}</td>
        `;
        chartTableBody.appendChild(row);
    });
}

// Function to clear the chart
function clearChart() {
    localStorage.removeItem('chartItems');
    loadChart();
}

// Load the chart items when the page loads
document.addEventListener('DOMContentLoaded', loadChart);
function clearChart() {
    const tableBody = document.querySelector('#chartTable tbody');
    tableBody.innerHTML = ''; // Clear the table body

    // Check if there are any items in the table
    if (tableBody.children.length === 0) {
        document.getElementById('noItemsMessage').style.display = 'block'; // Show message
    } else {
        document.getElementById('noItemsMessage').style.display = 'none'; // Hide message
    }
}