document.addEventListener('DOMContentLoaded', function() {
    const tableContainer = document.getElementById('table-container');
    const saveBtn = document.getElementById('save-btn');
    let jsonData; // Variable to store fetched JSON data
    let editableData; // Variable to store the editable data

    // Fetch JSON data from external file
    fetch('index.json')
        .then(response => response.json())
        .then(data => {
            jsonData = data;
            editableData = JSON.parse(JSON.stringify(jsonData)); // Make a copy of the JSON data
            createTable(editableData); // Populate the table with fetched data
        })
        .catch(error => console.error('Error fetching JSON:', error));

    // Function to create and populate the table
    function createTable(data) {
        const table = document.createElement('table');
        const tbody = document.createElement('tbody');

        Object.entries(data).forEach(([key, value]) => {
            const tr = document.createElement('tr');
            const tdKey = document.createElement('td');
            const tdValue = document.createElement('td');
            const inputField = document.createElement('input');

            tdKey.textContent = key;
            inputField.value = value;

            // Add event listener to update the editableData object when input field changes
            inputField.addEventListener('input', function() {
                editableData[key] = this.value;
            });

            tdValue.appendChild(inputField);
            tr.appendChild(tdKey);
            tr.appendChild(tdValue);
            tbody.appendChild(tr);
        });

        table.appendChild(tbody);
        tableContainer.appendChild(table);
    }

    // Event listener for saving changes
    saveBtn.addEventListener('click', function() {
        // Save the edited data back to JSON format
        const jsonDataString = JSON.stringify(editableData, null, 2); // Convert to JSON string with indentation
        console.log(jsonDataString); // Output JSON data to console (you can modify this to save to a file or server)
    });
});
