import os
import shutil

from fastapi import APIRouter, UploadFile, File, Form
from services.legal_service import analyze_case
from utils.pdf_reader import extract_pdf_text

router = APIRouter()


@router.post("/analyze-case")
async def analyze(

    query: str = Form(...),

    file: UploadFile = File(None)

):

    if file:

        os.makedirs("uploads", exist_ok=True)

        file_path = os.path.join("uploads", file.filename)

        with open(file_path, "wb") as buffer:

            shutil.copyfileobj(file.file, buffer)

        pdf_text = extract_pdf_text(file_path)

        print("\n========== PDF TEXT ==========\n")

        print(pdf_text[:3000])

        print("\n==============================\n")

        final_query = query + "\n\nUploaded Document:\n" + pdf_text

    else:

        final_query = query

    return analyze_case(final_query)