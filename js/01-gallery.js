import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryContainer = document.querySelector('.gallery');
let instance = null;

function createGalleryItemMarkup({preview, original, description}) {
  return `
  <li class="gallery__item">
  <a class="gallery__link" href='${original}'>
    <img
      class="gallery__image"
      src='${preview}'
      data-source='${original}'
      alt='${description}'
    />
  </a>
</li>`;
}

function renderGallery() {
  const galleryMarkup = galleryItems.map((item) => createGalleryItemMarkup(item)).join('');
  
  galleryContainer.insertAdjacentHTML('beforeend', galleryMarkup);
}

renderGallery();

galleryContainer.addEventListener('click', (event) => {
  event.preventDefault();

  if (event.target.classList.contains('gallery__image')) {
    const imageUrl = event.target.dataset.source;
    instance = basicLightbox.create(`<img src = '${imageUrl}' alt = '${event.target.alt}'>`);

    instance.show();

    document.addEventListener("keydown", handleKeyPress);
  }
});

function handleKeyPress(event) {
  if (event.key === "Escape" && instance) {
    instance.close();
    document.removeEventListener("keydown", handleKeyPress);
    instance = null;
  }
};




























