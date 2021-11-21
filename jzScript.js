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


WA.onInit().then(() => {
	console.log('Player ID: ', WA.player.id);
    console.log('Tags: ', WA.player.tags);
})