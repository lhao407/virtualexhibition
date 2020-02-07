function checkEmail(){    //验证用户名
    var e = document.getElementById("email").value;
    console.log(e);
    return e;
}

function checkPassword(){    //验证用户名
    var p = document.getElementById("password").value;
    console.log(p);
    return p;
}

function userLogin(e, p){

  Bmob.User.logIn(e, p, {
         success: function(user) {
           alert("succ");
         },
         error: function(user, error) {
           alert("fail");
         }
       });
}
