'use strict';

document.title = `Творче об'єднання Бітум | Фото - світлини, фото сети, гастрольні світлини й не формальні домашні фото`;

const breadcrumbGallery = document.querySelector('#breadcrumbGallery');
breadcrumbGallery.innerHTML = `<ol class="breadcrumb">
                                    <li class="breadcrumb-item"><a href="index.html">Головна </a></li>
                                    <li class="breadcrumb-item active">Фото</li>
                                </ol>`;

const titleMainGallery = document.querySelector('#titleMainGallery');
titleMainGallery.innerHTML = `<h2>Фото</h2>`;

const galleryBlock = document.querySelector('#galleryBlock');

const galleryImg = [
    {
        "title": "Бітум",
        "linkPhoto": "./assets/img/group/img-1.jpg"
    },
    {
        "title": "Бітум",
        "linkPhoto": "./assets/img/group/img-2.jpg"
    },
    {
        "title": "Бітум",
        "linkPhoto": "./assets/img/group/img-3.jpg"
    },
    {
        "title": "Бітум",
        "linkPhoto": "./assets/img/group/img-4.jpg"
    },
    {
        "title": "Wasp",
        "linkPhoto": "./assets/img/group/img-5.JPG"
    },
    {
        "title": "Dёma",
        "linkPhoto": "./assets/img/group/img-6.jpg"
    },
    {
        "title": "Dima",
        "linkPhoto": "./assets/img/group/img-7.jpg"
    },
    {
        "title": "Oneal",
        "linkPhoto": "./assets/img/group/img-8.jpg"
    },
    {
        "title": "Vlad",
        "linkPhoto": "./assets/img/group/img-9.jpg"
    }
];

let gallery = '';
galleryImg.forEach(photo => {
    let gallerySegment = `<div class="card">
                            <div class="card-image">
                                <a data-fancybox="gallery" data-caption="${photo.title}" 
                                                        href="${photo.linkPhoto}">
                                    <img src="${photo.linkPhoto}"></a>
                            </div>
                        </div>`;
    gallery += gallerySegment;
});

//galleryBlock.innerHTML = gallery;
