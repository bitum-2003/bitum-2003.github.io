'use strict';

const btnShare = document.querySelector('#btnShare');
btnShare.innerHTML = `<h3>Поділитись сторінкою</h3>`;
btnShare.innerHTML += `<ul class="share">
                            <li class="social-btn">
                                <a class="social-link" title="Facebook" href="https://www.facebook.com/sharer.php?u=${window.location.href}">
                                    <img class="icon-facebook" src="./assets/img/social-icon/facebook.svg" alt="Facebook">
                                </a>
                            </li>
                            <li class="social-btn">
                                <a class="social-link" title="Twitter" href="https://twitter.com/intent/tweet?text=${window.location.href}">
                                    <img class="icon-twitter" src="./assets/img/social-icon/twitter.svg" alt="Twitter">
                                </a>
                            </li>
                            <li class="social-btn">
                                <a class="social-link" title="Telegram" href="https://telegram.me/share/url?url=${window.location.href}">
                                    <img class="icon-telegram" src="./assets/img/social-icon/telegram.svg" alt="Telegram">
                                </a>
                            </li>
                            <li class="social-btn">
                                <a class="social-link" title="WhatsApp" href="https://api.whatsapp.com/send?text=${window.location.href}">
                                    <img class="icon-whatsapp" src="./assets/img/social-icon/whatsapp.svg" alt="Whatsapp">
                                </a>
                            </li>
                            <li class="social-btn">
                                <a class="social-link" title="Viber" href="viber://forward?text=${window.location.href}">
                                    <img class="icon-viber" src="./assets/img/social-icon/viber.svg" alt="Whatsapp">
                                </a>
                            </li>
                        </ul>`;

const footerContent = document.querySelector('#footerContent');
footerContent.innerHTML = `Бітум`;
footerContent.innerHTML += ` <a href="mailto:bitum2003@gmail.com" title="Gmail">
                                <img src="./assets/img/icon-gmail.png" alt="Gmail" class="img-gmail">
                                </a><br>`;
footerContent.innerHTML += `Copyright &copy `; 
footerContent.innerHTML += new Date().getFullYear();
