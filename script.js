let pass1 = document.querySelector('#pass1').value;
let pass2 = document.querySelector('#pass2').value;

correctPassword(pass1, pass2);

function correctPassword(pass1, pass2) {
    if (
        [pass1, pass2].some((password) => {
        return !/^[a-zA-Z0-9]+$/.test(password);
        })
        ) {
            error.innerText = 'Введен некоректный пароль'; 
            return !1;
        }
    if (pass1 !== pass2) {
        error.innerText = 'Пароли должны совпадать';
        return !1;
    }
    // error.innerText = 'Пароли совпадают';
    return !0;
}