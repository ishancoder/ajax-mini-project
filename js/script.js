
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


    var image_url = "https://maps.googleapis.com/maps/api/streetview?size=600x400&location="+address;
    console.log(image_url);

    $greeting.text("You live at " + address + "?");

    $("body").append("<img class='bgimg' id='bk-ground'\
        src='"+image_url+"'/>");
    // YOUR CODE GOES HERE!

    //Code for JSONP Request on mediawiki api
    var wikiurl = "https://en.wikipedia.org/w/api.php?action=opensearch&search="+city+"&format=json";

    var wikiresp = $.ajax(wikiurl,
        {"dataType":"jsonp",
         "success":function(data){
            var header = $("#wikipedia-header");
            header.text("Articles From" + data[0]);

            console.log(data[1]);
            console.log(data[2]);

            for (each in data[1]){
                $("#wikipedia-links").append("<li><a href="+data[3][each]+">"+data[1][each]+"</a></li>");
            }
            
         }});

    return false;
};

$('#form-container').submit(loadData);
