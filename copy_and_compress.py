import os
import shutil
import sys
import subprocess

# Define paths
src_dirs = {
    "pa": r"C:\Users\prash\Downloads\PA Tikva",
    "ak": r"C:\Users\prash\Downloads\AK Tikva",
    "yp": r"C:\Users\prash\Downloads\YP Tikva",
    "wb": r"C:\Users\prash\Downloads\WB Tikva"
}

dest_base = os.path.join(os.path.dirname(os.path.abspath(__file__)), "images", "camp-tikva")

# Try to import PIL, or install it if missing
try:
    from PIL import Image
    print("[INFO] Pillow is already installed.")
except ImportError:
    print("[INFO] Pillow not found. Attempting to install Pillow for image compression...")
    try:
        subprocess.check_call([sys.executable, "-m", "pip", "install", "Pillow"])
        from PIL import Image
        print("[INFO] Pillow successfully installed.")
    except Exception as e:
        print(f"[WARNING] Could not install Pillow: {e}")
        print("[WARNING] Proceeding with standard file copying (no compression).")
        Image = None

def process_images():
    for loc, src in src_dirs.items():
        if not os.path.exists(src):
            print(f"[ERROR] Source directory does not exist: {src}")
            continue
        
        dest = os.path.join(dest_base, loc)
        os.makedirs(dest, exist_ok=True)
        
        # List files in source directory
        files = sorted([f for f in os.listdir(src) if os.path.isfile(os.path.join(src, f))])
        # Filter out hidden files
        files = [f for f in files if not f.startswith('.')]
        
        # Take at most 6 files
        files = files[:6]
        print(f"\nProcessing {len(files)} files for location '{loc}' from '{src}' to '{dest}'...")
        
        for idx, filename in enumerate(files):
            src_path = os.path.join(src, filename)
            dest_filename = f"{idx + 1}.jpg"
            dest_path = os.path.join(dest, dest_filename)
            
            if Image is not None:
                try:
                    # Compress and save as JPEG
                    with Image.open(src_path) as img:
                        # Convert to RGB (in case of PNG/RGBA)
                        if img.mode in ("RGBA", "P"):
                            img = img.convert("RGB")
                        
                        # Resize if very large
                        max_size = 1200
                        width, height = img.size
                        if width > max_size or height > max_size:
                            if width > height:
                                new_width = max_size
                                new_height = int(height * (max_size / width))
                            else:
                                new_height = max_size
                                new_width = int(width * (max_size / height))
                            img = img.resize((new_width, new_height), Image.Resampling.LANCZOS)
                        
                        # Save
                        img.save(dest_path, "JPEG", quality=85, optimize=True)
                        print(f"  [COMPRESSED] {filename} -> {dest_filename} ({os.path.getsize(dest_path)//1024} KB)")
                except Exception as img_err:
                    print(f"  [ERROR] Could not compress {filename}: {img_err}. Copying as-is.")
                    # Fallback to copy
                    shutil.copy2(src_path, dest_path)
            else:
                # Copy as-is but name it .jpg (browser handles it, or rename to original extension if needed)
                # Keep .jpg extension so HTML paths are predictable
                shutil.copy2(src_path, dest_path)
                print(f"  [COPIED] {filename} -> {dest_filename}")

if __name__ == "__main__":
    process_images()
    print("\n[SUCCESS] Image copying and processing completed.")
