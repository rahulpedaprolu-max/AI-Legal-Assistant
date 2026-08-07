from langchain_chroma import Chroma
from rag.embedding import get_embeddings

_db = None


def get_vector_db():
    global _db

    if _db is None:
        print("Loading Chroma vector database...")

        _db = Chroma(
            persist_directory="vector_db",
            embedding_function=get_embeddings()
        )

        print("Chroma vector database loaded.")

    return _db


def retrieve_documents(query: str):

    db = get_vector_db()

    results = db.similarity_search_with_score(
        query=query,
        k=4
    )

    documents = []

    print("\n================ RETRIEVED DOCUMENTS ================\n")

    for i, (doc, score) in enumerate(results, start=1):

        print(f"Result {i}")
        print(f"Similarity Score: {score}")
        print(f"Source: {doc.metadata.get('source')}")
        print(f"Page: {doc.metadata.get('page_label')}")
        print("-" * 80)
        print(doc.page_content[:500])
        print("\n")

        documents.append(doc)

    return documents