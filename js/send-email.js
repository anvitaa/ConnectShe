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
    params["message"]["html"] = document.getElementById("EmailContent").innerHTML;
    user_email = "yyue@wharton.upenn.edu"; //this is the client email
    params["message"]["to"][0]["email"] = user_email;
    m.messages.send(params, function(res) {
        log(res);
    }, function(err) {
        log(err);
    });
}