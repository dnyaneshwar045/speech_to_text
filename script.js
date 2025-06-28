function speechToTextConversion() {
    var SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SpeechRecognition) {
        alert("Sorry, your browser does not support Speech Recognition.");
        return;
    }

    var recognition = new SpeechRecognition();
    recognition.continuous = true;
    recognition.lang = 'en-IN';
    recognition.interimResults = true;
    recognition.maxAlternatives = 1;

    var diagnostic = document.getElementById('text');
    var isRecording = false;

    document.getElementById("playButton").onclick = function () {
        if (!isRecording) {
            document.getElementById("playButton").src = "record-button-thumb.png";
            recognition.start();
            isRecording = true;
        } else {
            document.getElementById("playButton").src = "mic-1.png";
            recognition.stop();
            isRecording = false;
        }
    };

    recognition.onresult = function (event) {
        let transcript = '';
        for (let i = 0; i < event.results.length; ++i) {
            transcript += event.results[i][0].transcript;
        }
        diagnostic.value = transcript;
    };

    recognition.onnomatch = function () {
        diagnostic.value = 'I didn\'t recognise that.';
    };
    recognition.onerror = function (event) {
        diagnostic.value = 'Error occurred in recognition: ' + event.error;
    };
}