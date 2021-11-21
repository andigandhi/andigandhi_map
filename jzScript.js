
//WA.onInit().then(() => {
//	WA.chat.sendChatMessage('Servus '+WA.player.name+'! Viel Spaß im digitalen Jugge und schöne Weihnachten! :)', 'andigandhi');
//});

let GuMoPopup;

// Open the popup when we enter a given zone
GuMoPopup = WA.room.onEnterZone('start', () => {
    WA.ui.openPopup("start-popup", 'Hallo '+WA.player.name+', schön dass du da bist!', [{
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