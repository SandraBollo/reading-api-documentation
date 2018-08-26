
// ##### National Highway Transit Safety Administration
// https://vpic.nhtsa.dot.gov/api/

// 1. How many types of Chevrolet models are registered with the NHTSA?

// 2. What are the vehicle types that Nissan has?



// 3. What are the types of models that exist for Toyota trucks in 2017?


const answerElement_vehicle = document.getElementById('nhtsa-2')

request.get('https://vpic.nhtsa.dot.gov/api/vehicles/GetVehicleTypesForMake/nissan?format=json')
  .then((element) => {
    console.log("======================", element.body.Results);


    var arryOfTypes = element.body.Results

    arryOfTypes .forEach(function(respuesta){
      console.log('=============', respuesta.VehicleTypeName);

      answerElement_vehicle.innerHTML +=
      ` <ul><li>${respuesta.VehicleTypeName}</li></ul>`



    })


  })

  const answerElement_models = document.getElementById('nhtsa-1')

  request.get('https://vpic.nhtsa.dot.gov/api/vehicles/getmodelsformake/Chevrolet?format=json')
    .then((element) => {
      console.log("///////////////", element.body.Results.length );


      answerElement_models.innerHTML = element.body.Results.length


    })




    const answerElement_Toyota = document.getElementById('nhtsa-3')

    request.get('https://vpic.nhtsa.dot.gov/api/vehicles/getmodelsformakeyear/make/toyota/modelyear/2017/vehicleType/truck?format=json')
      .then((element) => {
        console.log("--------------------------",element.body.Results);

        var arrayToyota = element.body.Results
         arrayToyota.forEach(function(resultado){

           answerElement_Toyota.innerHTML +=
           ` <ul><li>${resultado.Model_Name}</li></ul>`

         })





      })
