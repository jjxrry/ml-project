from typing import Optional
from pydantic import BaseModel


class ASCIIRequest(BaseModel):
    image: bytes
    width: Optional[int] = 100
    height: Optional[int] = None
    charset: Optional[str] = "@%#*+=-:. "


class ASCIIResponse(BaseModel):
    ascii_art: str
