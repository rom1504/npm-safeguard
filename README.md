# npm-safeguard
Download the most popular npm packages and check if they have accidentally published dot files

## Roadmap

1. get packages from https://www.npmjs.com/browse/star?offset=0
2. download the most recent version
3. check for dotfiles (for example .idea)
4. (automatically) post github issues about it

## Usage

```js
const packagesContainIdea=require('./').packagesContainIdea;
const names=require('all-the-package-names');

packagesContainIdea(names.filter(name => name.includes('prismarine')))
.then(console.log)
```

## Inspiration

* https://github.com/ChALkeR/notes/blob/master/Do-not-underestimate-credentials-leaks.md
* https://github.com/npm/npm/issues/5673
