function loadSkills(skills){
		var i=0,j;
		var skillsInnerHTML='';
		while(i<skills.length){

			var row = '<div class="row">';
			for(j=i;j<i+6&&j<skills.length;j++){
				var skill = '<div class="col m2 s2"><svg viewBox="0 0 128 128"><path d="'+skills[j].icon+'"></path></svg><span>'+skills[j].name+'</span></div>';
				row+=skill;
				
			}
			row+='</div>';
			skillsInnerHTML+=row;
			
			i=j;
		}
		$('#skills').html(`<div class="row section"><h4>Skills</h4>${skillsInnerHTML}</div>`);
}

function loadProjects(projects){
	projects.sort(function(a,b){
		return a.sn-b.sn;
	});
	var i=0,j;
	var projectsInnerHTML='';
	for(i=0;i<projects.length;i++){
		toolsUsed = ``;
		for(j=0;j<projects[i].toolsUsed.length;j++){
			toolsUsed+='<span><i>'+projects[i].toolsUsed[j]+'</i></span>&nbsp';
		}

		project = `
			<div class="row project">
				<div class="row"><span class="title">${projects[i].projectTitle}</span>
				<a href="${projects[i].link}" target="_blank"><i class="material-icons right">language</i></a></div>
				<div class="row golden">
					<div class="col m8 s12">${toolsUsed}</div>
					<div class="col m4 s12 period">
						<span>${projects[i].periodStart}-${projects[i].periodEnd}</span>
					</div>
				</div>
				<div class="row details">${projects[i].shortInfo}</div>
			</div>`;
		projectsInnerHTML+=project;
	}
	$('#projects').html(`<div class="row section"><h4>Projects</h4>${projectsInnerHTML}</div>`);
}

function loadWorks(experince){
	experince.sort(function(a,b){
		return a.sn-b.sn;
	});
	var i;
	var works = experince.filter((experince)=>experince.type=="work");
	var worksInnerHTML = '';
	for(i=0;i<works.length;i++){
		worksInnerHTML+=`
		<div class="row work">
			<div class="row">
				<div class="col m5 s12"><a href="${works[i].link}"><span class="title">${works[i].organisation}</span></a></div>
				<div class="col m7 s12 position"><span class="title">${works[i].workPosition}</span></div>
			</div>
			<div class="row golden">
				<div class="col m7 s12">${works[i].status} - ${works[i].location}</div>
				<div class="col m5 s12 period">${works[i].periodStart} - ${works[i].periodEnd}</div>
			</div>
			<div class="row details">
				${works[i].experience}
			</div>
		</div>`;
	}
	$('#experience').html(`<div class="row section"><h4>Experience</h4>${worksInnerHTML}</div>`);
}

function loadEducations(educations){
	var i=0,j;
	var educationsInnerHTML = '';
	for(i=0;i<educations.length;i++){
		education = `<div class="row education">
						<div class="row title"><span>${educations[i].course}</span></div>
						<div class="row golden">
							<div class="col m8 s12"><span>${educations[i].inst}</span></div>
							<div class="col m4 s12 period">
								<span>${educations[i].periodStart}-${educations[i].periodEnd}</span>
							</div>
						</div>
						<div class="row">
							<div class="col m8 s12"><span>${educations[i].board}</span></div>
							<div class="col m4 s12 score">
								<span>${educations[i].score}</span>
							</div>
						</div>
					</div>`;
		educationsInnerHTML+=education;
	}
	$('#education').html(`<div class="row section"><h4>Education</h4>${educationsInnerHTML}</div>`);
}

function loadLinks(profileLinks){
	var i=0,j;			
	profileLinks.sort(function(a,b){
		return a.sn-b.sn;
	});
	var profileLinksInnerHTML = '';
	while(i<profileLinks.length){
		for(j=i;j<profileLinks.length&&j<i+5;j++){
			profileLinksInnerHTML += `
			<a href="${profileLinks[j].link}" target="_blank" >${profileLinks[j].name}</a>`;
		}
		i=j;
	}
	$('#tabs').append(profileLinksInnerHTML);
}

function loadLikes(likes){
	likes = likes.sort(function(a,b){
		return a.sn-b.sn;
	});
	var i;
	var likesInnerHTML = '<h4 class="title">I like</h4>';
	for(i=0;i<likes.length;i++){
		likesInnerHTML+='<object type="image/svg+xml" data="img/'+likes[i].icon+'">'+likes[i].name+'</object>'
	}
	$('#likes').html(likesInnerHTML);
}

function loadBlog() {
	var blogHtml = `<div class='sk-ww-medium-publication-feed' data-embed-id='26322'></div><script src='https://www.sociablekit.com/app/embed/medium-publication-feed/widget.js'></script>`;
	$('#blog').html(blogHtml);	
}

function onBodyLoad(){
	console.log('body loaded called');
	$('div.progress').css('display','none');
	$('div.content').css('display','block');
	$('.collapsible').collapsible({
		'accordion' : true
	});
	// $('#tabs').tabs({ 'swipeable': true });
}

var profile;
// swal({
// 		title: "Hello World!!!",
// 		text: "Hello visitor, you have landed upon little webspace of moghya. I hope you're doing well."
// 		buttons: ["Nope, I'm just looking around.", "Yes, I'm hiring :)"]
// 		buttons: {
// 			cancel: {
// 			  text: "Nope.",
// 			  value: false,
// 			  visible: true,
// 			  className: "button-cancel",
// 			  closeModal: true,
// 			},
// 			confirm: {
// 			  text: "Yes, I'm hiring.",
// 			  value: true,
// 			  visible: true,
// 			  className: "button-confirm",
// 			  closeModal: true
// 			}
// 		}
// });
//.then((value)=>{
// 	if(value===true) {
// 		swal({
// 			title: "Hello Talent Scout,",
// 			text: "Thank you for visiting my webspace. I hope you'll find relevant information here. If you need any other information, kindly reach to me. \n\n Do you need a copy of my resume?",
// 			buttons: {
// 				cancel: {
// 				  text: "I have your resume.",
// 				  value: false,
// 				  visible: true,
// 				  className: "button-cancel",
// 				  closeModal: true,
// 				},
// 				confirm: {
// 				  text: "Yes, sure.",
// 				  value: true,
// 				  visible: true,
// 				  className: "button-confirm",
// 				  closeModal: true
// 				}
// 			}
// 		}).then((value)=>{
// 			if(value===true) { 
// 				window.open('/Resume_Shubham_Sawant.pdf');
// 			}
// 		})
// 	}
// });


function loadMoghysSays() {
	const moghyaSaysInnerHtml = `<div class="col m6 s12">
		<h6>Recipe for this website:</h6>	
		<div class="row">
			Would you like to have your own portfolio in this template ? It"s pretty easy, <a href="https://github.com/moghya">moghya</a> covered it up for everyone out their. 
			All the content on this website is dynamically loaded from JSON data.
			Fork this <a href="https://github.com/moghya/moghya.github.io/">repo</a> on github and edit <a href="https://github.com/moghya/moghya.github.io/blob/master/js/profile.json">js/profile.json</a> for adding your data.
			<a href="https://medium.com/howcatcancode/developer-profile-template-2017-219f43147efe">Read more</a><br>
			If you like this website, consider giving a star to its repo <a href="https://github.com/moghya/moghya.github.io/">here</a>.
		</div>
	</div>
	<div class="col m6 s12">
		<h6>Warm Gratitudes</h6>
		<div class="row">
			<div class="col m3 s3"><a href="https:https://pages.github.com/">Github Pages</a></div>
			<div class="col m3 s3"><a href="https://stackoverflow.com/">Stack Overflow</a></div>
			<div class="col m3 s3"><a href="https://jquery.com/">jQuery</a></div>
			<div class="col m3 s3"><a href="http://materializecss.com/">Materialize</a></div>
		</div>
		<div class="row">
			<div class="col m3 s3"><a href="https://fonts.google.com/">Google Fonts</a></div>	
			<div class="col m3 s3"><a href="http://konpa.github.io/devicon/">Devicons</a></div>
			<div class="col m3 s3"><a href="http://www.flaticon.com/">Flaticons</a></div>
			<div class="col m3 s3"><a href="https://simpleicons.org/">SimpleIcons</a></div>				
		</div>
		<div class="row">
			<div class="col m3 s3"><a href="http://www.mattboldt.com/demos/typed-js/">TypedJs</a></div>					
			<div class="col m3 s3"><a href="https://daneden.github.io/animate.css/">Animate.CSS</a></div>
			<div class="col m3 s3"><a href="http://t4t5.github.io/sweetalert/">Sweetalert</a></div>
		</div>
	</div>`;
	$('#moghyaSays').html(moghyaSaysInnerHtml);
}

$.get("js/profile.json", 
	function(data, status){
		console.log('Got profile:',data,' \nwith status:',status);
		if(status!=="success") {
			window.location.href = "/error.html";
		}
		profile = data;
		var pInfo = profile.personalInfo;
		$('title').html(pInfo.nick+'|Portfolio');
		$('#name').html(pInfo.fname+' '+pInfo.lname+'<sub>&lt'+pInfo.nick+'/&gt</sub>');
		$('#image img').attr('src','img/'+pInfo.myimg);
		$('#contact').html(`<span>${pInfo.mob}</span></br><span><a href="mailto:${pInfo.email}">${pInfo.email}</a></span>`);
		$('#summary').html(profile.summary);
		$('#tabs').html(`
			<a href="#home">Home</a>
			<a href="#experience">Experience</a>
			<a href="#skills">Skills</a>
			<a href="#education">Education</a>
			<a href="#projects">Projects</a>
		`);
		$('#believe').html('<h4 class="title">I believe</h4><span></span>');
		const typed = new Typed('#believe span', {
			strings: profile.qoutes,
			typeSpeed: 40,
			cursorChar:"_",
			loop:true
		});
		loadLikes(profile.likes);
		$('#helloText').html(profile.helloText);
		loadLinks(profile.profileLinks);
		loadSkills(profile.skills);
		loadProjects(profile.projects);
		loadWorks(profile.experince);
		loadEducations(profile.educations);
		loadMoghysSays();
		console.log('body loaded calling');
		onBodyLoad();
});