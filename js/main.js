// Hello there!
//
// If you want to add my games to your site, please reach out at my email: echo-the-coder@tuta.io, or discord: 3kh0_#1791

console.warn(
  "%cNote!",
  "color: purple; font-weight: 600; background: yellow; padding: 0 5px; border-radius: 5px",
  "If you want to add my games to your site, please reach out at my email: hypackel@suchale.com\nPlease do not just add them without asking me first! Thank you!"
);

function script(text) {
  console.log("%cScript Injection", "color: cyan; font-weight: 600; background: black; padding: 0 5px; border-radius: 5px", text);
}

// ====================================
// SCRIPT INJECTION
// ====================================


  script("Injected script 1/4");


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
