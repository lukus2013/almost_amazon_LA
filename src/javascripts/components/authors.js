// FIXME: STUDENTS show your authors

const showAuthors = (array) => {
  document.querySelector('#store').innerHTML = '';
  document.querySelector('#add-button').innerHTML = '<button class="btn btn-success btn-lg mb-4" id="add-author">Add An Author</button>';

  // FIXME: STUDENTS create cards for your authors
  array.forEach((item) => {
    document.querySelector('#store').innerHTML += `
      <div class="card" style="height: 250px style="width: 18rem;">
        <div class="card-header">
           <p class="card-text bold">${item.favorite ? '<span class="badge bg-primary"><i class="fa fa-star" aria-hidden="true"></i>Favorite</span>' : ''}</p>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">${item.first_name}</li>
          <li class="list-group-item">${item.last_name}</li>
          <li class="list-group-item">${item.email}</li>
        </ul>
        <button class="btn btn-info" id="edit-author--${item.firebaseKey}">Edit Author</button>
        <button class="btn btn-danger" id="delete-author--${item.firebaseKey}">Delete Author</button>
      </div>`;
  });
};

const emptyAuthors = () => {
  document.querySelector('#store').innerHTML = '<h1>No Authors</h1>';
};

export { showAuthors, emptyAuthors };
