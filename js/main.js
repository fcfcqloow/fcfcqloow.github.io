$(function() {
	var data_ary = ["2"];
	var array = [];
	$.when(
		$.ajax({
			url: "text.txt",
			type: "get",
			success : function(data) {
				data_ary = data.split("\n");
			},
			error:function(data) {
				alert("申し訳ありません。chrome以外で起動してください");
			}
		})
	).done(function(){
		for(var i in data_ary){
			$(".result").text(array[i]);
		}
		

	
	});

});

function texts(){
	return ""
}