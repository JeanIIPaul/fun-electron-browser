const { contextBridge } = require("electron");

contextBridge.exposeInMainWorld("api", {
    message: "Preload Loaded!",
});
