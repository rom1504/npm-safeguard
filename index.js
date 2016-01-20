var npmGet=require('npm-get');

function packageContainsIdea(name)
{
  return new Promise(cb => {
    npmGet(name,'.idea',err => {
      cb(err ? false : true);
    });
   });
}

function packagesContainIdea(names)
{
  return Promise.all(
    names.map(name => packageContainsIdea(name)
    .then(result => ({name:name,result:result}))
    .then(result => {console.log(result);return result;})
))
}

module.exports={packageContainsIdea,packagesContainIdea};
