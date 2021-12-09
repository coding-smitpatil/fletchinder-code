//YOUR FIREBASE LINKS
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
roomname=localStorage.getItem("roomname");
document.getElementById("ttt").innerHTML="welcome to " + roomname ;
function send() {
      msg=document.getElementById('msg').value;
      firebase.database().ref(roomname).push({
            name:username,
            message:msg,
            like:0
      });
      getData();
      document.getElementById("msg").value=""
}
function getData() { firebase.database().ref("/"+roomname).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
name= message_data["name"];
message = message_data["message"];
like=message_data["like"];

nametag="<h4> "+name+"<img class='user_tick' src='tick.png'></h4>";
messagetag="<h4 class='message_h4'>"+message+"</h4>";
likebutton="<button class='btn btn-warning' id="+firebase_message_id+"value="+like+"onclick='updatedlike(thisid)'>";
spantag="<span class='glyphicon glyphicon-thumbs-up '>like: "+like+"</span> </button><hr>";
row=nametag+messagetag+likebutton+spantag;
document.getElementById("output").innerHTML+=row;
//End code
      } });  }); }
getData();

function logout()
{
      localStorage.removeItem("username");
      localStorage.removeItem("roomname");
      window.location="index.html";
}

function updatedlike(message_id){
      console.log("clicked on like button - " + message_id);
       button_id=message_id;
       likes=document.getElementById(button_id).value;
       updatedlike=Number(likes)+1;
       firebase.database().ref(roomname).child(message_id).update({
             like : updatedlike

       });
}
