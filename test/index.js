var RSS = require('rss')
var fs = require('fs')
var path = require('path')

var feeds = new RSS({
    title: 'my feed',
    description: 'des',
    feed_url: 'http://1.xml',
    site_url: 'http://site.com',
    author: 'frankfang'
})

feeds.item({
    title: '1',
    description: 'sakdjdak <a href=//google.com>hi</a>',
    url: 'http://frankfang.com',
    guid: '41419040912312',
    date: 'Sun May 18 2014 13:05:03 GMT+0800 (CST)'
})

var xml = feeds.xml('    ')


fs.writeFile(path.join(__dirname , '/feeds.xml'), xml, function(){
    console.log('feeds.xml created')
    process.exit(0)
})

