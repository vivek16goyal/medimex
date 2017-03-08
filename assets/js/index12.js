function capturePhotoEdit() { ///////////
    navigator.camera.getPicture(onPhotoDataSuccess, onFail, {
        quality: 20,
        destinationType: destinationType.FILE_URI,
        saveToPhotoAlbum: true
    });
}

function getPhoto(source) {  ////////////
    navigator.camera.getPicture(onPhotoURISuccess, onFail, {
        quality: 50,
        destinationType: destinationType.FILE_URI,
        sourceType: source
    });
}