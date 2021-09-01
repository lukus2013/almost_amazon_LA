import clearDom from '../../helpers/data/cleardom';

const addAuthForm = (obj = {}) => {
  clearDom();

  document.querySelector('#form-container').innerHTML = `
  <form>
    <div class="mb-3">
        <label for="exampleInputEmail1" class="form-label">Email address</label>
        <input type="email" class="form-control" id="email" aria-describedby="emailHelp" value="${obj.email || ''}" required>
    </div>
    <div class="mb-3">
        <label for="first_name" class="form-label">First Name</label>
        <input type="first_name" class="form-control" id="first_name" value="${obj.first_name || ''}" required>
    </div>
    <div class="mb-3">
        <label for="last_name" class="form-label">Last Name</label>
        <input type="last_name" class="form-control" id="last_name" value="${obj.last_name || ''}" required>
    </div>
    <div class="form-group">
        <label for="description">Description</label>
        <textarea class="form-control" placeholder="Auth Description" id="description" style="height: 100px">${obj.description || ''}</textarea>
      </div>
    <div class="mb-3 form-check">
        <input type="checkbox" class="form-check-input" id="favorite" value="${obj.favorite ? 'checked' : ''}">
        <label class="form-check-label" for="favorite">Favorite</label>
    </div>
    <button type="submit" id="${obj.firebaseKey ? `update-author--${obj.firebaseKey}` : 'submit-author'}" class="btn btn-primary">Submit Author</button>
  </form>`;
};

export default addAuthForm;
