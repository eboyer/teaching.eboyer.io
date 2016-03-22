var total = 0;

// https://api.jquery.com/submit/
$('#entry').submit(enter);

function enter() {
  var entry = $('#newEntry').val();
  var entry = parseFloat(entry);
  currency = currencyFormat(entry);
  
  $('#entries').append('<tr><td></td><td>' + currency + '</td></tr>');
  
  total += entry;
  
 $('#total').html(currencyFormat(total));
  
 $('#newEntry').val('');

 return false;
}

function currencyFormat(number) {
	// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/parseFloat
  var currency = parseFloat(number);

  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toFixed
  currency = currency.toFixed(2);

  currency = '$' + currency;
  return currency;
}
