//make new mentor
(function () {
    
    console.log("top of program");
    function Mentor(first_name, last_name, e_mail, phone, location, age_range, interaction, bio, interests) {
        this.first_name = first_name;
        this.last_name = last_name;
        this.e_mail = e_mail;
        this.phone = phone;
        this.location = location;
        this.age_range = age_range;
        this.interaction = interaction;
        this.bio = bio;
        this.interests = interests; 
    }

    //make new mentee
    function Mentee(first_name, last_name, e_mail, interaction, age_range, phone, interests, location) {
        this.first_name = first_name;
        this.last_name = last_name;
        this.e_mail = e_mail;
        this.interaction = interaction;
        this.age_range = age_range;
        this.phone = phone;
        this.interests = interests;
        this.location = location;
        this.mentors = [];
    }

    var mentor_list = [];
    var mentee_list = [];

    var mentee1 = new Mentee("Jane", "Smith", "jsmith@gmail.com", "Any", "University", "135-932-1392", ["Technology", "Graphics",               "Engineering"], "078");

    var mentee2 = new Mentee("Samantha", "Caby", "scaby@seas.upenn.edu", "In Person", "High School", "928-283-681", ["Marketing", "Technology", "Graphics"], "100");

    var mentor1 = new Mentor("Anvita", "Achar", "anvitaa@seas.upenn.edu", "923-192-8530", "191", "University", "In Person", "YAY FOR PROGRAMMING!", ["Business", "Graphics", "Technology"]);

    var mentor2 = new Mentor("Natasha", "Narang", "nnarang@seas.upenn.edu", "730-293-5829", "100", "University", "Any", "I'm super cool! #Bloomberg", ["Engineering", "Business", "Graphics"]);

    var mentor3 = new Mentor("Summer", "Yue", "yyue@seas.upenn.edu", "201-293-5984", "191", "High School", "Phone", "I like business and food and programming woo", ["Graphics", "Marketing", "Technology"]);


    mentee_list.push(mentee1);
    mentee_list.push(mentee2);

    mentor_list.push(mentor1);
    mentor_list.push(mentor2);
    mentor_list.push(mentor3);

    //match mentor and mentee
    function match() {
        for (var i = 0; i < mentee_list.length; i++){
            //filter by type of interaction they are looking for
            mentee[i].mentors = filter(mentor_list, mentee[i].interaction); 
            for( var j = 0; j < mentee[i].mentors.length; j++){
                //if the mentor and mentee have less than 2 things in common - remove them from the potential mentor list
                if(checkInterests(mentee[i], mentor[j]) < 2){
                    mentee.mentors.splice(j, j+1); 
                }
            } 
        }
    }

    //compares the interest lists of a mentor & mentee and record the number they have in common
    function checkInterests(mentor, mentee){
        var mentee_int = mentee.interests;
        var mentor_int = mentor.interests;
        var similar = 0; 
        for(var i = 0; i < mentee_int.length; i++){
            for(var j = 0; j < mentor_int.length; j++){
                if(mentee_int[i].equals(mentor_int[j])){
                   similar++; 
                }
            }   
        } 
        return similar;
    }

    //returns a list of mentors that are interested in the same type of interaction as the mentee is
    function filter(mentor_list, inter){
        var new_mentor_list = []; 
        for(var i = 0; i < mentor_list; i++){
            //if its the same or the mentor wants any type of interaction add them to the mentor list
            if(mentor_list[i].interaction.equals(inter) || mentor_list[i].interaction.equals("Any")){
                new_mentor_list.push(mentor_list[i]); 
            }
        }
        //check for people close to the mentee --> ANVITA!
        return new_mentor_list; 
    }
}); 