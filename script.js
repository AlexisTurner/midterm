$(function(){
     $('#buttondiv > input').on('click', 
                   function(){

  $(this).css("background-color", $(this).val())
                               });
$('#listdiv > input').on('click',function insertJSON() {
            $.getJSON('GSP-Fire-Stations.json', function(data) {
                     //alert(JSON.stringify(data.stations))
             
                data.stations.forEach(function(item) {
//                     alert(JSON.stringify(item));
                     
                $('select').append('<option value="'+ item.address +'">' + item.name + '</option>')    
                });
	         
       
            });
	
});
});
    
 
