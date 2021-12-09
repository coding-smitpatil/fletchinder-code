var firebaseConfig = {
      apiKey: "AIzaSyDtnDgEywiL2rL-67QZ2VW2Qoj76-eYYjI",
      authDomain: "deletetest-132c7.firebaseapp.com",
      databaseURL: "https://deletetest-132c7-default-rtdb.firebaseio.com",
      projectId: "deletetest-132c7",
      storageBucket: "deletetest-132c7.appspot.com",
      messagingSenderId: "251442731867",
      appId: "1:251442731867:web:eb8dd0bdc2ec1bb2dd187e"
    };
    
    
      firebase.initializeApp(firebaseConfig);


username=localStorage.getItem("username");
document.getElementById("username").innerHTML="welcome"+username;
function addroom(){
      roomname=document.getElementById("roomname").value;
      firebase.database().ref("/").child(roomname).update({
            purpose:"addnameroom"
      });
      localStorage.setItem("roomname",roomname);
      window.location="kwitter_room.html"
}
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      row = "<div class='room_name' id="+Room_names+" onclick='redirectto(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML+=row;
      //End code
      });});}
getData();
function redirectto(name){
      localStorage.setItem("roomname",name);
      window.location="kwitter_page.html";
}

function logout()
{
      localStorage.removeItem("username");
      localStorage.removeItem("roomname");
      window.location="index.html";
}