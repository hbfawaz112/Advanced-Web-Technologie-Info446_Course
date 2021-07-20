<?php

if ($dbc = @mysqli_connect('localhost','root', ''))
{
   // Handle the error if the database couldnot be selected:
    if (@mysqli_select_db($dbc,'EmplyeeDB'))
    {
        if(isset($_POST['id']))
        {
            $idtodelete = $_POST['id'];
            
            $q = "DELETE FROM emplyees WHERE ID=".$idtodelete;

            if($r=mysqli_query($dbc,$q)){
                echo("delete employee with userid : . $idtodelete  seccussefly!");
            }

        }
    }
}
?> 