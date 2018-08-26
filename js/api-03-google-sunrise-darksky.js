/*
##### Geocoding
1. What are latitude longitude coordinates of Montreal?
  - https://maps.googleapis.com/maps/api/geocode/json?address=Montreal

2. What time does the sun set in Montreal (based on the Google geocode coordinates)?
  - https://sunrise-sunset.org/api

3. What is the weekly weather forecast in Montreal?
  - https://darksky.net/dev
  - Note: You will have to create an account.

*/


//========================================================================
//  (1) What are latitude longitude coordinates of Montreal?
//
//     - https://developers.google.com/maps/documentation/geocoding/start
//     = NOtE: You don't need an API key for this api
//

const answerElement_apimashup_1 = document.getElementById('apimashup-1')

  request.get(' https://maps.googleapis.com/maps/api/geocode/json?address=Montreal')
    .then((element) => {
      // console.log("///////////////", element.body.results);
      var resultado = element.body.results
       resultado.forEach(function(el){
         // console.log("_________________", el.geometry.location.lat);
         // console.log("_________________", el.geometry.location.lng)
      //
        answerElement_apimashup_1.innerHTML +=
         ` <ul><li>${el.geometry.location.lat}</li>
           <li>${el.geometry.location.lng}</li></ul>`

       })

    })




//========================================================================
//  (2) What time does the sun set in Montreal (based on the Google geocode coordinates)?

const answerElement_apimashup_2 = document.getElementById('apimashup-2')

request.get('https://api.sunrise-sunset.org/json?lat=45.5016889&lng=-73.567256')
  .then((element) => {
    // console.log("///////////////", element.body.results.sunset);
    answerElement_apimashup_2.innerHTML = element.body.results.sunset

  })


//========================================================================
//  (3) What is the weekly weather forecast in Montreal? (look for summary property in 'daily')

const answerElement_apimashup_3 = document.getElementById('apimashup-3')

request.get('https://api.darksky.net/forecast/7f29e470bfd49eb8225f961b0f6ad2dc/45.5016889,-73.567256')
  .then((element) => {
    console.log("///////////////", element.body.daily.summary);

    answerElement_apimashup_3.innerHTML = `<p>${element.body.daily.summary}</p>`

  })


//
