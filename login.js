function check(form)
{

if(form.userid.value == "martingathu" && form.pwd.value === "auntyalice")
{
	return true;
}
else if(form.userid.value == "Joel-359" && form.pwd.value === "otieno3")
{
	return true;
}
else if(form.userid.value == "shalomodida" && form.pwd.value === "Muthoni.12")
{
	return true;
}
else if(form.userid.value == "joan-w" && form.pwd.value === "JKinyua")
{
	return true;
}
else
{
	alert("Error invalid Username or Password")
	return false;
}
}
