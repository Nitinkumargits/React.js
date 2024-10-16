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

// const books = getBook();
// const { title, author } = book;
// console.log(`title : ${title} \nauthor : ${author}`);
//----------------------------------------------------
// Rest-Spread operator
// Rest- operator
// const { title, author, genres, pages, publicationDate } = books;
// const [primaryGenere, SecondaryGener, ...othersGenere] = genres;
// console.log(primaryGenere, SecondaryGener, othersGenere);

// // Spread operator

// const newGenera = ["epic nitin", ...genres, "cute genera"];
// // console.log(newGenera);

// //object

// const updatebooks = { ...book, hasMoviePublication: "20-19-24", pages: 122 };
// // console.log(updatebooks);
// const getYear = (str) => str.split("-")[0];

// const summary = `${title}, a ${pages}-page long book,was written by ${author} and published in ${getYear(
//   publicationDate
// )} ${pages > 1000 ? "over thosand " : "within range"}`;
// console.log(summary);

const books = getBooks();

const longBookWithMovie = books
  .filter((book) => book.pages > 500)
  .filter((book) => book.hasMovieAdaptation);
// console.log(longBookWithMovie);

const pagesAllBooks = books.reduce((acc, book) => acc + book.pages, 0);
// console.log(pagesAllBooks);

const arr = [2, 3, 5, 4, 1].sort((a, b) => b - a);
// console.log(arr);

const sortByPages = books.slice().sort((a, b) => a.pages - b.pages);
// console.log(sortByPages);

const newBook = {
  id: 6,
  title: "Harry Potter and the Chamber of Secrets",
  author: "J.K Rowling ",
};

const bookAfterAdd = [...books, newBook];
// console.log(bookAfterAdd);

const bookAfterDelete = bookAfterAdd.filter((book) => book.id !== 3);
// console.log(bookAfterDelete);
// console.log(bookAfterDelete);

const booksAfterUpdate = bookAfterDelete.map((book) => {
  return book.id === 1 ? { ...book, pages: 12022 } : book;
});
// console.log(booksAfterUpdate);

async function getTodos() {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos");
  const data = await res.json();
  console.log("data : ", data);
  return data;
}

const todos = getTodos();

console.log(todos);
