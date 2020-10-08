document.addEventListener('DOMContentLoaded', function() {

    let app = firebase.app();

    fetch('http://localhost:5001/cowry-platform/us-central1/api')
    .then(console.log)

    // const sendText = firebase.functions().httpsCallable('sendText');

    // sendText({ message: 'Hello World!' })
});