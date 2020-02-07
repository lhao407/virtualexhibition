
$(function()
    {
        Bmob.initialize("fff70f3c89b1b09c6276dddda447535e", "123456");
        $('#btnLogin').click(function()
        {
            var $email = $("#email");
            var $password = $("#password");

            var btn = $(this);
            btn.button('loading');

			    Bmob.User.logIn($email, $password).then(res => {
      		  console.log(res)
      		}).catch(err => {
      		 console.log(err)
      		});

        });
    });
