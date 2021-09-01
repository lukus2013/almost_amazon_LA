import axios from 'axios';
import firebaseConfig from '../../../api/apiKeys';
// API CALLS FOR BOOKS
import { deleteAuth } from './authorData';

const dbUrl = firebaseConfig.databaseURL;

// GET BOOKS
const getBooks = () => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/books.json`)
    .then((response) => resolve(Object.values(response.data)))
    .catch((error) => reject(error));
});

// DELETE BOOK
const deleteBook = (firebaseKey) => new Promise((resolve, reject) => {
  axios.delete(`${dbUrl}/books/${firebaseKey}.json`)
    .then(() => getBooks().then((response) => resolve(response)))
    .catch((error) => reject(error));
});

// GET Single Book
const getSingleBook = (firebaseKey) => new Promise((reslove, reject) => {
  axios.get(`${dbUrl}/books/${firebaseKey}.json`)
    .then((response) => reslove(response.data))
    .catch(reject);
});
// eslint-disable-next-line semi-style
// CREATE BOOK
const createBook = (bookObj) => new Promise((resolve, reject) => {
  axios.post(`${dbUrl}/books.json`, bookObj)
    .then((response) => {
      const body = { firebaseKey: response.data.name };
      axios.patch(`${dbUrl}/books/${response.data.name}.json`, body)
        .then(() => {
          getBooks().then(resolve);
        });
    }).catch((error) => reject(error));
});
// UPDATE BOOK
const updateBook = (bookObj) => new Promise((resolve, reject) => {
  axios
    .patch(`${dbUrl}/books/${bookObj.firebaseKey}.json`, bookObj)
    .then(() => getBooks().then(resolve))
    .catch(reject);
});
// SEARCH BOOKS
// Filter books on sale
const booksOnSale = () => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/books.json?orderBy="sale"&equalTo=true`)
    .then((response) => resolve(Object.values(response.data)))
    .catch((error) => reject(error));
});

const getAuthorsBooks = (authorId) => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/books.json?orderBy="author_id"&equalTo="${authorId}"`)
    .then((response) => resolve(Object.values(response.data)))
    .catch((error) => reject(error));
});

const deleteAuthorBooks = (authorId) => new Promise((resolve, reject) => {
  getAuthorsBooks(authorId).then((authorBookArray) => {
    const deleteBooks = authorBookArray.map((book) => deleteBooks(book.firebaseKey));

    Promise.all([...deleteBooks]).then(() => resolve(deleteAuth(authorId)));
  }).catch(reject);
});

// eslint-disable-next-line object-curly-newline
export { getBooks, createBook, booksOnSale, deleteBook, getSingleBook, updateBook, getAuthorsBooks, deleteAuthorBooks };
