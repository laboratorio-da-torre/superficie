# impressões da superfície adentro terra

Site/arquivo audiovisual em HTML, CSS e JavaScript, pensado para GitHub Pages.

## Estrutura

```text
.
├── index.html
├── style.css
├── script.js
├── README.md
└── assets/
    ├── video.mp4
    ├── image-01.jpg
    ├── image-02.jpg
    ├── image-03.jpg
    └── grain.svg
```

## Antes de publicar

Coloca os teus ficheiros na pasta `assets/` com estes nomes:

- `video.mp4` — filme principal, preferencialmente vertical 3:4 ou com enquadramento compatível.
- `image-01.jpg`
- `image-02.jpg`
- `image-03.jpg`

As três imagens são apenas exemplos no HTML; podes duplicar/remover blocos no `index.html`.

## Fonte do teu site pessoal

O CSS está preparado para receber a mesma fonte do teu site Cargo.

No topo de `style.css` existe um bloco `@font-face`. Se tiveres o ficheiro `.woff` ou `.woff2` da fonte, coloca-o em `assets/` e altera esse bloco.

Depois muda:

```css
--font-main: Arial, Helvetica, sans-serif;
```

para:

```css
--font-main: "NomeDaFonte", Arial, sans-serif;
```

## Vídeo

O vídeo começa automaticamente, sem som, e em loop.

Não há controlos visíveis.

A tecla:

```text
SPACE
```

faz:

```text
play ↔ pause
```

## GitHub Pages

1. Cria um repositório no GitHub.
2. Faz upload de todos os ficheiros mantendo a estrutura das pastas.
3. Vai a:

```text
Settings → Pages
```

4. Em `Build and deployment`, escolhe:

```text
Deploy from a branch
```

5. Selecciona:

```text
main
/
(root)
```

6. Guarda.

O GitHub vai gerar o endereço do site.

## Nota

O arquivo foi deliberadamente construído sem uma hierarquia convencional. Os elementos têm posições independentes e podem ser transformados em links para imagens, textos, vídeos, scans, sons ou outras páginas.
