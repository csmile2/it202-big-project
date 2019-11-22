// console.log("Using API https://newsapi.org/")
// API: https://newsapi.org/
// KEY: e65da836c72f4e8894103a8e401cff95
// API: https://restcountries.eu/rest/v2/all

$(document).ready(function(){
    $.get("https://restcountries.eu/rest/v2/all", function(res){
        $.each(res, function(u,v){
            console.log(v);

            var cardClone = $(".cardTemplate").clone();
            cardClone.find(".mdc-card__media-content").text(v.name);
            cardClone.removeClass("cardTemplate");
            $("#countriesView").append(cardClone);

            // $("#countriesView").append(
            //     "<b>"+v.name+":</b></br>"
            // );
        });

    });
})