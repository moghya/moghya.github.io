		function loadLinks(profileLinks){
			var i=0,j;			
			profileLinks.sort(function(a,b){
				return a.sn-b.sn;
			});
			var profileLinksInnerHTML = '';
			var offset = 'offset-m2';
			while(i<profileLinks.length){
				profileLinksInnerHTML+='<div class="col m6 s12">';
				
				for(j=i;j<profileLinks.length&&j<i+5;j++){
					profileLinksInnerHTML+='<div class="col m2 '+offset+' s2">													<a href="'+profileLinks[j].link+'" target="_blank" >					<img src="img/'+profileLinks[j].icon+'" alt="'+profileLinks[j].name+'">															</a></div>';
					offset = '';
				}
				profileLinksInnerHTML+='</div>';
				i=j;
			}
			$('#links').html(profileLinksInnerHTML);
		}
		var profile;
		$.get("js/profile.json", 

			function(data, status){
				profile = data;
				var pInfo = profile.personalInfo;
				$('#name').html(pInfo.fname+' '+pInfo.lname+'<sub>&lt'+pInfo.nick+'/&gt</sub>');
				$('#image img').attr('src','img/'+pInfo.myimg);
				$('#summary p').html(profile.summary);
				loadLinks(profile.profileLinks);
			}
		);


		$(document).ready(function(){
			onWindowResize();
		});





		$(window).resize(onWindowResize);

		function onWindowResize(){
			$('#image img').css('height',$('#image img').css('width'));
		}
