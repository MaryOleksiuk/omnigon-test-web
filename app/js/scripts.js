var data = {
  "players": [
    {
      "name": "DeMar DeRozan",
      "shortcode": "derozan"
    },
    {
      "name": "Stephen Curry",
      "shortcode": "curry"
    },
    {
      "name": "Kevin Durant",
      "shortcode": "durant"
    },
    {
      "name": "James Harden",
      "shortcode": "harden"
    },
    {
      "name": "DeAndre Jordan",
      "shortcode": "jordan"
    },
    {
      "name": "Russell Westbrook",
      "shortcode": "westbrook"
    },
    {
      "name": "Chandler Parsons",
      "shortcode": "parsons"
    },
    {
      "name": "Kenneth Farried",
      "shortcode": "farried"
    },
    {
      "name": "Gordon Hayward",
      "shortcode": "hayward"
    },
    {
      "name": "Mike Conley",
      "shortcode": "conley"
    },
    {
      "name": "Dwight Howard",
      "shortcode": "howard"
    },
    {
      "name": "Trey Burke",
      "shortcode": ""
    }
  ],
  "navBlocks":[
    {
      "blockTitle": "Draft",
      "blockItem": [
        {
          "url": "",
          "text": "New vote"
        },
        {
          "url": "footballer",
          "text": "Serie A Footballet of the Year"
        }
      ]
    },
    {
      "blockTitle": "Active",
      "blockItem": [
        {
          "url": "jaguar",
          "text": "Unleash a Jaguar"
        },
        {
          "url": "wimbeldon",
          "text": "Choose best Wimbeldon player and win tickets to the finals"
        },
        {
          "url": "2015-music-moments",
          "text": "2015 Music Moments"
        }
      ]
    },
    {
      "blockTitle": "Closed",
      "blockItem": [
        {
          "url": "all-time-greats",
          "text": "All time greats"
        },
        {
          "url": "insane-dunks",
          "text": "Insane dunks"
        },
        {
          "url": "2014-music-moments",
          "text": "2014 Music Moments"
        }
      ]
    }
  ]
}

Handlebars.registerHelper('times', function(n, block) {
    var accum = '';
    for(var i = 0; i < n; ++i)
        accum += block.fn(i);
    return accum;
});

$(function() {
  // register player template
  var playerTemplate = $('#player-template').html();

  var compiledPlayerTemplate = Handlebars.compile(playerTemplate);
  $('#players-container').html(compiledPlayerTemplate(data));

  // register nav template
  var navTemplate = $('#nav-template').html();

  var compiledNavTemplate = Handlebars.compile(navTemplate);
  $('#nav-container').html(compiledNavTemplate(data));
});