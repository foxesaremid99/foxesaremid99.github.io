	var home_ScaleFactor = 1000;
	var play_ScaleFactor = 1280;
	var m_initialized = false;
	var m_inGame = true;
	var lastWindowSize;
	var shouldShowAds = false;
	var yt_isPlaying = false;

    function clamp(val, min, max) {
        return Math.max(min, Math.min(max, val));
    }
    
    function getRandomInt(max) {
      return Math.floor(Math.random() * Math.floor(max));
    }


	window.addEventListener('resize', onResize);
	window.addEventListener('load', onLoad);
	window.addEventListener('DOMContentLoaded', onSiteEnter);
	window.onerror=function(){return true;}

	function onSiteEnter()
	{
		SetRandomBackground();
	}
	
	function onLoad()
	{
		showLoader();
		game_isLoaded = true;

		// document.getElementById("yt_thumb").href = feature_yt_url;
		document.getElementById("yt_img").src = feature_yt_img;
		document.getElementById("feature_title").innerText = feature_title;
		document.getElementById("feature_content_title").innerText = feature_yt_title;
		tw_Show(true);
	}

	function onResize()
	{
		scaleUi();
	}
	
	function onFocus()
	{
		if (lastWindowSize  !== clamp(window.innerWidth / home_ScaleFactor, .5, 1))
			scaleUi();
	}
	
	function ext_play()
	{
		m_inGame = true;
		console.log("game: play");
		document.getElementById("repuls_logo").style.display = "none";

		tw_Show(false);
		clearInterval(ad_refresh_update);

		m_initialized = true;

		document.getElementById("idLinks").style.display = "none";

		const ad_box = document.getElementById("PokiUnitySDK_Ad_ad_box");
		if(ad_box)
			removeAd("ad_box");
	}

	function ext_showLobbyUi()
	{
		console.log("game: show lobby");
		showAds();
	}

	function ext_hideLobbyUi()
	{
		console.log("game: hide lobby");
		removeAds();
	}

	function WaitForAd()
	{
	}
	
	function Start()
{
	 console.log("game: set pixel ratio 0.8");
	 ext_setPixelRatio(0.85);
}

	function scaleUi()
	{
		// if(!m_initialized)
		//	return;

		var ratio = clamp(window.innerWidth / play_ScaleFactor, .5, 1);

		var ad_letter = document.getElementById("PokiUnitySDK_Ad_ad_letter");
		var ad_box = document.getElementById("PokiUnitySDK_Ad_ad_box");
		
		/*if(m_inGame)
		{
			ratio = clamp(window.innerWidth / play_ScaleFactor, .5, 1);
		} 
		else
		{
			if (ad_box)
				ad_box.style.bottom = "20%";
		}*/


		document.getElementById("invite_box").style.transform = "translate(-50%,0%) scale(" + ratio + ")";

		document.getElementById("featuredContent").style.transform = "scale(" + (ratio * 0.85) + ")";

		document.getElementById("idLinks").style.transform = "scale(" + (ratio * 0.75) + ")";

		document.getElementById("repuls_logo").style.transform = "translate(-50%,0%) scale(" + ratio + ")";

		if (ad_letter)
			removeAd("ad_letter");
			// default size: 1219

		if(shouldShowAds)
			createAd("ad_letter", "728x90", "1%", "auto", "bottom center");

		// update reference:
		ad_letter = document.getElementById("PokiUnitySDK_Ad_ad_letter");

		if (ad_letter)
		{
			ad_letter.style.transform = 'scale(' + ratio + ', ' + ratio + ')';
			ad_letter.style.left = "50%";
			ad_letter.style.marginLeft = "-364px";
		}

		if(ad_box)
			removeAd("ad_box");

		if(window.innerHeight > 475 && window.innerWidth > 1000){
			if(shouldShowAds)	
				createAd("ad_box", "300x250", "20%", ".3%", "bottom right");
		} 
		// update reference:
		ad_box = document.getElementById("PokiUnitySDK_Ad_ad_box");


		if(ad_box){
			ad_box.style.transform = 'scale(' + ratio + ', ' + ratio + ')';
		}
		
		lastWindowSize = ratio;
	}
	
	function showLoader()
	{
	    var perc = 0;
	    const progressBar = document.querySelector("#sol_loader .progress-bar span");
	                
	    var x = setInterval(function() {

	        progressBar.style.width = perc + "%";
        
            perc += getRandomInt(5); 
                    
            if (perc > 100) {
                clearInterval(x);
            }
        }, 100);
	}
	
	function SetRandomBackground() 
{
	console.log("SetRandomBackground");
	var num = Math.ceil( Math.random() * 3 );
	
	console.log(num);
	//document.getElementsByClassName("background")[0].src = 'https://repuls.io/img/loader_'+num+'.jpg';
	document.getElementsByClassName("background")[0].src = 'img/repuls_wallpaper_01.jpg';
	//$('.bg').css({'background-image': 'url(https://repuls.io/img/loader_'+num+'.jpg)'});
	//document.getElementsByClassName('bg')[0].css({'background-size': 'cover'});
}
	
	function hideLoader()
	{
	    document.getElementById("sol_loader").style.display = "none";
		document.getElementById("repuls_logo").style.zIndex = 10;
	}

	function createAd(identifier, size, bottom, right, origin)
	{
		var container = undefined;
		if(!window._cachedAdPositions) window._cachedAdPositions = {};
		container = window._cachedAdPositions[identifier];

		if(!container){
			container = document.createElement('div');
			container.setAttribute('id', 'PokiUnitySDK_Ad_'+identifier);
			document.body.appendChild(container);
			window._cachedAdPositions[identifier] = container;
		}

		container.style.position = 'absolute';
		container.style.zIndex = 999;

		container.style.bottom = bottom;
		container.style.right = right;

		container.style.transformOrigin  = origin;

		PokiSDK.displayAd(container,size);

		container.style.bottom = bottom;

		console.log(identifier);
		console.trace();
	}

	function removeAd(identifier)
	{
		if(window._cachedAdPositions){
			const container = window._cachedAdPositions[identifier];
			if(container)
			{
				PokiSDK.destroyAd(container);
				container.style.bottom = '-10000px';
			}
		}
	}

	function showAds()
	{
		/*if(window.innerWidth < 1219)
		{
			createAd("ad_letter", "320x50", "1%", "auto", "bottom center");
		} else {
			createAd("ad_letter", "728x90", ".5%", "auto", "bottom center");
		}

		createAd("ad_box", "300x250", "15%", ".3%", "bottom right");*/
		
		shouldShowAds = true;

		scaleUi();
	}

	function removeAds()
	{
		removeAd("ad_letter");
		removeAd("ad_box");
		shouldShowAds = false;
	}

	function tw_Show(show)
	{
		if( show === true){
			document.getElementById("featuredContent").style.display = "flex";
		} else {
			document.getElementById("featuredContent").style.display = "none";
		}
		feature_YouTube();
	}

function feature_YouTube()
{
	document.getElementById("featuredStreamers").style.display = "none";
	document.getElementById("featuredVideos").style.display = "flex";
}

function ad_Refresh()
{
	showAds();
}

function ext_showLogo(show)
{
	return;
	if(show == 'True')
		document.getElementById("repuls_logo").style.display = "block";
	else
		document.getElementById("repuls_logo").style.display = "none";

	console.log("show logo:" + show);
}


	function ext_showHomeUi()
	{
		Start();
		m_inGame = false;
		
		showAds();
		hideLoader();

		tw_Show(true);
		ad_refresh_update = setInterval(ad_Refresh, 60000);

		// show logo
		document.getElementById("repuls_logo").style.display = "none";

		document.getElementById("idLinks").style.display = "flex";

		if (yt_isPlaying)
		{
			MuteGame(1);
		}
		
		console.log("game: home ui");
	}


	
	function ext_openUrl(url)
	{
	    window.open(url, "_blank"); 
	}

	function ext_showInviteModal(url)
{
    var popInvite = document.getElementById("modal_Invite");
    popInvite.style.display = "block";
    
    // setup field
	var textField = document.getElementsByClassName('inviteField')[0];
	textField.value = url;  

	// assign button event
	document.getElementById("inviteButton").onclick = function() {
		textField.focus();
        textField.value = url;
        textField.setSelectionRange(0, textField.value.length);
        var succeeded;
        try { 
        	succeeded = document.execCommand('copy'); 
        	popInvite.style.display = "none";
        } catch (e) {}
        alert(succeeded ? 'Link Copied! Share it with your friend(s).' : 'An error occured. Try copying the link manually.');
    }
}
	
	
function ext_setPixelRatio(ratio)
{
	window.devicePixelRatio = ratio;
	// scaleGame();
}

function ext_adblockDetected()
{
}

	function ext_watchRewardedAd()
{
		console.log("game: reward");
		
		tw_Show(false);
		// clearInterval(tw_stream_update);
		clearInterval(ad_refresh_update);
		
		document.getElementById("idLinks").style.display = "none";
}
	
	function ext_rewardedAdWatched()
{
		ext_showHomeUi();
}

	function ext_OnStoreToggled(active)
{
	if(active === "True")
	{
		document.getElementById("featuredContent").style.display = "none";
	} else {
		document.getElementById("featuredContent").style.display = "flex";
	}
}