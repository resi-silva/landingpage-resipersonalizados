# AGENTS.md — Landing Page de Papelaria Personalizada

Projeto estático (HTML/CSS/JS puro). Sem build, sem dependências, sem testes.

## Estrutura

| Arquivo | Papel |
|---|---|
| `index.html` | Página única com 10 seções (topbar, header, hero slider, serviços, produtos, banner, mais produtos, whatsapp cta, footer, whatsapp float) |
| `styles/reset.css` | Reset de box-sizing, margens, scroll-behavior |
| `styles/style.css` | Todos os estilos, mobile-first, grid products auto-fill |
| `scripts/main.js` | Menu mobile toggle + submenu accordion + hero slider auto-play 5s |

## Convenções

- **Mobile-first**: breakpoints `968px`, `768px`, `480px`
- **BEM** para classes: `.header__nav`, `.btn--primary`
- **CSS custom properties** em `:root` — edite cores por lá (`--color-primary: #e91e63`)
- **Fontes**: Google Fonts (Lato + Playfair Display) carregadas via `<link>` no `<head>`
- **Ícones**: SVGs inline no HTML (redes sociais, busca, conta, carrinho, WhatsApp)
- **Imagens**: placeholders com emoji (`<span class="product__emoji">🎀</span>`) — substituir por `<img>` em `assets/images/`

## Pontos de atenção para edição

1. **WhatsApp** aparece em 3 locais: topbar social link, CTA section, e floating button — trocar `5511999999999` em todos
2. **Logo**: 2 locais — `.logo__text` e footer `.footer__col h4`
3. **Slider**: slides no HTML com class `active`; dots gerados por JS automaticamente; auto-play 5s; pausa ao clicar num dot
4. **Submenu desktop**: hover CSS (`has-submenu:hover .submenu`); mobile: clique JS com classe `.open`
5. **Produtos**: 2 grids — um com badge "TOP 10" e descrição, outro com badge "NO VO" e lista de features

## Deploy

GitHub Pages: branch `main` + raiz `/` → `https://<user>.github.io/<repo>`
Nenhum build step necessário.
