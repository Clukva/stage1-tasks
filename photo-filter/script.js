
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

const _0x2df6=['image/jpeg','value','1133296KiilxC','07.jpg','12.jpg','readAsDataURL','input','https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/','querySelectorAll','36CYMbXb','.btn-reset','src','13.jpg','sizing','parentElement','input[type=\x22range\x22]','fullscreenElement','px)\x20invert(','drawImage','btn-active','--saturate','add','download','documentElement','dataset','02.jpg','15.jpg','322948khgrCq','--hue','0deg',')\x20hue-rotate(','webkitExitFullscreen','style','03.jpg','input[type=\x22file\x22]','mozCancelFullScreen',')\x20saturate(','3071913lvUJYk','btn','1234601kGvAUC','contains','1867vkbQqj','target','length','querySelector','createElement','addEventListener','06.jpg','requestFullscreen','blur(','649tojWYu','.btn','msRequestFullscreen','name','exitFullscreen','height','webkitRequestFullscreen','deg)','classList','href',')\x20sepia(','.btn-next','37203GRHuse','image.jpg','evening/','width','anonymous','01.jpg','.btn-save','.filters','nextElementSibling','remove','.fullscreen','forEach','100%','setAttribute','onload','getContext','img','btn-load--input','click','18.jpg','day/','1NBRVHz','innerText','--invert','20.jpg','10534nyoPne','files','11.jpg','05.jpg','setProperty','toDataURL','result','--blur'];const _0x349c=function(_0x18d4e4,_0x1bedd7){_0x18d4e4=_0x18d4e4-0x1b2;let _0x2df62d=_0x2df6[_0x18d4e4];return _0x2df62d;};const _0x56bc79=_0x349c;(function(_0x444364,_0x3cf154){const _0x6efa88=_0x349c;while(!![]){try{const _0x3f2525=parseInt(_0x6efa88(0x1c4))*-parseInt(_0x6efa88(0x1cd))+parseInt(_0x6efa88(0x1f2))*parseInt(_0x6efa88(0x1ee))+-parseInt(_0x6efa88(0x1c2))+parseInt(_0x6efa88(0x203))*-parseInt(_0x6efa88(0x1d9))+parseInt(_0x6efa88(0x1b6))+parseInt(_0x6efa88(0x1fc))+parseInt(_0x6efa88(0x1c0));if(_0x3f2525===_0x3cf154)break;else _0x444364['push'](_0x444364['shift']());}catch(_0xb56fa2){_0x444364['push'](_0x444364['shift']());}}}(_0x2df6,0xb7dcb));const filters=document[_0x56bc79(0x1c7)](_0x56bc79(0x1e0)),inputs=document[_0x56bc79(0x202)](_0x56bc79(0x209)),btns=document[_0x56bc79(0x202)](_0x56bc79(0x1ce)),btnContainer=document['querySelector']('.btn-container');btnContainer[_0x56bc79(0x1c9)](_0x56bc79(0x1eb),_0x225ef4=>{const _0x364add=_0x56bc79;if(_0x225ef4[_0x364add(0x1c5)][_0x364add(0x1d5)][_0x364add(0x1c3)](_0x364add(0x1c1))||_0x225ef4['target'][_0x364add(0x1d5)][_0x364add(0x1c3)](_0x364add(0x1ea))){btns[_0x364add(0x1e4)](_0x262b0f=>_0x262b0f[_0x364add(0x1d5)][_0x364add(0x1e2)](_0x364add(0x20d)));if(_0x225ef4[_0x364add(0x1c5)][_0x364add(0x1d5)]['contains'](_0x364add(0x1c1)))_0x225ef4[_0x364add(0x1c5)]['classList'][_0x364add(0x20f)]('btn-active');else _0x225ef4[_0x364add(0x1c5)]['classList'][_0x364add(0x1c3)](_0x364add(0x1ea))&&_0x225ef4[_0x364add(0x1c5)][_0x364add(0x208)]['classList']['add']('btn-active');}}),filters['addEventListener'](_0x56bc79(0x200),_0x813ef9=>{const _0x4d8033=_0x56bc79;_0x813ef9[_0x4d8033(0x1c5)][_0x4d8033(0x1e1)][_0x4d8033(0x1ef)]=_0x813ef9['target'][_0x4d8033(0x1fb)],document['documentElement'][_0x4d8033(0x1bb)]['setProperty']('--'+_0x813ef9[_0x4d8033(0x1c5)][_0x4d8033(0x1d0)],''+_0x813ef9[_0x4d8033(0x1c5)][_0x4d8033(0x1fb)]+_0x813ef9['target'][_0x4d8033(0x1b3)][_0x4d8033(0x207)]);});const base=_0x56bc79(0x201),images=[_0x56bc79(0x1de),_0x56bc79(0x1b4),_0x56bc79(0x1bc),_0x56bc79(0x1f5),_0x56bc79(0x1ca),_0x56bc79(0x1fd),'08.jpg','09.jpg','10.jpg',_0x56bc79(0x1f4),_0x56bc79(0x1fe),_0x56bc79(0x206),'14.jpg',_0x56bc79(0x1b5),'16.jpg','17.jpg',_0x56bc79(0x1ec),'19.jpg',_0x56bc79(0x1f1)];let i=0x0;const image=document['querySelector'](_0x56bc79(0x1e9)),btn=document[_0x56bc79(0x1c7)](_0x56bc79(0x1d8));function getTime(){const _0x280bb0=_0x56bc79,_0x423541=new Date(),_0x3c5d4f=_0x423541['getHours']();if(_0x3c5d4f>=0x6&&_0x3c5d4f<0xc)return'morning/';else{if(_0x3c5d4f>=0xc&&_0x3c5d4f<0x12)return _0x280bb0(0x1ed);else{if(_0x3c5d4f>=0x12&&_0x3c5d4f<0x18)return _0x280bb0(0x1db);else{if(_0x3c5d4f>=0x0&&_0x3c5d4f<0x6)return'night/';}}}}function viewBgImage(_0x175aff){const _0x417b43=_0x56bc79,_0x145a15=new Image();_0x145a15[_0x417b43(0x1e7)]=()=>{image['src']=_0x175aff;},_0x145a15[_0x417b43(0x205)]=_0x175aff;}function getImage(){const _0x111df7=_0x56bc79,_0x2544c3=i%images[_0x111df7(0x1c6)],_0x34728c=base+getTime()+images[_0x2544c3];viewBgImage(_0x34728c),i++;}btn[_0x56bc79(0x1c9)](_0x56bc79(0x1eb),getImage);const fileInput=document[_0x56bc79(0x1c7)](_0x56bc79(0x1bd));fileInput[_0x56bc79(0x1c9)]('change',function(_0x879b0c){const _0x4e4340=_0x56bc79,_0xcf82cd=fileInput[_0x4e4340(0x1f3)][0x0],_0x38ac97=new FileReader();_0x38ac97[_0x4e4340(0x1e7)]=()=>{const _0x281610=_0x4e4340;image[_0x281610(0x205)]=_0x38ac97[_0x281610(0x1f8)];},_0x38ac97[_0x4e4340(0x1ff)](_0xcf82cd);});const canvas=document['createElement']('canvas'),saveBtn=document[_0x56bc79(0x1c7)](_0x56bc79(0x1df));function drawImage(){const _0x87555=_0x56bc79;let _0x99fd68=new Image();_0x99fd68[_0x87555(0x205)]=image[_0x87555(0x205)],_0x99fd68[_0x87555(0x1e6)]('crossOrigin',_0x87555(0x1dd)),_0x99fd68[_0x87555(0x1e7)]=function(){const _0x464fac=_0x87555;canvas[_0x464fac(0x1dc)]=_0x99fd68[_0x464fac(0x1dc)],canvas[_0x464fac(0x1d2)]=_0x99fd68[_0x464fac(0x1d2)];const _0x223824=canvas[_0x464fac(0x1e8)]('2d');_0x223824['filter']=_0x464fac(0x1cc)+inputs[0x0][_0x464fac(0x1fb)]+_0x464fac(0x20b)+inputs[0x1][_0x464fac(0x1fb)]/0x64+_0x464fac(0x1d7)+inputs[0x2][_0x464fac(0x1fb)]/0x64+_0x464fac(0x1bf)+inputs[0x3]['value']/0x64+_0x464fac(0x1b9)+inputs[0x4][_0x464fac(0x1fb)]+_0x464fac(0x1d4),_0x223824[_0x464fac(0x20c)](_0x99fd68,0x0,0x0),downloadImage();};}function downloadImage(){const _0x449052=_0x56bc79,_0x55651d=canvas[_0x449052(0x1f7)](_0x449052(0x1fa)),_0x5e5541=document[_0x449052(0x1c8)]('a');_0x5e5541[_0x449052(0x1d6)]=_0x55651d,_0x5e5541[_0x449052(0x210)]=_0x449052(0x1da),_0x5e5541[_0x449052(0x1eb)]();}saveBtn[_0x56bc79(0x1c9)]('click',drawImage);const reset=document['querySelector'](_0x56bc79(0x204));function resetProperty(){const _0x1d339c=_0x56bc79;inputs[0x0][_0x1d339c(0x1fb)]=0x0,inputs[0x0][_0x1d339c(0x1e1)]['innerText']=0x0,document[_0x1d339c(0x1b2)]['style'][_0x1d339c(0x1f6)](_0x1d339c(0x1f9),'0px'),inputs[0x1][_0x1d339c(0x1fb)]=0x0,inputs[0x1][_0x1d339c(0x1e1)][_0x1d339c(0x1ef)]=0x0,document[_0x1d339c(0x1b2)]['style'][_0x1d339c(0x1f6)](_0x1d339c(0x1f0),'0%'),inputs[0x2][_0x1d339c(0x1fb)]=0x0,inputs[0x2]['nextElementSibling'][_0x1d339c(0x1ef)]=0x0,document[_0x1d339c(0x1b2)][_0x1d339c(0x1bb)][_0x1d339c(0x1f6)]('--sepia','0%'),inputs[0x3]['value']=0x64,inputs[0x3][_0x1d339c(0x1e1)]['innerText']=0x64,document['documentElement'][_0x1d339c(0x1bb)][_0x1d339c(0x1f6)](_0x1d339c(0x20e),_0x1d339c(0x1e5)),inputs[0x4][_0x1d339c(0x1fb)]=0x0,inputs[0x4][_0x1d339c(0x1e1)][_0x1d339c(0x1ef)]=0x0,document[_0x1d339c(0x1b2)][_0x1d339c(0x1bb)][_0x1d339c(0x1f6)](_0x1d339c(0x1b7),_0x1d339c(0x1b8));}reset[_0x56bc79(0x1c9)](_0x56bc79(0x1eb),resetProperty);const fullScreen=document[_0x56bc79(0x1c7)](_0x56bc79(0x1e3));function activateFullscreen(_0x4c790c){const _0xe7dcb5=_0x56bc79;if(_0x4c790c['requestFullscreen'])_0x4c790c[_0xe7dcb5(0x1cb)]();else{if(_0x4c790c['mozRequestFullScreen'])_0x4c790c['mozRequestFullScreen']();else{if(_0x4c790c['webkitRequestFullscreen'])_0x4c790c[_0xe7dcb5(0x1d3)]();else _0x4c790c['msRequestFullscreen']&&_0x4c790c[_0xe7dcb5(0x1cf)]();}}}function deactivateFullscreen(){const _0x583458=_0x56bc79;if(document[_0x583458(0x1d1)])document[_0x583458(0x1d1)]();else{if(document[_0x583458(0x1be)])document['mozCancelFullScreen']();else document[_0x583458(0x1ba)]&&document[_0x583458(0x1ba)]();}}function toggleFullScreen(){const _0xeff831=_0x56bc79;if(!document[_0xeff831(0x20a)])activateFullscreen(document[_0xeff831(0x1b2)]);else document[_0xeff831(0x1d1)]&&deactivateFullscreen();}fullScreen[_0x56bc79(0x1c9)](_0x56bc79(0x1eb),_0x583e02=>{toggleFullScreen();});


