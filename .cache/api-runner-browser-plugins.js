module.exports = [{
      plugin: require('../node_modules/gatsby-plugin-image/gatsby-browser.js'),
      options: {"plugins":[]},
    },{
      plugin: require('../node_modules/gatsby-plugin-manifest/gatsby-browser.js'),
      options: {"plugins":[],"name":"TrackerApp","short_name":"Ta","start_url":"/","background_color":"#f7f0eb","theme_color":"#a2466c","display":"minimal-ui","icon":"./static/favicon.svg","legacy":true,"theme_color_in_head":true,"cache_busting_mode":"query","crossOrigin":"anonymous","include_favicon":true,"cacheDigest":"0c1301a5069ee6121018595120341599"},
    },{
      plugin: require('../node_modules/gatsby-plugin-offline/gatsby-browser.js'),
      options: {"plugins":[],"precachePages":["/tracker/"]},
    },{
      plugin: require('../gatsby-browser.js'),
      options: {"plugins":[]},
    }]
