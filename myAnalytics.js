(function() {
    function isSpeechRecognitionSupported() {
        return new Promise((resolve) => {
            const speechRecognitionSupported = 'SpeechRecognition' in window || 'webkitSpeechRecognition' in window;
            resolve(speechRecognitionSupported);
        });
    }

    async function collectData() {
        const speechRecognitionSupported = await isSpeechRecognitionSupported();
        console.log('Speech Recognition Supported:', speechRecognitionSupported); // Add this line

        // Add more data collection logic here
        const data = {
            speechRecognitionSupported,
            // Add other data you want to collect
        };

        // Send data to your local server
        fetch('http://localhost:3000/collect', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        }).then(response => {
            console.log('Data sent successfully:', data); // Add this line
        }).catch(error => {
            console.error('Error sending data:', error); // Add this line
        });
    }

    // Run data collection when the script loads
    collectData();
})();
