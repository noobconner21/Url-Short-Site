const shortBtn = document.getElementById('short-btn');
const reloadBtn = document.getElementById('reload-btn');

shortBtn.addEventListener('click', shortenUrl);

function showLoading() {
    document.getElementById("loading-screen").style.display = "flex";
}

function hideLoading() {
    document.getElementById("loading-screen").style.display = "none";
}

function shortenUrl() {
    var originalUrl = document.getElementById("originalUrl").value;
    var apiUrl = "https://tinyurl.com/api-create.php?url=" + encodeURIComponent(originalUrl);
    var shortenedUrlTextarea = document.getElementById("shortenedUrl");

    showLoading();

    fetch(apiUrl).then(response => response.text()).then(data => {
        shortenedUrlTextarea.value = data;
        hideLoading();
    }).catch(error => {
        shortenedUrlTextarea.value = "Error : Unable to shorten URL!";
        hideLoading();
    });
}

reloadBtn.addEventListener('click', () => {
    location.reload();
});

window.addEventListener('load', () => {
    hideLoading();
});
