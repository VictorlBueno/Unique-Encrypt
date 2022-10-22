char = ["⧽","⥾","⇞","❚","˫"]
var an = 6

function Encrypt() {
    var word = document.getElementById("text").value
    var result = document.getElementById("result")
    var wordC = Array.from(document.getElementById("key").value)
    if (wordC.length != 0) {
        var keys = ["‡","ɬ","ɨ","ɍ","⑆","⑇","།","༑","༎","༏"]
        wordC = wordC.map(Number)
        var key = wordC.reduce((a, b) => a + b, 0)
        key = keys[key.toString().slice(-1)]
        if (word.length < an) {
            result.innerHTML = "Type a word/text longer than " + an + " characters"
        }
        else if (word.includes("⧽") || word.includes("⥾") || word.includes("⇞") || word.includes("❚") || word.includes("˫")) {
            result.innerHTML = "Invalid encryption"
        }  
        else {
            var decrypted = []
            EncryptWord(word, decrypted, key)
            decrypted.reverse()
            
            var encrypted = []
            
            for (var i = 0; i < an; i++) {
                encrypted.splice(i, 0, decrypted[0])
                decrypted.shift()
            }
            
            tm = (encrypted.length*2)-1
            
            for (var i = 1; i < tm; i += 2) {
                encrypted.splice(i, 0, "/")
            }
            
            cu = encrypted.filter(x => x == "/").length
            cs = 0
            
            for (var i = 1; i < cu; i++) {
                for (var ii = 1; ii < i; ii++) {
                    if (encrypted.includes("/")) {
                        po = encrypted.indexOf("/")
                        cs += 1
                        encrypted.splice(po,1)
                        encrypted.splice(po, 0, key+char[Math.floor(Math.random() * char.length)].repeat(cs))
                    }
                }
            }
            rc = Math.round((decrypted.length/an)+1)
            for (var t = 0; t < rc; t++) {
                for (var tt = 1; tt < an*(3+t); tt += 3) {
                    tt += t
                    if (decrypted.length > 0) {
                        encrypted.splice(tt, 0, decrypted[0])
                        decrypted.shift()
                    }
                }
            }
            
            encrypted = encrypted.join("")
            result.innerHTML = encrypted
        }
    }
    else {
        result.innerHTML = "Type a key"
    } 
}

function Decrypt() {
    var word = document.getElementById("text").value
    var result = document.getElementById("result")
    var wordC = Array.from(document.getElementById("key").value)
    word = Array.from(word)

    if (wordC != "") {
        var keys = ["‡","ɬ","ɨ","ɍ","⑆","⑇","།","༑","༎","༏"]
        wordC = wordC.map(Number)
        var key = wordC.reduce((a, b) => a + b, 0)
        key = keys[key.toString().slice(-1)]
        if (word == "") {
            result.innerHTML = "Type a text to encrypt"
        }    
        else if (word.length < an || !word.includes(key)) {
            result.innerHTML = "Invalid decryption"
        }    
        else {
            var encrypted = []
            DecryptWord(word, encrypted, key)
        encrypted.reverse()
        
        for (var i = 0; i < an; i++) {
            encrypted.push(key.repeat(1*i)+"*".repeat(encrypted.indexOf(key)))
        }
        
        ebackup = encrypted
        password = []
    
        while (encrypted.length > 0) {
            while (encrypted[0] == key || encrypted[0] == "⧽" || encrypted[0] == "⥾" || encrypted[0] == "⇞" || encrypted[0] == "❚" || encrypted[0] == "˫") {
                encrypted.shift()
            }
            
            if (encrypted.includes(key)) {
                ind = encrypted.indexOf(key)
                password.push(encrypted.slice(0,ind))
                for (var rm = 0; rm < ind; rm++) {
                    encrypted.shift()
                }
            }
            else {
                password.push(encrypted.slice(0,encrypted.length))
                encrypted = []
            }
        }
        
        for (var i = 0; i < password.length; i++) {
            lenList = password[0].length
            for (var ii = 0; ii < lenList; ii++) {
                password[i].push("*")
            }
        }
        
        descript = []
        for (var l = 0; l < password[0].length; l++) {
            for (var c = 0; c < password.length; c++) {
                descript.push(password[c][l])
            }
        }
    
        descript = descript.filter(le => !le.includes("*") && !le.includes(key) && !le.includes("⧽") && !le.includes("⥾") && !le.includes("⇞") && !le.includes("❚") && !le.includes("˫"))
    
        descript = descript.join("")
        result.innerHTML = descript
        }
    }
    else {
        result.innerHTML = "Type a key"
    } 
}

function EncryptWord(word, encrypt, key) {
    for (var i = 0; i < word.length; i++) {
        if (word[i] == "a") {
            encrypt.splice(0, 0, "♕")
        } else if (word[i] == "A") {
            encrypt.splice(0, 0, "♖")
        } else if (word[i] == "b") {
            encrypt.splice(0, 0, "♗")
        } else if (word[i] == "B") {
            encrypt.splice(0, 0, "♘")
        } else if (word[i] == "c") {
            encrypt.splice(0, 0, "♙")
        } else if (word[i] == "C") {
            encrypt.splice(0, 0, "♚")
        } else if (word[i] == "d") {
            encrypt.splice(0, 0, "♛")
        } else if (word[i] == "D") {
            encrypt.splice(0, 0, "♜")
        } else if (word[i] == "e") {
            encrypt.splice(0, 0, "♝")
        } else if (word[i] == "E") {
            encrypt.splice(0, 0, "♞")
        } else if (word[i] == "f") {
            encrypt.splice(0, 0, "♟")
        } else if (word[i] == "F") {
            encrypt.splice(0, 0, "♠")
        } else if (word[i] == "g") {
            encrypt.splice(0, 0, "♡")
        } else if (word[i] == "G") {
            encrypt.splice(0, 0, "♢")
        } else if (word[i] == "h") {
            encrypt.splice(0, 0, "♣")
        } else if (word[i] == "H") {
            encrypt.splice(0, 0, "♤")
        } else if (word[i] == "i") {
            encrypt.splice(0, 0, "♥")
        } else if (word[i] == "I") {
            encrypt.splice(0, 0, "♦")
        } else if (word[i] == "j") {
            encrypt.splice(0, 0, "♧")
        } else if (word[i] == "J") {
            encrypt.splice(0, 0, "♨")
        } else if (word[i] == "k") {
            encrypt.splice(0, 0, "♩")
        } else if (word[i] == "K") {
            encrypt.splice(0, 0, "♪")
        } else if (word[i] == "l") {
            encrypt.splice(0, 0, "✲")
        } else if (word[i] == "L") {
            encrypt.splice(0, 0, "✳")
        } else if (word[i] == "m") {
            encrypt.splice(0, 0, "✴")
        } else if (word[i] == "M") {
            encrypt.splice(0, 0, "✵")
        } else if (word[i] == "n") {
            encrypt.splice(0, 0, "✶")
        } else if (word[i] == "N") {
            encrypt.splice(0, 0, "✷")
        } else if (word[i] == "o") {
            encrypt.splice(0, 0, "✸")
        } else if (word[i] == "O") {
            encrypt.splice(0, 0, "✹")
        } else if (word[i] == "p") {
            encrypt.splice(0, 0, "✺")
        } else if (word[i] == "P") {
            encrypt.splice(0, 0, "✻")
        } else if (word[i] == "q") {
            encrypt.splice(0, 0, "✼")
        } else if (word[i] == "Q") {
            encrypt.splice(0, 0, "✽")
        } else if (word[i] == "r") {
            encrypt.splice(0, 0, "✾")
        } else if (word[i] == "R") {
            encrypt.splice(0, 0, "❂")
        } else if (word[i] == "s") {
            encrypt.splice(0, 0, "❃")
        } else if (word[i] == "S") {
            encrypt.splice(0, 0, "❄")
        } else if (word[i] == "t") {
            encrypt.splice(0, 0, "❅")
        } else if (word[i] == "T") {
            encrypt.splice(0, 0, "❆")
        } else if (word[i] == "u") {
            encrypt.splice(0, 0, "❇")
        } else if (word[i] == "U") {
            encrypt.splice(0, 0, "❈")
        } else if (word[i] == "v") {
            encrypt.splice(0, 0, "❉")
        } else if (word[i] == "V") {
            encrypt.splice(0, 0, "❊")
        } else if (word[i] == "w") {
            encrypt.splice(0, 0, "❋")
        } else if (word[i] == "W") {
            encrypt.splice(0, 0, "☀")
        } else if (word[i] == "x") {
            encrypt.splice(0, 0, "☁")
        } else if (word[i] == "X") {
            encrypt.splice(0, 0, "☂")
        } else if (word[i] == "y") {
            encrypt.splice(0, 0, "☃")
        } else if (word[i] == "Y") {
            encrypt.splice(0, 0, "☄")
        } else if (word[i] == "z") {
            encrypt.splice(0, 0, "★")
        } else if (word[i] == "Z") {
            encrypt.splice(0, 0, "☆")
        } else if (word[i] == "0") {
            encrypt.splice(0, 0, "☇")
        } else if (word[i] == "1") {
            encrypt.splice(0, 0, "☈")
        } else if (word[i] == "2") {
            encrypt.splice(0, 0, "☉")
        } else if (word[i] == "3") {
            encrypt.splice(0, 0, "☊")
        } else if (word[i] == "4") {
            encrypt.splice(0, 0, "☋")
        } else if (word[i] == "5") {
            encrypt.splice(0, 0, "☌")
        } else if (word[i] == "6") {
            encrypt.splice(0, 0, "☍")
        } else if (word[i] == "7") {
            encrypt.splice(0, 0, "☎")
        } else if (word[i] == "8") {
            encrypt.splice(0, 0, "☏")
        } else if (word[i] == "9") {
            encrypt.splice(0, 0, "☛")
        } else if (word[i] == " ") {
            encrypt.splice(0, 0, "∴")
        } else {
            encrypt.splice(0, 0, word[i])
        }
    }
}

function DecryptWord(word, decrypt, key) {
    for (var i = 0; i < word.length; i++) {
        if (word[i] == "♕") {
            decrypt.splice(0, 0, "a")
        } else if (word[i] == "♖") {
            decrypt.splice(0, 0, "A")
        } else if (word[i] == "♗") {
            decrypt.splice(0, 0, "b")
        } else if (word[i] == "♘") {
            decrypt.splice(0, 0, "B")
        } else if (word[i] == "♙") {
            decrypt.splice(0, 0, "c")
        } else if (word[i] == "♚") {
            decrypt.splice(0, 0, "C")
        } else if (word[i] == "♛") {
            decrypt.splice(0, 0, "d")
        } else if (word[i] == "♜") {
            decrypt.splice(0, 0, "D")
        } else if (word[i] == "♝") {
            decrypt.splice(0, 0, "e")
        } else if (word[i] == "♞") {
            decrypt.splice(0, 0, "E")
        } else if (word[i] == "♟") {
            decrypt.splice(0, 0, "f")
        } else if (word[i] == "♠") {
            decrypt.splice(0, 0, "F")
        } else if (word[i] == "♡") {
            decrypt.splice(0, 0, "g")
        } else if (word[i] == "♢") {
            decrypt.splice(0, 0, "G")
        } else if (word[i] == "♣") {
            decrypt.splice(0, 0, "h")
        } else if (word[i] == "♤") {
            decrypt.splice(0, 0, "H")
        } else if (word[i] == "♥") {
            decrypt.splice(0, 0, "i")
        } else if (word[i] == "♦") {
            decrypt.splice(0, 0, "I")
        } else if (word[i] == "♧") {
            decrypt.splice(0, 0, "j")
        } else if (word[i] == "♨") {
            decrypt.splice(0, 0, "J")
        } else if (word[i] == "♩") {
            decrypt.splice(0, 0, "k")
        } else if (word[i] == "♪") {
            decrypt.splice(0, 0, "K")
        } else if (word[i] == "✲") {
            decrypt.splice(0, 0, "l")
        } else if (word[i] == "✳") {
            decrypt.splice(0, 0, "L")
        } else if (word[i] == "✴") {
            decrypt.splice(0, 0, "m")
        } else if (word[i] == "✵") {
            decrypt.splice(0, 0, "M")
        } else if (word[i] == "✶") {
            decrypt.splice(0, 0, "n")
        } else if (word[i] == "✷") {
            decrypt.splice(0, 0, "N")
        } else if (word[i] == "✸") {
            decrypt.splice(0, 0, "o")
        } else if (word[i] == "✹") {
            decrypt.splice(0, 0, "O")
        } else if (word[i] == "✺") {
            decrypt.splice(0, 0, "p")
        } else if (word[i] == "✻") {
            decrypt.splice(0, 0, "P")
        } else if (word[i] == "✼") {
            decrypt.splice(0, 0, "q")
        } else if (word[i] == "✽") {
            decrypt.splice(0, 0, "Q")
        } else if (word[i] == "✾") {
            decrypt.splice(0, 0, "r")
        } else if (word[i] == "❂") {
            decrypt.splice(0, 0, "R")
        } else if (word[i] == "❃") {
            decrypt.splice(0, 0, "s")
        } else if (word[i] == "❄") {
            decrypt.splice(0, 0, "S")
        } else if (word[i] == "❅") {
            decrypt.splice(0, 0, "t")
        } else if (word[i] == "❆") {
            decrypt.splice(0, 0, "T")
        } else if (word[i] == "❇") {
            decrypt.splice(0, 0, "u")
        } else if (word[i] == "❈") {
            decrypt.splice(0, 0, "U")
        } else if (word[i] == "❉") {
            decrypt.splice(0, 0, "v")
        } else if (word[i] == "❊") {
            decrypt.splice(0, 0, "V")
        } else if (word[i] == "❋") {
            decrypt.splice(0, 0, "w")
        } else if (word[i] == "☀") {
            decrypt.splice(0, 0, "W")
        } else if (word[i] == "☁") {
            decrypt.splice(0, 0, "x")
        } else if (word[i] == "☂") {
            decrypt.splice(0, 0, "X")
        } else if (word[i] == "☃") {
            decrypt.splice(0, 0, "y")
        } else if (word[i] == "☄") {
            decrypt.splice(0, 0, "Y")
        } else if (word[i] == "★") {
            decrypt.splice(0, 0, "z")
        } else if (word[i] == "☆") {
            decrypt.splice(0, 0, "Z")
        } else if (word[i] == "☇") {
            decrypt.splice(0, 0, "0")
        } else if (word[i] == "☈") {
            decrypt.splice(0, 0, "1")
        } else if (word[i] == "☉") {
            decrypt.splice(0, 0, "2")
        } else if (word[i] == "☊") {
            decrypt.splice(0, 0, "3")
        } else if (word[i] == "☋") {
            decrypt.splice(0, 0, "4")
        } else if (word[i] == "☌") {
            decrypt.splice(0, 0, "5")
        } else if (word[i] == "☍") {
            decrypt.splice(0, 0, "6")
        } else if (word[i] == "☎") {
            decrypt.splice(0, 0, "7")
        } else if (word[i] == "☏") {
            decrypt.splice(0, 0, "8")
        } else if (word[i] == "☛") {
            decrypt.splice(0, 0, "9")
        } else if (word[i] == "∴") {
            decrypt.splice(0, 0, " ")
        } else if (word[i] == key) {
            decrypt.splice(0, 0, key)
        } else {
            decrypt.splice(0, 0, word[i])
        }
    }
}
var TxtType = function(el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 2000;
    this.txt = '';
    this.tick();
    this.isDeleting = false;
};

TxtType.prototype.tick = function() {
    var i = this.loopNum % this.toRotate.length;
    var fullTxt = this.toRotate[i];

    if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

    var that = this;
    var delta = 200 - Math.random() * 100;

    if (this.isDeleting) { delta /= 2; }

    if (!this.isDeleting && this.txt === fullTxt) {
    delta = this.period;
    this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
    this.isDeleting = false;
    this.loopNum++;
    delta = 500;
    }

    setTimeout(function() {
    that.tick();
    }, delta);
};

window.onload = function() {
    var elements = document.getElementsByClassName('typewrite');
    for (var i=0; i<elements.length; i++) {
        var toRotate = elements[i].getAttribute('data-type');
        var period = elements[i].getAttribute('data-period');
        if (toRotate) {
          new TxtType(elements[i], JSON.parse(toRotate), period);
        }
    }

    var css = document.createElement("style");
    css.type = "text/css";
    css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
    document.body.appendChild(css);
};