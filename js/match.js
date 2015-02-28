//make new mentor    
    function Mentor(first_name, last_name, e_mail, phone, zip, age_range, interaction, interests, bio, grad, school) {
        this.first_name = first_name;
        this.last_name = last_name;
        this.e_mail = e_mail;
        this.phone = phone;
        this.zip = zip;
        this.age_range = age_range;
        this.interaction = interaction;
        this.interests = interests; 
        this.bio = bio;
        this.score = 0; 
        this.distance = 0; 
        this.grad = grad;
        this.school = school; 
    }

    //make new mentee
    function Mentee(first_name, last_name, e_mail, phone, zip, age_range, interaction, interests) {
        this.first_name = first_name;
        this.last_name = last_name;
        this.e_mail = e_mail;
        this.phone = phone;
        this.zip = location;
        this.age_range = age_range;
        this.interaction = interaction;
        this.interests = interests;
        this.mentors = [];  
    }

    var mentor_list = [];

    var mentee = new Mentee("Jane", "Smith", "jsmith@gmail.com", "135-932-1392", "078", "University",  "Any", 
        ["Technology", "Graphics","Engineering"]);
    
    var mentor1 = new Mentor("Anvita", "Achar", "anvitaa@seas.upenn.edu", "923-192-8530", "191", "University", "In Person", 
        ["Engineering", "Graphics", "Technology"], "YAY FOR PROGRAMMING!");

    var mentor2 = new Mentor("Natasha", "Narang", "nnarang@seas.upenn.edu", "730-293-5829", 
        "100", "University", "Any", ["Marketing", "Business", "Graphics"], "I'm super cool! #Bloomberg");

    var mentor3 = new Mentor("Summer", "Yue", "yyue@seas.upenn.edu", "201-293-5984", "191", 
        "High School", "Phone", ["Graphics", "Marketing", "Technology"], "I like business and food and programming woo");

    mentor_list.push(mentor1);
    mentor_list.push(mentor2);
    mentor_list.push(mentor3);
    

    //match mentor and mentee
    function match() {
            //filter by type of interaction they are looking for
            mentee.mentors = filter(mentor_list, mentee.interaction); 
            for( var j = 0; j < mentee.mentors.length; j++){
                //if the mentor and mentee have less than 2 things in common - remove them from the potential mentor list
                var curr_mentor = mentee.mentors[j]
                curr_mentor.score = checkInterests(mentee, curr_mentor); 
            } 
        return mentee.mentors; 
    }

    //compares the interest lists of a mentor & mentee and returns a score based on 
    //how much they have in common 
    function checkInterests(mentor, mentee){
        var mentee_int = mentee.interests;
        var mentor_int = mentor.interests;
        var similar = 0; 
        for(var i = 0; i < mentee_int.length; i++){
            for(var j = 0; j < mentor_int.length; j++){
                if(mentee_int[i] === (mentor_int[j])){
                   similar++; 
                }
            }   
        }
        if(similar === 0) return 1; 
        else if(similar === 1) return 10; 
        else if(similar === 2) return 20;
        else return 30; 
    }

    //returns a list of mentors that are interested in the same type of interaction as the mentee is
    function filter(mentor_list, inter){
        var interact = inter; 
        var new_mentor_list = []; 
        if(inter === "Any"){
            new_mentor_list = mentor_list;
        }
        else{
            for(var i = 0; i < mentor_list.length; i++){
                var curr = mentor_list[i]; 
                //if its the same or the mentor wants any type of interaction add them to the mentor list
                if(curr.interaction === (interact) || curr.interaction === "Any"){
                    new_mentor_list.push(mentor_list[i]); 
                }
            }
        }
        //check for people close to the mentee --> ANVITA!
        return new_mentor_list; 
    }

 function qsort(a) {
    if (a.length == 0) return [];
 
    var left = [];
    var right = [];
    var pivot = a[0];
 
    for (var i = 1; i < a.length; i++) {
        a[i].score > pivot.score ? left.push(a[i]) : right.push(a[i]);
    }
 
    return qsort(left).concat(pivot, qsort(right));
}

    //returns the mentors with the top 3 scores
    function getMentors(){
        match(); 
        var mentors = mentee.mentors; 
        //var max = mentors[0]; 
        var good_mentors = [];
        if(mentors.length < 3)
            return mentee.mentors; 
        else{
            mentors = qsort(mentors); 

            for(var i = 0; i < 3; i++){
                good_mentors.push(mentors[i]); 
                console.log("name  = " + good_mentors[i].first_name + " score = " + good_mentors[i].score);
            }
        }
    }
    getMentors(); 









