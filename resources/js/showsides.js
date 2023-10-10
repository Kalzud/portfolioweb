$(document).ready(function () {
    // Function to show/hide the corresponding card divs on hover
    $(".searchlist li").hover(function () {
        // Get the ID of the hovered list item
        var id = $(this).attr("id");

        // Show the corresponding card divs based on the ID
        $(".skillhiddenleft1, .skillhiddenleft2, .skillhiddenleft3, .skillhiddenleft4, .skillhiddenleft5, .skillhiddenleft6, .skillhiddenleft7, .skillhiddenleft8, .skillhiddenright1, .skillhiddenright2, .skillhiddenright3, .skillhiddenright4, .skillhiddenright5, .skillhiddenright6, .skillhiddenright7, .skillhiddenright8").hide();
        if (id === "searchlist1") {
            $(".skillhiddenleft1, .skillhiddenright1").show();
        } else if (id === "searchlist2") {
            $(".skillhiddenleft2, .skillhiddenright2").show();
        } else if (id === "searchlist3") {
            $(".skillhiddenleft3, .skillhiddenright3").show();
        } else if (id === "searchlist4") {
            $(".skillhiddenleft4, .skillhiddenright4").show();
        } else if (id === "searchlist5") {
            $(".skillhiddenleft5, .skillhiddenright5").show();
        } else if (id === "searchlist6") {
            $(".skillhiddenleft6, .skillhiddenright6").show();
        } else if (id === "searchlist7") {
            $(".skillhiddenleft7, .skillhiddenright7").show();
        } else if (id === "searchlist8") {
            $(".skillhiddenleft8, .skillhiddenright8").show();
        }
    });
});
