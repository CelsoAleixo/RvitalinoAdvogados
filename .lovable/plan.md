

# Plan: Clean Up Unused Code + Fix Locaweb Deployment

## Diagnosis

**Root cause of 404/500 errors on Locaweb:**

1. **`server-dir: ./`** uploads files to the FTP home directory root. On Locaweb, the web root is `public_html/` inside the FTP home. So files need to go to `./public_html/` as the server directory.
2. **`dangerous-clean-slate: true`** with `server-dir: ./` may have wiped the entire FTP home including the `public_html/` folder itself.
3. The `.htaccess` uses absolute rewrite paths (e.g., `/atuacao.php`) which may not work if the site is in a subdirectory or if mod_rewrite handles paths differently on Locaweb.

**Unused code to remove:**
- `html-version/` folder -- exact duplicate of `public_html/`, never used in deployment
- `public_html/atuacao.php` references image paths starting with `/assets/` (absolute) instead of `./assets/` (relative)

## Changes

### 1. Delete `html-version/` folder
This is an unused duplicate. Only `public_html/` is deployed.

### 2. Fix `.github/workflows/main.yml` - correct `server-dir`
Change `server-dir: ./` to `server-dir: ./public_html/` so files land in the Locaweb web root.

### 3. Fix `public_html/.htaccess` - use relative rewrite paths
- Remove the HTTPS redirect (Locaweb may handle this at the panel level, and it can cause redirect loops)
- Change absolute rewrite targets like `/atuacao.php` to relative paths, or remove the leading `/` to avoid path resolution issues on shared hosting

### 4. Fix `public_html/atuacao.php` - absolute image paths
The area cards use paths like `/assets/areas/...` and `/atuacao/...`. Change all to relative `./assets/` and `./atuacao/`.

### 5. Trigger deployment
Update the workflow version comment to force a new push event and redeploy.

## Technical Details

```text
Current flow (broken):
  local: public_html/* --> FTP root (./): ~/index.php, ~/css/, ...
  Web root: ~/public_html/  --> empty = 404

Fixed flow:
  local: public_html/* --> FTP: ./public_html/index.php, ./public_html/css/, ...
  Web root: ~/public_html/  --> serves index.php correctly
```

The `.htaccess` fix ensures `mod_rewrite` rules don't cause 500 errors by being overly cautious with `IfModule` guards and avoiding HTTPS redirect (let Locaweb panel handle SSL).

