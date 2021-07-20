<?php // Script 12.4 - create_table.php
	/* This script connects to the MySQL server, selects the database, and creates a table. */

	// Connect and select:
	if ($dbc = @mysqli_connect('localhost','root', ''))
	{
       // Handle the error if the database couldnot be selected:
		if (@mysqli_select_db($dbc,'EmplyeeDB'))
		{

            if(isset($_POST['name']))
            {
                $name = $_POST['name'];
                $gender = $_POST['gender'];
                $salary = $_POST['salary'];

                $q = "INSERT INTO emplyees (Name , Gender , Salary) values ('$name','$gender','$salary') ";

                if(@mysqli_query($dbc,$q))
                        {
                            echo "<b>Employee Addedd succefully</b>";
                        }
            }

        }
    }
?>