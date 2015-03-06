var bio ={
	"name":"Myself great", 
	"role":"Great role",
	"welcomeMessage":"It is a good day to work",
	"contacts": {
		"mobile":"123456", 
		"email":"awesome@av.com",
		"location":"Ubuntu"},
	"skills":["awesome","fun","happy"]

};


var education = { 
	"schools" : [ 
	{
		"name":"good school",
		"city":"not bad view", 
		"degree": "something learned ",
		"date": 1988
	},

	{	"name":"next good school",
		"city":"also not bad view",
		"degree":"awesome learning",
		"date":1990
	}

	],
	"onlineCourses": [{

		"title":"MOOC a lot",
		"school":"University of awesome",
		"date":2014,
		"url":"https://www.mooc-list.com"
	}]

} ;


var work = { 
	"jobs" : [{
		"employer":"av",
		"title":"Awesome",
		"location":"nice view",
		"date":2015,
		"description":"it is awesome"
		},
		{
		"employer":"Bigbigdata",
		"title":"play Awesome bb",
		"location":"bb view ",
		"date":2010,
		"description":"it is not bad "
		}
	]
};

var projects = {
	"projects" : [
	  {
		"title" : "Great interesting work",
		"date" : 2015,
		"description": "something awesome",
		"image"	:{"url":"https://openclipart.org/image/300px/svg_to_png/1962/johnny-automatic-Christmas-Bear-wih-present.png"}
	  }
	]
};



// Insert myself of the missing bio. This is not inside the tutorial from number 2. 

$("#header").append(HTMLheaderName.replace("%data%", bio.name));
$("#header").append(HTMLheaderRole.replace("%data%",bio.role));
$("#header").append(HTMLmobile.replace("%data%",bio.contacts.mobile));
$("#header").append(HTMLemail.replace("%data%",bio.contacts.email));
$("#header").append(HTMLlocation.replace("%data%",bio.contacts.location));
// insertion end 


// Lesson 2 Flow control 

if ( bio.skills.length > 0 ){
	$("#header").append(HTMLskillsStart);

	//for (var i = 0; i < bioskillLen ; i ++){
	for ( i in bio.skills){
		var formattedSkill = HTMLskills.replace("%data%",bio.skills[i]);
		$("#skills").append(formattedSkill);
	}
}

for ( j in work.jobs){ 
	$("#workExperience").append(HTMLworkStart);

	var formattedemployer = HTMLworkEmployer.replace("%data%",work.jobs[j].employer);
	var formattedtitle = HTMLworkTitle.replace("%data%",work.jobs[j].title);
	var catEmployerTitle = formattedemployer +" "+ formattedtitle;

	var formatworkdate = HTMLworkDates.replace("%data%",work.jobs[j].date);
	var formatworkLocation = HTMLworkLocation.replace("%data%",work.jobs[j].location);
	var formatdescription = HTMLworkDescription.replace("%data%",work.jobs[j].description);


	$(".work-entry:last").append(formattedemployer);
	$(".work-entry:last").append(formattedtitle);
	$(".work-entry:last").append(formatworkdate);
	$(".work-entry:last").append(formatworkLocation);
	$(".work-entry:last").append(formatdescription);



	//$(".work-entry:last").append(catEmployerTitle);
}

$(document).click(function(loc){

	logClicks(loc.pageX, loc.pageY);
});




var inName = function(name) {

	var splitName = name.trim().split(" ");
	console.log(splitName);
	var	familyName = splitName[1].toUpperCase();

	var in8Name = splitName[0]+" "+familyName;
	return in8Name; 

}

$("#main").append(internationalizeButton);


projects.display = function() {
	for (p in projects.projects){
		$("#projects").append(HTMLprojectStart);

		var tt = HTMLprojectTitle.replace("%data%", projects.projects[p].title);
		$(".project-entry:last").append(tt); 

		var dt = HTMLprojectDates.replace("%data%",projects.projects[p].date);
		$(".project-entry:last").append(dt); 

		var dd = HTMLprojectDescription.replace("%data%",projects.projects[p].description);
		$(".project-entry:last").append(dd); 

		var pi = HTMLprojectImage.replace("%data%", projects.projects[p].image.url); 
		$(".project-entry:last").append(pi); 

		console.log(tt);

	}

};

projects.display();