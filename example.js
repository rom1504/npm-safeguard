const packagesContainIdea=require('./').packagesContainIdea;
const names=require('all-the-package-names');

packagesContainIdea(names.filter(name => name.includes('prismarine')))
.then(console.log)
//packagesContainIdea(names.filter(name => name.includes('voxel'))).then(results => results.filter(result => result.result)).then(console.log
