
var firebaseConfig = {
      apiKey: "AIzaSyCTfnpkFBudBwoE6sdi1a4vrTOk9eJCnEE",
      authDomain: "kwitter-4f0cd.firebaseapp.com",
      databaseURL: "https://kwitter-4f0cd-default-rtdb.firebaseio.com",
      projectId: "kwitter-4f0cd",
      storageBucket: "kwitter-4f0cd.appspot.com",
      messagingSenderId: "300205233966",
      appId: "1:300205233966:web:2f157cc23c63ee21738cbf"
    };
    
    firebase.initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
