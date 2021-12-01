const quoteButton = document.getElementById("quote-button")
const memeButton = document.getElementById("meme-button")

quoteButton.addEventListener("click", async () => {
    const trumpQuoteSpace = document.getElementById('trump-quote')
    trumpQuoteSpace.innerHTML = " "
    const data = await getRandomQuote()
    const quoteInfo = data.value
    trumpQuoteSpace.innerHTML = quoteInfo + ", -- Donald Trump "

})

memeButton.addEventListener("click", async () => {
    const data = await getRandomMeme()
    const link = data._links.self.href
    window.location = link
})


