
//Define User Input Variables
var nameInput;
var phoneInput;
var partyInput;

//Info to be passed
var reservedOrNot;
var tableNumber;


//When you click an available table...
$('.available').on('click', function() {

	reservedOrNot = $(this).attr('class');//Get Reservation Status

	if (reservedOrNot === 'reserved') {//If its reserved, do nothing.
		
	} else {//If it's open, launch the reserveTable function...

		$(this).removeClass('available').addClass('selected'); //Select Table
		tableNumber = $(this).text(); //Get the table number and assign to variable
		$('#tableNumber').text(tableNumber); //assign the table number to the proper DOM ID

		showReservationForm();
	}

});


//Cancel Form Fucntion When 'X' is clicked.
$('#cancelForm').on('click', function() {
		$('.selected').removeClass('selected').addClass('available');//Reset the selected table to avail.
		$('#nameInput, #phoneInput, #partyInput').val('');//Clear Inputs
		$('#formWrap').css('display', 'none');//Close Form
});


//Makes form visible...
function showReservationForm() {
	$('#formWrap').css('display', 'flex'); //Display Form
}


//When "save is clicked or enter is pressed in the input fields..."
$('#reserveButton').on('click', saveReservation);
$('#nameInput, #phoneInput, #partyInput').on('keypress', function(event) {
    if (event.key === 'Enter') {
      saveReservation();
    }
});


function saveReservation() {

	nameInput = $('#nameInput').val();//Grab value inputs...
	phoneInput = $('#phoneInput').val();
	partyInput = $('#partyInput').val();

	if (nameInput != "" && phoneInput != "" && partyInput != "") {//Verify Inputs were filled...
		
		$('.selected').children('.details').append('Name: '+nameInput+'<br>').append('Size of party: '+partyInput); //Append reservations details to table's details
	
		$('.selected').removeClass('selected').addClass('reserved');//Switch table class to reserved.
		$('#formWrap').css('display', 'none');//Hide Form once filled out.
		$('#nameInput, #phoneInput, #partyInput').val('');//Clear form for next use.

	} else {
		alert('Please fill out all fields!');//Prompt user to finish form.
	}

}

//Mouseover Reserved Tables to Show Reservation Status
$('#tableFloorplan')
	.on('mouseenter', '.reserved', function() {
   	 	$(this).find('.details').css('display', 'block');
	})
	.on('mouseleave', '.reserved', function() {
   		$(this).find('.details').css('display', 'none');
	});

