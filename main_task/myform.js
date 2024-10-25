// Create an HTML file called myjsform.html.
// Add a form to the body with the following inputs: first_name,last_name and email.
// Add a submit button.
// Ensure you have the relevant attributes i.e name and id in the input tags.

// Create a script file called myform.js and capture the form inputs entered above
// and put them in a table as the image indicated.

// Get the form element by its ID 'userForm'
let form = document.getElementById('userForm');

// Get the table body where new rows will be added
let table = document.getElementById('dataTable');

// Add an event listener to the form to handle the 'submit' event
form.addEventListener('submit', function (event) {
    // Prevent the default form submission behavior (which would refresh the page)
    event.preventDefault();

    // Capture the values from the form inputs using their IDs
    let firstName = document.getElementById('first_name').value;
    let lastName = document.getElementById('last_name').value;
    let email = document.getElementById('email').value;

    if (firstName.length === 0 || lastName.length === 0 || email.length === 0) {
        alert("Please fill all the fields");
        //document.getElementById('error').innerHTML="Insert All Fields."
    } else {
        // Insert a new row at the end of the table
        let newRow = table.insertRow();

        // Insert cells into the newly created row
        let cell1 = newRow.insertCell(0); // First cell for the First Name
        let cell2 = newRow.insertCell(1); // Second cell for the Last Name
        let cell3 = newRow.insertCell(2); // Third cell for the Email

        // Set the text content of each cell with the corresponding form value
        cell1.textContent = firstName;
        cell2.textContent = lastName;
        cell3.textContent = email;

        // Reset the form inputs to clear the form after submission
        form.reset();
    }
    /* // Insert a new row at the end of the table
     let newRow = table.insertRow();
 
     // Insert cells into the newly created row
     let cell1 = newRow.insertCell(0); // First cell for the First Name
     let cell2 = newRow.insertCell(1); // Second cell for the Last Name
     let cell3 = newRow.insertCell(2); // Third cell for the Email
 
     // Set the text content of each cell with the corresponding form value
     cell1.textContent = firstName;
     cell2.textContent = lastName;
     cell3.textContent = email;
 
     // Reset the form inputs to clear the form after submission
     form.reset();*/
});

