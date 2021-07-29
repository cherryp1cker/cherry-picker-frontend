// Restrict pinch-zoom feature in mobile browser
// https://stackoverflow.com/questions/37808180/disable-viewport-zooming-ios-10-safari

const disable = () => {
    // pinch zoom
    document.addEventListener('touchmove', function (event) {
        if (event.scale !== 1) {
            event.preventDefault();
        }
    }, { passive: false });

    // double pinch zoom
    var lastTouchEnd = 0;
    document.addEventListener('touchend', function (event) {
        var now = (new Date()).getTime();
        if (now - lastTouchEnd <= 300) {
            event.preventDefault();
        }
        lastTouchEnd = now;
    }, false);
};

disable();

export default disable;
