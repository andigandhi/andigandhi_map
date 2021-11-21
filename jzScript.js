
//WA.onInit().then(() => {
//	WA.chat.sendChatMessage('Servus '+WA.player.name+'! Viel Spaß im digitalen Jugge und schöne Weihnachten! :)', 'andigandhi');
//});

let GuMoPopup;

// Open the popup when we enter a given zone
GuMoPopup = WA.onInit().then(() => {
    WA.ui.openPopup("start-popup", 'Hallo, schön dass du da bist!', [{
        label: "OK",
        className: "primary",
        callback: (popup) => {
            // Close the popup when the "Close" button is pressed.
            popup.close();
        }
    }]);
});

// Close the popup when we leave the zone.
WA.room.onLeaveZone('start', () => {
    GuMoPopup.close();
});




//https://andigandhi.ga/content/jz/audio.php

/*
var jzMusic = WA.sound.loadSound("https://orf-live.ors-shoutcast.at/fm4-q2a");

var loudMusic = {
    volume : 0.8,
    loop : false,
    rate : 1,
    detune : 1,
    delay : 0,
    seek : 0,
    mute : false
}

var silentMusic = {
    volume : 0.2,
    loop : false,
    rate : 1,
    detune : 1,
    delay : 0,
    seek : 0,
    mute : false
}

WA.room.onEnterZone('music', () => {
    jzMusic.play(loudMusic);
})

WA.room.onLeaveZone('music', () => {
    jzMusic.play(silentMusic);
})
*/
