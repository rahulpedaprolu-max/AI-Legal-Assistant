# ⚖️ AI Legal Assistant  

An AI-powered legal assistance platform that helps citizens understand their legal rights using Retrieval-Augmented Generation (RAG) and Large Language Models (LLMs).

The system retrieves relevant legal information from Indian legal documents such as the Bharatiya Nyaya Sanhita (BNS), Bharatiya Nagarik Suraksha Sanhita (BNSS), the Constitution of India, and other legal resources, then generates explainable legal guidance in simple language.

---

# 🚀 Problem Statement

Many citizens are unaware of their legal rights and often struggle to understand lengthy legal documents written in complex legal language.

Hiring legal professionals for every small issue is expensive, while general AI chatbots may generate incorrect legal information because they are not grounded in authentic legal sources.

This project bridges that gap by providing AI-assisted legal guidance grounded in official legal documents.

---

# 🎯 Objectives

- Help citizens understand their legal rights.
- Retrieve relevant legal sections from Indian legal documents.
- Generate simple and explainable legal guidance.
- Reduce AI hallucinations using Retrieval-Augmented Generation (RAG).
- Display supporting legal sources for transparency.

---

# ✨ Features

## ✅ AI Legal Query System

Users can describe their legal issue in natural language.

Example:

> "My employer has not paid my salary."

The system retrieves relevant legal documents and generates an understandable legal explanation.

---

## 📚 Retrieval-Augmented Generation (RAG)

Instead of relying only on an LLM, the system:

- Searches the vector database
- Retrieves the most relevant legal documents
- Uses retrieved context for response generation

This greatly improves reliability.

---

## 📄 Source Citation

Every answer includes:

- Document Name
- Page Number

This makes responses explainable and verifiable.

---

## 📂 Document Upload

Users can upload supporting documents such as:

- PDF
- DOC/DOCX
- JPG
- PNG

The uploaded files can be used for future legal document analysis.

---

## ⚖️ Structured Legal Guidance

Each response contains:

- Summary
- Applicable Law Sections
- Legal Procedure
- Required Documents
- Source References

---

## 🇮🇳 Indian Legal Knowledge Base

Current knowledge base includes:

- Bharatiya Nyaya Sanhita (BNS)
- Bharatiya Nagarik Suraksha Sanhita (BNSS)
- Constitution of India
- Other public legal documents

---

# 🏗️ System Architecture

```
User
   │
   ▼
React + Tailwind Frontend
   │
Axios API
   │
FastAPI Backend
   │
Retrieve Relevant Documents
   │
Chroma Vector Database
   │
Sentence Transformers
   │
Groq Llama 3.3
   │
Generate Structured Legal Response
   │
Return JSON Response
   │
Frontend Displays Results
```

---

# 🛠 Tech Stack

## Frontend

- React.js
- Vite
- Tailwind CSS
- Axios

---

## Backend

- FastAPI
- Python

---

## AI & NLP

- Retrieval-Augmented Generation (RAG)
- Sentence Transformers
- ChromaDB
- Groq API
- Llama 3.3 70B Versatile

---

## Libraries

- LangChain
- PyMuPDF
- python-dotenv
- python-multipart

---

# 📂 Project Structure

```
AI-Legal-Assistant
│
├── backend
│   ├── documents
│   ├── models
│   ├── rag
│   ├── routes
│   ├── services
│   ├── utils
│   ├── vector_db
│   ├── app.py
│   ├── build_vector_db.py
│   ├── requirements.txt
│   └── .env.example
│
├── frontend
│   ├── public
│   ├── src
│   ├── package.json
│   ├── vite.config.js
│   └── index.html
│
└── README.md
```

---

# ⚙️ Installation

## Clone Repository

```bash
git clone https://github.com/rahulpedaprolu-max/AI-Legal-Assistant.git

cd AI-Legal-Assistant
```

---

## Backend Setup

```bash
cd backend

pip install -r requirements.txt
```

Create a `.env` file.

```
GROQ_API_KEY=YOUR_API_KEY
```

---

## Build Vector Database

```bash
python build_vector_db.py
```

---

## Run Backend

```bash
uvicorn app:app --reload
```

Backend runs at:

```
http://127.0.0.1:8000
```

---

## Frontend Setup

```bash
cd frontend

npm install

npm run dev
```

Frontend runs at:

```
http://localhost:5173
```

---

# 📖 Usage

1. Open the frontend.
2. Enter your legal issue.
3. Optionally upload supporting documents.
4. Click **Analyze Case**.
5. View:

- Summary
- Relevant Laws
- Legal Procedure
- Required Documents
- Source References

---

# 📸 Screenshots

## Home Page

(Add Screenshot Here)

---

## Query Input

(Add Screenshot Here)

---

## AI Generated Result

(Add Screenshot Here)

---

## Source References

(Add Screenshot Here)

---

# 🔮 Future Enhancements

- OCR for scanned legal documents
- Multi-language support
- Voice-based legal assistant
- Legal chatbot memory
- Court judgment search
- Advocate recommendation system
- PDF report generation
- Legal notice generation

---

# ⚠️ Disclaimer

This project provides AI-assisted legal guidance for educational and informational purposes only.

The generated responses should not be considered professional legal advice. Users should consult qualified legal professionals before making legal decisions.

---

# 👨‍💻 Team

Hackathon Project

Developed by:

- Rahul Pedaprolu
- Team Members

---

# 🙏 Acknowledgements

- Groq
- LangChain
- ChromaDB
- Sentence Transformers
- FastAPI
- React
- Tailwind CSS
- Indian Government Public Legal Documents

---

# 📜 License

This project is developed for educational and hackathon purposes.
