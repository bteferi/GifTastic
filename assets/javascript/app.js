var topics=["cat","dog","mouse"];
// Create a loop that appends a button for each string in the array

// var serch_box_counter=0;
createbutton ();
function createbutton (){
  // $("#new_buttons").empty();
  for (var i=0; i<topics.length; i++){
      var button=$("<button>");
          button.addClass("animals");
          button.attr("data-animal",topics[i]);
            button.text(topics[i]);
              $("#new_buttons").append(button);

  }
};

//=================================================

$("#search_button").on("click", function(event) {
  event.preventDefault();
  var search_box_value =$("#user_input").val().trim();
    topics.push( search_box_value);
    // console.log(topics);

    var button=$("<button>");
        button.addClass("animals");
        button.attr("data-animal",search_box_value);
          button.text(search_box_value);
            $("#new_buttons").append(button);

            button.on("click",myApiCall);
    // $( "form" ).empty();

   $("form")[0].reset();



});

//=======================================================================================
function myApiCall(){
  // console.log("hello");
$("#gifs").empty();

        var searched_item=$(this).attr("data-animal");


      var queryURL="http://api.giphy.com/v1/gifs/search?q=" +
      searched_item +
      "&api_key=T8WQV5Kku6r1KgW6Or6N7BvMpsKTjmcT&limit=10";

      $.ajax({
        url:queryURL,
        method:"GET"})
      .done(function(response){
        // console.log(response.data[0].images.original.mp4);
        // console.log(response.data[0].rating); // displays rating

        // creating a div to hold my animals
        console.log(response);
  var animalDiv=$("<div class='animals'>");
      // variables being created



    // this has the 10 datas
    var data=response.data;

    for (i=0; i<data.length; i++){
          var rating = response.data[i].rating;
            var image= response.data[i].images.fixed_height.url;


            console.log(rating);
          var p_rating =$("<p>").text("Rating: " + rating);
            // appening my new created par in the div
            // addign the rating in the div
            animalDiv.append(p_rating);



            var p_image=$("<img>").attr("src",image);
                animalDiv.append(p_image);

              //  placing all the animals under the other one

                $("#gifs").append(animalDiv);

    };




      // displaying it under a paragraph

      });

}

$("button").on("click",myApiCall);


// var image_still = response.data[i].images.original_still.url;


//============================================================
