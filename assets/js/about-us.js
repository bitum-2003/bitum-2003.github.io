'use strict';

document.title = `Творче об'єднання Бітум | Про Нас - стислий опис історії реп гурту БІТУМ, та головних історичних подій`;

// About Us
const breadcrumbAboutUs = document.querySelector('#breadcrumbAboutUs');
breadcrumbAboutUs.innerHTML = `<ol class="breadcrumb">
                                    <li class="breadcrumb-item"><a href="./index.html">Головна </a></li>
                                    <li class="breadcrumb-item active">Про Нас</li>
                                </ol>`;

const titleMainAboutUs = document.querySelector('#titleMainAboutUs');
titleMainAboutUs.innerHTML = `<h1>Про Нас</h1>`;

const aboutUsContent = document.querySelector('#aboutUsContent');
aboutUsContent.innerHTML = `<p class="alert-content">
                                Історія Бітума зараз в процесі розробки...
                            </p>`;
