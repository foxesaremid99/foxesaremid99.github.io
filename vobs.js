setIcon();

document.getElementById("tabCloak").addEventListener("change", function (event) {
    localStorage.setItem('tabCloak', event.target.value);
    console.log(localStorage.getItem("tabCloak"))
    setIcon();
})

function setIcon() {
    if (localStorage.getItem("tabCloak") === null) {
        localStorage.setItem("tabCloak", "Default")
    }
    var icon = localStorage.getItem('tabCloak')
    document.getElementById("tabCloak").value = icon
    var link = window.document.querySelector("link[rel~='icon']");
    if (!link) {
        link = window.document.createElement('link');
        link.rel = 'icon';
        window.document.getElementsByTagName('head')[0].appendChild(link);
    }   
    if (icon == "Default") {
        link.href = '/favicon.svg';
        document.title = "Home | Warninn"
    }
    if (icon == "Schoology") {
        link.href = 'https://asset-cdn.schoology.com/sites/all/themes/schoology_theme/favicon.ico';
        document.title = "Home | Schoology"
    }
    if (icon == "Google Docs") {
        link.href = 'https://ssl.gstatic.com/docs/documents/images/kix-favicon7.ico';
        document.title = "Google Docs"
    }
    if (icon == "Google Sheets") {
        link.href = 'https://ssl.gstatic.com/docs/spreadsheets/favicon3.ico';
        document.title = "Google Sheets"
    }
    if (icon == "Google Slides") {
        link.href = 'https://ssl.gstatic.com/docs/presentations/images/favicon5.ico';
        document.title = "Google Slides"
    }
    if (icon == "Google Sites") {
        link.href = 'https://ssl.gstatic.com/atari/images/public/favicon.ico';
        document.title = "Google Sites"
    }
    if (icon == "Google Forms") {
        link.href = 'https://ssl.gstatic.com/docs/spreadsheets/forms/favicon_qp2.png';
        document.title = "Google Forms"
    }
    if (icon == "Desmos") {
        link.href = 'https://www.desmos.com/assets/img/apps/scientific/favicon.ico';
        document.title = "Desmos | Scientific Calculator"
    }
    if (icon == "Desmos graphing") {
        link.href = 'https://www.desmos.com/assets/img/apps/graphing/favicon.ico';
        document.title = "Desmos | Graphing Calculator"
    }
    if (icon == "Google classroom") {
        link.href = 'https://ssl.gstatic.com/classroom/favicon.png';
        document.title = "Classes"
    }
    if (icon == "NoRedInk") {
        link.href = 'https://www.noredink.com/favicon.svg';
        document.title = "Student Home | NoRedInk"
    }
    if (icon == "Lexia Core5") {
        link.href = 'https://www.lexiacore5.com/icons/icon.svg';
        document.title = "Lexia Core5"
    }
    if (icon == "Lexia PowerUp") {
        link.href = 'https://www.lexiapowerup.com/favicon.svg';
        document.title = "Lexia PowerUp"
    }
    if (icon == "Mathspace") {
        link.href = 'https://mathspace.co/website/favicons/favicon-32x32.png';
        document.title = "Mathspace"
    }
    if (icon == "Kahoot") {
        link.href = 'https://assets-cdn.kahoot.it/controller/v2/favicon.svg';
        document.title = "Enter Game PIN - Kahoot!"
    }
}