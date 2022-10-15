from word_encrypt import *

word = list(input("Encrypt: "))
while len(word) < 6:
    print("Type a word/text over 6 digits")
    word = list(input("Encrypt: "))

decrypted = []
mc(word,decrypted)  
decrypted.reverse()

an = 6
encrypted = []

for i in range(an):
    encrypted.insert(i, decrypted[0])
    decrypted.pop(0)

tm = (len(encrypted)*2)-1
for i in range(1,tm,2):
    encrypted.insert(i, "/")

cu = encrypted.count("/")
cs = 0
for i in range(cu):
    for ii in range(i):
        if "/" in encrypted:
            po = encrypted.index("/")
            cs += 1
            encrypted.insert(po, "∷"*cs)
            encrypted.pop(po+1)

rc = round((len(decrypted)/an)+1)
for i in range(rc):
    for ii in range(i+1, an*(3+i), i+3):
        if len(decrypted) > 0:
            encrypted.insert(ii, decrypted[0]) 
            decrypted.pop(0)         

encrypted = "".join(encrypted)
print(encrypted)

