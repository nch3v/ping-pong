const fetch = require('isomorphic-fetch')
const { send, text } = require('micro')
const secret = process.env.secret
const DELAY = 60 * 1000

const post = (url, body) => fetch(url, { method: 'POST', body })

const ping = async (url) => {
    if (url) {
        post(ur, process.env.NOW_URL)
    }
}

const pong = async (req, res) => {
    const url = await text(req)
    setTimeout(() => ping(url), DELAY)
    send(res, 200)
}

ping(process.env.URL);

module.exports = pong
