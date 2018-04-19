// init modals
$(document).ready(function() {
  $('#rules').modal({
    dismissible: true,
    opacity: 0.5, // Opacity of modal background
    inDuration: 300, // Transition in duration
    outDuration: 200, // Transition out duration
    startingTop: '4%', // Starting top style attribute
    endingTop: '10%' // Ending top style attribute
  });
  $('#fight').modal({
    dismissible: false,
    opacity: 0.5, // Opacity of modal background
    inDuration: 400, // Transition in duration
    outDuration: 400, // Transition out duration
    startingTop: '4%', // Starting top style attribute
    endingTop: '10%' // Ending top style attribute
  });
  $('#lostGame').modal({
    dismissible: true,
    opacity: 0.5, // Opacity of modal background
    inDuration: 1200, // Transition in duration
    outDuration: 400, // Transition out duration
    startingTop: '4%', // Starting top style attribute
    endingTop: '10%' // Ending top style attribute
  });
});
