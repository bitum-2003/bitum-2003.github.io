'use strict';

document.title = `Творче об'єднання Бітум | Архів - світлини, афіші, згадки в газетах та інші архівні файли`;

const breadcrumbArchive = document.querySelector('#breadcrumbArchive');
breadcrumbArchive.innerHTML = `<ol class="breadcrumb">
                                    <li class="breadcrumb-item"><a href="index.html">Головна </a></li>
                                    <li class="breadcrumb-item active">Архів</li>
                                </ol>`;

const titleMainArchive = document.querySelector('#titleMainArchive');
titleMainArchive.innerHTML = `<h1>Архів</h1>`;

const tabContainer = document.querySelector('#tabContainer');
tabContainer.innerHTML = `<div class="header-tabs">
                            <ul class="header__articles">
                                <li class="header__art-box active" data-id="1">
                                    <article class="tab">
                                        <h1 class="tab__title">Афіші</h1>
                                        <!-- <p class="tab__desc">Категорія афіші</p> -->
                                    </article>
                                </li>
                                <li class="header__art-box" data-id="2">
                                    <article class="tab">
                                        <h1 class="tab__title">Преса</h1>
                                        <!-- <p class="tab__desc">Категорія преса</p> -->
                                    </article>
                                </li>
                                <li class="header__art-box" data-id="3">
                                    <article class="tab">
                                        <h1 class="tab__title">Грамоти</h1>
                                        <!-- <p class="tab__desc">Категорія грамоти</p> -->
                                    </article>
                                </li>
                                <li class="header__art-box" data-id="4">
                                    <article class="tab">
                                        <h1 class="tab__title">Відео</h1>
                                        <!-- <p class="tab__desc">Категорія відео</p> -->
                                    </article>
                                </li>
                                <li class="header__art-box" data-id="5">
                                    <article class="tab">
                                        <h1 class="tab__title">Архівні Фото</h1>
                                        <!-- <p class="tab__desc">Категорія Фото</p> -->
                                    </article>
                                </li>
                            </ul>
                            <ul class="header__btns">
                                <li class="header__btn-box active" data-id="1">
                                    <button>Афіші</button>
                                </li>
                                <li class="header__btn-box" data-id="2">
                                    <button>Преса</button>
                                </li>
                                <li class="header__btn-box" data-id="3">
                                    <button>Грамоти</button>
                                </li>
                                <li class="header__btn-box" data-id="4">
                                    <button>Відео</button>
                                </li>
                                <li class="header__btn-box" data-id="5">
                                    <button>Архівні Фото</button>
                                </li>
                            </ul>
                            <ul class="header__articles">
                                <li class="header__content-box active" data-id="1">
                                    <article class="tab">
                                        <h2 class="tab-content__title">Афіші</h2>
                                        <p>
                                            У категорії "Афіші" представлений невичерпний архів подій, 
                                            в котрих брав участь наш гурт за період існування.  
                                           <!-- Бітум були учасниками багатьох фестивалів, конкурсів та святкувань, 
                                            хедлайнерами вечірок та організаторами івентів. 
                                            В цьому розділі ви можете ознайомитись з частиною з них.-->
                                        </p>
                                            
                                            <a href="katehoriia-afishy.html"><button class="btn btn-primary">Читати більше</button></a>
                                    </article>
                                </li>
                                <li class="header__content-box" data-id="2">
                                    <article class="tab">
                                        <h1 class="tab-content__title">Преса</h1>
                                        <p>
                                            У категорії "Преса" зібрані знімки газет, тут ви можете знайти статті, пов'язані з творчістю колективу реп гурту Бітум.
                                        </p>
                                            
                                            <a href="katehoriia-presy.html"><button class="btn btn-primary">Читати більше</button></a>
                                    </article>
                                </li>
                                <li class="header__content-box" data-id="3">
                                    <article class="tab">
                                        <h1 class="tab-content__title">Грамоти</h1>
                                        <p>
                                        Категорія "Грамоти" призначена для того, щоб показати досягнення, здобуті колективом за час своєї діяльності.
                                        <!--Тут ви знайдете фотографії грамот, дипломів, які були вручені групі Бітум за досягнення у музичній індустрії.-->
                                        </p>
                                            
                                            <a href="katehoriia-hramoty.html"><button class="btn btn-primary">Читати більше</button></a>
                                    </article>
                                </li>
                                <li class="header__content-box" data-id="4">
                                    <article class="tab">
                                        <h1 class="tab-content__title">Відео</h1>
                                        
                                        <p>У категорії "Відео" зібрані Архівні Відео реп гурту Бітум</p>
                                        
                                        <a href="katehoriia-video.html"><button class="btn btn-primary">Читати більше</button></a>
                                    </article>
                                </li>
                                <li class="header__content-box" data-id="5">
                                    <article class="tab">
                                        <h1 class="tab-content__title">Архівні Фото</h1>
                                        
                                        <p>У данній категорії зібрані Архівні Фото реп гурту Бітум</p>
                                            
                                        <a href="katehoriia-photo.html"><button class="btn btn-primary">Читати більше</button></a>
                                    </article>
                                </li>
                            </ul>
                        </div>`;

const allArtsBoxes = document.querySelectorAll(".header__art-box");
const allBtnsBoxes = document.querySelectorAll(".header__btn-box");
const allContentsBoxes = document.querySelectorAll(".header__content-box");

function removeAllActiveClasses() {
    for (const artBox of allArtsBoxes) artBox.classList.remove("active");
    for (const contentBox of allContentsBoxes) contentBox.classList.remove("active");
    for (const btnBox of allBtnsBoxes) btnBox.classList.remove("active");
}

allBtnsBoxes.forEach((btn) => {
    btn.firstElementChild.onclick = function () {
        removeAllActiveClasses();
        btn.classList.add("active");

        for (const artBox of allArtsBoxes) {
            if (artBox.dataset.id === btn.dataset.id) {
                artBox.classList.add("active");
            }

        }

        for (const contentBox of allContentsBoxes) {
            if (contentBox.dataset.id === btn.dataset.id) {
                contentBox.classList.add("active");
            }
        }
    };
});
