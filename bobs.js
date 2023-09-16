var timeSpent = 0;

var gamesKnown = 0;
var videosKnown = 0;
	

//SCRIPTS START
function updateFaves(){
		let game = window.location.hash.replace("#g-","").replaceAll("-","")
		console.log( localStorage.getItem( "fave-"+game) )
	if (localStorage.getItem( "fave-"+game ) != null && localStorage.getItem( "fave-"+game ) != "null"){
			document.getElementById("gFave").style["background-color"] = "#ffbf00";
		} else {
			document.getElementById("gFave").style["background-color"] = "white";
		}
}

function favoriteGame(){
	let game = window.location.hash.replace("#g-","").replaceAll("-","")
	
	console.log(localStorage.getItem(("fave-"+game)))
	if (localStorage.getItem(("fave-"+game)) == "true"){
		localStorage.setItem(("fave-"+game),"null")
	} else {
		localStorage.setItem(("fave-"+game),"true")
	}
	console.log(localStorage.getItem(("fave-"+game)))
	updateFaves()
}

function setIcon(){
	if (localStorage.getItem("tabCloak")===null){
		localStorage.setItem("tabCloak","Default")
	}
	var icon = localStorage.getItem('tabCloak')
	document.getElementById("tabCloak").value = icon
	var link = window.document.querySelector("link[rel~='icon']");
	if (!link) {
		link = window.document.createElement('link');
		link.rel = 'icon';
		window.document.getElementsByTagName('head')[0].appendChild(link);
	}
	if (icon=="Default"){
		link.href = 'https://assets.codepen.io/2104921/bobs-logo.png';
		document.title = "Bob's Shack"
	}
	if (icon=="Schoology"){
		link.href = 'https://asset-cdn.schoology.com/sites/all/themes/schoology_theme/favicon.svg';
		document.title = "Home | Schoology"
	}
	if (icon=="Google Docs"){
		link.href = 'https://ssl.gstatic.com/docs/documents/images/kix-favicon7.ico';
		document.title = "Google Docs"
	}
 if (icon=="Desmos"){
		link.href = 'https://www.desmos.com/assets/img/apps/scientific/favicon.svg';
		document.title = "Desmos | Scientific Calculator"
	}
	if (icon=="Desmos graphing"){
		link.href = 'https://www.desmos.com/assets/img/touch-icon-192x192.png';
		document.title = "Desmos | Graphing Calculator"
	}
	if (icon=="Google classroom"){
		link.href = 'https://ssl.gstatic.com/classroom/favicon.png';
		document.title = "Classes"
	}
}

function getTheme(){
	let theme = localStorage.getItem("colorTheme")
	let col = "#0073ff"
 if (theme==="Gold") {
  col = "#ffbb00";
 }
 if (theme==="Red") {
		col = "#fc033d";
 }
 if (theme==="Green") {
  col = "#0be600";
 }
	if (theme==="Purple") {
  col = "#8002f5";
 }
	return col
}

function setTheme(){
	var theme = "Blue"
	if (localStorage.getItem("colorTheme")===null){
		localStorage.setItem("colorTheme","Blue")
	}
	theme = localStorage.getItem("colorTheme")

	document.getElementById("colorTheme").value = theme
	
	let col = getTheme()

	var ele = document.getElementsByName("setColor");
	for (var i = 0; i < ele.length; i++ ) {
		ele[i].style.color = col;
	}
	var ele2 = document.getElementsByName("setColor2");
	for (var i = 0; i < ele2.length; i++ ) {
		console.log(ele2[i])
			ele2[i].style["background-color"] = col;
	}
}

function gsearch(){
		let input = document.getElementById("gsearch").value
		input=input.toLowerCase();
  let x = document.getElementsByClassName('game');
		
  for (i = 0; i < x.length; i++) { 
			if (!x[i].name.toLowerCase().includes(input)) {
				x[i].style.display="none";
			} else {
				x[i].style.display="inline-table";                 
			}
		}
}

function vsearch(){
		let input = document.getElementById("vsearch").value
		input=input.toLowerCase();
  let x = document.getElementsByClassName('vid');
		
  for (i = 0; i < x.length; i++) { 
			if (!x[i].name.toLowerCase().includes(input)) {
				x[i].style.display="none";
			} else {
				x[i].style.display="inline-table";                 
			}
		}
}

function handleGame(ty){
	if (ty == "load"){
		let game = window.location.hash.replace("#g-","")
		
		var xhr = new XMLHttpRequest();
		xhr.open('GET', 'https://000690268.codepen.website/glist.txt', false);
		xhr.send(null);
		if (xhr.status === 200) { var games = xhr.responseText.replaceAll("\n","").split("~~|%%|~~");}
		var found
		for (var i = 0; i < games.length; i++ ) {
			if (games[i]){
				var vs2 = games[i].replaceAll(" ","").split("~||")
				if (vs2[0] == game){
					found = games[i]
				}
			}
		}
		let gs = found.split(" ~||")
		
		console.log(gs)
		
	 document.getElementById("gFrame").src = "https://000687715.codepen.website/#"+gs[0]
		document.getElementById("gName").innerText = gs[1]
		document.getElementById("gLikes").src = "https://cdpn.io/pen/debug/KKQaRYQ/#"+gs[0]
		//document.getElementById("gComments").src = "https://cdpn.io/pen/debug/XWqwdMV?id="+gs[0]
		document.getElementById("gStats").innerHTML = `<b style="font-size:25px;">GAME STATS</b><br>
Genre(s): `+gs[4]+`<br>
 `+gs[5]+`<br>
Date added: `+gs[6]+`<br>`
		if (gs[8] != null && gs[8] != "link"){
			document.getElementById("gStats").innerHTML += `<a href="`+gs[8]+`" target="_blank">`+gs[7]+`</a>`
		}
		
		
		updateFaves()
		
	} else if (ty == "unload"){
		document.getElementById("gFrame").src = ""
		document.getElementById("gLikes").src = ""
		document.getElementById("gComments").src = ""
	}
}

function handleVid(ty){
	if (ty == "load"){
		let vid = window.location.hash.replace("#v-","")
		
		var xhr = new XMLHttpRequest();
		xhr.open('GET', 'https://000690268.codepen.website/vlist.txt', false);
		xhr.send(null);
		if (xhr.status === 200) { var videos = xhr.responseText.replaceAll("\n","").split("~~|%%|~~");}
		var found
		for (var i = 0; i < videos.length; i++ ) {
			if (videos[i]){
				var vs2 = videos[i].replaceAll(" ","").split("~||")
				if (vs2[0] == vid){
					found = videos[i]
				}
			}
		}
		let vs = found.split(" ~||")
		
		
	 document.getElementById("vFrame").src = (vs[6])
		document.getElementById("vName").innerText = vs[1]
		document.getElementById("vLikes").src = ("https://cdpn.io/pen/debug/KKQaRYQ/#"+"v-"+vs[0])
		document.getElementById("vDesc").innerHTML = (`<b style="font-size:25px;">DESCRIPTION</b><br>`+vs[2])
		//document.getElementById("vComments").src = ("https://cdpn.io/pen/debug/XWqwdMV?id="+vs[0])
		document.getElementById("specialViewFrame").src = ("https://api.countapi.xyz/hit/bobs-shack.xyz/videoid-"+vs[0])
		
		var xhr = new XMLHttpRequest();
		xhr.open("GET", ("https://api.countapi.xyz/get/bobs-shack.xyz/videoid-"+vs[0]));
		xhr.responseType = "json";
		xhr.onload = function() {
			document.getElementById("vStats").innerHTML = (`By <b> <a target="_blank" href="https://peerboard.com/583030755/profile/`+vs[4]+`">`+vs[3]+`</a> </b>
			<br>View count: <b>`+`n/a`+numberWithCommas(Number(this.response.value))+`</b>
		 <br>Uploaded on <b>`+vs[8]+`</b>
			<br>Genre(s): <b>`+vs[5]+`</b>`)
		}
		xhr.send();

	} else if (ty == "unload"){
		document.getElementById("vFrame").src = ""
		document.getElementById("vLikes").src = ""
		document.getElementById("vComments").src = ""
	}
}

function openFullscreen(elem) {
  if (elem.requestFullscreen) {
    elem.requestFullscreen();
  } else if (elem.webkitRequestFullscreen) { /* Safari */
    elem.webkitRequestFullscreen();
  } else if (elem.msRequestFullscreen) { /* IE11 */
    elem.msRequestFullscreen();
  }
}

function addToGameFrame(){
	document.getElementById("allGames").innerHTML = ""
	
	var xhr = new XMLHttpRequest();
	xhr.open('GET', 'https://000690268.codepen.website/glist.txt', false);
	xhr.send(null);
	if (xhr.status === 200) {
		var games = xhr.responseText.replaceAll("\n","").split("~~|%%|~~");
	}
	
	for (const [i,v] of Object.entries(games)) {
		var gs = v.split(" ~||")
		if (gs[0] != "id" && gs[0].includes("[no]") == false){
			let string = `<button onclick="play('`+gs[0]+`')" name="`+gs[2]+` `+gs[4]+`" class="game"><img class="gameimg" src="`+gs[3]+`"></img>
<h2 style="margin-top:5px;color:white;" class="gametxt">`+gs[1]+`</h2>`
			
			if (localStorage.getItem("fave-"+gs[0]) == "true"){
				console.log("favorited")
				let fv = getTheme()
				string += `<p style="font-size:20px;margin-top:3px;color:`+fv+`" class="gametxt">**FAVORITED`
			} else {
				string += `<p style="font-size:20px;margin-top:3px;" class="gametxt">`+gs[4]
			}
			string += `</p></button>`
			
			if (localStorage.getItem("fave-"+gs[0]) == "true" ){
				document.getElementById("allGames").innerHTML = string + document.getElementById("allGames").innerHTML
			} else {
				document.getElementById("allGames").innerHTML += string
			}
		}
	}
	
		/*for (const [i,v] of Object.entries(games)) {
			console.log(v)
			
			let string = `<button onclick="play('`+v.id+`')" name="`+v.keywords+`" class="game"><img class="gameimg" src="`+v.icon+`"></img>
<h2 name="gamet1" style="margin-top:5px;color:white;" class="gametxt">`+v.name+`</h2>`
			
			console.log(localStorage.getItem("fave-"+v.id))
			if (localStorage.getItem("fave-"+v.id) == "true"){
				console.log("favorited")
				let fv = getTheme()
				string += `<p name="gamet2" style="font-size:20px;margin-top:3px;color:`+fv+`" class="gametxt">â˜†FAVORITED`
			} else {
				string += `<p name="gamet2" style="font-size:20px;margin-top:3px;" class="gametxt">`+v.genre
			}
			string += `</p></button>`
			
			if (localStorage.getItem("fave-"+v.id) == "true" ){
				document.getElementById("allGames").innerHTML = string + document.getElementById("allGames").innerHTML
			} else {
				document.getElementById("allGames").innerHTML += string
			}
		}*/
	}

function addToVideos(){
	document.getElementById("allVideos").innerHTML = ""
	
	var xhr = new XMLHttpRequest();
	xhr.open('GET', 'https://000690268.codepen.website/vlist.txt', false);
	xhr.send(null);
	if (xhr.status === 200) {
		var videos = xhr.responseText.replaceAll("\n","").split("~~|%%|~~");
	}
	
	for (const [i,v] of Object.entries(videos)) {
		var vs = v.split(" ~||")
		if (vs[0] != "numid"){
			let string = `<button onclick="watch('`+vs[0]+`')" name="`+vs[1]+vs[5]+vs[3]+`" class="vid"><img class="vidimg" src="`+vs[7]+`"></img><h2 style="margin-top:5px;text-overflow: ellipsis;overflow-x:hidden;white-space:nowrap;width:240px;" class="gametxt">`+vs[1]+`</h2><p style="font-size:15px;margin-top:5px;" class="gametxt">By <b>`+vs[3]+`</b></p>`
			
			document.getElementById("allVideos").innerHTML = string + document.getElementById("allVideos").innerHTML
		}
	}
}

function getRandomInt(min, max) {
	return Math.floor(Math.random() * (max - min)) + min;
}

function randMessage(){
	var xhr = new XMLHttpRequest();
	xhr.open('GET', 'https://000690268.codepen.website/mlist.txt', false);
	xhr.send(null);
	if (xhr.status === 200) {
		var msgs = xhr.responseText.split("%");
		var int = getRandomInt(0, msgs.length)
		var msg = msgs[int].trim();
		document.getElementById("randMsg").innerHTML = (`<b style="font-size:30px;">RANDOM MESSAGE (`+(int+1)+`/`+msgs.length+`)</b><br>`+msg)
	}
}

function numberWithCommas(x) {
	return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function gvNewNotif(){
	
	var xhr = new XMLHttpRequest();xhr.open('GET', 'https://000690268.codepen.website/glist.txt', false);xhr.send(null);
	if (xhr.status === 200) {var list = xhr.responseText.replaceAll("\n","").split("~~|%%|~~")}
	let s = -1; for (const [i,v] of Object.entries(list)) {s += 1}
	if (localStorage.getItem("gamesKnown") < s){
		var nw = ((s-Number(localStorage.getItem("gamesKnown"))))
		document.getElementById("gL").innerText = ("Games (+"+nw+")")
		localStorage.setItem("gamesKnown",s)
	}
	
	var xhr = new XMLHttpRequest();xhr.open('GET', 'https://000690268.codepen.website/vlist.txt', false);xhr.send(null);
	if (xhr.status === 200) {var list = xhr.responseText.replaceAll("\n","").split("~~|%%|~~")}
	let s2 = -1; for (const [i,v] of Object.entries(list)) {s2 += 1}
	if (localStorage.getItem("videosKnown") < s2){
		var nw2 = ((s2-Number(localStorage.getItem("videosKnown"))))
		document.getElementById("vL").innerText = ("Videos (+"+nw2+")")
		localStorage.setItem("videosKnown",s2)
	}
	
}

function renderPage(page){
	setTheme()
	setIcon()
	
	document.getElementById("hL").style["font-weight"] = "normal";
	document.getElementById("gL").style["font-weight"] = "normal";
	document.getElementById("oL").style["font-weight"] = "normal";
	document.getElementById("vL").style["font-weight"] = "normal";
	document.getElementById("fL").style["font-weight"] = "normal";
	document.getElementById("pL").style["font-weight"] = "normal";
	
	document.getElementById("h").style.display = "none";
	document.getElementById("g").style.display = "none";
	document.getElementById("v").style.display = "none";
	document.getElementById("p").style.display = "none";
	document.getElementById("o").style.display = "none";
	document.getElementById("gamepage").style.display = "none";
	document.getElementById("vidpage").style.display = "none";
	
	if (page.includes("g-")){
		document.getElementById("gamepage").style.display = "block";
		handleGame("load")
	} else {
		handleGame("unload")
		if (page.includes("v-")){
		document.getElementById("vidpage").style.display = "block";
		handleVid("load")
	} else {
		handleVid("unload")
		if (document.getElementById(page)){document.getElementById(page).style.display = "block";}
	 if (document.getElementById(page+"L")){document.getElementById(page+"L").style["font-weight"] = "bold";}
	}
	}
	
	if (page == "v"){
		document.getElementById("vL").innerText = "Videos"
		addToVideos()
	}
	
	if (page == "g"){
		document.getElementById("gL").innerText = "Games"
		addToGameFrame()
	}
}

function renderCur(){
	renderPage(window.location.hash.replace("#",""))
}

function play(game){
	window.location.hash = ("g-"+game)
	renderCur()
}

function watch(vid){
	window.location.hash = ("v-"+vid)
	renderCur()
}

window.onload = function(){
	
	document.head.innerHTML = (`

<link rel="stylesheet" href="https://000690268.codepen.website/style.css">

<title>Bob's Shack</title>
<link rel="icon" href="https://assets.codepen.io/2104921/bobs-logo.png">;

<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Radio+Canada:400,400i,700">

<meta name="description" content="70+ free browser games for school or work. More links: 5gis.short.gy/bob4L">
<meta name="keywords" content="unblocked games, unblocked, coolmathgames, bobs game shack, bobs shack">

<!--<scr`+`ipt async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8472463571453075" crossorigin="anonymous"></scr`+`ipt>-->`)
	document.body.innerHTML = (`
<div class="sidebar" id="sidebar">

<a href="#h"><img name="setColor2" style="float:left;width:95%;" src="https://assets.codepen.io/2104921/sillytest.png"></a>
<p name="setColor" class="sideLink" style="font-size:15px;margin-top:14%;margin-bottom:0%;">v5.2</p>

<hr style="margin-top:3%;margin-bottom:3%;margin-left:0;">

<a id="hL" href="#h" class="sideLink">Home</a><br>
<a id="gL" href="#g" class="sideLink">Games</a><br>
<a id="vL" href="#v" class="sideLink">Videos</a><br>
<a id="oL" href="#o" class="sideLink">Other</a><br>
<a id="fL" target="_blank" href="https://peerboard.com/583030755" class="sideLink">Forums</a><br>
<a id="aL" target="_blank" href="https://5gis.short.gy/bob4L" class="sideLink">Alt links</a><br>
<a id="pL" href="#p" class="sideLink">Profile</a><br>

<p style="margin:0;padding:0;position:absolute;bottom:15px;">(C)Copyright 2021-2022<br> Bob's Shack</p>
</div>

<span id="h" class="page">

<h1 name="setColor" class="banner" style="font-size:30px;margin-top:0.5%;">v6 next monday prolly (<a href="https://peerboard.com/583030755/post/912821937" target="_blank">more info</a>)</h1>

<img name="setColor2" style="margin:0.5%;width:99%;text-align:center;margin-bottom:0;margin-top:0.5;" src="https://assets.codepen.io/2104921/worldbanner.jpeg">
<p class="pageThumbCap">by <a href="https://peerboard.com/583030755/profile/384313862" target="_blank">jus</a></p><hr>

<hr>

<p class="sidebanner" style="font-size:15px;height:90px;float:left;">
<b style="font-size:25px;">UPDATE v5.2</b><br>
-new banner by <a href="https://peerboard.com/583030755/profile/384313862" target="_blank">jus</a>
</p>

<p id="randMsg" class="sidebanner" style="font-size:20px;height:90px;">
<b style="font-size:30px;">RANDOM MESSAGE (0/24)</b><br>
randmsg
</p>



<!--<div id="pollContainer" class="banner" style="overflow-x:auto;overflow-y:hidden;white-space:nowrap;line-height:70%;height:215px;">
<h3 style="margin:0;margin-top:5px;text-align:left;margin-left:10px;">WEEKLY POLL</h3>
<iframe id="pollFrame" style="border:none;width:100%;height:200px;padding:0;" src="https://cdpn.io/pen/debug/BaxEPEP"></iframe>
</div>-->


<!--<scr`+`ipt async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8472463571453075"
     crossorigin="anonymous"></scr`+`ipt>
<ins class="adsbygoogle"
     style="display:block"
     data-ad-format="autorelaxed"
     data-ad-client="ca-pub-8472463571453075"
     data-ad-slot="2967783071"></ins>
<scr`+`ipt>
     (adsbygoogle = window.adsbygoogle || []).push({});
</scr`+`ipt>-->


<div id="adsFrameContainer" class="banner" style="overflow-x:auto;overflow-y:hidden;white-space:nowrap;">
<h3 style="line-height:70%;margin:0;margin-top:5px;float:left;margin-left:10px;">ADVERTISMENTS</h3>
<p style="line-height:70%;margin:0;margin-top:5px;float:right;margin-right:10px;"><a href="https://forms.gle/SJW9oJLmdUyftgZL6" target="_blank">Create an ad</a></p>
<div id="adsFrame" class="banner" style="overflow-x:auto;overflow-y:hidden;white-space:nowrap;margin-top:0;"></div>
</div>

<hr>
<div style="text-align:center">
<b style="font-size:25px;height:60px;text-align:center">VIEW COUNT</b>
<br>
<img src="https://www.free-website-hit-counter.com/c.php?d=7&amp;id=141666&amp;s=5" border="0" style="margin-bottom:3px;text-align:center;">
</div>

</span>

<span id="g" class="page">

<div style="width:100%;text-align:center;">
<select style="margin-bottom:10px;margin-top:10px;margin-right:2px;" id="genreSort">
<option>Sort by genre...</option>
<option>Action</option>
<option>Simulator</option>
<option>Runner</option>
<option>Adventure</option>
<option>Shooter</option>
<option>Fighting</option>
<option>Idle</option>
<option>Puzzle</option>
<option>2 player</option>
<option>Driving</option>
<option>Endless</option>
<option>Horror</option>
<option>Sports</option>
<option>Casual</option>
</select>
<input id="gsearch" onkeyup="gsearch()" type="text" name="search" placeholder="Search for a game or genre..." style="margin-bottom:10px;margin-top:10px;">
</div>



<div id="allGames" class="banner" style="background:none;">
</div>

</span>

<span id="gamepage" class="page">

<iframe id="gFrame" class="gameFrame" src=""></iframe>
<div class="gameBar">

<h1 id="gName" style="padding-left:10px;float:left;">game name</h1>
<button style="padding-left:15px;padding-right:15px;" onclick="openFullscreen(document.getElementById('gFrame'))" class="barBtn">Fullscreen</button>
<button class="barBtn"> <iframe id="gLikes" class="barLikes" src=""></iframe> </button>
<button class="barBtn"> <img id="gFave" onclick="favoriteGame()" title="Favoriting a game will place it at the top of the games page" style="background-color:white;" class="barImg" src="https://assets.codepen.io/2104921/star-icon.png"></img> </button>

</div>

<hr>

<div class="gameBar" style="background:none;border:none;">

<p id="gStats" class="banner" style="height:130px;float:right;line-height:120%;font-size:20px;">
<b style="font-size:25px;">GAME STATS</b><br>
Genre(s): Action<br>
Publisher: Friv<br>
Date added: 9/24<br>
<a href="https://run.fandom.com/wiki/Run_3" target="_blank">Visit wiki</a>
</p>

</div>

<hr>

<iframe id="gComments" class="commentBox" src=""></iframe>

</span>


<span id="vidpage" class="page">

<video id="vFrame" class="gameFrame" style="background-color:black" disablePictureInPicture class="vidFrame" controls="true" controlsList="nodownload nofullscreen noremoteplayback" src=""></video><div class="gameBar">
<h1 id="vName" style="padding-left:10px;float:left;">video name</h1>
<button style="padding-left:15px;padding-right:15px;" onclick="openFullscreen(document.getElementById('vFrame'))" class="barBtn">Fullscreen</button>
<button class="barBtn"> <iframe id="vLikes" class="barLikes" src=""></iframe> </button>
</div>

<hr>

<div class="gameBar" style="background:none;border:none;">

<p id="vStats" class="sidebanner2" style="height:130px;float:left;font-size:25px;">
By <b></b>
</p>

<p id="vDesc" class="sidebanner2" style="height:130px;float:right;">
<b style="font-size:25px;">DESCRIPTION</b><br>
this is a big cool game i fucsdjfhgrudj
</p>
</div>

<hr>

<iframe id="vComments" class="commentBox" src=""></iframe>

</span>


<span id="v" class="page">
<div style="width:100%;text-align:center;">
<select style="margin-bottom:10px;margin-top:10px;margin-right:2px;" id="genreSort2">
<option>Sort by genre...</option>
<option>Comedy</option>
<option>Action</option>
<option>Gaming</option>
<option>Education</option>
<option>Music</option>
<option>Entertainment</option>
<option>Animation</option>
<option>Sports</option>
<option>Technology</option>
<option>Tutorial</option>
</select>
<input id="vsearch" onkeyup="vsearch()" type="text" name="search" placeholder="Search for a video or genre..." style="margin-bottom:10px;margin-top:10px;">
<button name="setColor2" class="sbBtn" onclick="window.open('https://forms.gle/8T2efKU1qjoM1EFo6','blank')">Upload a video</button>
</div>

<div id="allVideos" class="banner" style="background:none;">

</div>
</span>

<span id="p" class="page">

<br>
<div class="gameBar" style="background:none;border:none;">

<p id="stats" class="sidebanner2" style="height:130px;float:left;line-height:130%;">
<b style="font-size:25px;">STATS</b><br>

<b id="stat-time">Time spent:</b><br>

</p>

<p id="gStats" class="sidebanner2" style="height:130px;float:right;line-height:130%;">
<b style="font-size:25px;">SETTINGS</b><br>

<b>Color theme:</b>
<select id="colorTheme" class="select2"> <option>Blue</option> <option>Red</option> <option>Gold</option> <option>Green</option> <option>Purple</option> </select><br>

<b>Tab cloak:</b>
<select id="tabCloak" class="select2"> <option>Default</option> <option>Schoology</option> <option>Google Docs</option> <option>Desmos</option> <option>Desmos graphing</option> <option>Google classroom</option> </select>
</p>

</div>

</span>

<span id="o" class="page" style="line-height:50%;text-align:center;">

<h1 style="text-align:center;font-size:45px;">Other</h1>
<hr>

<h2>Deploy your own Bob's Shack link</h2>
<a href="https://heroku.com/deploy?template=https://github.com/bobsbetter/bobsbetter.github.io" target="_blank" rel="nofollow"><img src="https://www.herokucdn.com/deploy/button.svg" alt="Deploy" style="max-width: 100%;"></a>
<a href="https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fbobsbetter%2Fbobsbetter.github.io" target="_blank"><img src="https://vercel.com/button" alt="Deploy with Vercel"/></a>
<a href="https://app.netlify.com/start/deploy?repository=https://github.com/bobsbetter/bobsbetter.github.io" target="_blank"><img src="https://www.netlify.com/img/deploy/button.svg" alt="Deploy to Netlify"></a>

<br><br><hr>

<h2>Testing zone</h2>
<h3>The testing zone is where unfinished/unadded features are stored for public testing</h3>

<a target="_blank" href="https://cdpn.io/pen/debug/JjZPRpo">(in-dev) V6 avatar editor</a>

</span>


<span id="creatorpage" class="page">
</span>

<span id="extra" class="page">
<iframe id="specialViewFrame" src=""></iframe>
</span>

<span id="z" class="page">
</span>


<span class="footer">
<hr>
<p id="footerStats">
<b>10</b> games ||
<b>10</b> videos
</p>
</span>

` + document.body.innerHTML)
	
	//document.getElementsByClassName("adsbygoogle adsbygoogle-noablate")[0].style.bottom = "0px";
	
	if (localStorage.getItem("timeSpent") != null){
		timeSpent = Number(localStorage.getItem("timeSpent"));
	} else {
		localStorage.setItem("timeSpent",0)
	}
	
	if (window.location.hash == ""){
		window.location.hash = "h"
	}
	renderCur()
	window.onhashchange = function(){renderCur()}

	/*var adscr = document.createElement('script');
	adscr.src = "https://000690268.codepen.website/adhandler.js";
	document.head.appendChild(adscr);*/
	
	document.getElementById("genreSort").addEventListener("change",function(event){
		if (genreSort.value == "Sort by genre..."){
			document.getElementById("gsearch").value = ""
		} else {
			document.getElementById("gsearch").value = genreSort.value;
		}
		gsearch();
	})
	
	document.getElementById("genreSort2").addEventListener("change",function(event){
		if (document.getElementById("genreSort2").value == "Sort by genre..."){
			document.getElementById("vsearch").value = ""
		} else {
			document.getElementById("vsearch").value = document.getElementById("genreSort2").value;
		}
		vsearch();
	})
	
	function secondsToHms(d) {
		d = Number(d);
		var h = Math.floor(d / 3600);
		var m = Math.floor(d % 3600 / 60);
		var s = Math.floor(d % 3600 % 60);
  var hDisplay = h > 0 ? h + (h == 1 ? " hour, " : " hours, ") : "";
  var mDisplay = m > 0 ? m + (m == 1 ? " minute" : " minutes") : "";
  return hDisplay + mDisplay; 
	}
	
	document.getElementById("colorTheme").addEventListener("change",function(event){
		localStorage.setItem('colorTheme', event.target.value);
		console.log(localStorage.getItem("colorTheme"))
		setTheme();
	})
	document.getElementById("tabCloak").addEventListener("change",function(event){
		localStorage.setItem('tabCloak', event.target.value);
		console.log(localStorage.getItem("tabCloak"))
		setIcon();
	})
	
	randMessage();
	
	/*fetch('https://api.countapi.xyz/hit/bobs-shack.xyz/hits')
			.then((response) => response.json())
			.catch((error) => {})
   .then((data) => (document.getElementById('viewcount').innerHTML = (`<b style="font-size:25px;height:60px;">VIEW COUNT</b><br>`+ (numberWithCommas(Number(data.value))))) );
	
	setInterval(function(){
		if (window.location.hash == "#h"){
			fetch('https://api.countapi.xyz/get/bobs-shack.xyz/hits')
			.then((response) => response.json())
			.catch((error) => {})
   .then((data) => (document.getElementById('viewcount').innerHTML = (`<b style="font-size:25px;height:60px;">VIEW COUNT</b><br>`+ (numberWithCommas(Number(data.value))))) );
		}
	},2000)
	
	var xhr = new XMLHttpRequest();
	xhr.open("GET", "https://api.countapi.xyz/hit/bobs-shack.xyz/visits");
	xhr.responseType = "json";
	xhr.onload = function() {
		document.getElementById('viewcount').innerHTML = (`<b style="font-size:25px;height:60px;">VIEW COUNT</b><br>`+ (numberWithCommas( 866600+Number(this.response.value))) );
	}
	xhr.send();*/
	
	
	if (localStorage.getItem("gamesKnown") == null || localStorage.getItem("gamesKnown") == "null"){
		var xhr = new XMLHttpRequest();
		xhr.open('GET', 'https://000690268.codepen.website/glist.txt', false);
		xhr.send(null);
		if (xhr.status === 200) {
			var gList = xhr.responseText.replaceAll("\n","").split("~~|%%|~~");
		}
		let Gs = -1
		for (const [i,v] of Object.entries(gList)) {
			Gs += 1
		}
		localStorage.setItem("gamesKnown",Gs)
	}
	
	if (localStorage.getItem("videosKnown") == null || localStorage.getItem("videosKnown") == "null"){
		var xhr = new XMLHttpRequest();
		xhr.open('GET', 'https://000690268.codepen.website/vlist.txt', false);
		xhr.send(null);
		if (xhr.status === 200) {
			var 
			ist = xhr.responseText.replaceAll("\n","").split("~~|%%|~~");
		}
		let Vs = -1
		for (const [i,v] of Object.entries(vList)) {
			Vs += 1
		}
		localStorage.setItem("videosKnown",Vs)
	}
	
	 /*let googleAdsContainer = document.getElementById("googleAdsContainer")

var gaScr = document.createElement('script');
gaScr.async = true
gaScr.crossorigin = "anonymous"
gaScr.src = "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8472463571453075";
googleAdsContainer.appendChild(gaScr);

googleAdsContainer.innerHTML += `<ins class="adsbygoogle" style="display:block" data-ad-format="autorelaxed" data-ad-client="ca-pub-8472463571453075" data-ad-slot="2967783071"></ins>`

(adsbygoogle = window.adsbygoogle || []).push({});*/
	
	let gC = -1
	var xhr = new XMLHttpRequest();
	xhr.open('GET', 'https://000690268.codepen.website/glist.txt', false);
	xhr.send(null);
	if (xhr.status === 200) {
		var gList = xhr.responseText.replaceAll("\n","").split("~~|%%|~~");
	}
	for (const [i,v] of Object.entries(gList)) {
		gC += 1
	}
	
	let vC = -1
	var xhr2 = new XMLHttpRequest();
	xhr2.open('GET', 'https://000690268.codepen.website/vlist.txt', false);
	xhr2.send(null);
	if (xhr2.status === 200) {
		var vList = xhr2.responseText.replaceAll("\n","").split("~~|%%|~~");
	}
	for (const [i,v] of Object.entries(vList)) {
		vC += 1
	}
	
	document.getElementById("footerStats").innerHTML = ("<b>"+gC+"</b> games || <b>"+vC+"</b> videos")
	
	gvNewNotif()
	
	setInterval(function(){
		timeSpent = timeSpent + 1;
		localStorage.setItem("timeSpent",timeSpent);
	document.getElementById("stat-time").innerHTML = ("<b>Time spent: </b>"+secondsToHms(timeSpent))
	},1000);
	
}