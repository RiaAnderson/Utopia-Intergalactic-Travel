// function displayImages() {
//   var crew = $(this).attr("data-name");
  
//   var queryURL = "https://images-api.nasa.gov/search?q=crew/apod?api_key=mQlWtGVUjdgYKnMQe4clU9jPeyj60U6E9pRUPErv";
//   var queryURL ="https://api.nasa.gov/planetary/apod?api_key=mQlWtGVUjdgYKnMQe4clU9jPeyj60U6E9pRUPErv";
//   $.ajax({
//     url: queryURL,
//     method: "GET"
//   })
//   .then(function (response) {
//     var results = response.data;

//       var imgDiv = $("<div>");
//       var crewImage = $("<img>");
//       //crewImage.attr("src", results[i].images.fixed_height.url);
      
//       imgDiv.append(p);
//       imgDiv.append(crewImage);
//       $("#img-view").prepend(imgDiv);
//   }

//   )};

// displayImages()

// $.ajax({
//   url: "https://images-api.nasa.gov/search?q=crew/apod?api_key=mQlWtGVUjdgYKnMQe4clU9jPeyj60U6E9pRUPErv",
//   success: function(whatyougot){
//     document.getElementById("img").innerHTML="<img src="' + whatyougot.url + '" style='width:100%;'/>"; 
//     document.getElementById("title").innerHTML=whatyougot.title;
//     document.getElementById("copyright").innerHTML="By" + whatyougot.copyright;
//     document.getElementById("explanation").innerHTML=whatyougot.explanation;
//   }
// })


var req = new XMLHttpRequest();
var url = "https://api.nasa.gov/planetary/apod?api_key=";
var api_key = "mQlWtGVUjdgYKnMQe4clU9jPeyj60U6E9pRUPErv";

req.open("GET", url + api_key, true);
req.send();

req.addEventListener("load", function(){
	if(req.status == 200 && req.readyState == 4){
  	var response = JSON.parse(req.responseText);
    document.getElementById("title").textContent = response.title;
    document.getElementById("date").textContent = response.date;
    document.getElementById("pic").src = response.hdurl;
    document.getElementById("explanation").textContent = response.explanation;

    console.log(hdurl);
  }
})

