# Ilustrações da frota

Ilustrações originais geradas por IA (Figma, modelo `gpt-image-2.5-flare`) para a seção "Opções de Mobilidade". Veículos genéricos, sem logos de marca.

Arquivo no Figma: "RC Motorista - Ilustrações da frota" (equipe de Pedro).

## Prompt base

Trocar `{veículo}` por: `generic modern black executive sedan car`, `generic modern black executive luxury SUV`, `generic modern black executive minivan (premium people carrier MPV with sliding side door)` ou `generic modern black executive passenger van (large high-roof van with side windows for 12 to 15 passengers)`.

```
Hand-drawn technical concept sketch of a {veículo}, three-quarter front view facing left,
drawn with fine white pencil and chalk lines on a solid near-black background (hex #08090d).
Visible light construction lines and perspective guides, subtle white highlights on the body
panels, glossy black paint suggested with sparse hatching, soft faint shadow under the vehicle.
The vehicle is centered and fills about 80 percent of the width, with even empty margins.
No brand logos, no badges, no emblems, no license plate text, no text or watermark anywhere.
Minimal, elegant, premium automotive design sketch style, monochrome white on black.
```

Tamanho pedido: 1200x896 (o modelo devolve 1280x960).

## Tratamento

As imagens são opacas. Para fundirem com o fundo da seção sem recorte visível, o script grava a cor `#08090d` no fundo e esmaece as bordas até ela:

```sh
python3 scripts/bake-fleet-images.py <pasta_com_os_pngs> images/frota
```

Saída: `sedan.jpg`, `suv.jpg`, `minivan.jpg`, `van.jpg` em 800x600. Se a cor de fundo da seção mudar em `src/styles/fleet.css`, atualize `SECTION` no script e rode de novo.

## Sedã (Chery Arrizo 6 2021)

O `sedan.jpg` foi gerado com o prompt base, usando no lugar de `{veículo}` a descrição do Arrizo 6 turbo 2021: silhueta de cupê de quatro portas com teto caindo até a traseira curta, grade larga em colmeia de losangos com friso cromado, faróis finos puxados para trás com barra de LED, entradas de ar angulares com filetes de LED, vinco de ombro até a lanterna fina e rodas de raios duplos. Sem logo, emblema ou placa. Tratado com o mesmo script de tratamento.
