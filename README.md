# nyaomaru_base

This repositry is my business base template.

Feel free to use it.

## Purpose

By showing my private repository to public, I have got to enhance the coding quality.

And raise my motivation for maintenance of code.

## Get started 🚀

First, you run git clone.

```sh
git clone git@github.com:nyaomaru/nyaomaru_base.git
```

If you use docker, you can run `docker compose up -d` in the working directory.

```sh
docker compose up -d
```

If you don't use docker, you need to run below command.

```sh
pnpm
pnpm dev
```

Then, you access to [`localhost:3333/top`](http://localhost:3333/top/), you can see the website.

### storybook

<a href="https://github.com/storybooks/storybook" target="_blank"><img src="https://raw.githubusercontent.com/storybooks/brand/master/badge/badge-storybook.svg"></a>

you can use storybook.

If you don't use docker, you need to run below command.

```sh
pnpm storybook
```

Then, you access to [`localhost:6006/`](http://localhost:6006/), you can see nyaomaru base storybook.

### jest

[![Jest](https://skillicons.dev/icons?i=jest)](https://skillicons.dev)

you can run jest tests.

If you want to run jest, you run below code.

```sh
pnpm test
```
