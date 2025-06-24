// @ts-check
import { defineConfig } from 'astro/config';
import netlify from '@astrojs/netlify';

export default defineConfig({
  output: 'static', // ou tu peux même supprimer cette ligne, 'static' est la valeur par défaut
  adapter: netlify()
});
