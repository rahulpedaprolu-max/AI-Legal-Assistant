from langchain_community.document_loaders import PyPDFDirectoryLoader

def load_documents():

    loader = PyPDFDirectoryLoader("documents")

    documents = loader.load()

    return documents