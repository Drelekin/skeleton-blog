---
title: First post
description: First post.
date: '2023-4-14'
author: Indrek
categories:
  - sveltekit
  - svelte
published: true
---

# Markdown

Check your load functions: If you're using load functions in your routes, make sure they're not throwing any errors. If a load function throws an error, SvelteKit will return a 500 error, but this could potentially cause a 404 error depending on your setup. 👋

```ts
function greet(name: string) {
	console.log(`Hey ${name}! 👋`);
}
```
