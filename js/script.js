
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
    $("img").remove("#bk-ground");

    var street = $("#street").val();
    var city = $("#city").val();
    if (street && city) {
        var address = street + ", " + city
    } else {
        var address = street || city;
    }
    var image_url = "https://maps.googleapis.com/maps/api/streetview?size=600x300&location="+address;
    console.log(image_url);

    $("body").append("<img class='bgimg' id='bk-ground' src='"+image_url+"'/>");
    // YOUR CODE GOES HERE!

    return false;
};

$('#form-container').submit(loadData);
