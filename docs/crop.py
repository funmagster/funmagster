import sys
from PIL import Image, ImageDraw, ImageOps

def crop_to_circle(input_path, output_path):
    try:
        img = Image.open(input_path).convert("RGBA")
        
        # Determine the shortest side to crop to a perfect square
        width, height = img.size
        min_dim = min(width, height)
        
        # Calculate cropping box
        left = (width - min_dim) / 2
        top = (height - min_dim) / 2
        right = (width + min_dim) / 2
        bottom = (height + min_dim) / 2
        
        img = img.crop((left, top, right, bottom))
        
        # Create mask
        mask = Image.new('L', img.size, 0)
        draw = ImageDraw.Draw(mask)
        draw.ellipse((0, 0, min_dim, min_dim), fill=255)
        
        # Apply mask
        result = Image.new('RGBA', img.size, (0, 0, 0, 0))
        result.paste(img, (0, 0), mask=mask)
        
        # Resize to a reasonable web size (e.g., 400x400)
        result = result.resize((400, 400), Image.Resampling.LANCZOS)
        
        result.save(output_path, format="PNG")
        print(f"Successfully saved circular image to {output_path}")
    except Exception as e:
        print(f"Error: {e}")

if __name__ == "__main__":
    if len(sys.argv) != 3:
        print("Usage: python crop.py <input> <output>")
        sys.exit(1)
    crop_to_circle(sys.argv[1], sys.argv[2])
