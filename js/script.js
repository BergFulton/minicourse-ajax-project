
function loadData() {

    var $body = $('body');
    var $wikiElem = $('#wikipedia-links');
    var $nytHeaderElem = $('#nytimes-header');
    var $nytElem = $('#nytimes-articles');
    var $greeting = $('#greeting');

    // clear out old data before new request
    $wikiElem.text("");
    $nytElem.text("");

    // load streetview

    var streetAd = $('#street').val();
    var cityAd = $('#city').val();
    var fullAd = streetAd + ',' + cityAd;
    $greeting.text('Great, you want to live at' + fullAd + '!')
    var streetviewURL = 'http://maps.googleapis.com/maps/api/streetview?size=600x400&location=' + fullAd + '';
    $body.append('<img class="bgimg" src=" ' + streetviewURL + '">');
    return false;

//NYTimes Ajax request. Pretty please. 
     var timesURL = 'http://api.nytimes.com/svc/search/v2/articlesearch.json?q=' +
        cityAd + '&sort=newest&api-key=ea2b201fd46538db3668d93077d41282:8:75159936'
         $.getJSON(timesURL, function(data){

             $nytHeaderElem.text('New York Times Articles about ' + cityAd);

             articles = data.response.docs;
             for (var i = 0; i < articles.length; i++) {
                 var article = articles[i];
                 $nytElem.append('<li class="article">'+
                     '<a href="'+article.web_url+'">'+article.headline.main+'</a>'+
                     '<p>' + article.snippet + '</p>' +
                     '</li>');
             };
         })

};

$('#form-container').submit(loadData);
