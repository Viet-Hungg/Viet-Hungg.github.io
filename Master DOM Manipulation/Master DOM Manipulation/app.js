// DOM Manipulation
document.addEventListener('DOMContentLoaded', function () {  
    // Get the sports list by ID (parent element)  
    const sportsList = document.getElementById('sports');  
    sportsList.addEventListener('click', function (event) {  
        // Verify that the click target is an <li> element  
        if (event.target.tagName === 'LI') {  
            // Perform DOM Manipulation  
            // Reset previous highlights (removing background color)  
            const items = sportsList.getElementsByTagName('li');  
            for (let item of items) {  
                item.style.backgroundColor = ''; // Clear background  
            }  
            
            // Highlight the selected sport  
            event.target.style.backgroundColor = 'rgba(255, 255, 255, 0.3)'; // Light highlight  
            
            // Display a message in a modal-like alert  
            alert(`You selected ${event.target.textContent}`);  
        }  
    });  
}); 
