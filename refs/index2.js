function registerLogin() {
    var pass = document.getElementById('pass1')
    var upper = document.getElementById('upper')
    var lower = document.getElementById('lower')
    var num = document.getElementById('number')
    var len = document.getElementById('length')
    var spacial_char = document.getElementById('spacial_char')

    // var kullaniciAdi = document.getElementById("kullaniciAdi");
    // var mail = document.getElementById("mail");
    var sifre = document.getElementById("sifre");
    var sifreTekrar = document.getElementById("sifreTekrar");
    var sifreKontrol = "^(?=.*[a-z])(?=.*[A-Z])[a-zA-Z]{8,}$"


    if (sifre.value.match(sifreKontrol) == sifreTekrar.value.match(sifreKontrol)) {
        lower.style.color = "Green";
        upper.style.color = "orange";
        len.style.color = "blue";
    } else {
        num.style.color = "Red";
    }
}