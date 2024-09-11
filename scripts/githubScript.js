// scripts/page1Script.js

// Test Firebase initialization on this page
testFirebase();  // Ensure this function exists in firebase.js

// Example: Adding a document to Firestore from Page 1
const db = firebase.firestore();

function insertItem() {
    db.collection("testCollection").add({
        message: "insert item by insertItem fun"
    }).then(() => {
        console.log("insert item to the firebase successfull");
    }).catch((error) => {
        console.error("Error writing document: ", error);
    });
}




// Function to get and render the testCollection data
function getAndRenderMessages() {
    db.collection("testCollection").get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            // Each document in the testCollection
            const data = doc.data();
            const message = data.message;

            // Create an HTML list item to display the message
            const listItem = document.createElement('li');
            listItem.textContent = message;

            // Append the list item to the message list
            messageList.appendChild(listItem);
        });
    }).catch((error) => {
        console.error("Error getting documents: ", error);
    });
}

const messageList = document.getElementById('message-list');
// Call the function to fetch and render the data
getAndRenderMessages();

// data addition

const addBtn = document.querySelector('#add-item');
addBtn.addEventListener('click', insertItem)