"""Grava a cor de fundo da secao de frota nas ilustracoes.

- Clareia (max por canal) com #08090d: o fundo da imagem vira exatamente a cor da secao.
- Esmaece as bordas ate essa cor, para nao existir recorte visivel do retangulo.
Uso: python3 scripts/bake-fleet-images.py <dir_com_os_pngs> images/frota
Requer Pillow e numpy (pip install pillow numpy).
"""
import sys
from pathlib import Path

import numpy as np
from PIL import Image

SECTION = np.array([8, 9, 13], dtype=np.float32)
SIZE = (800, 600)
FEATHER_X = 0.07  # fracao da largura com esmaecimento
FEATHER_Y = 0.09  # fracao da altura com esmaecimento


def smoothstep(t: np.ndarray) -> np.ndarray:
    t = np.clip(t, 0.0, 1.0)
    return t * t * (3 - 2 * t)


def bake(src: Path, dst: Path) -> None:
    image = Image.open(src).convert('RGB').resize(SIZE, Image.LANCZOS)
    pixels = np.asarray(image).astype(np.float32)

    pixels = np.maximum(pixels, SECTION)

    height, width = pixels.shape[:2]
    x = np.arange(width, dtype=np.float32)
    y = np.arange(height, dtype=np.float32)
    edge_x = np.minimum(x, width - 1 - x) / (width * FEATHER_X)
    edge_y = np.minimum(y, height - 1 - y) / (height * FEATHER_Y)
    alpha = np.outer(smoothstep(edge_y), smoothstep(edge_x))[..., None]

    pixels = pixels * alpha + SECTION * (1 - alpha)
    out = Image.fromarray(np.clip(np.rint(pixels), 0, 255).astype(np.uint8))
    out.save(dst, 'JPEG', quality=84, subsampling=0, optimize=True, progressive=True)


def main() -> None:
    src_dir, dst_dir = Path(sys.argv[1]), Path(sys.argv[2])
    for name in ('sedan', 'suv', 'minivan', 'van'):
        bake(src_dir / f'{name}.png', dst_dir / f'{name}.jpg')
        print(name, (dst_dir / f'{name}.jpg').stat().st_size // 1024, 'KB')


if __name__ == '__main__':
    main()
