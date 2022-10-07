import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryBox = document.querySelector("ul.gallery");


const allImages = galleryItems.map((image) => 
`<a class="gallery__item" href="${image.original}">
            <img class="gallery__image"
             src="${image.preview}"
             alt="${image.description}">
        </a>`).join("");

galleryBox.insertAdjacentHTML("afterbegin", allImages)

const lightbox = new SimpleLightbox('.gallery a', {
    captionsData: "alt",
    captionPosition: "bottom",
    captionDelay: "250ms"
    
     })

console.log(galleryItems);

