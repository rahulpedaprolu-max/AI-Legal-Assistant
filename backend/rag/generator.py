import os

from groq import Groq
from dotenv import load_dotenv

load_dotenv()

client = Groq(
    api_key=os.getenv("GROQ_API_KEY")
)

SYSTEM_PROMPT = """
You are an expert Indian Legal Assistant.

STRICT RULES:

1. Use ONLY the supplied legal context.
2. Never invent sections.
3. Never guess.
4. If context is insufficient, clearly mention that.
5. Explain in simple English.
6. Return ONLY valid JSON.

Format:

{
    "summary":"",
    "law_sections":[],
    "procedure":[],
    "documents":[]
}
"""


def generate_answer(context, query):

    prompt = f"""

LEGAL CONTEXT

{context}


USER QUESTION

{query}

"""

    response = client.chat.completions.create(

        model="llama-3.3-70b-versatile",

        temperature=0.2,

        messages=[
            {
                "role": "system",
                "content": SYSTEM_PROMPT
            },
            {
                "role": "user",
                "content": prompt
            }
        ]

    )

    return response.choices[0].message.content