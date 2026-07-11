import sys
from PyPDF2 import PdfReader

try:
    reader = PdfReader('src/assets/Manish Chavan Resume.pdf')
    text = ""
    for page in reader.pages:
        text += page.extract_text() + "\n"
    with open('resume_out.txt', 'w', encoding='utf-8') as f:
        f.write(text)
    print("Success")
except Exception as e:
    print(f"Error: {e}")
