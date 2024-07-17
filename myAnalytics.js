// myAnalytics.js
(function() {
    function isSpeechRecognitionSupported() {
        return new Promise((resolve) => {
            const speechRecognitionSupported = 'SpeechRecognition' in window || 'webkitSpeechRecognition' in window;
            resolve(speechRecognitionSupported);
        });
    }

    async function collectData() {
        const speechRecognitionSupported = await isSpeechRecognitionSupported();
        if (speechRecognitionSupported) {
            console.log('yes');
        } else {
            console.log('no');
        }
        console.log(speechRecognitionSupported);

        // Add more data collection logic here
        const data = {
            speechRecognitionSupported,
            // Add other data you want to collect
        };

        // Send data to your server
        fetch('https://your-server.com/collect', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });
    }

    // Run data collection when the script loads
    collectData();
})();
