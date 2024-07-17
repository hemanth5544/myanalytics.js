(function() {
    async function collectData() {
        // Collect memory information
        const memory = navigator.deviceMemory || 'Unknown';
        console.log(`This device has at least ${memory}GiB of RAM.`);

        // Create the data object
        const data = {
            memory,
            // Add other data you want to collect here
        };

        // Send data to your local server
        fetch('http://localhost:3000/collect', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        }).then(response => {
            console.log('Data sent successfully:', data);
        }).catch(error => {
            console.error('Error sending data:', error);
        });
    }

    // Run data collection when the script loads
    collectData();
})();
