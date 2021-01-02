$(".reply-yes").click(function() {  
      // add a reply for Homer when the "Reply Yes" button is clicked
    // what jQuery action could we use here...
    $(".homers-reply").text("Ok!");
    
   
    // Use the .css() action to make the site change in another way when you click the "Reply Yes" button
    $("body").css("background-color", "green");
});



