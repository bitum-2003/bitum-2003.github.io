function createTrackItem(index, name, duration, link) {
    var trackItem = document.createElement('div');
    trackItem.setAttribute("class", "playlist-track-ctn");
    trackItem.setAttribute("id", "ptc-" + index);
    trackItem.setAttribute("data-index", index);
    document.querySelector(".playlist-ctn").appendChild(trackItem);

    var playBtnItem = document.createElement('div');
    playBtnItem.setAttribute("class", "playlist-btn-play");
    playBtnItem.setAttribute("id", "pbp-" + index);
    document.querySelector("#ptc-" + index).appendChild(playBtnItem);

    var btnImg = document.createElement('i');
    btnImg.setAttribute("class", "fas fa-play");
    btnImg.setAttribute("height", "40");
    btnImg.setAttribute("width", "40");
    btnImg.setAttribute("id", "p-img-" + index);
    document.querySelector("#pbp-" + index).appendChild(btnImg);

    var trackInfoItem = document.createElement('div');
    trackInfoItem.setAttribute("class", "playlist-info-track");
    trackInfoItem.innerHTML = name
    document.querySelector("#ptc-" + index).appendChild(trackInfoItem);

    var trackDurationItem = document.createElement('div');
    trackDurationItem.setAttribute("class", "playlist-duration");
    trackDurationItem.innerHTML = duration
    document.querySelector("#ptc-" + index).appendChild(trackDurationItem);
    
    var trackDownload = document.createElement('div');
    trackDownload.innerHTML = `<a href='${link}' download >
                                <i class='fas fa-download' 
                                    style='padding-top: 7px;
                                    padding-bottom: 7px;
                                    color: #fdfdfd;
                                    font-size: 14px;
                                    pointer-events: none;'></i></a>`;
    document.querySelector("#ptc-" + index).appendChild(trackDownload);
}
const listAudio = [
    {
        name: "Дощі",
        file: "./assets/music/ne-albomnyye/1.Дощі.mp3",
        duration: "04:02"
    },
    {
        name: "По улицам где нет добра",
        file: "./assets/music/ne-albomnyye/2.По-улицам-где-нет-добра.mp3",
        duration: "03:09"
    },
    {
        name: "Утекла",
        file: "./assets/music/ne-albomnyye/3.Утекла.mp3",
        duration: "05:24"
    },
    {
        name: "Unbelievable life",
        file: "./assets/music/ne-albomnyye/4.Unbelievable-life.mp3",
        duration: "04:24"
    },
    {
        name: "Гонки на выживание",
        file: "./assets/music/ne-albomnyye/5.Гонки-на-выживание.mp3",
        duration: "03:21"
    },
    {
        name: "Каждый прожитый день",
        file: "./assets/music/ne-albomnyye/6.Каждый-прожитый-день.mp3",
        duration: "04:16"
    },
    {
        name: "Не жди",
        file: "./assets/music/ne-albomnyye/7.Не-жди.mp3",
        duration: "03:40"
    },
    {
        name: "Отдельным особям",
        file: "./assets/music/ne-albomnyye/8.Отдельным-особям.mp3",
        duration: "03:11"
    },
    {
        name: "Палата нумер п*ять",
        file: "./assets/music/ne-albomnyye/9.Палата-нумер-п_ять.mp3",
        duration: "03:30"
    },
    {
        name: "Попробуй все",
        file: "./assets/music/ne-albomnyye/10.Попробуй-все.mp3",
        duration: "03:07"
    },
    {
        name: "Мечты и план",
        file: "./assets/music/ne-albomnyye/11.Мечты-и-план.mp3",
        duration: "03:19"
    },
    {
        name: "Тряпка",
        file: "./assets/music/ne-albomnyye/12.Wasp-тряпка.mp3",
        duration: "03:51"
    },
    {
        name: "Все что в наших силах",
        file: "./assets/music/ne-albomnyye/13.Все-что-в-наших-силах.mp3",
        duration: "03:52"
    },
    {
        name: "Почему не позвола",
        file: "./assets/music/ne-albomnyye/14.Почему-не-позвола.mp3",
        duration: "04:29"
    },
    {
        name: "Спокойная ночь",
        file: "./assets/music/ne-albomnyye/15.Спокойная-ночь.mp3",
        duration: "03:43"
    },
    {
        name: "Мечта",
        file: "./assets/music/ne-albomnyye/16.Мечта.mp3",
        duration: "03:32"
    },
    {
        name: "Продолжаем",
        file: "./assets/music/ne-albomnyye/17. Продолжаем-by-Yura WasP.mp3",
        duration: "03:12"
    },
    {
        name: "Мой мир",
        file: "./assets/music/ne-albomnyye/18. ONEAL ft Sam - мой мир.mp3",
        duration: "03:38"
    },
    {
        name: "Душа больна тобой",
        file: "./assets/music/ne-albomnyye/19. БІТУМ (ONEAL) - Душа больна тобой.mp3",
        duration: "02:14"
    },
    {
        name: "Утекла  (demo)",
        file: "./assets/music/ne-albomnyye/Утекла(demo)_out.mp3",
        duration: "04:43"
    }
];

for (var i = 0; i < listAudio.length; i++) {
    createTrackItem(i, listAudio[i].name, listAudio[i].duration, listAudio[i].file);
}
var indexAudio = 0;

function loadNewTrack(index) {
    var player = document.querySelector('#source-audio')
    player.src = listAudio[index].file
    document.querySelector('.title').innerHTML = listAudio[index].name
    this.currentAudio = document.getElementById("myAudio");
    this.currentAudio.load()
    this.toggleAudio()
    this.updateStylePlaylist(this.indexAudio, index)
    this.indexAudio = index;
}

var playListItems = document.querySelectorAll(".playlist-track-ctn");

for (let i = 0; i < playListItems.length; i++) {
    playListItems[i].addEventListener("click", getClickedElement.bind(this));
}

function getClickedElement(event) {
    for (let i = 0; i < playListItems.length; i++) {
        if (playListItems[i] == event.target) {
            var clickedIndex = event.target.getAttribute("data-index")
            if (clickedIndex == this.indexAudio) { // alert('Same audio');
                this.toggleAudio()
            } else {
                loadNewTrack(clickedIndex);
            }
        }
    }
}

document.querySelector('#source-audio').src = listAudio[indexAudio].file
document.querySelector('.title').innerHTML = listAudio[indexAudio].name


var currentAudio = document.getElementById("myAudio");

currentAudio.load()

currentAudio.onloadedmetadata = function () {
    document.getElementsByClassName('duration')[0].innerHTML = this.getMinutes(this.currentAudio.duration)
}.bind(this);

var interval1;

function toggleAudio() {

    if (this.currentAudio.paused) {
        document.querySelector('#icon-play').style.display = 'none';
        document.querySelector('#icon-pause').style.display = 'block';
        document.querySelector('#ptc-' + this.indexAudio).classList.add("active-track");
        this.playToPause(this.indexAudio)
        this.currentAudio.play();
    } else {
        document.querySelector('#icon-play').style.display = 'block';
        document.querySelector('#icon-pause').style.display = 'none';
        this.pauseToPlay(this.indexAudio)
        this.currentAudio.pause();
    }
}

function pauseAudio() {
    this.currentAudio.pause();
    clearInterval(interval1);
}

var timer = document.getElementsByClassName('timer')[0]

var barProgress = document.getElementById("myBar");


var width = 0;

function onTimeUpdate() {
    var t = this.currentAudio.currentTime
    timer.innerHTML = this.getMinutes(t);
    this.setBarProgress();
    if (this.currentAudio.ended) {
        document.querySelector('#icon-play').style.display = 'block';
        document.querySelector('#icon-pause').style.display = 'none';
        this.pauseToPlay(this.indexAudio)
        if (this.indexAudio < listAudio.length - 1) {
            var index = parseInt(this.indexAudio) + 1
            this.loadNewTrack(index)
        }
    }
}


function setBarProgress() {
    var progress = (this.currentAudio.currentTime / this.currentAudio.duration) * 100;
    document.getElementById("myBar").style.width = progress + "%";
}


function getMinutes(t) {
    var min = parseInt(parseInt(t) / 60);
    var sec = parseInt(t % 60);
    if (sec < 10) {
        sec = "0" + sec
    }
    if (min < 10) {
        min = "0" + min
    }
    return min + ":" + sec
}

var progressbar = document.querySelector('#myProgress')
progressbar.addEventListener("click", seek.bind(this));


function seek(event) {
    var percent = event.offsetX / progressbar.offsetWidth;
    this.currentAudio.currentTime = percent * this.currentAudio.duration;
    barProgress.style.width = percent * 100 + "%";
}

function forward() {
    this.currentAudio.currentTime = this.currentAudio.currentTime + 5
    this.setBarProgress();
}

function rewind() {
    this.currentAudio.currentTime = this.currentAudio.currentTime - 5
    this.setBarProgress();
}


function next() {
    if (this.indexAudio < listAudio.length - 1) {
        var oldIndex = this.indexAudio
        this.indexAudio++;
        updateStylePlaylist(oldIndex, this.indexAudio)
        this.loadNewTrack(this.indexAudio);
    }
}

function previous() {
    if (this.indexAudio > 0) {
        var oldIndex = this.indexAudio
        this.indexAudio--;
        updateStylePlaylist(oldIndex, this.indexAudio)
        this.loadNewTrack(this.indexAudio);
    }
}

function updateStylePlaylist(oldIndex, newIndex) {
    document.querySelector('#ptc-' + oldIndex).classList.remove("active-track");
    this.pauseToPlay(oldIndex);
    document.querySelector('#ptc-' + newIndex).classList.add("active-track");
    this.playToPause(newIndex)
}

function playToPause(index) {
    var ele = document.querySelector('#p-img-' + index)
    ele.classList.remove("fa-play");
    ele.classList.add("fa-pause");
}

function pauseToPlay(index) {
    var ele = document.querySelector('#p-img-' + index)
    ele.classList.remove("fa-pause");
    ele.classList.add("fa-play");
}


function toggleMute() {
    var btnMute = document.querySelector('#toggleMute');
    var volUp = document.querySelector('#icon-vol-up');
    var volMute = document.querySelector('#icon-vol-mute');
    if (this.currentAudio.muted == false) {
        this.currentAudio.muted = true
        volUp.style.display = "none"
        volMute.style.display = "block"
    } else {
        this.currentAudio.muted = false
        volMute.style.display = "none"
        volUp.style.display = "block"
    }
}
