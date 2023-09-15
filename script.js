
// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyClghnsp-5KFUViaoLkBPoYrcUMgZv_fRE",
    authDomain: "mutlipages-web.firebaseapp.com",
    databaseURL: "https://mutlipages-web-default-rtdb.firebaseio.com",
    projectId: "mutlipages-web",
    storageBucket: "mutlipages-web.appspot.com",
    messagingSenderId: "895106050067",
    appId: "1:895106050067:web:a2962cf1b818cacf44b7e6"
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  
var subsdb = firebase.database().ref("contactform").child("subscribers");
  

document.getElementById("subscribers").addEventListener("submit",submitsubs);

function submitsubs(e){

  e.preventDefault();
  
  var emailid=geteleval("subsemailid");
  
  // console.log("chala h");

  savesubs(emailid);

  alert("subscribed");

  document.getElementById("subscribers").reset();
};

const savesubs= (emailid) => {
  var newsubs= subsdb.push();

  newsubs.set(
     {
         email : emailid,
     }
  );
};


const geteleval = (id) => {
    return document.getElementById(id).value;
  };

  
$(document).ready(function(){
    
    $('#menu').click(function(){
        $(this).toggleClass('fa-times');
        $('.navbar').toggleClass('nav-toggle');
    });

    $(window).on('load scroll',function(){
        $('#menu').removeClass('fa-times');
        $('.navbar').removeClass('nav-toggle');
    })
    
});