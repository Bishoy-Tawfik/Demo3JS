function validateThenRedirect(){
    var userName = document.getElementById('userName').value;
    var password = document.getElementById('password').value;
    if((userName =="admin" && password =="adminadmin")||
       (userName =="student" && password =="student123")||
       (userName =="teacher" && password =="teacher456")){
        window.sessionStorage.setItem('userType', userName);
        switch(userName){
            case "admin":
            window.location.href='admin.html';
            break;
            case "student":
            window.location.href='student.html';
            break;
            case "teacher":
            window.location.href='teacher.html';
            break;

        }
    }
    else{
        alert('worng user name or password!');
    }
}

function checkForSession(pageName){
    var userType = sessionStorage.getItem('userType');
    if(!userType || pageName !=userType){
        window.location.href='login.html';
    } 
}
