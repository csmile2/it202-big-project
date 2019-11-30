// console.log("Using API https://newsapi.org/")
// API: https://newsapi.org/
// KEY: e65da836c72f4e8894103a8e401cff95
// API: https://restcountries.eu/rest/v2/all

function drawRegionCards(){
    $("#countriesView").empty();
    var regions = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania'];
    for(var i = 0; i < regions.length; i ++){
        var cardClone = $(".cardTemplate").clone();
        cardClone.find(".mdc-card__media-content").text(regions[i]);
        cardClone.removeClass("cardTemplate");
        cardClone.css("background-image", "url(images/"+regions[i]+".jpg)");
        $("#countriesView").append(cardClone);
        cardClone.attr("id",regions[i]);
        cardClone.on("click", function(){
            // console.log($(this).attr("id"));
            $("#countriesView").empty();
            drawByRegion($(this).attr("id"));
        });
    }
}

function drawByRegion(region){
    console.log("Going to fetch everything in: " + region);
    var url = "https://restcountries.eu/rest/v2/region/"+region;
    console.log("Fetching from this url" + url);
    $.get(url, function(res){
        $.each(res, function(u,v){
            var cardClone = $(".cardTemplate").clone();
            cardClone.find(".mdc-card__media-content").text(v.name);
            cardClone.removeClass("cardTemplate");
            // console.log(v);
            cardClone.css("background-image", "url("+v.flag+")");
            
            $("#countriesView").append(cardClone);
        });
    });
    $("span:contains('Explore')").on("click", function(){
        console.log($(this).attr("id"));
    });

}


$(document).ready(function(){

    drawRegionCards();


});
