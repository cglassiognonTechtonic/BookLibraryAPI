let db = [
  {
    id: 0,
    title: "Insignia",
    author: "SJ Kincaid",
    pubDate: "7/10/2012",
    synopsis:
      "Tom Raines is suddenly recruited into the US Army to train as a virtual reality Combatant to see if he is good enough to help fight World War Three. Equipped with a new computer chip in his brain, it looks as if Tom might actually become somebody. But what happens when you start to question the rules?",
    cover:
      "https://books.google.com/books/content?id=H-URBgAAQBAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE71wQaV4MssZEilwsvSjWwkbsaTjX7bbSbd08JrKaUikgAlrRNiK6ZYFksKKgwmbY9ZKeepwBpKn1g0j0Pf2g8nO1rim57PwHMDVPrxXuYYWAO7V3vFT8PCoVcMaIidhgVMt9mHk",
    rating: 5,
  },
  {
    id: 1,
    title: "Vortex",
    author: "SJ Kincaid",
    pubDate: "7/2/2013",
    synopsis:
      "Now in his second year as a superhuman cadet-in-training, Tom's been promoted to a mid-level member of the elite training corps known as Camelot Company, or CamCo. As training intensifies and the moment arrives to impress the multinational corporations who will make or break the cadets' careers, Tom finds himself drawn into a power struggle that's more dramatic - and with far higher stakes - than anything he ever imagined. There are nefarious new enemies to outwit, old friendships that take on new faces, a romance that Tom is encouraged to betray, and an increasing desire on Tom's behalf to demand nothing less than 'justice for all' - even if he sabotages his own future in the process. But what will his idealism cost?",
    cover:
      "https://books.google.com/books/content?id=KOgRBgAAQBAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE71yyOUwqyHni2YJ_T5bqOJNvON9D_d4C5a8hGUCs5paUYB2-BCnyLjc3OmpIzDsFvUKeMgBnMnTjgf-lptNYZEsSIEKoOGRXbdu7bbCD3owP_BCwGAg22SAPAjzmOzz0hC1m9Je",
    rating: 5,
  },
  {
    id: 2,
    title: "Catalyst",
    "ISBN-10": 123,
    "ISBN-13": 456,
    publisher: "",
    author: "SJ Kincaid",
    "published-date": "10/28/2014",
    synopsis:
      "Tom Raines and his friends return to the Pentagonal Spire for a new year, eager to continue their training for the elite Intrasolar Forces. But they soon discover troubling changes. Strict new regulations, suspicious agents in positions of power and the revelation that the Spire is under military control. The trainees are now cadets. What begins as an irritating adjustment soon reveals a dangerous shift in reality. Those in control have a ruthless agenda. And when the military academy begins welcoming suspicious new cadets, they reveal a plan with horrifying worldwide ramifications. Tom is desperate to stop it, and it seems he is not alone. But when the enemy comes for Tom, how much can he endure in the battle to save himself? In this exhilarating, explosive and heart-rending conclusion to the INSIGNIA trilogy, CATALYST puts Tom and his intelligent, passionate and brave young friends through stunning tests, dangerous confrontations and into an impossible future they could never have predicted.",
    cover:
      "https://books.google.com/books/content?id=5-oRBgAAQBAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE70W4Dd81_w0TeiiCqFYmPDBp8B1qeB7ylNi8nRXwdGCCYOX1OtEGO_vGByB8374fxBRp3cVTE1mq3-eH80Wjng9IUNjJwTgZDXMTp-WndmqoB81iTzprURy-KVP7DuHJscWk_3Y",
    rating: 5,
  },
];

module.exports = {
  response: (req, res) => {
    res.send(`Welcome to the Library Project API`);
  },
  getBook: (req, res) => {
    if (db.findIndex((book) => book.id == req.params.id) != -1) {
      res.json(db.find((book) => book.id == req.params.id));
    } else {
      res.status(404).send("Book Not Found");
    }
  },
  addBook: (req, res) => {
    const equal = (book) =>
      book.author == req.body.author && book.title == req.body.title;
    if (db.findIndex(equal) == -1) {
      db.push(req.body);
      if (db.findIndex((book) => book.id == req.body.id) != -1) {
        res.send("Book Created");
      } else {
        res.status(500).send();
      }
    } else {
      res.status(409).send("Book Already Exists");
    }
  },
  editBook: (req, res) => {
    if (db.findIndex((book) => book.id == req.params.id) != -1) {
      let originalBook = db.find((book) => book.id == req.params.id);
      let newBook = { ...originalBook, ...req.body };
      db = db.filter((book) => book.id != req.params.id);
      db.push(newBook);
      res.send("Book Edited");
    } else {
      res.status(404).send("Book Not Found");
    }
  },
  deleteBook: (req, res) => {
    if (db.findIndex((book) => book.id == req.params.id) != -1) {
      db = db.filter((book) => book.id != req.params.id);
      res.send("Book Deleted");
    } else {
      res.status(404).send("Book Not Found");
    }
  },
};
