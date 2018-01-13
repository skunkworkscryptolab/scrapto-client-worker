const webscraper = require('./index.js')

var jsdom = require('jsdom');

const sitemapOverview = {
    "startUrl": "https://iex.ec/overview/",
    "selectors": [{
        "parentSelectors": ["_root"],
        "type": "SelectorElement",
        "multiple": true,
        "id": "resource-provider",
        "selector": ".resource__roadmap__entry",
        "delay": ""
    }, {
        "parentSelectors": ["resource-provider"],
        "type": "SelectorText",
        "multiple": false,
        "id": "provider",
        "selector": "h4.article__title",
        "regex": "",
        "delay": ""
    }, {
        "parentSelectors": ["resource-provider"],
        "type": "SelectorText",
        "multiple": false,
        "id": "release-date",
        "selector": "p.resource__roadmap__small-text",
        "regex": "",
        "delay": ""
    }],
    "_id": "iexec"
};

const sitemaps = {
  'demo_id_job': sitemapOverview,
};

var cmdArgs = process.argv.slice(2);

if (cmdArgs.length == 0 || cmdArgs[0] !== 'demo_id_job') {
  throw 'Invalid sitemap id!';
}

const sitemap = sitemaps[cmdArgs[0]];

const options = {
  delay: 2000,
  pageLoadDelay: 2000,
} // optional delay and pageLoadDelay
webscraper(sitemap, options)
    .then(function (scraped) {
        console.log(scraped);
    })
