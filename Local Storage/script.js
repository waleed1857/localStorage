let myContent = document.getElementById("content");

// Data to be stored:
let Data = {
    name: 'Waleed',
    age: 19,
    class: 13
}

// 1st: converting to JSON format:
let json_data = JSON.stringify(Data);

// 2nd: Storing to local storage:
let store_data = localStorage.setItem("Student", json_data);

// 3rd View
myContent.innerHTML += `<p>JSON form data stored in local storage: ${json_data}</p>`
myContent.innerHTML += `<p>Name: ${Data.name}</p>`
myContent.innerHTML += `<p>Age: ${Data.age}</p>`
myContent.innerHTML += `<p>Class: ${Data.class}</p>`
console.log("JSON form data stored in local storage:\n ", json_data);

// // 4th (optional) converting to normal format:
// let object_data = JSON.parse('json_data');
// console.log("Object form data stored in local storage:\n ", object_data);