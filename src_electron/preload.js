const { contextBridge, shell , ipcRenderer} = require('electron');

// Exponer la API 'shell' al proceso de renderizado a través del contexto de puente
contextBridge.exposeInMainWorld('electron', {
  shell: shell,
  ipcRenderer: ipcRenderer, 
});

