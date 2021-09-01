// API CALLS FOR AUTHORS
import axios from 'axios';
import firebaseConfig from '../../../api/apiKeys';

const dbUrl = firebaseConfig.databaseURL;

// GET AUTHORS

const getAuthors = () => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/authors.json`)
    .then((response) => resolve(Object.values(response.data)))
    .catch((error) => reject(error));
});

// DELETE AUTHOR
const deleteAuth = (firebaseKey) => new Promise((resolve, reject) => {
  axios.delete(`${dbUrl}/authors/${firebaseKey}.json`)
    .then(() => getAuthors().then((response) => resolve(response)))
    .catch((error) => reject(error));
});
// CREATE AUTHOR
// eslint-disable-next-line no-unused-vars
const createAuth = (authObj) => new Promise((resolve, reject) => {
  axios.post(`${dbUrl}/authors.json`, authObj)
    .then((response) => {
      const body = { firebaseKey: response.data.name };
      axios.patch(`${dbUrl}/authors/${response.data.name}.json`, body)
        .then(() => {
          getAuthors().then(resolve);
        });
    }).catch((error) => reject(error));
});
// EDIT AUTHOR
const getSingleAuth = (firebaseKey) => new Promise((reslove, reject) => {
  axios.get(`${dbUrl}/authors/${firebaseKey}.json`)
    .then((response) => reslove(response.data))
    .catch(reject);
});
// UPDATE AUTHOR
const updateAuth = (authObj) => new Promise((resolve, reject) => {
  axios
    .patch(`${dbUrl}/authors/${authObj.firebaseKey}.json`, authObj)
    .then(() => getAuthors().then(resolve))
    .catch(reject);
});

// filter authors by fav
const favoriteAuths = () => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/authors.json?orderBy="favorite"&equalTo=true`)
    .then((response) => resolve(Object.values(response.data)))
    .catch((error) => reject(error));
});
// SEARCH AUTHORS

// eslint-disable-next-line object-curly-newline
export { getAuthors, createAuth, deleteAuth, getSingleAuth, updateAuth, favoriteAuths };
