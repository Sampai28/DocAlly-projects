#Text-To-Speech

import pyttsx3
engine = pyttsx3.init()

with open('img2txt.txt') as f:
    lines = f.readlines()

# print(lines)

text = ''
for i in lines:
	text+=i

# print(text)

engine.say(text)
engine.runAndWait()