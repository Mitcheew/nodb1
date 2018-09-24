const quotes = require(__dirname + '/bobRossQuotes.js')


module.exports = {
    read: (req, res) => {
        const quote = quotes[Math.floor(Math.random()*quotes.length)];
            res.status(200).send(quote);
    }
}