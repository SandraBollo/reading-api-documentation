/*
##### TV Maze
https://www.tvmaze.com/ap

1. What is the average rating for the show Better Call Saul?

2. When was the premiere date for the 9th season of Friends?

3. How many shows has actor Andrew Grimes (of the Walking Dead) appeared in?
*/

const answerElement_show_1 = document.getElementById('tvmaze-1')

request.get('http://api.tvmaze.com/search/shows?q=Saul')
  .then((element) => {
      console.log(element.body[0].show.rating.average);


answerElement_show_1.innerHTML = element.body[0].show.rating.average

  })



  const answerElement_show_2 = document.getElementById('tvmaze-2')

  request.get('http://api.tvmaze.com/shows/431/seasons')
    .then((element) => {
        console.log(element.body[8].premiereDate);

        answerElement_show_2.innerHTML = element.body[8].premiereDate

    })



    const answerElement_show_3 = document.getElementById('tvmaze-3')

    request.get('http://api.tvmaze.com/shows/73/cast')
      .then((element) => {
          answerElement_show_3.innerHTML = `<p> no existe </p>`

      })
