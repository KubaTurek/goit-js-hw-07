import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryBox = document.querySelector("div.gallery");
const instance = basicLightbox.create(`
  <img src="" />
`);

const allImages = galleryItems.map((image) => 
  `<div class="gallery__item">
        <a class="gallery__link" href="${image.original}">
            <img class="gallery__image"
             src="${image.preview}"
             alt="${image.description}"
             data-source="${image.original}">
        </a>
    </div>`
).join("");

galleryBox.insertAdjacentHTML("afterbegin", allImages)

galleryBox.addEventListener("click", modalOpen);

const modalPicture = instance.element("img").querySelector("img");

function modalOpen(event) {
    event.preventDefault();
    if (event.target.nodeName !== "IMG") {
        return;
    }
    modalPicture.src = event.target.dataset.source;
    instance.show();
    window.addEventListener("keydown", modalClose)
    }


function modalClose(event) {
    
        instance.close();
        window.removeEventListener("keydown", modalClose);
        return;
}
