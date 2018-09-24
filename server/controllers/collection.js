const quotes = require(__dirname + '/bobRossQuotes.js')

let cards = [];
let id = 0;

module.exports = {
    create: (req, res) => {
        const { quote } = req.body;
            cards.push({ id, quote });
            res.status(200).send(cards);
            id++;

    },

    read: (req, res) => {
        res.status(200).send(cards);
    },

    update: (req, res) => {
        const editId = req.params.id;
        const cardsIndex = cards.findIndex(cards => cards.id == editId)
        let card = cards[cardsIndex];
        cards[cardsIndex] = {
            id: card.id,
            quote: quotes[Math.floor(Math.random() * quotes.length)]
        }

        res.status(200).send(cards[cardsIndex].quote);

    },

    delete: (req, res) => {
        const deleteId = req.params.id;
        const cardIndex = cards.findIndex(card => card.id == deleteId)

        cards.splice(cardIndex, 1)
        res.status(200).send(cards);
    },

    search: (req, res) => {
        const search = req.params.search;
        let result = [];
        console.log(search)
        for(var i = 0; i < cards.length; i++){
            if(cards[i].quote.indexOf(search) >= 0){
                result.push(cards[i]);
            }
        }
        console.log(result);
        res.status(200).send(result);
    }
    
}