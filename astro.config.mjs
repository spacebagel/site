// @ts-check

import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { defineConfig, fontProviders } from 'astro/config';

// https://astro.build/config
export default defineConfig({
	site: 'https://spacebagel.github.io',
	base: '/site',
	integrations: [mdx(), sitemap()],
	fonts: [
		{
			provider: fontProviders.local(),
			name: 'Ubuntu',
			cssVariable: '--font-ubuntu',
			fallbacks: ['sans-serif'],
			options: {
				variants: [
					{
						src: ['./src/assets/fonts/ubuntu-regular.woff'],
						weight: 300,
						style: 'normal',
						display: 'swap',
					},
					{
						src: ['./src/assets/fonts/ubuntu-bold.woff'],
						weight: 700,
						style: 'normal',
						display: 'swap',
					},
				],
			},
		},
	],
});
