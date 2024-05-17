const videoEl = document.getElementById('video');
const btn = document.getElementById('button');

// Prompt to the media stream, pass to video element and then play
async function selectMediaStream(){
    try {
        const mediaStream = await navigator.mediaDevices.getDisplayMedia();
        videoEl.srcObject = mediaStream;
        videoEl.onloadedmetadata = () =>{
            videoEl.play();
        }
    } catch (error) {
        console.log('Whoops, error here: ', error);
    }
}

btn.addEventListener('click', async () => {

    // Disable button
    btn.disabled = true;

    // Start picture in picture
    await videoEl.requestPictureInPicture();

    // Reset the button
    btn.disabled = false;

});

// On load
selectMediaStream();