from rag.retriever import retrieve_documents

query = input("Enter your legal question: ")

retrieve_documents(query)