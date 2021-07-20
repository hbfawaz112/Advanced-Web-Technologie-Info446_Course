<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html>
<body>
<?php
if ($dbc = @mysqli_connect('localhost','root', '')) //connect to server
 {
		print '<p>Successfully connected to MySQL!</p>';
		if (@mysqli_query($dbc,'CREATE DATABASE EmplyeeDB '))
		{
			print '<p>The database EmplyeeDB  has been created!</p>';
		}
		else
		{ // Could not create it.
			print '<p style="color: red;">Could not create the database because:
						<br />' . mysqli_error($dbc) . '.</p>';
		}
		if (@mysqli_select_db($dbc,'EmplyeeDB '))
		{
			print '<p>The database EmplyeeDB  has been selected.</p>';
		}
		else
		{
			print '<p style="color: red;">Could not select the database EmplyeeDB 
						because:<br/>' . mysqli_error($dbc) . '.</p>';
		}
		mysqli_close($dbc); // Close the connection.
}
else
{
	print '<p style="color: red;">Could not connect to
	MySQL:<br />' . mysqli_error($dbc) . '.</p>';
}
?>
</body>
</html>
