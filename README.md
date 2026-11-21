# Svatební web – Jana & Marek (29. 9. 2027)

Jednoduchý, lehký a responzivní svatební web ve světle krémovém ladění s úvodní animovanou pozvánkou, padajícími konfetami a postavičkami Lego novomanželů.

## Struktura projektu

Všechny soubory patří do jedné složky:

- `index.html` – struktura stránky, texty a rozbalovací menu
- `style.css` – barvy, písma, rozvržení a vzhled animací
- `script.js` – postupné vypisování textu, konfety a chování menu
- `figurky.png` – obrázek Lego novomanželů bez pozadí (průhledné PNG)
- `README.md` – dokumentace k projektu

## Jak web spustit

1. **Lokálně v počítači:** Stačí dvakrát kliknout na soubor `index.html` – otevře se přímo ve webovém prohlížeči bez nutnosti cokoli instalovat.
2. **Online:** Celou složku lze publikovat například přes **GitHub Pages**, **Netlify** nebo **Vercel** a sdílet odkaz s hosty.

## Kde co upravit

- **Jména, nadpisy a datum:** V souboru `index.html` upravte texty uvnitř `<h1>`, atributů `data-text="..."` a v hlavičce `.header-monogram`.
- **Obrázek figurek:** Nahraďte soubor `figurky.png` vlastním obrázkem ve formátu PNG s průhledným pozadím.
- **Barevná paleta:** Na začátku souboru `style.css` v sekci `:root` lze změnit proměnné `--bg-cream`, `--accent-sand` a `--text-dark`.
- **Rychlost psaní a konfety:** V souboru `script.js` lze upravit rychlost vypisování znaků i počet či barvy konfet (`confettiCount`, `colors`).

## Použité technologie

- HTML5, CSS3 a JavaScript (Vanilla JS)
- Písma z Google Fonts (*Great Vibes*, *Cormorant Garamond*, *Montserrat*)
