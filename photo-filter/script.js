//Full screen
document.querySelector('#full').addEventListener('click', toggleScreen);
function toggleScreen(){
    if(document.fullscreenElement === null){
        document.documentElement.requestFullscreen();
    } else {
        if(document.fullscreenEnabled){
        document.exitFullscreen();
    }
}
}
//Filters

    const inputs = document.querySelectorAll('.filters input');
/*     const outputs = document.querySelectorAll('.filters output');
 */
    function handleUpdate() {
    const suffix = this.dataset.sizing || '';
    document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
    }
   

    inputs.forEach(input => input.addEventListener('input', handleUpdate));
/*     input.nextElementSibling.value = output.value;
 */
    /* filters.addEventListener('input', e => handleUpdate(e));
    const input = e.target.input.nextElementSibling.value = input.value; */
    /*  inputs.forEach(input =>{
        let output = document.querySelector(`output[name=${input.name}]`);
        input.nextElementSibling.value = input.value;
        console.log(input.nextElementSibling.value)
    });  */
/*     const inputs = document.querySelectorAll('.filters input');
 */   /*  inputs.forEach(output =>{
    let output = document.querySelector(`output[name=${input.name}]`);
      output.value = input.value;
    }); */
 
  


//Next picture
const night = 'https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/night/';
const day = 'https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/day/';
const morning = 'https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/morning/';
const evening = 'https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/evening/';

const images = ['01.jpg', '02.jpg', '03.jpg', '05.jpg', '06.jpg', '07.jpg', '08.jpg', '09.jpg', '10.jpg', '11.jpg', '12.jpg', '13.jpg', '14.jpg', '15.jpg', '16.jpg', '17.jpg', '18.jpg', '19.jpg', '20.jpg'];
const btnNext = document.querySelector('.btn-next');

let i = 0;
let dayTime;

function viewBgImage(src) {  
  const img = new Image();
  img.src = src;
  const imageContainer = document.querySelector('img');
  img.onload = () => {      
  imageContainer.src = img.src;
    }; 
}

function getImage() {
 let date = new Date();
 let hour = date.getHours();

 if(hour >=6 && hour < 12){
    dayTime = morning;
 }else if(hour >= 12 && hour < 18){
    dayTime = day;
}else if(hour >= 18 && hour < 24){
    dayTime = evening;
}else if(hour >= 0 && hour < 6){
    dayTime = night;
}

  const index = i % images.length;
  const imageSrc = dayTime + images[index];
  viewBgImage(imageSrc);
  i++;
  btnNext.disabled = true;
  setTimeout(function() { btnNext.disabled = false }, 1200);
} 
btnNext.addEventListener('click', getImage);

//File from computer
const fileInput = document.querySelector('input[type="file"]');
const imageContainer = document.querySelector('.img');

fileInput.addEventListener('change', function(e) {
  const file = fileInput.files[0];
  const reader = new FileReader();
  reader.onload = () => {
    const img = new Image();
    img.src = reader.result;
    imageContainer.innerHTML = "";
    imageContainer.append(img);
    fileInput.value = null;
  }
  reader.readAsDataURL(file);
});

//Save image
const savePicture = document.querySelector('.btn-save');
const canvas = document.querySelector('canvas');

function drawImage() {
  const imageContainer = document.querySelector('img');
  console.log(imageContainer.src)
  const img = new Image();
  img.setAttribute('crossOrigin', 'anonymous'); 
  img.src = imageContainer.src;
  img.onload = function() {
    canvas.width = img.width;
    canvas.height = img.height;
    const ctx = canvas.getContext("2d");
    ctx.filter = img.style.filter;
    ctx.drawImage(img, 0, 0);
/*     const dataURL = canvas.toDataURL("image/jpeg");
 */
  };  
}
savePicture.addEventListener('click', function(e){
  drawImage();
  console.log(canvas.toDataURL());
  let link = document.createElement("a");
  link.download = 'download.png';
  link.href = canvas.toDataURL('');
  link.click();
  link.delete();
})

//save filter
/* const btnNext = document.querySelector('.btn-save');
let canvas = document.createElement("canvas");
const newImg = new Image();
newImg.setAttribute('crossOrigin','anonymous');
newImg.src = prewiew.src; */
/* download.addEventListener('click', function(e){
  console.log(canvas.toDataURL());
let blur = document.querySelector("#blur").value;
let invert = document.querySelector("#invert").value;
let sepia = document.querySelector("#sepia").value;
let saturate = document.querySelector("#saturate").value;
let hue = document.querySelector("#hue").value;
const img = new Image();
img.setAttribute('crossOrigin','anonymous');
img.src = image.src;
img.onload = function(){
  canvas.width = img.width;
  canvas.height = img.height;
    ctx.filter ='blur('+ blur +'px)';
    ctx.filter +='invert('+ invert +'%)';
    ctx.filter +='sepia('+ sepia +'%)';
    ctx.filter +='saturate('+ saturate +'%)';
    ctx.filter +='hue('+ hue +'deg)';
    ctx.drawImage(img, 0, 0);
    };
    let link = document.createElement("a");
    link.download = 'download.png';
    link.href = canvas.toDataURL();
    link.click();
    link.delete();
    }); */
