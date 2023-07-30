
    var video = document.querySelector('.back-video');

    video.addEventListener('loadedmetadata', function() {
        this.currentTime = 60; // O tempo é definido em segundos, então 60 segundos = 1 minuto
    }, false);
