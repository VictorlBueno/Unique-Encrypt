from functools import reduce
from word_decrypt import *

keys = ["‡","ɬ","ɨ","ɍ","⑆","⑇","།","༑","༎","༏"]
keyC = list(input("Choose a key: "))
keyC = [int(num) for num in keyC]
key = reduce(lambda x, y:x+y, keyC)
key = keys[key]

descript = list(input("Texto to decrypt: "))
encrypted = []
md(descript,encrypted)
encrypted.reverse()

for i in range(6):
    encrypted.append(key*(1*i)+"*"*(encrypted.index(key)))

ebackup = list(encrypted)
password = []

while len(encrypted) > 0:  
    while encrypted[0] == key or encrypted[0] == "⧽" or encrypted[0] == "⥾" or encrypted[0] == "⇞" or encrypted[0] == "❚" or encrypted[0] == "˫":
        encrypted.pop(0)

    if key in encrypted:
        ind = encrypted.index(key)
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

descript = list(filter(lambda i: i not in "*" not in i !=key not in i !="⧽" not in i !="⥾" not in i !="⇞" not in i !="❚" not in i !="˫", descript))

descript = "".join(descript)
print(descript)


