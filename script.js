$(function(){
     $('#buttondiv > input').on('click', 
                   function(){

  $(this).css("background-color", $(this).val())
                               });

    $(function insertJSON(urlStr, targetID) {
            $.getJSON(urlStr, function(data) {
                     
                    
                $.each(data, function(item) {
                       
                    });
    });
    $('#listdiv > input').on('click', insertJSON('GSP-Fire-Stations.json')); });
 });
