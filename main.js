previsao1=""
previsao2=""

Webcam.set({
    width:350,
    height:300,
    imageFormat:'png',
    pngQuality:90
});

camera=document.getElementById("camera")
Webcam.attach(camera)

function takeSnapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML='<img id="foto" src="'+data_uri+'"/>'
    });
}

classifier=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/FEZkT7C4t/model.jason',modelLoaded)

function modelLoaded(){
    console.log("funcionou")
}

function speak(){
    synth=window.speechSynthesis;
    prev1="A primeira previsão é "+previsao1
    prev2="Corrigido para "+previsao2
    utterThis=new SpeechSynthesisUtterance(prev1+prev2)
    synth.speak(utterThis)
}