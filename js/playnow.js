function valName(name)
{
    if(name.length != 0)
    {
        document.getElementById('namewarn').innerHTML = "";
        return true;
    }

    document.getElementById('namewarn').innerHTML = "* Name must be filled out";
    return false;
}

function valAge(age)
{
    var warnMsg;
    var error = false;

    if(age.length == 0 || isNaN(age))
    {
        warnMsg = "* Inputted value is not a number"
        error = true;
    }
    else if(age < 18)
    {
        warnMsg = "* You need to be atleast 18 years old to play this game"
        error = true;
    }

    if(error)
    {
        document.getElementById('agewarn').innerHTML = warnMsg;
    }
    else
    {
        document.getElementById('agewarn').innerHTML = "";
    }

    return !error;
}

function valRegion(region)
{
    if(region.length != 0)
    {
        document.getElementById('regionwarn').innerHTML = "";
        return true;
    }

    document.getElementById('regionwarn').innerHTML = "* You need to pick one region.";
    return false;
}

function valUname(uname)
{
    if(uname.length != 0)
    {
        document.getElementById('unamewarn').innerHTML = "";
        return true;
    }

    document.getElementById('unamewarn').innerHTML = "* Username must be filled out";
    return false;
}

function valEmail(email)
{
    var error = false;
    var warnMsg = "";

    var len = email.length;
    var atSym = email.indexOf("@");
    var dot = email.lastIndexOf(".");


    if(email.length == 0)
    {
        error = true;
        warnMsg = "* Email must be filled out";
    }
    else if(
        atSym < 3 || // harus ada symbol @ dan ga boleh didepan
        dot == -1 || // harus ada .
        Math.abs(atSym - dot) < 4 || // harus ada jarak antara @ dan .
        email.substr(dot + 1, len - 1) != "com" // di belakang . harus ada com
    )
    {
        console.log(atSym);
        console.log(dot);
        console.log(Math.abs(atSym - dot));
        console.log(email.substr(dot, len - 1));
        error = true;
        warnMsg = "* Input a valid email";
    }

    if(error)
    {
        document.getElementById('emailwarn').innerHTML = warnMsg;
    }
    else
    {
        document.getElementById('emailwarn').innerHTML = "";
    }

    return !error;
}

function valPwd(pwd)
{
    var error = false;
    var warnMsg = "";
    var len = pwd.length;
    var isNum = false, isAlpha = false;

    if(len == 0)
    {
        error = true;
        warnMsg = "* Password must be filled out";
    }
    else if(len <= 6)
    {
        error = true;
        warnMsg = "* Password need to be atleast 7 characters";
    }
    else
    {
        for(var i = 0;i < len;++i){
            if((pwd[i] >= 'a' && pwd[i] <= 'z') || (pwd[i] >= 'A' && pwd[i] <= 'Z'))
            {
                isAlpha = true;
            }
            else if(pwd[i] >= '0' && pwd[i] <= '9')
            {
                isNum = true;
            }
            else
            {
                error = true;
                warnMsg = "* Password can only include numeric and alphabetic character";
                break;
            }
        }

        if(error == false && (isAlpha == false || isNum == false))
        {
            error = true;
            warnMsg = "* Password must include numeric and alphabetic character";
        }
    }

    if(error)
    {
        document.getElementById('pwdwarn').innerHTML = warnMsg;
    }
    else
    {
        document.getElementById('pwdwarn').innerHTML = "";
    }

    return !error;
}

function valPwdV(pwd, pwdV)
{
    if(pwd == pwdV)
    {
        document.getElementById('pwdVwarn').innerHTML = "";
        return true;
    }

    document.getElementById('pwdVwarn').innerHTML = "* Password didn't match";
    return false;
}

function valEula(eula)
{
    console.log(eula);
    if(eula == false)
    {
        document.getElementById('eulawarn').innerHTML = "You must accept the agreement";
    }
    else
    {
        document.getElementById('eulawarn').innerHTML = "";
    }
    return eula;
}

function validateForm()
{
    var form = document.forms["playnow"];
    var name = form["name"].value;
    var age = form["age"].value;
    var region = form["region"].value;
    var uname = form["uname"].value;
    var email = form["email"].value;
    var pwd = form["pwd"].value;
    var pwdV = form["pwdV"].value;
    var eula = form["eula"].checked;

    var validates = [];

    validates.push(valName(name));
    validates.push(valAge(age));
    validates.push(valRegion(region));
    validates.push(valUname(uname));
    validates.push(valEmail(email));
    validates.push(valPwd(pwd));
    validates.push(valPwdV(pwd, pwdV));
    validates.push(valEula(eula));

    var val = true;
    for(var i = 0;i < validates.length;++i){
        val = val && validates[i];
    }

    if(val == true)
    {
        alert("Registration Successful!!!!");
    }

    return val;
}
