document.addEventListener('deviceready', onDeviceReady, false);

function onDeviceReady() {

    console.log('Running cordova-' + cordova.platformId + '@' + cordova.version);
    document.getElementById('deviceready').classList.add('ready');

    // ---- AdMob Banner ----
    if (cordova.platformId === 'android') {

        admob.banner.show({
            id: {
                android: 'ca-app-pub-5298190578902760/3699089621'
            },
            position: 'bottom',
            overlap: false
        }).then(() => {
            console.log('AdMob banner shown');
        }).catch(err => {
            console.error('AdMob error:', err);
        });

    }
}
