<!DOCTYPE html>
<!--
	This fragment shows how to push elements to an array.

	Mark Veltzer <mark.veltzer@gmail.com>
-->
<html>
	<head>
		<title>Array push</title>
		<script>
			var arr=[];
			arr.push("one");
			arr.push("two");
			arr.push("three");
			document.write("length(arr)="+arr.length+"<br>");
			for(var x in arr) {
				document.write(x+" ---> "+arr[x]+"<br>");
			}
			arr.pop(1);
			for(var x2 in arr) {
				document.write(x2+" ---> "+arr[x2]+"<br>");
			}
		</script>
	</head>
</html>
