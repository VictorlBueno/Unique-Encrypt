from word_decrypt import *

descript = list(input("Decrypt: "))
encrypted = []
md(descript,encrypted)
encrypted.reverse()


for i in range(6):
    encrypted.append("∷"*(1*i)+"*"*(encrypted.index("∷")))

ebackup = list(encrypted)
password = []
while len(encrypted) > 0:  
    while encrypted[0] == "∷":
        encrypted.pop(0)

    if "∷" in encrypted:
        ind = encrypted.index("∷")
        password.append(encrypted[:ind])
        for rm in range(ind):
            encrypted.pop(0)
    else:
        password.append(encrypted[:len(encrypted)])
        encrypted.clear()

for i in range(len(password)):
    for ii in range(len(password[0])):
        password[i].append("*")

descript = []
for l in range(len(password[0])):
    for c in range(len(password)):
        descript.append(password[c][l])

descript = list(filter(lambda i: i not in "*" not in i !="∷", descript))

descript = "".join(descript)
print(descript)


