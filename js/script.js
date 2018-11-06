jQuery(document).ready(function ($) 
{
	$(".close").click(function(){
		$(".some-sec").removeClass("some-sec").addClass("show-nothing");
	});
	$('a').click(function(){
		alert("Открылось " + this.text);
	});
	$('.login-entry').click(function(){
		alert("Выполняется вход посетителя: " + $('.login-form-input').val());
	});
	$('.facebook').click(function(){
		alert("Выполняется вход посетителя через facebook");
	});
	$('.twitter').click(function(){
		alert("Выполняется вход посетителя через twitter");
	});
	$('.google').click(function(){
		alert("Выполняется вход посетителя через google");
	});
	$('.agree').click(function(){
		alert("Согласен");
	});
	$('.cancel').click(function(){
		alert("Отмена");
	});
});