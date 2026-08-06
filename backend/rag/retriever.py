from langchain_chroma import Chroma
from rag.embedding import get_embeddings


def retrieve_documents(query: str):

    db = Chroma(
        persist_directory="vector_db",
        embedding_function=get_embeddings()
    )

    results = db.similarity_search_with_score(
        query=query,
        k=8
    )

    documents = []

    print("\n================ RETRIEVED DOCUMENTS ================\n")

    for i, (doc, score) in enumerate(results, start=1):

        print(f"Result {i}")
        print(f"Similarity Score: {score}")
        print(f"Source: {doc.metadata.get('source')}")
        print(f"Page: {doc.metadata.get('page_label')}")
        print("-" * 80)
        print(doc.page_content[:700])
        print("\n")

        documents.append(doc)

    return documents