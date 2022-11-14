if ('serviceWorker' in navigator) { navigator.serviceWorker.register('/sw.js', { scope: '/' }); };

console.log('test startUP');