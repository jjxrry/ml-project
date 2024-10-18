from PIL import Image
import numpy as np
import io


def load_image(image_bytes: bytes) -> Image.Image:
    return Image.open(io.BytesIO(image_bytes))


def resize_image(image: Image.Image, new_width: int, new_height: int) -> Image.Image:  # noqa: E501
    return image.resize((new_width, new_height))


def convert_to_grayscale(image: Image.Image) -> Image.Image:
    return image.convert("L")


def get_avg_brightness(image: Image.Image) -> np.ndarray:
    return np.array(image).astype(np.float32)
