$(function() {
	
	 $("#btnGetMsg").click(function(){
		$.ajax({
			url:"ws/chatservice.php",
			type:"POST",
			data:{flag:'test',name:"jim"},
			success:function(res){
				alert(res);
			}
		});
	 });
	
});