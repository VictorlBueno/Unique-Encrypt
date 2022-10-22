def md(descript,descripted):
    for i in range(len(descript)):
        if descript[0] == "♕":
            descripted.insert(0, "a")
        elif descript[0] == "♖":
            descripted.insert(0, "A")
        elif descript[0] == "♗":
            descripted.insert(0, "b")
        elif descript[0] == "♘":
            descripted.insert(0, "B")
        elif descript[0] == "♙":
            descripted.insert(0, "c")
        elif descript[0] == "♚":
            descripted.insert(0, "C")
        elif descript[0] == "♛":
            descripted.insert(0, "d")
        elif descript[0] == "♜":
            descripted.insert(0, "D")
        elif descript[0] == "♝":
            descripted.insert(0, "e")
        elif descript[0] == "♞":
            descripted.insert(0, "E")
        elif descript[0] == "♟":
            descripted.insert(0, "f")
        elif descript[0] == "♠":
            descripted.insert(0, "F")
        elif descript[0] == "♡":
            descripted.insert(0, "g")
        elif descript[0] == "♢":
            descripted.insert(0, "G")
        elif descript[0] == "♣":
            descripted.insert(0, "h")
        elif descript[0] == "♤":
            descripted.insert(0, "H")
        elif descript[0] == "♥":
            descripted.insert(0, "i")
        elif descript[0] == "♦":
            descripted.insert(0, "I")
        elif descript[0] == "♧":
            descripted.insert(0, "j")
        elif descript[0] == "♨":
            descripted.insert(0, "J")
        elif descript[0] == "♩":
            descripted.insert(0, "k")
        elif descript[0] == "♪":
            descripted.insert(0, "K")
        elif descript[0] == "✲":
            descripted.insert(0, "l")
        elif descript[0] == "✳":
            descripted.insert(0, "L")
        elif descript[0] == "✴":
            descripted.insert(0, "m")
        elif descript[0] == "✵":
            descripted.insert(0, "M")
        elif descript[0] == "✶":
            descripted.insert(0, "n")
        elif descript[0] == "✷":
            descripted.insert(0, "N")
        elif descript[0] == "✸":
            descripted.insert(0, "o")
        elif descript[0] == "✹":
            descripted.insert(0, "O")
        elif descript[0] == "✺":
            descripted.insert(0, "p")
        elif descript[0] == "✻":
            descripted.insert(0, "P")
        elif descript[0] == "✼":
            descripted.insert(0, "q")
        elif descript[0] == "✽":
            descripted.insert(0, "Q")
        elif descript[0] == "✾":
            descripted.insert(0, "r")
        elif descript[0] == "❂":
            descripted.insert(0, "R")
        elif descript[0] == "❃":
            descripted.insert(0, "s")
        elif descript[0] == "❄":
            descripted.insert(0, "S")
        elif descript[0] == "❅":
            descripted.insert(0, "t")
        elif descript[0] == "❆":
            descripted.insert(0, "T")
        elif descript[0] == "❇":
            descripted.insert(0, "u")
        elif descript[0] == "❈":
            descripted.insert(0, "U")
        elif descript[0] == "❉":
            descripted.insert(0, "v")
        elif descript[0] == "❊":
            descripted.insert(0, "V")
        elif descript[0] == "❋":
            descripted.insert(0, "w")
        elif descript[0] == "☀":
            descripted.insert(0, "W")
        elif descript[0] == "☁":
            descripted.insert(0, "x")
        elif descript[0] == "☂":
            descripted.insert(0, "X")
        elif descript[0] == "☃":
            descripted.insert(0, "y")
        elif descript[0] == "☄":
            descripted.insert(0, "Y")
        elif descript[0] == "★":
            descripted.insert(0, "z")
        elif descript[0] == "☆":
            descripted.insert(0, "Z")
        elif descript[0] == "☇":
            descripted.insert(0, "0")
        elif descript[0] == "☈":
            descripted.insert(0, "1")
        elif descript[0] == "☉":
            descripted.insert(0, "2")
        elif descript[0] == "☊":
            descripted.insert(0, "3")
        elif descript[0] == "☋":
            descripted.insert(0, "4")
        elif descript[0] == "☌":
            descripted.insert(0, "5")
        elif descript[0] == "☍":
            descripted.insert(0, "6")
        elif descript[0] == "☎":
            descripted.insert(0, "7")
        elif descript[0] == "☏":
            descripted.insert(0, "8")
        elif descript[0] == "☛":
            descripted.insert(0, "9")
        elif descript[0] == "∴":
            descripted.insert(0, " ")
        else:
            descripted.insert(0, descript[0])
        descript.pop(0)

def charList(name):
    name == "∷" or name == "⧽" or name == "⥾" or name == "⇞" or name == "❚" or name == "˫"