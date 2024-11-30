document.getElementById('btn-login')
    .addEventListener('click',function (e) {
        e.preventDefault();
        const mobileNumber=(document.getElementById('mobile-number').value);
        const pinNo=(document.getElementById('pin-no').value);

        if(mobileNumber === '0171' && pinNo === '1234'){

            const ans = confirm('Login Successfully');
            if (ans){
                window.location.href='home.html';
            } else{
                document.getElementById('mobile-number').value='';
            document.getElementById('pin-no').value = '';
            document.getElementById('mobile-number').focus();
            }
           

        }else{
            alert('Try again')
            document.getElementById('mobile-number').value='';
            document.getElementById('pin-no').value = '';
            document.getElementById('mobile-number').focus();
        }
    }) 