var topics=["cat","dog","mouse"];
// Create a loop that appends a button for each string in the array
//
// var serch_box_counter=0;
createbutton ();
function createbutton (){
  $("#new_buttons").empty();
  for (var i=0; i<topics.length; i++){
      var button=$("<button>");
          button.addClass("animals");
          button.attr("data-animal",topics[i]);
            button.text(topics[i]);
              $("#new_buttons").append(button);

  }
};



$("#search_button").on("click", function(event) {
  event.preventDefault();
  var search_box_value =$("#user_input").val().trim();
    topics.push( search_box_value);
    // console.log(topics);
    createbutton ();
    // $( "form" ).empty();

   $("form")[0].reset();


   $("button").on("click",function()
   {
   // console.log("hello");
         var searched_item=$(this).attr("data-animal");
   console.log(searched_item);


   });



});

//=======================================================================================

$("button").on("click",function()
{
// console.log("hello");
      var searched_item=$(this).attr("data-animal");
console.log(searched_item);

    // var queryURL="http://api.giphy.com/v1/gifs/search?q=cat+food&api_key=T8WQV5Kku6r1KgW6Or6N7BvMpsKTjmcT";
    //
    // $.ajax({url:queryURL,
    //   method:"GET"})
    // .done(function(response){
    //   console.log(response);
    // })

});






//============================================================
