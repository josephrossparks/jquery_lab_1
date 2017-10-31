var nameInput;
var phoneInput;
var partyInput;

$('.available').on('click', function() {//When you click an available table...

	var reservedOrNot = $(this).attr('class');

	if (reservedOrNot === 'reserved') {
		//Nothing
	} else {

		$(this).removeClass('available').addClass('selected');
		var tableNumber = $(this).text();
		$('#tableNumber').text(tableNumber);
		$('#formWrap').css('display', 'flex');//The form appears...
	}

});

$('#cancelForm').on('click', function() { //Cancel Form Button
		$('.selected').removeClass('selected').addClass('available');
		$('#nameInput, #phoneInput, #partyInput').val('');
		$('#formWrap').css('display', 'none');
	});


$('#reserveButton').on('click', function() {//When the reserve button is clicked...
			
	nameInput = $('#nameInput').val();//Grab value inputs...
	phoneInput = $('#phoneInput').val();;
	partyInput = $('#partyInput').val();;

	if (nameInput != '' && phoneInput != '' && partyInput != '') {//Verify Inputs were filled...
		
		$('#formWrap').css('display', 'none');//Hide Form once filled out.

		//$('#nameInput, #phoneInput, #partyInput').val('');//Clear form for next use.
		$('#nameInput').val('');
		$('#phoneInput').val('');
		$('#partyInput').val('');

		$('.selected').removeClass('selected').addClass('reserved');

	} else {
		alert('Please fill out all fields!');//Prompt user to finish form.
	};
});

