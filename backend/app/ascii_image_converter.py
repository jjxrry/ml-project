from .utils import load_image, resize_image, convert_to_grayscale, get_avg_brightness
import numpy as np


def map_brightness_to_ascii(brightness: np.ndarray, charset: str) -> np.ndarray:
    # Normalize brightness to range 0 - (len(charset) - 1)
    normalized = (brightness / 255) * (len(charset) - 1)
    indices = normalized.astype(int)
    # alternate option to directly index instead of map
    charset_array = np.array(list(charset))
    ascii_image = charset_array[indices]
    # Map indices to characters
    # ascii_image = np.vectorize(lambda idx: charset[idx])(indices)
    return ascii_image


def image_to_ascii(image_bytes: bytes, width: int, height: int, charset: str) -> str:
    image = load_image(image_bytes)
    if height is None:
        # Maintain aspect ratio based on character dimensions
        aspect_ratio = image.height / image.width
        # Typical font aspect ratio correction (e.g., characters are taller)
        aspect_ratio *= 0.55
        height = int(width * aspect_ratio)
    image = resize_image(image, width, height)
    image = convert_to_grayscale(image)
    brightness = get_avg_brightness(image)
    ascii_array = map_brightness_to_ascii(brightness, charset)
    # Convert the array to a single string with line breaks
    ascii_lines = ["".join(row) for row in ascii_array]
    ascii_art = "\n".join(ascii_lines)
    return ascii_art
