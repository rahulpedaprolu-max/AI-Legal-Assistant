import json

from rag.retriever import retrieve_documents
from rag.generator import generate_answer


def analyze_case(query: str):

    docs = retrieve_documents(query)

    context = ""

    sources = []

    for doc in docs:

        source_name = doc.metadata.get("source", "Unknown")
        page = doc.metadata.get("page_label", "Unknown")

        context += f"""

SOURCE:
{source_name}

PAGE:
{page}

CONTENT:

{doc.page_content}

=====================================================

"""

        sources.append({
            "document": source_name.split("\\")[-1],
            "page": page
        })

    response = generate_answer(
        context=context,
        query=query
    )

    try:

        data = json.loads(response)

    except Exception:

        data = {
            "summary": response,
            "law_sections": [],
            "procedure": [],
            "documents": []
        }

    data["sources"] = sources

    return data