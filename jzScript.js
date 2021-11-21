
//WA.onInit().then(() => {
//	WA.chat.sendChatMessage('Servus '+WA.player.name+'! Viel Spaß im digitalen Jugge und schöne Weihnachten! :)', 'andigandhi');
//});

let GuMoPopup;

// Begrüßungsnachricht
GuMoPopup = WA.onInit().then(() => {
	const triggerMessage = WA.ui.displayActionMessage({
		message: 'Hallo '+WA.player.name+', schön dass du da bist!',
		callback: () => {
			WA.chat.sendChatMessage("confirmed", "trigger message logic")
		}
	});

	setTimeout(() => {
		triggerMessage.remove();
	}, 2000)
});




/*

//https://andigandhi.ga/content/jz/audio.php
var jzMusic = WA.sound.loadSound("https://andigandhi.ga/content/jz/audio.php");

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

WA.onInit().then(() => {
    jzMusic.play(loudMusic);
})

WA.room.onEnterZone('music', () => {
    jzMusic.play(loudMusic);
})

WA.room.onLeaveZone('music', () => {
    jzMusic.play(silentMusic);
})

*/
