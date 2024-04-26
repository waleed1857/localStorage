
let myContent = document.getElementById("content");
let myName = document.getElementById("myName");
let myAge = document.getElementById("myAge");
let myClass = document.getElementById("myClass");
let bTn = document.getElementById("bTn");

// Function to display student data
function displayStudentData(studentData) {
    myContent.innerHTML = ""; // Clear previous content
    studentData.forEach(student => {
        myContent.innerHTML += `
        <div>
            <h2>Details:-</h2>
            <p>Name: ${student.name}</p>
            <p>Age: ${student.age}</p>
            <p>Class: ${student.class}</p>
        </div>`;
    });
}

// Load existing data from local storage on page load
window.addEventListener('load', function() {
    let storedData = localStorage.getItem("StudentData");
    if (storedData) {
        let studentData = JSON.parse(storedData);
        displayStudentData(studentData);
    }
});

// Event listener for the button click
bTn.addEventListener("click", function() {
    // Create new student object
    let newStudent = {
        name: myName.value,
        age: myAge.value,
        class: myClass.value
    };

    // Retrieve existing student data from local storage
    let studentData = JSON.parse(localStorage.getItem("StudentData")) || [];

    // Push new student object into the array
    studentData.push(newStudent);

    // Save updated student data to local storage
    localStorage.setItem("StudentData", JSON.stringify(studentData));

    // Display all student data
    displayStudentData(studentData);
    console.log("Retrieved data: ",localStorage.getItem("StudentData",newStudent));
    console.log("Retrieved data: ",localStorage.getItem("StudentData",studentData[0]));
});














/*
let myContent = document.getElementById("content");
let myName = document.getElementById("myName");
let myAge = document.getElementById("myAge");
let myClass = document.getElementById("myClass");
let bTn = document.getElementById("bTn");
bTn.addEventListener("click",function(){

    // Data to be stored:
    let studentData = [];
    let Data = {
    name: myName.value,
    age: myAge.value,
    class: myClass.value
}
studentData.push(Data);

// forEach method to looping over items
studentData.forEach((product) => {

    // InnerHtml to edit with Js
    myContent.innerHTML += `
    <div>
    <h2>Details:-</h2>
    <p>Name: ${product.name}</p>
    <p>Age: ${product.age}</p>
    <p>Class: ${product.class}</p>
</div>`  
});





// 1st: converting to JSON format:
let json_data = JSON.stringify(Data);

// 2nd: Storing to local storage:
let store_data = localStorage.setItem("Student", json_data);

// 3rd converting to normal format:
let object_data = JSON.parse(json_data);
console.log("Object form data stored in local storage:\n ", object_data);

// 4th View
myContent.innerHTML += `<p>JSON form data stored in local storage: ${json_data}</p>`
myContent.innerHTML += `<p>Name: ${object_data.name}</p>`
myContent.innerHTML += `<p>Age: ${object_data.age}</p>`
myContent.innerHTML += `<p>Class: ${object_data.class}</p>`
*/
