import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import './css/styles.css';
import { getImagesByQuery } from './js/pixabay-api.js';
import { createGallery, clearGallery, showLoader, hideLoader } from './js/render-functions.js';

const searchForm = document.getElementById('search-form');

searchForm.addEventListener('submit', handleSearchSubmit);

function handleSearchSubmit(event) {
  event.preventDefault();

  const form = event.currentTarget;
  const query = form.elements['search-text'].value.trim();

  clearGallery();

  if (query === '') {
    iziToast.warning({
      title: 'Caution',
      message: 'Please fill out the search field!',
      position: 'topRight',
    });
    return;
  }

  showLoader();

  getImagesByQuery(query)
    .then(data => {
      if (data.hits.length === 0) {
        iziToast.error({
          message: 'Sorry, there are no images matching your search query. Please try again!',
          position: 'topRight',
        });
        return;
      }

      createGallery(data.hits);
    })
    .catch(() => {
      iziToast.error({
        title: 'Error',
        message: 'Failed to fetch images. Please check your internet connection or try again later.',
        position: 'topRight',
      });
    })
    .finally(() => {
      hideLoader();
      form.reset();
    });
}
