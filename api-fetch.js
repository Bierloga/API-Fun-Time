async function getRandomQuote() {
    const res = await fetch("https://api.tronalddump.io/random/quote", { method: "GET" })
    const data = await res.json()
    return data
}

async function getRandomMeme() {
    const res = await fetch("https://api.tronalddump.io/random/quote", { method: "GET" })
    const data = await res.json()
    return data
}