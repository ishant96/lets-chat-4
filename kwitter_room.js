  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyBMb411mssaOg2cYHEzdpHAbOMZLqvtHmk",
    authDomain: "class-test-7627e.firebaseapp.com",
    databaseURL: "https://class-test-7627e-default-rtdb.firebaseio.com",
    projectId: "class-test-7627e",
    storageBucket: "class-test-7627e.appspot.com",
    messagingSenderId: "43145419979",
    appId: "1:43145419979:web:2e83c42ca48fc859250f4e"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);



user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";
function addRoom() {
  room_name = document.getElementById("room_name").value;
  firebase.database().ref("/").child(room_name).update({ purpose: "adding room name" });
  localStorage.setItem("room_name", room_name);
  window.location = "kwitter_page.html";
}

function getData() {
  firebase.database().ref("/").on('value', function (snapshot) {
    document.getElementById("output").innerHTML = ""; snapshot.forEach(function (childSnapshot) {
      childKey = childSnapshot.key;
      Room_names = childKey;
      console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id=" + Room_names + " onclick='redirectToRoomName(this.id)' >#" + Room_names + "</div><hr>";
      document.getElementById("output").innerHTML += row;
    });
  });
} getData();

function redirectToRoomName(name) {
  console.log(name);
  localStorage.setItem("room_name", name);
  window.location = "kwitter_page.html";
}

function logout() {
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
  window.location = "index.html";
}