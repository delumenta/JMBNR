# JMBNR guild website

A standalone, responsive public guild page. The site is plain HTML/CSS/JS and can be hosted from the root of a GitHub Pages repository named `JMBNR`.

## Publish

1. Create a public GitHub repository named `JMBNR` under `delumenta`.
2. Upload `index.html` to the repository root.
3. In **Settings → Pages**, select **Deploy from a branch**, `main`, and `/ (root)`.
4. Once Pages builds, open `https://delumenta.github.io/JMBNR/`.

## Customize

Replace the temporary Academy link in the Join section with your confirmed Discord invite or recruitment flow. The current JMBN logo is loaded from the existing Wix URL; copy an approved asset into this repo and update the image path if you want the site independent of Wix.

The front page has no login, database connection, member statistics or invented mission data. Add Supabase once you define member roles, access rules and content to manage.
