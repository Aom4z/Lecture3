const book = {
    title : "1984",
    author : "George Orwell",
    isAvailable: false
    
};

const bookJASON = JSON.stringify(book);
console.log(bookJASON);

let Obook = JSON.parse(bookJASON);
console.log(Obook.title);
console.log(Obook);