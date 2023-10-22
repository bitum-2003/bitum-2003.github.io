'use strict';

document.title = `Творче об'єднання Бітум | Контакти - ви можете надіслати лист `;

const breadcrumbContacts = document.querySelector('#breadcrumbContacts');
breadcrumbContacts.innerHTML = `<ol class="breadcrumb">
                                    <li class="breadcrumb-item"><a href="index.html">Головна </a></li>
                                    <li class="breadcrumb-item active">Контакти</li>
                                </ol>`;

const titleMainContacts = document.querySelector('#titleMainContacts');
titleMainContacts.innerHTML = `<h1>Контакти</h1>`;

const contactsBlock = document.querySelector('#contactsBlock');
contactsBlock.innerHTML  = `<p class='text-center'>Ви можете надіслати лист на зазначену адресу електронної пошти</p>`;
contactsBlock.innerHTML += `<p class='text-center'><a href='mailto:bitum2003@gmail.com'>
                                <img src='./assets/img/icon-gmail.png' alt='Gmail' class='img-gmail'> 
                                    bitum2003@gmail.com
                            </a></p>`;
contactsBlock.innerHTML += `<div class="maps"></div>
                            <!--<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d104008.81614515168!2d33.07541334587099!3d48.66423519437349!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d09d92b326f807%3A0xe117d4fe41dc0d9!2z0J7Qu9C10LrRgdCw0L3QtNGA0ZbRjywg0JrRltGA0L7QstC-0LPRgNCw0LTRgdGM0LrQsCDQvtCx0LvQsNGB0YLRjCwgMjgwMDE!5e0!3m2!1suk!2sua!4v1681932280382!5m2!1suk!2sua" 
                            height="350" style="border:0;" allowfullscreen="" loading="lazy" 
                            referrerpolicy="no-referrer-when-downgrade"></iframe>-->`;

