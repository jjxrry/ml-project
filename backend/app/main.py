from fastapi import FastAPI, File, UploadFile, HTTPException
from fastapi.responses import JSONResponse
from fastapi.middleware.cors import CORSMiddleware
from .schemas import ASCIIResponse
from .ascii_image_converter import image_to_ascii

app = FastAPI(
    title="ASCII Image Converter API",
    description="Convert images to ASCII art.",
    version="1.0.0",
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/", summary="Root Endpoint", description="Returns a welcome message.")
async def read_root():
    return {"message": "Welcome to the ASCII Converter API! Visit /docs for interactive documentation."}


@app.post("/convert_image", response_model=ASCIIResponse)
async def convert_image(
    file: UploadFile = File(...),
    width: int = 100,
    height: int = None,
    charset: str = "@%#*+=-:. ",
):
    print(f"Received width: {width}, height: {height}, charset: {charset}")  # Log received values

    if not file.content_type.startswith("image/"):
        raise HTTPException(status_code=400, detail="Invalid image file")
    try:
        image_bytes = await file.read()
        ascii_art = image_to_ascii(image_bytes, width, height, charset)
        return JSONResponse(
            content={"ascii_art": ascii_art},
            status_code=200,
            media_type="application/json",
        )
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
