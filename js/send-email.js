// Create a function to log the response from the Mandrill API
function log(obj) {
    console.log(JSON.stringify(obj));
    document.getElementById("email").setAttribute("value","Email sent!");
    document.getElementById("email").setAttribute("onclick","");
}

// create a new instance of the Mandrill class with your API key
var m = new mandrill.Mandrill('664MdZ32dLQb8icEJxp4jw');
var url = "";
var directionsHTML = "";

function encodedImageUrl(eurl) {
    console.log("Static Image URL: "+eurl);
    url += eurl;
}

function addDirections (dir) {
    directionsHTML += dir;
}
// create a variable for the API call parameters
var params = {
    "message": {
        "from_email":"yutingyue514@gmail.com",
        "to":[{"email": ""}],
        "subject": "Connectshe",
        "html": "",
        "auto_text": "null",
    }
};

function sendTheMail() {
    displayResults();
    params["message"]["html"] = document.getElementById("EmailContent").innerHTML;
    user_email = "yyue@wharton.upenn.edu"; //this is the client email
    params["message"]["to"][0]["email"] = user_email;
    m.messages.send(params, function(res) {
        log(res);
    }, function(err) {
        log(err);
    });
}

function displayResults() {
          //mentor1 = [];
          //mentor1.first_name = "test";
          document.getElementById('m1fn').innerHTML = "lalala";
          /*document.getElementById('m1ln').innerHTML = mentor1.last_name;
          document.getElementById('m1em').innerHTML = mentor1.e_mail;
          document.getElementById('m1pn').innerHTML = mentor1.phone;
          document.getElementById('m1zi').innerHTML = mentor1.zip;
          document.getElementById('m1el').innerHTML = mentor1.age_range;
          document.getElementById('m1ir').innerHTML = mentor1.interaction;
          document.getElementById('m1bi').innerHTML = mentor1.bio;
          document.getElementById('m1in').innerHTML = mentor1.interests;

          document.getElementById('m2fn').innerHTML = mentor2.first_name;
          document.getElementById('m2ln').innerHTML = mentor2.last_name;
          document.getElementById('m2em').innerHTML = mentor2.e_mail;
          document.getElementById('m2pn').innerHTML = mentor2.phone;
          document.getElementById('m2zi').innerHTML = mentor2.zip;
          document.getElementById('m2el').innerHTML = mentor2.age_range;
          document.getElementById('m2ir').innerHTML = mentor2.interaction;
          document.getElementById('m2bi').innerHTML = mentor2.bio;
          document.getElementById('m2in').innerHTML = mentor2.interests; 

          document.getElementById('m3fn').innerHTML = mentor3.first_name;
          document.getElementById('m3ln').innerHTML = mentor3.last_name;
          document.getElementById('m3em').innerHTML = mentor3.e_mail;
          document.getElementById('m3pn').innerHTML = mentor3.phone;
          document.getElementById('m3zi').innerHTML = mentor3.zip;
          document.getElementById('m3el').innerHTML = mentor3.age_range;
          document.getElementById('m3ir').innerHTML = mentor3.interaction;
          document.getElementById('m3bi').innerHTML = mentor3.bio;
          document.getElementById('m3in').innerHTML = mentor3.interests; */

}
