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

function drawNewsModal(country){
    var url = 'https://newsapi.org/v2/everything?' +
          'q='+country+'&' +
          'from=2019-12-04&' +
          'sortBy=popularity&' +
          'apiKey=e65da836c72f4e8894103a8e401cff95';

    $.get(url, function(res){
        console.log(res["articles"][0]);
        var dialog = $(".dialogTemplate").clone();
        dialog.find("mdc-dialog__title").text(country);
        dialog.removeClass("dialogTemplate");
        // dialog.open();
        $("#countriesView").append(dialog);
    });


}

function explore(country){
    var url = "https://restcountries.eu/rest/v2/name/"+country;
    var dialogClone = $("#ex1").clone();
    $.get(url, function(res){
        console.log(res[0]);
        // $("h1#countryName").text(res[0]["name"]);
        dialogClone.find("#countryName").text(res[0]["name"]);
        dialogClone.find("#countryInfo").append(
            "Capital: "+res[0]["capital"]+"<br>"+
            "Population: "+res[0]["population"]+"<br>"+
            "Currency: "+res[0]["currencies"][0]["name"]
        );
        // $("p#countryInfo").append(
        //     "Capital: "+res[0]["capital"]+"<br>"+
        //     "Population: "+res[0]["population"]+"<br>"+
        //     "Currency: "+res[0]["currencies"][0]["name"]+"<br>"
        //     );
    });
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
            cardClone.attr("id", v.name);
            console.log("creating a card for " + v.name);
            $("#countriesView").append(cardClone);
        });
        $(".mdc-button__label:contains('View News')").on("click", function(){
            var country = $(this).closest(".mdc-card").attr("id");
            console.log("Viewing news for this country: " + country);
            drawNewsModal(country);
        });
        $(".mdc-button__label:contains('Explore')").on("click", function(){
            var country = $(this).closest(".mdc-card").attr("id");
            console.log("Exploring : " + country);
            explore(country);
        });
    });



}


$(document).ready(function(){

    drawRegionCards();


});
