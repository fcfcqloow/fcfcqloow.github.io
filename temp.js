$(function(){
	var count = 0;
	$("#link").click(function(event) {
		$("footer").html('<p id="link"> Link (。´･ω･) </p> '+ 
			'<a href="./kuzu/howTo_ver1.txt" download="howTo_ver1.txt">About library for java(ver1)　/　</a>' +
			'<a href="./kuzu/howTo_ver2.txt" download="howTo_ver2.txt">About library for java(ver2)　/　</a>' + 
			'<a href="./kuzu/howTo_ver5.txt" download="howTo_ver5.txt">About library for java(ver5)　/　</a><br>' + 
			'<a href="./kuzu/code1.txt" download="code_ver1.txt">Code for java(ver1)　/　</a>' +
			'<a href="./kuzu/code2.1.txt" download="code_ver2.txt">Code for java(ver2)　/　</a>' +
			'<a href="./kuzu/code3.0.4.txt" download="code_ver3.0.4.txt">Code for java(ver3)　/　</a>' +
			'<a href="./kuzu/code5.0.0.txt" download="code_ver5.0.0.txt">Code for java(ver5)　/　</a><br>' +
			'<a href="./gomibako/java/TwitterControll.java" download="TwitterControll.java">TwitterController for Twitter4j&nbsp</a> <br><br>' +
			'<a href="https://developers.google.com/speed/libraries/">jquery by google</a><br>' +
			'<a href="http://sass-lang.com/install">scss install</a><br>' +
			'<a href="https://www.java.com/ja/">java download</a><br>' +
			'<a href="http://twitter4j.org/ja/index.html">Twitter4j</a><br>' +
			'<a href="https://hackmd.io/e5rhXmW3QZ-VtvT-J5FFQg?both">Hackmd</a><br>' +
			'<br>'
			);

	});
	$("#link").hover(function() {
		$(this).text('(;´･ω･)');
	}, function() {
		$(this).text('(。´･ω･)? ');
	});
	$('#btn').click(function(event) {
		count += 1;		
		if(count == 3){
			location.href = './set.zip';
			$("body").randomBG();
		}
	});
});