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
	}, 5000)
});



var jzMusic = WA.sound.loadSound("sound/outside.mp3");

WA.onInit().then(() => {
    jzMusic.play();
})