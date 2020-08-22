    // Your NYTimes AJAX request goes here
    var $nytApiKey = 'ucM6Anm75NEUGvkwRAAq4j6VMicUt4ey';
    var $queryString = 'article';
    $.ajax({

      'type': 'GET',
      'url': 'http://api.nytimes.com/svc/search/v2/articlesearch.json',
      data: {
          'q': queryString,
          'response-format': "jsonp",
          'api-key': nytApiKey,
          'callback': 'svc_search_v2_articlesearch'
      },
          success: function(data) {
          // passed function object for data processing 
          console.log(data);
      }
  });
      
      //topStories('http://api.nytimes.com/svc/topstories/v2/home.json?api-key=ucM6Anm75NEUGvkwRAAq4j6VMicUt4ey');
