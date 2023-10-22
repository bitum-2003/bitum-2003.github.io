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
