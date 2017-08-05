function loadSkills(skills){
		var i=0,j;
		var skillsInnerHTML='';
		while(i<skills.length){

			var row = '<div class="row">';
			for(j=i;j<i+6&&j<skills.length;j++){
				var skill = '<div class="col m2"><svg viewBox="0 0 128 128"><path d="'+skills[j].icon+'"></path></svg>'+skills[j].name+'</div>';
				row+=skill;
				
			}
			row+='</div>';
			skillsInnerHTML+=row;
			
			i=j;
		}
		$('#skills').html(skillsInnerHTML);
}

function loadProjects(projects){
	projects.sort(function(a,b){
		return a.sn-b.sn;
	});
	var i=0,j;
	var projectsInnerHTML='';
	for(i=0;i<projects.length;i++){					
		project = ' <div class="row project"><div class="col m6 s12"><div class="row"><span class="title">'+projects[i].projectTitle+'</span><hr></div><div class="row"><span>'+projects[i].periodStart+'-'+projects[i].periodEnd+'</span></div>';
		toolsUsed = '<div class="row">Tools Used:&nbsp';
		for(j=0;j<projects[i].toolsUsed.length;j++){
			toolsUsed+='<span>'+projects[i].toolsUsed[j]+'</span>&nbsp';
		}
		toolsUsed+='</div>';
		project+=toolsUsed;
		tags = '<div class=row">'
		for(j=0;j<projects[i].tags.length;j++)tags+='<span class="tag">#'+projects[i].tags[j]+'</span>&nbsp';
		tags+='<a href="'+projects[i].link+'" target="_blank"><i class="material-icons right">language</i></a></div>';
		project+=tags;
		project+='</div><div class="col m6 s12 details">'+projects[i].shortInfo+'</div></div>';
		projectsInnerHTML+=project;
	}
	$('#projects').html(projectsInnerHTML);
}

function loadWorks(works){
	works.sort(function(a,b){
		return a.sn-b.sn;
	});
	var i;
	var worksInnerHTML = '';
	for(i=0;i<works.length;i++){
		worksInnerHTML+='<div class="row work"><div class="col m6 s12"><div class="row title">'+works[i].workPosition+'<hr></div><div class="row">'+ works[i].periodStart+ '-' + works[i].periodEnd +'</div><div class="row"><a href="'+works[i].link+'">'+works[i].organisation+'</a></div></div><div class="col m6 s12 details"><div class="row">'+works[i].experience+'</div></div></div>';
	}
	$('#experience').html(worksInnerHTML);
}

function loadEducations(educations){
	var i=0,j;
	var educationsInnerHTML = '';
	for(i=0;i<educations.length;i++){
		education = '<div class="row education"><div class="col m6 s12">					<div class="row title">'+educations[i].course+'<hr></div><div class="row">'+educations[i].periodStart+'-'+educations[i].periodEnd+'</div><div class="row">'+educations[i].inst+'</div><div class="row">'+educations[i].board+'</div>		<div class="row">Scored: '+educations[i].score+'</div></div><div class="col m6 s12 details"><ul class="collapsible" data-collapsible="accordion"><li><div class="collapsible-header"><i class="material-icons">view_list</i>Completed following Core courses</div><div class="collapsible-body">';
		var courses = educations[i].courses;
		courses.sort(function(a,b){
			return a.sn-b.sn;
		});
		var coursesInnerHTML = '';
		for(j=0;j<courses.length;j++){
				coursesInnerHTML+='<div class="row"><div class="col m2 s2">'+courses[j].courseCode+'</div><div class="col m8 s8">'+courses[j].courseName+'</div><div class="col m2 s2">'+courses[j].courseScore+'</div></div>';
		}
		education+=coursesInnerHTML;
		education +='</div></li></ul></div></div>';
		educationsInnerHTML+=education;
	}
	$('#education').html(educationsInnerHTML);
}

function loadLinks(profileLinks){
	var i=0,j;			
	profileLinks.sort(function(a,b){
		return a.sn-b.sn;
	});
	var profileLinksInnerHTML = '';
	while(i<profileLinks.length){
		profileLinksInnerHTML+='<div class="row">'
		for(j=i;j<profileLinks.length&&j<i+5;j++){
			profileLinksInnerHTML+='<div class="col s2">													<a href="'+profileLinks[j].link+'" target="_blank" >					<img src="img/'+profileLinks[j].icon+'" alt="'+profileLinks[j].name+'">															</a></div>';
		}
		profileLinksInnerHTML+='</div>';
		i=j;
	}
	$('#links').html(profileLinksInnerHTML);
}

function loadLikes(likes){
	likes = likes.sort(function(a,b){
		return a.sn-b.sn;
	});
	var i;
	var likesInnerHTML = '<h4>I like</h4>';
	for(i=0;i<likes.length;i++){
		likesInnerHTML+='<object type="image/svg+xml" data="img/'+likes[i].icon+'">'+likes[i].name+'</object>'
	}
	$('#likes').html(likesInnerHTML);
}

var profile;
	swal(
		{
			title:"helloWorld!!!",
			text:"Hello visitor, you have landed upon little webspace of moghya.",
			confirmButtonColor:"#1f1f1f"
		}
	);
$.get("js/profile.json", 
	function(data, status){
		profile = data;
		var pInfo = profile.personalInfo;
		$('title').html(pInfo.nick+'|Portfolio');
		$('#name').html(pInfo.fname+' '+pInfo.lname+'<sub>&lt'+pInfo.nick+'/&gt</sub>');
		$('#image img').attr('src','img/'+pInfo.myimg);
		$('#contact').html('Call me:'+pInfo.mob+'</br> Mail me:'+pInfo.email);
		$('#summary p').html(profile.summary);
		Typed.new('#believe span', {
			strings: profile.qoutes,
			typeSpeed: 0,
			cursorChar:"",
			loop:true
		});
		loadLikes(profile.likes);
		$('#helloText').html(profile.helloText);
		loadLinks(profile.profileLinks);
		loadSkills(profile.skills);
		loadProjects(profile.projects);
		loadWorks(profile.works);
		loadEducations(profile.educations);
		console.log(profile);
});

function onBodyLoad(){
	console.log('body loaded');
	$('#moghyaSays').css('display','block');
}

$(document).ready(function(){
	$('.collapsible').collapsible({
	  'accordion' : true
	});
	$('#tabs').tabs({ 'swipeable': true });
	$('.info').perfectScrollbar();
	onWindowResize();
});
		
$(window).resize(onWindowResize);	

function onWindowResize(){
	$('#skills div.m2').css('height',$('#skills div.m2').css('width'));
	$('#image img').css('height',$('#image img').css('width'));
}
