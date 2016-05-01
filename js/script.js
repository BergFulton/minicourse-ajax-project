
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
    console.log(streetAd);
    var cityAd = $('#city').val();
    console.log(cityAd);
    var fullAd = streetAd + ',' + cityAd;
    $greeting.text('Great, you want to live at' + fullAd + '!')
    var streetviewURL = 'http://maps.googleapis.com/maps/api/streetview?size=600x400&location=' + fullAd + '';
    $body.append('<img class="bgimg" src=" ' +streetviewURL + '">');
    return false;
};

$('#form-container').submit(loadData);
