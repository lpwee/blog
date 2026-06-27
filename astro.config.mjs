// @ts-check

import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { defineConfig, fontProviders } from 'astro/config';

// https://astro.build/config
export default defineConfig({
	site: 'https://blog.pingw.me',
	integrations: [mdx(), sitemap()],
	markdown: {
		shikiConfig: {
			theme: 'one-dark-pro',
			wrap: false,
		},
	},
	fonts: [
		{
			provider: fontProviders.local(),
			name: 'Atkinson',
			cssVariable: '--font-atkinson',
			fallbacks: ['sans-serif'],
			options: {
				variants: [
					{
						src: ['./src/assets/fonts/atkinson-regular.woff'],
						weight: 400,
						style: 'normal',
						display: 'swap',
					},
					{
						src: ['./src/assets/fonts/atkinson-bold.woff'],
						weight: 700,
						style: 'normal',
						display: 'swap',
					},
				],
			},
		},
		{
			provider: fontProviders.local(),
			name: 'Arizona',
			cssVariable: '--font-arizona',
			fallbacks: ['serif'],
			options: {
				variants: [
					{
						src: ['./src/assets/fonts/arizona-regular.woff2'],
						weight: 400,
						style: 'normal',
						display: 'swap',
					},
					{
						src: ['./src/assets/fonts/arizona-italic.woff2'],
						weight: 400,
						style: 'italic',
						display: 'swap',
					},
					{
						src: ['./src/assets/fonts/arizona-medium.woff2'],
						weight: 500,
						style: 'normal',
						display: 'swap',
					},
					{
						src: ['./src/assets/fonts/arizona-medium-italic.woff2'],
						weight: 500,
						style: 'italic',
						display: 'swap',
					},
					{
						src: ['./src/assets/fonts/arizona-bold.woff2'],
						weight: 700,
						style: 'normal',
						display: 'swap',
					},
					{
						src: ['./src/assets/fonts/arizona-bold-italic.woff2'],
						weight: 700,
						style: 'italic',
						display: 'swap',
					},
				],
			},
		},
		{
			provider: fontProviders.local(),
			name: 'Departure Mono',
			cssVariable: '--font-departure-mono',
			fallbacks: ['monospace'],
			options: {
				variants: [
					{
						src: ['./src/assets/fonts/departure-mono.woff2'],
						weight: 400,
						style: 'normal',
						display: 'swap',
					},
				],
			},
		},
	],
});
