<?php

if ($dbc = @mysqli_connect('localhost','root', ''))
{
   // Handle the error if the database couldnot be selected:
    if (@mysqli_select_db($dbc,'EmplyeeDB'))
    {
        if(isset($_POST['id']))
        {
            $id=$_POST['id'];
            $updatedname = $_POST['updatedname'];
            $updatedgender = $_POST['updatedgender'];
            $updatedsalary = $_POST['updatedsalary'];

            //echo $id. $updatedname .  $updatedgender . $updatedsalary   ;
            $q = "uPDATE emplyees SET Name = '$updatedname' , Gender = '$updatedgender' , Salary='$updatedsalary' WHERE ID=".$id;

         $r=mysqli_query($dbc,$q);
            if(mysqli_affected_rows($dbc)==1){
                echo "Employee with ID : $id has updated!!";
            }

        }
    }
}
?> 