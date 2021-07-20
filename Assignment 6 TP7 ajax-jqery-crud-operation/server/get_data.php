<?php

if ($dbc = @mysqli_connect('localhost','root', ''))
{
   // Handle the error if the database couldnot be selected:
    if (@mysqli_select_db($dbc,'EmplyeeDB'))
    {
        $result = array();

        $q = "SELECT * FROM emplyees";

        $r=mysqli_query($dbc,$q);
        if($r){
         while($row=mysqli_fetch_array($r,MYSQLI_ASSOC))
         {
             $result[]=$row;
         }
        }
        //then transform the result from a reagular array into a json form  
       echo json_encode($result), "\n";

    }
}

?>