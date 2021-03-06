//make new mentor    
    function Mentor(first_name, last_name, e_mail, phone, zip, age_range, interaction, interests, bio, grad, school) {
        this.first_name = first_name;
        this.last_name = last_name;
        this.e_mail = e_mail;
        this.phone = phone;
        this.zip = (zip.charAt(0).concat(zip.charAt(1))).concat(zip.charAt(2));
        this.age_range = age_range;
        this.interaction = interaction;
        this.interests = interests; 
        this.bio = bio;
        this.score = 0; 
        this.distance = 0; 
        this.grad = grad;
        this.school = school; 
        this.zip_score = 0; 
    }

    //make new mentee
    function Mentee(first_name, last_name, e_mail, phone, zip, age_range, interaction, interests) {
        this.first_name = first_name;
        this.last_name = last_name;
        this.e_mail = e_mail;
        this.phone = phone;
        this.zip = zip;
        this.age_range = age_range;
        this.interaction = interaction;
        this.interests = interests;
        this.mentors = [];  
    }

    var mentor_list = [];

    
    var mentor1 = new Mentor("Anvita", "Achar", "anvitaa@seas.upenn.edu", "923-192-8530", "191", ["High School", "University"], "In Person", 
        ["Engineering", "Graphics", "Technology"], "YAY FOR PROGRAMMING!");

    var mentor2 = new Mentor("Natasha", "Narang", "nnarang@seas.upenn.edu", "730-293-5829", 
        "100", ["University"], ["Phone", "In Person"], ["Technology", "Business", "Graphics"], "I'm super cool! #Bloomberg");

    var mentor3 = new Mentor("Summer", "Yue", "yyue@seas.upenn.edu", "201-293-5984", "191", 
        ["University","High School"], ["Phone"], ["Graphics", "Marketing", "Technology"], "I like business and food and programming woo");

    var mentor4 = new Mentor("Sammi", "Caby", "scaby@seas.upenn.edu", "973-294-2055", "078", ["University"], ["In Person"],
    ["Graphics", "Social Sciences", "Technology"], "#swag"); 

    mentor_list.push(mentor1);
    mentor_list.push(mentor2);
    mentor_list.push(mentor3);
    mentor_list.push(mentor4); 
    

    //match mentor and mentee
    function match(ment) {
        var mentee = ment; 
        //filter by type of interaction they are looking for
        mentee.mentors = checkInteraction(mentor_list, mentee.interaction, mentee); 
        for(var i = 0; i < mentee.mentors.length; i++){
            if(!checkAge(mentee.mentors[i], mentee.age_range)){
                mentee.mentors.splice(i,i+1); 
            }
        }
        for( var j = 0; j < mentee.mentors.length; j++){
            var curr_mentor = mentee.mentors[j]
            curr_mentor.score += checkInterests(mentee, curr_mentor);
        } 
    return mentee.mentors; 
    }

    //compares the interest lists of a mentor & mentee and returns a score based on 
    //how much they have in common 
    function checkInterests(mentee, mentor){
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
    function checkInteraction(mentor_list, inter, ment){
        var mentee = ment; 
        var interact = inter; 
        var new_mentor_list = []; 
        if(inter.length > 1){
            new_mentor_list = mentor_list;
            filter_by_zip(new_mentor_list, mentee); 
        }
        else{
            for(var i = 0; i < mentor_list.length; i++){

                var curr = mentor_list[i]; 
                //if its the same or the mentor wants any type of interaction add them to the mentor list
                if(curr.interaction[0] === (interact) || mentor_list[i].interaction.length > 1){
                    new_mentor_list.push(mentor_list[i]); 
                }
            }
            if(interact === "In Person"){
                filter_by_zip(new_mentor_list, mentee); 
            }
        }
        //check for people close to the mentee --> ANVITA!
        return new_mentor_list; 
    }

    function checkAge(mentor, age){
        var check_mentor = mentor; 
        var age_list = check_mentor.age_range; 
        for(var i = 0; i < age_list.length; i++){
            if(age_list[i] === age){
                return true; 
            }
        }
        return false; 

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


   function filter_by_zip (mentor_list, mentee) {
        for (var i = 0; i < mentor_list.length; i++) {
            //orders mentors according to how close they are
            if (Math.abs(mentee.zip - (mentor_list[i].zip)) >= 0 && Math.abs(mentee.zip - (mentor_list[i].zip)) <= 20)
                {mentor_list[i].zip_score = + 150} else  
            {mentor_list[i].zip_score = Math.abs(mentee.zip - (mentor_list[i].zip));} 

        }
    }
  function recalc_zip_score(mentor_list) {
        for (var i = 0; i < mentor_list.length; i++) {
            mentor_list[i].score = Math.abs(mentor_list[i].score - mentor_list[i].zip_score);
        }
}
    //returns the mentors with the top 3 scores
    function getMentors(ment){
        mentee = ment;
        match(mentee); 
        var mentors = mentee.mentors; 
        recalc_zip_score(mentors);
        var good_mentors = [];
        if(mentors.length < 3)
            good_mentors = mentee.mentors; 
        else{
            mentors = qsort(mentors); 
            for(var i = 0; i < 3; i++){
                good_mentors.push(mentors[i]); 
            }
        } 
        return good_mentors; 
    }

    var mentee = new Mentee("Jane", "Smith", "jsmith@gmail.com", "135-932-1392", "078", "University",  ["Phone", "In Person"], 
        ["Technology", "Graphics","Engineering"]);
    var matched_mentors = getMentors(mentee); 










