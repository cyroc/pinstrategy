"""Create home-card thumbnails in images/thumbs/ for every playfield image.

Each thumbnail is the band of the playfield that the card shows
(CSS: height 190px, object-fit: cover, object-position: center 20%),
cut for cards down to 260px wide, resized to 600px wide. Because the band
is taken at the same 20% position, the existing CSS frames it identically.

Usage (from pinball-webapp/):  python tools/make_thumbs.py [--force]
Existing thumbnails are skipped unless --force is given.
"""
import os, sys
from PIL import Image

SRC, DST = 'images', os.path.join('images', 'thumbs')
CARD_H, MIN_CARD_W, POS, OUT_W, QUALITY = 190, 260, 0.20, 600, 70

force = '--force' in sys.argv
os.makedirs(DST, exist_ok=True)
made = total = 0
for f in sorted(os.listdir(SRC)):
    p = os.path.join(SRC, f)
    if not os.path.isfile(p) or not f.lower().endswith(('.webp', '.jpg', '.jpeg', '.png')):
        continue
    out = os.path.join(DST, os.path.splitext(f)[0] + '.webp')
    if os.path.exists(out) and not force:
        continue
    im = Image.open(p).convert('RGB')
    w, h = im.size
    band = min(h, round(CARD_H * w / MIN_CARD_W))
    top = round(POS * (h - band))
    im = im.crop((0, top, w, top + band))
    if w > OUT_W:
        im = im.resize((OUT_W, round(band * OUT_W / w)), Image.LANCZOS)
    im.save(out, 'WEBP', quality=QUALITY, method=6)
    made += 1; total += os.path.getsize(out)
print(f'made {made} thumbnails, {total/1e6:.2f} MB')
