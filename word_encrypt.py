def mc(word,decrypted):
    for i in range(len(word)):
        if word[0] == "a":
            decrypted.insert(0, "♕")
        elif word[0] == "A":
            decrypted.insert(0, "♖")
        elif word[0] == "b":
            decrypted.insert(0, "♗")
        elif word[0] == "B":
            decrypted.insert(0, "♘")
        elif word[0] == "c":
            decrypted.insert(0, "♙")
        elif word[0] == "C":
            decrypted.insert(0, "♚")
        elif word[0] == "d":
            decrypted.insert(0, "♛")
        elif word[0] == "D":
            decrypted.insert(0, "♜")
        elif word[0] == "e":
            decrypted.insert(0, "♝")
        elif word[0] == "E":
            decrypted.insert(0, "♞")
        elif word[0] == "f":
            decrypted.insert(0, "♟")
        elif word[0] == "F":
            decrypted.insert(0, "♠")
        elif word[0] == "g":
            decrypted.insert(0, "♡")
        elif word[0] == "G":
            decrypted.insert(0, "♢")
        elif word[0] == "h":
            decrypted.insert(0, "♣")
        elif word[0] == "H":
            decrypted.insert(0, "♤")
        elif word[0] == "i":
            decrypted.insert(0, "♥")
        elif word[0] == "I":
            decrypted.insert(0, "♦")
        elif word[0] == "j":
            decrypted.insert(0, "♧")
        elif word[0] == "J":
            decrypted.insert(0, "♨")
        elif word[0] == "k":
            decrypted.insert(0, "♩")
        elif word[0] == "K":
            decrypted.insert(0, "♪")
        elif word[0] == "l":
            decrypted.insert(0, "✲")
        elif word[0] == "L":
            decrypted.insert(0, "✳")
        elif word[0] == "m":
            decrypted.insert(0, "✴")
        elif word[0] == "M":
            decrypted.insert(0, "✵")
        elif word[0] == "n":
            decrypted.insert(0, "✶")
        elif word[0] == "N":
            decrypted.insert(0, "✷")
        elif word[0] == "o":
            decrypted.insert(0, "✸")
        elif word[0] == "O":
            decrypted.insert(0, "✹")
        elif word[0] == "p":
            decrypted.insert(0, "✺")
        elif word[0] == "P":
            decrypted.insert(0, "✻")
        elif word[0] == "q":
            decrypted.insert(0, "✼")
        elif word[0] == "Q":
            decrypted.insert(0, "✽")
        elif word[0] == "r":
            decrypted.insert(0, "✾")
        elif word[0] == "R":
            decrypted.insert(0, "❂")
        elif word[0] == "s":
            decrypted.insert(0, "❃")
        elif word[0] == "S":
            decrypted.insert(0, "❄")
        elif word[0] == "t":
            decrypted.insert(0, "❅")
        elif word[0] == "T":
            decrypted.insert(0, "❆")
        elif word[0] == "u":
            decrypted.insert(0, "❇")
        elif word[0] == "U":
            decrypted.insert(0, "❈")
        elif word[0] == "v":
            decrypted.insert(0, "❉")
        elif word[0] == "V":
            decrypted.insert(0, "❊")
        elif word[0] == "w":
            decrypted.insert(0, "❋")
        elif word[0] == "W":
            decrypted.insert(0, "☀")
        elif word[0] == "x":
            decrypted.insert(0, "☁")
        elif word[0] == "X":
            decrypted.insert(0, "☂")
        elif word[0] == "y":
            decrypted.insert(0, "☃")
        elif word[0] == "Y":
            decrypted.insert(0, "☄")
        elif word[0] == "z":
            decrypted.insert(0, "★")
        elif word[0] == "Z":
            decrypted.insert(0, "☆")
        elif word[0] == "0":
            decrypted.insert(0, "☇")
        elif word[0] == "1":
            decrypted.insert(0, "☈")
        elif word[0] == "2":
            decrypted.insert(0, "☉")
        elif word[0] == "3":
            decrypted.insert(0, "☊")
        elif word[0] == "4":
            decrypted.insert(0, "☋")
        elif word[0] == "5":
            decrypted.insert(0, "☌")
        elif word[0] == "6":
            decrypted.insert(0, "☍")
        elif word[0] == "7":
            decrypted.insert(0, "☎")
        elif word[0] == "8":
            decrypted.insert(0, "☏")
        elif word[0] == "9":
            decrypted.insert(0, "☛")
        elif word[0] == " ":
            decrypted.insert(0, "∴")
        else:
            decrypted.insert(0, word[0])
        word.pop(0)