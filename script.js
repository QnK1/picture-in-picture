const videoElement = document.querySelector('.video');
const button = document.querySelector('.button1');
const button2 = document.querySelector('.button2');

async function selectMediaStream(){
    try{
        const mediaStream = await navigator.mediaDevices.getDisplayMedia();
        videoElement.srcObject = mediaStream;
        videoElement.onloadedmetadata = () => {
            videoElement.play()
        };

    }catch(err){
        console.log(err);
    }
};

button.addEventListener('click', async () => {
    button.disabled = true;

    await videoElement.requestPictureInPicture();

    button.disabled = false;
});

button2.addEventListener('click', async () => {
    button2.disabled = true;

    await selectMediaStream();

    button2.disabled = false;
});

