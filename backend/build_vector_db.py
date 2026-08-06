from rag.pdf_loader import load_documents
from rag.splitter import split_documents
from rag.vector_store import create_vector_db

print("Loading PDFs...")

documents = load_documents()

print(f"Loaded {len(documents)} pages.")

chunks = split_documents(documents)

print(f"Created {len(chunks)} chunks.")

create_vector_db(chunks)

print("Vector database created successfully!")