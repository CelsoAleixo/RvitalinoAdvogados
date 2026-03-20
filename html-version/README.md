# html-version

Versão estática/PHP do site para hospedagem compartilhada.

## Estrutura

- `index.php` e páginas principais na raiz
- `atuacao/*.php` com as subpáginas de áreas de atuação
- `includes/` com `head.php`, `header.php`, `footer.php` e CTA
- `css/style.css`
- `js/main.js`
- `assets/` e `lovable-uploads/` com imagens, vídeos e logos

## Como publicar em hospedagem compartilhada

1. Envie **todo o conteúdo** da pasta `html-version/` para a pasta `public_html/` da hospedagem.
2. Confirme que os arquivos `.htaccess`, `index.php`, `index.html`, `css/`, `js/`, `assets/`, `includes/` e `lovable-uploads/` foram enviados.
3. Se existir uma versão antiga do site na hospedagem, remova os arquivos antigos antes de subir a nova versão para evitar conflito de rota e layout.
4. A página inicial pode abrir por `index.php` ou `index.html`; ambos foram preparados.

## Observações

- Esta pasta não usa build, bundler nem framework.
- A versão React do projeto continua intacta fora desta pasta.
- Os caminhos são relativos para funcionar em FTP/Apache/Locaweb.