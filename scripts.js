console.log("Using API https://newsapi.org/")
// API: https://newsapi.org/
// KEY: e65da836c72f4e8894103a8e401cff95
$(document).ready(function(){
    $.get("https://restcountries.eu/rest/v2/all", function(res){
        $.each(res, function(u,v){
            console.log(v);
            $("#countriesView").append(
                "<b>"+v.name+":</b></br>"
            );
        });

    });
})