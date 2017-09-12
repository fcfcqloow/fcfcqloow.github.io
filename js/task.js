$(function() {
	var data_ary = ["2"];
	var array = [];
	$.when(
		$.ajax({
			url: "text.txt",	
			type: "get",
			success : function(data) {
				data_ary = data.split("\r\n");
			},
			error:function(data) {
				alert("申し訳ありません。chrome以外で起動してください");
			}
		})
	).done(function(){

		for(var temp of data_ary){
			var datePSvalue = temp.split("-");
			$('#value').append("<tr><td class = 'dates'>"+ datePSvalue[0] + "</td><td class = 'values'>" + datePSvalue[1] + "</td></tr>");
		}
	});

});