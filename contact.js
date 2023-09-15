 
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


  //reference for database for form data
  var contactformdb = firebase.database().ref("contactform").child("formdata");
  

  document.getElementById("contactform").addEventListener("submit",submitform);

  function submitform(e){

    e.preventDefault();

    var name=geteleval("fname");
    var emailid=geteleval("femailid");
    var msg=geteleval("fmsg");
    var password=geteleval("fpassword");
    
    // console.log("chala h");

    savemsg(name,emailid,password,msg);

    alert("message sent");

    document.getElementById("contactform").reset();
  };

  const savemsg= (name,emailid,password,msg) => {
         var newcontacform= contactformdb.push();

         newcontacform.set(
            {
                name : name,
                email : emailid,
                password : password,
                msg : msg,
            }
         );
  };


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

