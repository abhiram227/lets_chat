
//ADD YOUR FIREBASE LINKS HERE
  // Your web app's Firebase configuration
  var firebaseConfig = {
      apiKey: "AIzaSyBbDpBywYdu6IF-kEHeIfanm5ZOXiTTCCk",
      authDomain: "kwitter-f07f1.firebaseapp.com",
      databaseURL: "https://kwitter-f07f1-default-rtdb.firebaseio.com",
      projectId: "kwitter-f07f1",
      storageBucket: "kwitter-f07f1.appspot.com",
      messagingSenderId: "233796238565",
      appId: "1:233796238565:web:296adbd878cadd64a2e80c"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
