# Beer Database
***

###### **Samir Talic, JavaScript2, Fend 16 @Nackademin** ######

##### Schoolproject in JavaScript2 - AJAX Assignment - Open APIs

 ##### My site is published at:<https://4886talga.github.io/BeerDatabase/>
 
 ##### GitHub Repo: https://github.com/4886Talga/BeerDatabase
 
 
 **App description**
 ***
 
 I should create an application that retrieves data from one or more open APIs and displays this data on an HTML page. I chose to make an application which search through Brewdog's expansive back catalogue of beer in a programmatic way.  
 
 
 **Functionality**
 ***
 
 ##### **User allows**
 
 + Fillter beers by
   + all beers
   + malt
   + hops
 + Search and pairs beer with food
   
  
 **Workflow**
 ***
 
 My plan was to organize this project according to MVC pattern, where in model I put my modules that take care of the logic that is behind the functionality. Controller is used as listener and responds to user requests. In View, I have functionality that manipulates DOM.
 
 Then in the Beer module I have used Module Pattern. Throughout the project, I tried to program according to Functional Programming, where I built my functions to take care of an task only and that they did not contaminate global space.
 
 The root endpoint should prefix all resources:
 ```javascript
 https://api.punkapi.com/v2/
 ```
 All parameters are optional and without them the API will just return the beers in ascending order from their ID. Parameters are passed in as a query string and can be chained together.
 
 All beer endpoints return a json array with a number of beer objects inside.

```javascript
 [
  {
    "id": 192,
    "name": "Punk IPA 2007 - 2010",
    "tagline": "Post Modern Classic. Spiky. Tropical. Hoppy.",
    "first_brewed": "04/2007",
    "description": "Our flagship beer that kick started the craft beer revolution. This is James and Martin's original take on an American IPA, subverted with punchy New Zealand hops. Layered with new world hops to create an all-out riot of grapefruit, pineapple and lychee before a spiky, mouth-puckering bitter finish.",
    "image_url": "https://images.punkapi.com/v2/192.png",
    "abv": 6.0,
    "ibu": 60.0,
    "target_fg": 1010.0,
    "target_og": 1056.0,
    "ebc": 17.0,
    "srm": 8.5,
    "ph": 4.4,
    "attenuation_level": 82.14,
    "volume": {
      "value": 20,
      "unit": "liters"
    },
    "boil_volume": {
      "value": 25,
      "unit": "liters"
    },
    "method": {
      "mash_temp": [
        {
          "temp": {
            "value": 65,
            "unit": "celsius"
          },
          "duration": 75
        }
      ],
      "fermentation": {
        "temp": {
          "value": 19.0,
          "unit": "celsius"
        }
      },
      "twist": null
    },
    "ingredients": {
      "malt": [
        {
          "name": "Extra Pale",
          "amount": {
            "value": 5.3,
            "unit": "kilograms"
          }
        }
      ],
      "hops": [
        {
          "name": "Ahtanum",
          "amount": {
            "value": 17.5,
            "unit": "grams"
           },
           "add": "start",
           "attribute": "bitter"
         },
         {
           "name": "Chinook",
           "amount": {
             "value": 15,
             "unit": "grams"
           },
           "add": "start",
           "attribute": "bitter"
         },
         ...
      ],
      "yeast": "Wyeast 1056 - American Ale™"
    },
    "food_pairing": [
      "Spicy carne asada with a pico de gallo sauce",
      "Shredded chicken tacos with a mango chilli lime salsa",
      "Cheesecake with a passion fruit swirl sauce"
    ],
    "brewers_tips": "While it may surprise you, this version of Punk IPA isn't dry hopped but still packs a punch! To make the best of the aroma hops make sure they are fully submerged and add them just before knock out for an intense hop hit.",
    "contributed_by": "Sam Mason <samjbmason>"
  }
]
```
The project was very instructive and I greatly expanded my knowledge of asynchronous JS and AJAX.
 
