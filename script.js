function highlight() {
    // Get all elements with the <strong> tag
    const boldElements = document.getElementsByTagName('strong');
    
    // Loop through each bold element and change its color to green
    for (let i = 0; i < boldElements.length; i++) {
        boldElements[i].style.color = 'green';
    }
}

function return_normal() {
    // Get all elements with the <strong> tag
    const boldElements = document.getElementsByTagName('strong');
    
    // Loop through each bold element and change its color back to black
    for (let i = 0; i < boldElements.length; i++) {
        boldElements[i].style.color = 'black';
    }
}