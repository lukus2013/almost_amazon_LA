import clearDom from '../helpers/data/cleardom';

const viewAuths = (obj) => {
  clearDom();

  document.querySelector('#view').innerHTML += `
    <div class="mt-5 d-flex flex-wrap">
     <div class="d-flex flex-column">
       <div class="mt-5">
         <i id="edit-Auth-btn--${obj.firebaseKey}" class="fas fa-edit btn btn-info"></i>
         <i id="delete-Auth--${obj.firebaseKey}" class="btn btn-danger fas fa-trash-alt"></i>
       </div>
     </div>
     <div class="text-white ms-5 details">
       <h5>${obj.first_name} ${obj.last_name} reached at ${obj.email}</h5>
       <p>${obj.description || ''}</p>
       <hr>
       <p class="card-text bold">${obj.favorite ? '<span class="badge bg-primary"><i class="fa fa-star" aria-hidden="true"></i>Favorite</span>' : ''}</p>      
        </div>
      </div>`;
  obj.bookObject.forEach((item) => {
    document.querySelector('#view').innerHTML += `
    <div class="mt-5 d-flex flex-wrap">
     <div class="d-flex flex-column">
       <img src=${item.image} alt=${item.title} style="width: 300px;">
       <div class="mt-5">
         <i id="edit-book-btn--${item.firebaseKey}" class="fas fa-edit btn btn-info"></i>
         <i id="delete-book--${item.firebaseKey}" class="btn btn-danger fas fa-trash-alt"></i>
       </div>
     </div>
     <div class="text-white ms-5 details">
       <p>${item.description || 'Please add a description for this book.'}</p>
       <hr>
       <p>PRICE: ${item.sale ? `$${item.price} <span class="badge bg-info sale-badge"><i class="fa fa-bell" aria-hidden="true"></i> Sale</span>` : `$${item.price}`}</p>      
       </div>
      </div>`;
  });
};

export default viewAuths;
