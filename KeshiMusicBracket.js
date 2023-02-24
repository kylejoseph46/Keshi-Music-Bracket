let topSong = document.getElementById('top-song')
let bottomSong = document.getElementById('bottom-song')
let topButton = document.getElementById('top-button')
let bottomButton = document.getElementById('bottom-button')
let displayButton = document.getElementById('display-button')


const initialArray = []
let arrayCount = 0
//Top variables.
let initialTopCount = 0
let topCount = 0
//Bottom variables.
let initialBottomCount = 1
let bottomCount = 1


SongCollection = {
    song1: ` <iframe 
style="border-radius:12px" 
src="https://open.spotify.com/embed/track/5SMCxRA6hB2jEhroaYfw6N?utm_source=generator" 
width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
    `,

    song2: ` <iframe 
style="border-radius:12px" 
src="https://open.spotify.com/embed/track/5SlU0Yhi51jobhEiGE4xDv?utm_source=generator" 
width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
    `,

    song3: `
<iframe 
style="border-radius:12px" 
src="https://open.spotify.com/embed/track/1Fhb9iJPufNMZSwupsXiRe?utm_source=generator" 
width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
`,

    song4: `
    <iframe 
    style="border-radius:12px" 
    src="https://open.spotify.com/embed/track/7ivYWXqrPLs66YwakDuSim?utm_source=generator" 
    width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
    `,

    song5: `
    <iframe 
    style="border-radius:12px" 
    src="https://open.spotify.com/embed/track/6D6HVKe7Qu3imn4zzJD0W9?utm_source=generator" 
    width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
    `,

    song6: `
    <iframe 
    style="border-radius:12px" 
    src="https://open.spotify.com/embed/track/3iqlzKw1tLt6tXZyKWV0fZ?utm_source=generator" 
    width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
    `,

    song7: `
    <iframe 
    style="border-radius:12px" 
    src="https://open.spotify.com/embed/track/2BuJrxYKhYky20dQqTlobO?utm_source=generator" 
    width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
    `,

    song8: `
    <iframe 
    style="border-radius:12px" 
    src="https://open.spotify.com/embed/track/3IqcBL5yjJK3ri0TGaL3MC?utm_source=generator" 
    width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
    `,

    song9: `
    <iframe 
    style="border-radius:12px" 
    src="https://open.spotify.com/embed/track/5byXSKd7QOHtVMOiptklBD?utm_source=generator" 
    width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
    `,

    song10: `
    <iframe 
    style="border-radius:12px" 
    src="https://open.spotify.com/embed/track/2Q3QRjA8MjzqpFaIkFludb?utm_source=generator" 
    width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
    `
}


for (const item in SongCollection) {
    initialArray.push(SongCollection[item])
}


topSong.innerHTML = initialArray[initialTopCount]
bottomSong.innerHTML = initialArray[bottomCount]

const revealTopSong = () => {
    if (arrayCount >= 9) {
        let winnerMsg = document.createElement('h1')
        winnerMsg.innerHTML = "Your favorite Keshi song!"
        bottomSong.innerHTML = ""
        bottomSong.appendChild(winnerMsg)
        bottomButton.remove()
        topButton.remove()
        return
    }
    if (arrayCount < 2) {
        arrayCount += 2
        bottomSong.innerHTML = initialArray[arrayCount]
        return
    }
    arrayCount += 1
    bottomSong.innerHTML = initialArray[arrayCount]
}


const revealBottomSong = () => {
    if (arrayCount >= 9) {
        let winnerMsg = document.createElement('h1')
        winnerMsg.innerHTML = "Your favorite Keshi song!"
        topSong.innerHTML = ""
        topSong.appendChild(winnerMsg)
        topButton.remove()
        bottomButton.remove()
        return
    }

    if (arrayCount < 2) {
        arrayCount += 2
        topSong.innerHTML = initialArray[arrayCount]
        return
    }
    arrayCount += 1
    topSong.innerHTML = initialArray[arrayCount]
}


topButton.addEventListener('click', revealTopSong)
bottomButton.addEventListener('click', revealBottomSong)

