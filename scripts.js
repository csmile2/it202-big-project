// console.log("Using API https://newsapi.org/")
// API: https://newsapi.org/
// KEY: e65da836c72f4e8894103a8e401cff95
// API: https://restcountries.eu/rest/v2/all

function drawRegionCards(){
    var regions = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania'];

    for(var i = 0; i < regions.length; i ++){

        var cardClone = $(".cardTemplate").clone();
        cardClone.find(".mdc-card__media-content").text(regions[i]);
        cardClone.removeClass("cardTemplate");
        cardClone.css("background-image", "url(images/"+regions[i]+".jpg)");
        $("#countriesView").append(cardClone);
    }
}

$(document).ready(function(){

    drawRegionCards();
    // $.get("https://restcountries.eu/rest/v2/all", function(res){
    //     $.each(res, function(u,v){
    //         console.log(v);
    //         var cardClone = $(".cardTemplate").clone();
    //         cardClone.find(".mdc-card__media-content").text(v.name);
    //         cardClone.removeClass("cardTemplate");
    //         $("#countriesView").append(cardClone);
    //     });
    // });



    // var regions = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania'];
    // var regionsLength = regions.length;
    
    // for(var i = 0; i < regionsLength; i++){
    //     console.log(regions[i]);
    //     var url = "https://restcountries.eu/rest/v2/region/"+regions[i];
    //     console.log("Fetching from this url" + url);
    //     $.get(url, function(res){
    //         $.each(res, function(u,v){
    //             // console.log(v);
    //             var cardClone = $(".cardTemplate").clone();
    //             cardClone.find(".mdc-card__media-content").text(v.name);
    //             cardClone.removeClass("cardTemplate");
    //             $("#countriesView").append(cardClone);
    //         });
    //     });
    // }
        
    // region
    // https://restcountries.eu/rest/v2/region/{region}
    // Search by region: Africa, Americas, Asia, Europe, Oceania


})