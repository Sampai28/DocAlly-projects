import easyocr
import PIL
from PIL import Image

reader = easyocr.Reader(['en'])

im = Image.open(r"img.png") #frames from a video feed can also be captured instead of using a static image
#used a sample image here
text_list = reader.readtext('img.png', add_margin=0.15, width_ths=0.7, link_threshold=0.8, decoder='beamsearch',blocklist='=-', detail=0)
text_comb=' '.join(text_list)
#print(text_comb)

f = open("img2txt.txt","w+")
for i in text_comb:
	f.write(i)
f.close()