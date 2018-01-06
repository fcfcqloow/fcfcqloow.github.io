$(function(){
	var count = 0;
	$("#link").click(function(event) {
		$("footer").html('<p id="link"> Link (。´･ω･) </p> '+ 
			'<a href="./kuzu/howTo_ver1.txt" download="howTo_ver1.txts">About library for java(ver1)　/　</a>' +
			'<a href="./kuzu/howTo_ver2.txt" download="howTo_ver2.txt">About library for java(ver2)　/　</a><br>' + 
			'<a href="./kuzu/code1.txt" download="code_ver1.txt">Code for java(ver1)　/　</a>' +
			'<a href="./kuzu/code2.1.txt" download="code_ver2.txt">Code for java(ver2)　/　</a><br>' +
			'<a href="./gomibako/java/TwitterControll.java" download="TwitterControll.java">TwitterController for Twitter4j&nbsp</a> <br><br>' +
			'<a href="https://developers.google.com/speed/libraries/">jquery by google</a><br>' +
			'<a href="http://sass-lang.com/install">scss install</a><br>' +
			'<a href="https://www.java.com/ja/">java download</a><br>' +
			'<a href="http://twitter4j.org/ja/index.html">Twitter4j</a><br>' +
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