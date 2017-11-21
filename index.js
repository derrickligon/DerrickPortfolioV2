const span = document.querySelector('.email');

const clipboard = new Clipboard('.email');

clipboard.on('success', function(e) {
    span.classList.add('copied');
    setTimeout(function() {
      span.classList.remove('copied');
    }, 5000);

    e.clearSelection();
});