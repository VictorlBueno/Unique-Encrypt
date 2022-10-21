from operator import indexOf
from word_encrypt import *
from functools import reduce
import random

char = ["⧽","⥾","⇞","❚","˫"]
keys = ["‡","ɬ","ɨ","ɍ","⑆","⑇","།","༑","༎","༏"]

keyC = list(input("Choose a key: "))
keyC = [int(num) for num in keyC]
key = reduce(lambda x, y:x+y, keyC)
key = int(repr(key)[-1])
an = 6
print(key)
word = list(input("Text to encrypt: "))
while len(word) < an:
    print(f"Type a word/text over 6 digits")
    word = list(input("Encrypt: "))

decrypted = []
mc(word,decrypted)  
decrypted.reverse()

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
            encrypted.insert(po, key+random.choice(char)*cs)
            encrypted.pop(po+1)

rc = round((len(decrypted)/an)+1)
for i in range(rc):
    for ii in range(i+1, an*(3+i), i+3):
        if len(decrypted) > 0:
            encrypted.insert(ii, decrypted[0]) 
            decrypted.pop(0)         

encrypted = "".join(encrypted)
print(encrypted)

