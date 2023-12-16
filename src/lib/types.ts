export type Categories = 'sveltekit' | 'svelte';

export type Post = {
	title: string;
	slug: string;
	description: string;
	date: string;
	author: string;
	categories: Categories[];
	published: boolean;
};
