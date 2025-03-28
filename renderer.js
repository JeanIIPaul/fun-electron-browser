const webview = document.getElementById("browser");
const urlInput = document.getElementById("url");

document.getElementById("go").addEventListener("click", () => {
    let url = urlInput.value;
    if (!url.startsWith("http")) url = "https://" + url;
    webview.src = url;
});

document.getElementById("back").addEventListener("click", () => webview.goBack());
document.getElementById("forward").addEventListener("click", () => webview.goForward());
document.getElementById("reload").addEventListener("click", () => webview.reload());

webview.addEventListener("did-navigate", () => {
    urlInput.value = webview.getURL();
});
