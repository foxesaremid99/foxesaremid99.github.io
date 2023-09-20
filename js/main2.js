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
  gascript.setAttribute("src", "https://www.googletagmanager.com/gtag/js?id=G-X1063DX5JG");
  const inlinegascript = document.createElement("script");
  inlinegascript.innerHTML = `window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-X1063DX5JG');`;
  document.head.append(gascript, inlinegascript);
  script("Injected script 1/3");
}
