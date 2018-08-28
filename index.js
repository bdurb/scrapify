const request = require('request');
const cheerio = require('cheerio');

const pageOne = 'https://www.dealerrater.com/dealer/McKaig-Chevrolet-Buick-A-Dealer-For-The-People-dealer-reviews-23685/page1/?filter=ALL_REVIEWS#link'
const pageTwo = 'https://www.dealerrater.com/dealer/McKaig-Chevrolet-Buick-A-Dealer-For-The-People-dealer-reviews-23685/page2/?filter=ALL_REVIEWS#link'
const pageThree = 'https://www.dealerrater.com/dealer/McKaig-Chevrolet-Buick-A-Dealer-For-The-People-dealer-reviews-23685/page3/?filter=ALL_REVIEWS#link'
const pageFour = 'https://www.dealerrater.com/dealer/McKaig-Chevrolet-Buick-A-Dealer-For-The-People-dealer-reviews-23685/page4/?filter=ALL_REVIEWS#link'
const pageFive = 'https://www.dealerrater.com/dealer/McKaig-Chevrolet-Buick-A-Dealer-For-The-People-dealer-reviews-23685/page5/?filter=ALL_REVIEWS#link'

const allReviews = []

request(pageOne, (err, res, html) => {
  if (!err && res.statusCode == 200) {
    const $ = cheerio.load(html)

    $('.review-entry').each((i, element) => {
      const $element = $(element)
      const headline = $element.find('h3').text()
      const user = $element.find('span').text()
      const review = $element.find('.review-content').text()
        const pageReviews = {
          headline,
          user,
          review
        }
        allReviews.push(pageReviews)
    })
  }
  request(pageTwo, (err, res, html) => {
    if (!err && res.statusCode == 200) {
      const $ = cheerio.load(html)
  
      $('.review-entry').each((i, element) => {
        const $element = $(element)
        const headline = $element.find('h3').text()
        const user = $element.find('span').text()
        const review = $element.find('.review-content').text()
          const pageReviews = {
            headline,
            user,
            review
          }
          allReviews.push(pageReviews)
      })
    }
    request(pageThree, (err, res, html) => {
      if (!err && res.statusCode == 200) {
        const $ = cheerio.load(html)
    
        $('.review-entry').each((i, element) => {
          const $element = $(element)
          const headline = $element.find('h3').text()
          const user = $element.find('span').text()
          const review = $element.find('.review-content').text()
            const pageReviews = {
              headline,
              user,
              review
            }
            allReviews.push(pageReviews)
        })
      }
      request(pageFour, (err, res, html) => {
        if (!err && res.statusCode == 200) {
          const $ = cheerio.load(html)
      
          $('.review-entry').each((i, element) => {
            const $element = $(element)
            const headline = $element.find('h3').text()
            const user = $element.find('span').text()
            const review = $element.find('.review-content').text()
              const pageReviews = {
                headline,
                user,
                review
              }
              allReviews.push(pageReviews)
          })
        }
        request(pageFive, (err, res, html) => {
          if (!err && res.statusCode == 200) {
            const $ = cheerio.load(html)
        
            $('.review-entry').each((i, element) => {
              const $element = $(element)
              const headline = $element.find('h3').text()
              const user = $element.find('span').text()
              const review = $element.find('.review-content').text()
                const pageReviews = {
                  headline,
                  user,
                  review
                }
                allReviews.push(pageReviews)
            })
          }
          const worst = allReviews.filter(review => review.review.length <= 135)
            .sort((a, b) => a.review.length < b.review.length)
            console.log(worst)
        })
      })
    })
  })
})
