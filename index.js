var topSong = document.getElementById('top-song');
var bottomSong = document.getElementById('bottom-song');
var topButton = document.getElementById('top-button');
var bottomButton = document.getElementById('bottom-button');
var displayButton = document.getElementById('display-button');
var initialArray = [];
var arrayCount = 0;
//Top variables.
var initialTopCount = 0;
var topCount = 0;
//Bottom variables.
var initialBottomCount = 1;
var bottomCount = 1;
var SongCollection = {
    song1: " <iframe \nstyle=\"border-radius:12px\" \nsrc=\"https://open.spotify.com/embed/track/5SMCxRA6hB2jEhroaYfw6N?utm_source=generator\" \nwidth=\"100%\" height=\"352\" frameBorder=\"0\" allowfullscreen=\"\" allow=\"autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture\" loading=\"lazy\"></iframe>\n    ",
    song2: " <iframe \nstyle=\"border-radius:12px\" \nsrc=\"https://open.spotify.com/embed/track/5SlU0Yhi51jobhEiGE4xDv?utm_source=generator\" \nwidth=\"100%\" height=\"352\" frameBorder=\"0\" allowfullscreen=\"\" allow=\"autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture\" loading=\"lazy\"></iframe>\n    ",
    song3: "\n<iframe \nstyle=\"border-radius:12px\" \nsrc=\"https://open.spotify.com/embed/track/1Fhb9iJPufNMZSwupsXiRe?utm_source=generator\" \nwidth=\"100%\" height=\"352\" frameBorder=\"0\" allowfullscreen=\"\" allow=\"autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture\" loading=\"lazy\"></iframe>\n",
    song4: "\n    <iframe \n    style=\"border-radius:12px\" \n    src=\"https://open.spotify.com/embed/track/7ivYWXqrPLs66YwakDuSim?utm_source=generator\" \n    width=\"100%\" height=\"352\" frameBorder=\"0\" allowfullscreen=\"\" allow=\"autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture\" loading=\"lazy\"></iframe>\n    ",
    song5: "\n    <iframe \n    style=\"border-radius:12px\" \n    src=\"https://open.spotify.com/embed/track/6D6HVKe7Qu3imn4zzJD0W9?utm_source=generator\" \n    width=\"100%\" height=\"352\" frameBorder=\"0\" allowfullscreen=\"\" allow=\"autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture\" loading=\"lazy\"></iframe>\n    ",
    song6: "\n    <iframe \n    style=\"border-radius:12px\" \n    src=\"https://open.spotify.com/embed/track/3iqlzKw1tLt6tXZyKWV0fZ?utm_source=generator\" \n    width=\"100%\" height=\"352\" frameBorder=\"0\" allowfullscreen=\"\" allow=\"autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture\" loading=\"lazy\"></iframe>\n    ",
    song7: "\n    <iframe \n    style=\"border-radius:12px\" \n    src=\"https://open.spotify.com/embed/track/2BuJrxYKhYky20dQqTlobO?utm_source=generator\" \n    width=\"100%\" height=\"352\" frameBorder=\"0\" allowfullscreen=\"\" allow=\"autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture\" loading=\"lazy\"></iframe>\n    ",
    song8: "\n    <iframe \n    style=\"border-radius:12px\" \n    src=\"https://open.spotify.com/embed/track/3IqcBL5yjJK3ri0TGaL3MC?utm_source=generator\" \n    width=\"100%\" height=\"352\" frameBorder=\"0\" allowfullscreen=\"\" allow=\"autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture\" loading=\"lazy\"></iframe>\n    ",
    song9: "\n    <iframe \n    style=\"border-radius:12px\" \n    src=\"https://open.spotify.com/embed/track/5byXSKd7QOHtVMOiptklBD?utm_source=generator\" \n    width=\"100%\" height=\"352\" frameBorder=\"0\" allowfullscreen=\"\" allow=\"autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture\" loading=\"lazy\"></iframe>\n    ",
    song10: "\n    <iframe \n    style=\"border-radius:12px\" \n    src=\"https://open.spotify.com/embed/track/2Q3QRjA8MjzqpFaIkFludb?utm_source=generator\" \n    width=\"100%\" height=\"352\" frameBorder=\"0\" allowfullscreen=\"\" allow=\"autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture\" loading=\"lazy\"></iframe>\n    "
};

for (var item in SongCollection) {
    initialArray.push(SongCollection[item]);
}
topSong.innerHTML = initialArray[initialTopCount];
bottomSong.innerHTML = initialArray[bottomCount];
var revealTopSong = function () {
    if (arrayCount >= 9) {
        var winnerMsg = document.createElement('h1');
        winnerMsg.innerHTML = "Your favorite Keshi song!";
        bottomSong.innerHTML = "";
        bottomSong.appendChild(winnerMsg);
        bottomButton.remove();
        topButton.remove();
        return;
    }
    if (arrayCount < 2) {
        arrayCount += 2;
        bottomSong.innerHTML = initialArray[arrayCount];
        return;
    }
    arrayCount += 1;
    bottomSong.innerHTML = initialArray[arrayCount];
};
var revealBottomSong = function () {
    if (arrayCount >= 9) {
        var winnerMsg = document.createElement('h1');
        winnerMsg.innerHTML = "Your favorite Keshi song!";
        topSong.innerHTML = "";
        topSong.appendChild(winnerMsg);
        topButton.remove();
        bottomButton.remove();
        return;
    }
    if (arrayCount < 2) {
        arrayCount += 2;
        topSong.innerHTML = initialArray[arrayCount];
        return;
    }
    arrayCount += 1;
    topSong.innerHTML = initialArray[arrayCount];
};
topButton.addEventListener('click', revealTopSong);
bottomButton.addEventListener('click', revealBottomSong);
