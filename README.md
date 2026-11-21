Svatební web – Jana & Marek (29. 9. 2027)
Jednoduchý, lehký a responzivní svatební web ve světle krémovém ladění s úvodní animovanou pozvánkou, padajícími konfetami a postavičkami Lego novomanželů.

Jak web spustit
1. Lokálně v počítači: Stačí dvakrát kliknout na soubor index.html – otevře se přímo ve webovém prohlížeči bez nutnosti cokoli instalovat.
2. Online (zdarma): Celou složku lze nahrát například na GitHub Pages, Netlify nebo Vercel, kde web okamžitě získá veřejný odkaz k rozeslání hostům.

Kde co upravit
Odrážka Jména, nadpisy a datum: V souboru index.html upravte texty uvnitř tagů <h1>, atributů data-text="..." (pro postupně vypisovaný text) a v hlavičce .header-monogram.
Odrážka Obrázek figurek: Nahraďte soubor figurky.png vlastním obrázkem ve formátu PNG s průhledným pozadím (ideální šířka kolem 800–1000 px).
Odrážka Barevná paleta: Na úplném začátku souboru style.css (sekce :root) lze jednoduše změnit odstín krémového pozadí (--bg-cream), doplňkové béžové (--accent-sand) i barvu písma (--text-dark).
Odrážka Rychlost psaní textu a konfety: V souboru script.js lze upravit rychlost vypisování písmen (hodnoty 65 a 95 v milisekundách) nebo počet a barvy padajících konfet (confettiCount a pole colors).

Použité technologie
Odrážka Čisté HTML5, CSS3 a JavaScript (Vanilla JS) – bez externích knihoven a frameworků.
Odrážka Písma z Google Fonts: Great Vibes (jména), Cormorant Garamond (nadpisy a datum), Montserrat (doplňkové texty).
