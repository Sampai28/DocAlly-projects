In this application, I've used only a static image. Frames from video could also be captured and then OCR could be done on that. Text extracted from the image, is stored in a img2txt.txt file, which is used for the text2speech.py file. 
Used Pyttsx3 library for text to speech. say() method adds an utterance to speak to the event queue, while runAndWait() method runs the actual event loop until all commands queued up. So you can call multiple times the say() method and run a single runAndWait() method in the end, in order to hear the synthesis.
Run text2speech file to listen to the audio.
