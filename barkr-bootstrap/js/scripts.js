
$("#eventsBtn").click( function () {    
    $("#gsc-i-id1").val("dog events baltimore");
    $(".gsc-search-button-v2").click();
})

$("#eventsBtn").click( function () {
    $("#adventure-search").css({display:"block"});
    $("#adventure-map").css({display:"none"});
})

$("#mapBtn").click( function () {
    $("#adventure-search").css({display:"none"});
    $("#adventure-map").css({display:"block"});
})
 
//FIXME: this should make the "talk to me" videos play/pause on mouseover/out.  
/*const videos=$("video").toArray();
for (i=0; i<=videos.length; i++) {
    videos[i].hover( function() {
        videos[i].play();
    }, function() {
        videos[i].pause();
        videos[i].currentTime = 0;
    });
}*/