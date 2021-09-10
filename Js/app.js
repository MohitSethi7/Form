$(".document").ready(function(){
							  
		$(".one").css("background-color","#00438a");
		$(".all").hide();
		$(".Solution1").show();
		
		
		$(".one").click(function() {
				   
				   $(".all_1").css("background-color","#7e9abd");
				   $(this).css("background-color","#00438a");
				   $(".all").hide();
				   $(".Solution1").show();
				   
				   
		});
		
		
		$(".two").click(function(){
				   
				   $(".all_1").css("background-color","#7e9abd");
				   $(this).css("background-color","#00438a");
				   $(".all").hide();
				   $(".Solution2").show();
				   $(".Solution2").css("background-color","lightcoral");
				   
		});
		
		
		$(".three").click(function(){
				   
				   $(".all_1").css("background-color","#7e9abd");
				   $(this).css("background-color","#00438a");
				   $(".all").hide();
				   $(".Solution3").show();
				   $(".Solution3").css("background-color","lightblue");
		});
		
		
		$(".four").click(function(){
				   
				   $(".all_1").css("background-color","#7e9abd");
				   $(this).css("background-color","#00438a");
				   $(".all").hide();
				   $(".Solution4").show();
				   $(".Solution4").css("background-color","lightgreen");
				   
		});
		
		
		$(".five").click(function(){
				   
				   $(".all_1").css("background-color","#7e9abd");
				   $(this).css("background-color","#00438a");
				   $(".all").hide();
				   $(".Solution5").show();
				   $(".Solution5").css("background-color","lightskyblue");
				   
		});
		
		
		$(".six").click(function(){
				   
				   $(".all_1").css("background-color","#7e9abd");
				   $(this).css("background-color","#00438a");
				   $(".all").hide();
				   $(".Solution6").show();
				   $(".Solution6").css("background-color","lightpink");
				  
		});
		
		$(".reset_1").click(function(){
				   
				  $('.reset_1')[0].reset();
				  
		});
		
 $(function() {
        $("input[name='numonly']").on('input', function(e) {
            $(this).val($(this).val().replace(/[^0-9]/g, ''));
        });
    });	

 
 $(function() {
        $("input[name='alphaonly']").on('input', function(e) {
            $(this).val($(this).val().replace(/[^A-z]/g, ''));
        });
    });	
 
 
 
 /* $(".input").on("focus", function(e) {							   
							
							$(".this").focus(); 
							keyPressed();
							tabindex="1";
				
	
	   					 });*/
	
var tabVar = Number(1);
							

	if(tabindex >= 41){
		
		 tabindex = 1;
	}

/*function onlyNumberKey(evt) {
         
        
        var ASCIICode = (evt.which) ? evt.which : evt.keyCode
        if (ASCIICode > 31 && (ASCIICode < 48 || ASCIICode > 57))
            return false;
        return true;
    }
*/
});