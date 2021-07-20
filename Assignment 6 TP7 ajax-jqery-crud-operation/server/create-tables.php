
<?php // Script 12.4 - create_table.php
	/* This script connects to the MySQL server, selects the database, and creates a table. */

	// Connect and select:
	if ($dbc = @mysqli_connect('localhost','root', ''))
	{
       // Handle the error if the database couldnot be selected:
		if (@mysqli_select_db($dbc,'EmplyeeDB'))
		{
            
            
            
            $employee_table='CREATE TABLE Emplyees (
            ID INT UNSIGNED NOT NULL  PRIMARY KEY AUTO_INCREMENT,
            Name varchar(50),
            Gender varchar(50),
            Salary INT
            )';
            
            
        
    // Execute the query:
	     if(@mysqli_query($dbc,$employee_table))
		{
			print '<p> The table has been created.</p>';
		}
            else{
                echo"error";
            }

          
	    
       
           
        }
         
  

    mysqli_close($dbc); // Close the connection.

  
	}
?>
 