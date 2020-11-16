
  var save = [];
  var arr = [];
  console.log("working");

  //Using ajax to fetch data on clicked

  // $("body").click(function(){
    function updateMap() {

    $.get("https://www.trackcorona.live/api/countries",function(data, status){
     save = data;
     arr = save.data;
      console.log(arr);
  //for marking
  // console.log(arr[0].latitude,arr[0].longitude);
for (var i = 0; i < arr.length; i++) {

  let longitude = arr[i].longitude;
  let latitude = arr[i].latitude;
   cases=arr[i].dead;
   // console.log(cases);

  if (cases<=100) {
    color1 = `rgb(0,255,0)`;
  }
  else if (cases<=1000) {
    color1 = `rgb(200,200,0)`;
  }
  else if (cases<=10000) {
    color1 = `rgb(255,0,0)`;
  }
  else {
    color1 = `rgb(30,0,0)`;
  }
  console.log(color1);
   marker = new mapboxgl.Marker({ color : color1})
 .setLngLat([longitude, latitude])
 .addTo(map);
}


});
}
updateMap();


// });
