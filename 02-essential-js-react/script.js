const data = [
  {
    id: 1,
    title: "The Lord of the Rings",
    publicationDate: "1954-07-29",
    author: "J. R. R. Tolkien",
    genres: [
      "fantasy",
      "high-fantasy",
      "adventure",
      "fiction",
      "novels",
      "literature",
    ],
    hasMovieAdaptation: true,
    pages: 1216,
    translations: {
      spanish: "El señor de los anillos",
      chinese: "魔戒",
      french: "Le Seigneur des anneaux",
    },
    reviews: {
      goodreads: {
        rating: 4.52,
        ratingsCount: 630994,
        reviewsCount: 13417,
      },
      librarything: {
        rating: 4.53,
        ratingsCount: 47166,
        reviewsCount: 452,
      },
    },
  },
  {
    id: 2,
    title: "The Cyberiad",
    publicationDate: "1965-01-01",
    author: "Stanislaw Lem",
    genres: [
      "science fiction",
      "humor",
      "speculative fiction",
      "short stories",
      "fantasy",
    ],
    hasMovieAdaptation: false,
    pages: 295,
    translations: {},
    reviews: {
      goodreads: {
        rating: 4.16,
        ratingsCount: 11663,
        reviewsCount: 812,
      },
      librarything: {
        rating: 4.13,
        ratingsCount: 2434,
        reviewsCount: 0,
      },
    },
  },
  {
    id: 3,
    title: "Dune",
    publicationDate: "1965-01-01",
    author: "Frank Herbert",
    genres: ["science fiction", "novel", "adventure"],
    hasMovieAdaptation: true,
    pages: 658,
    translations: {
      spanish: "",
    },
    reviews: {
      goodreads: {
        rating: 4.25,
        ratingsCount: 1142893,
        reviewsCount: 49701,
      },
    },
  },
  {
    id: 4,
    title: "Harry Potter and the Philosopher's Stone",
    publicationDate: "1997-06-26",
    author: "J. K. Rowling",
    genres: ["fantasy", "adventure"],
    hasMovieAdaptation: true,
    pages: 223,
    translations: {
      spanish: "Harry Potter y la piedra filosofal",
      korean: "해리 포터와 마법사의 돌",
      bengali: "হ্যারি পটার এন্ড দ্য ফিলোসফার্স স্টোন",
      portuguese: "Harry Potter e a Pedra Filosofal",
    },
    reviews: {
      goodreads: {
        rating: 4.47,
        ratingsCount: 8910059,
        reviewsCount: 140625,
      },
      librarything: {
        rating: 4.29,
        ratingsCount: 120941,
        reviewsCount: 1960,
      },
    },
  },
  {
    id: 5,
    title: "A Game of Thrones",
    publicationDate: "1996-08-01",
    author: "George R. R. Martin",
    genres: ["fantasy", "high-fantasy", "novel", "fantasy fiction"],
    hasMovieAdaptation: true,
    pages: 835,
    translations: {
      korean: "왕좌의 게임",
      polish: "Gra o tron",
      portuguese: "A Guerra dos Tronos",
      spanish: "Juego de tronos",
    },
    reviews: {
      goodreads: {
        rating: 4.44,
        ratingsCount: 2295233,
        reviewsCount: 59058,
      },
      librarything: {
        rating: 4.36,
        ratingsCount: 38358,
        reviewsCount: 1095,
      },
    },
  },
];

function getBooks() {
  return data;
}

function getBook(id) {
  return data.find((d) => d.id === id);
}

// Desctructuring object
const book = getBook(2);

const { title, author, genres, translations, hasMovieAdaptation } = book;
console.log(translations.spanish);
console.log(title);
console.log(author);

console.log(book.title);
console.log(book.author);

// Destructuring array
const primaryGenre = genres[0];
const secondaryGenre = genres[1];
const [pGenre, sGenre] = genres;

// Only in the end for the spread
const [a, b, ...others] = genres;
console.log(a, b, others);

const newGenres = [...genres, "horror"];
console.log(newGenres);

// need spreading to add the new property or updated property inside the object book
const updatedBook = { ...book, rating: 4.5, pages: 1217 };
console.log(updatedBook);

// Template literals
const summary = `a book with title ${title} with year ${
  book.publicationDate.split("-")[0]
}`;
console.log(summary);

// Arrow function
function getYear(str) {
  return str.split("-")[0];
}

const getYearArrow = (str) => {
  return str.split("-")[0];
};

console.log(getYearArrow(book.publicationDate));

// Short circuiting
// Falsy: 0, '', null,  undefined
console.log(true && "Some string");
console.log(false && "Some string");
console.log(hasMovieAdaptation && "this book has movie");

console.log(true || "some string");
console.log(false || "some string");

const spanishTranslation = book.translations.spanish || "NOT TRANSLATED";
spanishTranslation;

// return no data if reviewCount null or undefined
const countData = book.reviews.librarything.reviewsCount ?? "NO DATA";

// Optional chaining, in case the property before is undefined
function getTotalReviewCount(book) {
  const goodRead = book.reviews.goodreads.reviewsCount;
  const libraryThing = book.reviews.libraryThing?.reviewsCount ?? 0;
  return goodRead + libraryThing;
}

console.log(getTotalReviewCount(book));

const books = getBooks();
const nums = [1, 2, 3, 4, 5, 6].map((e) => e * 2);
console.log(nums);
const bookTitles = books.map((it) => it.title);
console.log(bookTitles);

const essentialData = books.map((it) => {
  return {
    title: it.title,
    author: it.author,
    reviewsCount: getTotalReviewCount(it),
  };
});
console.log(essentialData);

const longBooks = books
  .filter((it) => it.pages > 500)
  .filter((it) => it.hasMovieAdaptation);
console.log(longBooks);

const adventureBooks = books
  .filter((it) => it.genres.includes("adventure"))
  .map((it) => it.title);
console.log(adventureBooks);

// Accumulator hold the current value
const pagesAllBook = books.reduce((acc, it) => acc + it.pages, 0);
console.log(pagesAllBook);

// .sort is mutate the original array
// .slice is to copy the array
const y = [1, 3, 4, 5, 6, 7];
const sortedY = y.slice().sort((a, b) => a - b);
console.log(sortedY);
const reverseSortedY = y.slice().sort((a, b) => b - a);
console.log(reverseSortedY);
console.log(y);

const sortBookByPages = books
  .slice()
  .sort((a, b) => b.pages - a.pages)
  .map((it) => it.title);
console.log(sortBookByPages);

// add book
const newBook = {
  id: 6,
  title: "Harry Pottah",
  author: "J.K. Rowling",
};

const booksAfterAdd = [...books, newBook];

// delete book
const booksAfterDelete = booksAfterAdd.filter((it) => it.id !== 3);

// update book object in the array
const booksAfterUpdate = booksAfterDelete.map((it) =>
  it.id === 1 ? { ...it, pages: 100 } : it
);
