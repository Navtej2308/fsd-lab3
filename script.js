// Function to change text using innerHTML
function changeText() {
    document.getElementById("heading").innerHTML = "Text has been changed!";
}

// Function to change CSS properties (color and position)
function changeCSS() {
    const para = document.getElementById("para");
    para.style.color = "green";
    para.style.left = "500px";  // Move it further to the right
    para.style.top = "200px";   // Move it down

    const heading=document.getElementById("heading")
    heading.style.color = "green";
}

// Function to change the image source when clicking a button
function changeImage() {
    document.getElementById("image").src = "image2.jpeg";  // Ensure image2.jpg is available
    console.log("hello")
}

// Function to add a text node to a parent node
function addText() {
    const container = document.getElementById("container");
    const newText = document.createTextNode("This is newly added text.");
    container.appendChild(newText);
}

// Function to delete a node (paragraph)
function deleteNode() {
    const para = document.getElementById("para");
    if (para) {
        para.parentNode.removeChild(para);
    }
}
