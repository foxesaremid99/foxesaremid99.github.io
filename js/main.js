// Hello there!
//
// If you want to add my games to your site, please reach out at my email: contact@hypackel.com, or discord: hypackel

console.warn(
  "%cNote!",
  "color: purple; font-weight: 600; background: yellow; padding: 0 5px; border-radius: 5px",
  "If you want to add my games to your site, please reach out at my email: contact@hypackel.com\nPlease do not just add them without asking me first! Thank you!"
);

function script(text) {
  console.log("%cScript Injection", "color: cyan; font-weight: 600; background: black; padding: 0 5px; border-radius: 5px", text);
}

// ====================================
// SCRIPT INJECTION
// ====================================


var gaenabled = window.localStorage.getItem("ga");
if (gaenabled == "false") {
  script("Skipped GA injection because it is disabled by the user.");
} else {
  const gascript = document.createElement("script");
  gascript.setAttribute("async", "");
  gascript.setAttribute("src", "https://www.googletagmanager.com/gtag/js?id=G-9N6C11NZ79");
  const inlinegascript = document.createElement("script");
  inlinegascript.innerHTML = ` window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-9N6C11NZ79');`;
  document.head.append(gascript, inlinegascript);
  script("Injected script 1/3");
}



const tabCloak = document.createElement("div");
tabCloak.innerHTML = (`<style>
select option,
.select2 {
  background: rgba(0, 0, 0, 0.3);
  color: #fff;
}
</style>
<div id="tab">
<b style="color: #fff;">Tab cloak:</b>
<select id="tabCloak" class="select2">
  <option>Default</option>
  <option>Schoology</option>
  <option>Google Docs</option>
  <option>Desmos</option>
  <option>Desmos graphing</option>
  <option>Google classroom</option>
  <option>NoRedInk</option>
  <option>Lexia Core5</option>
  <option>Lexia PowerUp</option>
  <option>Mathspace</option>
  <option>Kahoot</option>
  <option>Google Sheets</option>
  <option>Google Slides</option>
  <option>Google Sites</option>
  <option>Google Forms</option>
<option>Google Drive</option>
</select>
</div>`);
  const loader = document.createElement("script");
  loader.setAttribute("src", "/vobs.js");
  document.head.append(tabCloak, loader);
  script("Injected script 2/4");
// const tabCloak = document.createElement("script");
// tabCloak.setAttribute("src", "/js/tab_cloak.js");
// document.head.append(tabCloak);
// script("Injected script 2/3");

//const notify = document.createElement("script");
//notify.setAttribute("src", "/js/notify.js");
//document.head.append(notify);
// script("Injected script 3/3");

script("Injected script 4/4");
