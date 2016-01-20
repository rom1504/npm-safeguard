var cheerio=require('cheerio');
var bhttp=require('bhttp');
var range=require('range').range;
var flatmap=require('flatmap');

function getMostStarredPackages(n)
{
  var pages=Math.ceil(n/36);
  return Promise.all(range(0,pages).map(i=> bhttp.get('https://www.npmjs.com/browse/star?offset='+(i*36))))
  .then(contents => flatmap(contents,content => parse(content.body.toString('utf8'))).slice(0,n))
}

function parse(body)
{
  $=cheerio.load(body);
  return $('div[class=package-details] h3 a').map((i,e) => $(e).text()).get(); 
}

module.exports=getMostStarredPackages;
