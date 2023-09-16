function search() {
    var input = document.getElementById("search-bar").value.toLowerCase();
    if (input === "") {
        location.reload(); // Reload the page when the search bar is empty
    } else {
        var cards = document.getElementsByClassName("game-card");
        for (var i = 0; i < cards.length; i++) {
            var title = cards[i]
                .getElementsByTagName("h3")[0]
                .innerText.toLowerCase();
            if (title.indexOf(input) > -1) {
                cards[i].style.display = "";
            } else {
                cards[i].style.display = "none";
            }
        }
    }
}