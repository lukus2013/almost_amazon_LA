import { getSingleAuth } from './authorData';
import { getAuthorsBooks, getSingleBook } from './bookData';

const viewBookDetails = (bookfirebaseKey) => new Promise((resolve, reject) => {
  getSingleBook(bookfirebaseKey)
    .then((bookObject) => {
      getSingleAuth(bookObject.author_id)
        .then((authorObject) => {
          resolve({ author: authorObject, ...bookObject });
        });
    }).catch(reject);
});

const viewAuthorDetails = (authorfirebaseKey) => new Promise((resolve, reject) => {
  getSingleAuth(authorfirebaseKey)
    .then((authorId) => {
      getAuthorsBooks(authorId.firebaseKey)
        .then((bookObject) => {
          resolve({ bookObject, ...authorId });
        });
    }).catch(reject);
});

// const viewBookDetails = async (bookFirebasekey) => {
//   const bookObject = await getSingleBook(bookFirebasekey);
//   const authorObject = await getSingleAuth(bookObject.author_id);

//   return { authorObject, ...bookObject };
// };

// const viewBookDetails = (firebaseKey) => (async () => {
//   const book = await getSingleBook(firebaseKey);
//   const author = await getSingleAuthor(book.author_id);
//   return ({ author, ...book });
// })().catch(console.warn);

export { viewBookDetails, viewAuthorDetails };
