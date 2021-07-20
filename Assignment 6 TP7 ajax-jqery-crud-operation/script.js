$(document).ready(function(){
            
    get_Data();
    

    $("#insert").click(function(){
        $(".rows").empty();
        var name=$("#name").val();
        var gender=$("#gender").val();
        var salary=$("#salary").val();
        var employeeObject = {
            name: name,
            gender : gender,
            salary : salary
        };
         $.ajax({
            url : 'server/insert_data.php',
            type: 'POST',
            dataType: 'text',
            data: employeeObject,
            success : function(response){
                $("#message").html(response);
                get_Data();
            },
            error : function(){
                $("#message").html("error in requesting the server...");
            } 
            
        });
        $("#name").val('');
        $("#gender").val('');
        $("#salary").val('');
   
    });

    

    function get_Data(){

            $.get('server/get_data.php' , function(result){

                if(result){
                    data = $.parseJSON(result);
                    $.each(data, function(i, item) {
                        
                     $("tbody").append(
                         '<tr class="rows" >'+
                             '<td>'+ item.ID + '</td>'+
                             '<td><input type="text" id="updateName'+item.ID+'" class="updatedName" value="'+ item.Name + '" disabled/></td>'+
                             '<td><input type="text" id="updatedGender'+item.ID+'" class="updatedGender" value="'+ item.Gender + '" disabled/></td>'+
                             '<td><input type="text" id="updatedSalary'+item.ID+'" class="updatedSalary" value="'+ item.Salary + '" disabled/></td>'+
                             '<td>'+
                                '<button class="btn-primary" id="update'+item.ID+'" type="button"  >Update</button> <button type="button" id="delete'+item.ID+'" class="btn-danger">Delete</button> '+
                             '</td>'+
                            
                             '</tr>' 
                        ); 

                                $("#update"+item.ID).click(function()
                                {
                                    Update(item.ID);
                                })

                                $("#delete"+item.ID).click(function()
                                {
                                    Delete(item.ID);
                                })
                                

                        });
                }
            })  
        }

    
      function Update(id){


            
       $("#update"+id).attr("class","btn-warning");
       $("#update"+id).html("Save");
       $("#update"+id).click(function(){
           updateData(id);
       })
       $("#updateName"+id).prop('disabled', false);
       $("#updatedGender"+id).prop('disabled',false);
       $("#updatedSalary"+id).prop('disabled', false);

      }
      function updateData(id){
        var updatedname = $("#updateName"+id).val();
        var updatedgender= $("#updatedGender"+id).val();
        var updatedsalary = $("#updatedSalary"+id).val();
       
        var updatedDataObject = {
            id:id,
            updatedname : updatedname,
            updatedgender : updatedgender,
            updatedsalary : updatedsalary
        };
        $(".rows").empty();

        //alert(updatedDataObject.updatedname)
        //alert(updatedDataObject.updatedgender)
       // alert(updatedDataObject.updatedsalary)
        
        $.ajax({
            url : 'server/update_data.php',
            type: 'POST',
            dataType: 'text',
            data: updatedDataObject,
            success : function(response){
                $("#message").html(response);
                get_Data();
            },
            error : function(){
                $("#message").html("error in requesting the server...");
               
            } 
            
        });
        
      }
    

      function Delete(id){
        $(".rows").empty();
        var deleteidobject = {
                id : id
        };
       
        $.ajax({
            url : 'server/delete_data.php',
            type: 'POST',
            dataType: 'text',
            data: deleteidobject,
            success : function(response){
                $("#message").html(response);
                get_Data();
            },
            error : function(){
                $("#message").html("error in requesting the server...");
               
            } 
            
        });
       

    }
  

})