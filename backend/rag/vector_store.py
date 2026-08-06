from langchain_community.vectorstores import Chroma

from rag.embedding import get_embeddings


def create_vector_db(chunks):

    db = Chroma.from_documents(
        documents=chunks,
        embedding=get_embeddings(),
        persist_directory="vector_db"
    )

    return db