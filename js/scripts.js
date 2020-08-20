//function loadData() {
    //var $body = $('body');
    //var $wikiElem = $('#wikipedia-links');
    //var $nytHeaderElem = $('#nytimes-header');
    //var $nytElem = $('#nytimes-articles');
    //var $greeting = $('#greeting');

    // clear out old data before new request
    //$wikiElem.text("");
    //$nytElem.text("");

    /*var streetStr = $('#street').val();
    var cityStr = $('#city').val();
    var address = streetStr + ', ' + cityStr;

    $greeting.text('So, you want to live at ' + address + '?');

    var streetviewUrl = 
    'http://maps.googleapis.com/maps/api/streetview?size=600x400&location='
    + address + '';
    $body.append('<img class="bgimg" src="' + streetviewUrl + '">');*/

    // Your NYTimes AJAX request goes here
    function topStories(topStoriesURL) {
        $.getJSON(topStoriesURL, function(data) {
          if (data.error) {
            alert('error!'); // TODO: Add better error handling here
          } else {
            data.results.forEach(function(result) {
              var link = result.url,
                cardTitle = result.title,
                postedBy = result.byline == "" ? result.source : result.byline,
                hasMultimedia = (result.multimedia || []).length > 0,
                imgSource = hasMultimedia ? result.multimedia[result.multimedia.length - 1].url : null;
              createCardElement(link, cardTitle, postedBy, imgSource);
            });
          }
        });
      }
      
      function createCardElement(link, title, postedBy, imgSource) {
        // create a single card element here
        console.log('Creating a card with arguments of ', arguments);
      }
      
      topStories('http://api.nytimes.com/svc/topstories/v2/home.json?api-key=ucM6Anm75NEUGvkwRAAq4j6VMicUt4ey');

/*$.getJSON(nytimesUrl, function(data){

    //$nytHeaderElem.text('New York Times Articles About ' + cityStr);

    /*articles = data.response.docs;
    for (var i = 0; i < articles.length; i++)
    {
        var article = articles[i];
        $nytElem.append('<li class="article">'+
        '<a href="'+article.web_url+'">'+article.headline.main+
            '</a>'+
        '<p>' + article.snippet + '</p>'+
    '</li>');
    };
    console.log(data);
})*/