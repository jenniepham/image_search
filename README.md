Input example:
/search phrase?offset=#
offset # = number of results

https://jennie-api-project-jpdomo.c9users.io/cute cat?offset=2


Output example:
{
    "url": "http://4.bp.blogspot.com/-MzZCzWI_6Xc/UIUQp1qPfzI/AAAAAAAAHpA/OTwHCJSWFAY/s1600/cats_animals_kittens_cat_kitten_cute_desktop_1680x1050_hd-wallpaper-753974.jpeg",
    "snippet": "Cute Cats #5 | Cute Cats",
    "thumbnail": "http://ts3.mm.bing.net/th?id=OIP.M8d00a1ef053f009e0f07bd4e0434882dH0&pid=15.1",
    "context": "http://9meow.blogspot.com/2012/10/cute-cats-5.html"
},
{
    "url": "http://1.bp.blogspot.com/-F9B7MrG9Vl8/T9uevPioqPI/AAAAAAAAACg/FQxPGkupdMk/s1600/cute+cat+pictures+(8).jpg",
    "snippet": "Cute Cats #3 | Cute Cats",
    "thumbnail": "http://ts3.mm.bing.net/th?id=OIP.M99ee82db994ef2a71f55c4c899838becH0&pid=15.1",
    "context": "http://9meow.blogspot.com/2012/06/cute-cats-3.html"
},

Log output example:

  { 'search terms': 'cute cat',
    date: Thu Oct 27 2016 04:48:52 GMT+0000 (UTC) },
  { 'search terms': 'snsd',
    date: Thu Oct 27 2016 05:01:09 GMT+0000 (UTC) },
  { 'search terms': 'banana',
    date: Thu Oct 27 2016 05:01:25 GMT+0000 (UTC) },
  { 'search terms': 'person of interest',
    date: Thu Oct 27 2016 05:01:39 GMT+0000 (UTC) },
  { 'search terms': 'rice',
    date: Thu Oct 27 2016 05:44:29 GMT+0000 (UTC) } 