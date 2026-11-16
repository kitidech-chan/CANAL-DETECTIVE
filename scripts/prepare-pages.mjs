import {cpSync, copyFileSync, writeFileSync} from 'node:fs';
const root = new URL('../', import.meta.url);
copyFileSync(new URL('dist/index.html', root), new URL('index.html', root));
cpSync(new URL('dist/site-assets/', root), new URL('site-assets/', root), {recursive: true});
writeFileSync(new URL('.nojekyll', root), '');
console.log('GitHub Pages files prepared. Commit index.html, site-assets, and .nojekyll with your source changes.');