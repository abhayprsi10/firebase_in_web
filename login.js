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

  // show("abhay@gmail.com");

  function show(email) 
  {
    return new Promise((resolve, reject) => {
      const docs = firebase.database().ref("contactform/subscribers");
  
      docs.on('value', function(snapshot) 
      {
        snapshot.forEach(function(childSnapshot) 
        {
          if (email === childSnapshot.val().email) 
          {
            // console.log("Registered");
            // showmsg();
            resolve(true); // Resolve the Promise if email is found.
          }
        });
        // If the loop finishes without finding the email, resolve with false.
        resolve(false);
      });
    });
  }
  
  
  
  function showmsg() {
    var docs = firebase.database().ref("contactform/formdata");
    
    var newhtml = `
      <div class="content"> 
        <h1 style="color:#666">User messages are :</h1>
    `;
    
    var innhtml = "";
  
    // console.log("User Messages are:\n");
  
    docs.on('value', function(snapshot) {
      snapshot.forEach(function(childSnapshot) {
        var name = childSnapshot.val().name;
        var msg = childSnapshot.val().msg;
        
        innhtml += `
          <br>  
          <p style="color:#1BC23C">Name : ${name}</p>
          <p style="color:#666">Message : ${msg}</p> 
          
        `;
  
        // console.log("name : " + name + "\n" + "msg : " + msg + "\n");
      });
  
      // Set the innerHTML after all data has been processed
      newhtml += innhtml + `
        <button class="btn" id="usermsg" onclick="prevhtml()">Go back</button>
      </div>
      `;
      
      // console.log(newhtml);
      document.getElementById("loginpage").innerHTML = newhtml;
    });
  }
  

function goshowuserdata()
{
   var emailid=prompt("enter your email");
  //  console.log(emailid);
  
  show(emailid).then((result) => {
    if (result) 
    {
      // console.log("Email exists.");
      showmsg();
    } 
    else 
    {
      alert("Yor are not registered !!");
    }
  });
}


function prevhtml()
{
  // console.log("runned");
  document.getElementById("loginpage").innerHTML =
  `
        <div class="content">
            <h1 style="color:#666">Check user messages</h1>
            <button class="btn" id="usermsg" onclick="goshowuserdata()">Check</button>
        </div>
  `;
}