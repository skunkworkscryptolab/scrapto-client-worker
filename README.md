# Scrapto Client & Headless Worker
Scrapto Client & Headless Worker is a chrome browser extension and a library built for data extraction from web 
pages. Using this extension you can create a plan (sitemap) how a web site 
should be traversed and what should be extracted. Using these sitemaps the 
Web Scraper will navigate the site accordingly and extract all data. Scraped 
data later can be exported as CSV.

### Features

 1. Scrape multiple pages
 2. Sitemaps and scraped data are stored in browsers local storage or in CouchDB
 3. Multiple data selection types
 4. Extract data from dynamic pages (JavaScript+AJAX)
 5. Browse scraped data
 6. Export scraped data as CSV
 7. Import, Export sitemaps
 8. Depends only on Chrome browser
 
#### Headless mode
To use it as a library you need a sitemap, for example exported from the app.

    const webscraper = require('./index.js')
    const sitemap = {
      id: 'test',
      startUrl: 'http://test.lv/',
      selectors: [
        {
          'id': 'a',
          'selector': '#scraper-test-one-page a',
          'multiple': false,
          type: 'SelectorText',
          'parentSelectors': [
            '_root'
          ]
        }
      ]
    }
    const options = {} // optional delay and pageLoadDelay
    webscraper(sitemap, options)
        .then(function (scraped) {
            // This is your scraped info
        })

#### Bugs
When submitting a bug please attach an exported sitemap if possible.

## License
LGPLv3
