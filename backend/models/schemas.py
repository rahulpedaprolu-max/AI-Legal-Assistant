from pydantic import BaseModel

class LegalRequest(BaseModel):
    query: str


class LegalResponse(BaseModel):
    summary: str
    law_sections: list[str]
    procedure: list[str]
    documents: list[str]