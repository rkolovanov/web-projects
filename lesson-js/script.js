jQuery('document').ready(function(){
	alert("Добро пожаловать на страницу!");
	jQuery('body').append('<a href="1/main.html">Сайт Kalich Games</a><br/>');
	jQuery('#button1').on('click', function(){
		var value1, value2, value3;
		value1 = jQuery('#in1').val();
		value2 = jQuery('#in2').val();
		alert("Значение 1: " + value1 + '\n' + "Значение 2: " + value2 + "\n")
		value1 = parseInt(value1);
		value2 = parseInt(value2);
		
		value3 = value1 + value2;
		
		alert("Сумма этих чисел: " + value3);

	});
	
});