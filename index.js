let staurate = document.getElementById('staurate');
let contrast = document.getElementById('contrast');
let brightness = document.getElementById('brightness');
let sepia = document.getElementById('sepia');
let grayscale = document.getElementById('grayscale');
let blur = document.getElementById('blur');
let hueRotate = document.getElementById('hue-rotate');

let download = document.getElementById('download');
let upload = document.getElementById('upload');
let img = document.getElementById('img');

let reset = document.querySelector('span');
let imgBox = document.querySelector('.img-box');

let canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d');


// When choosing new photos And Reset
function resetValue() {
    img.style.filter ="none"
    staurate.value = "100"
    contrast.value ="100"
    brightness.value ="100"
    sepia.value ="0"
    grayscale.value ="0" 
    blur.value ="0"
    hueRotate.value ="0"

}

// Hide buttons when there are no pictures =>
{window.onload = function(){
    download.style.display = "none"
    reset.style.display = "none"
    imgBox.style.display = "none"
}}
// Choose the picture when you press =>
{upload.onchange = function(){
    resetValue()
    download.style.display = "block"
    reset.style.display = "block"
    imgBox.style.display = "block"

    let file = new FileReader();
    file.readAsDataURL(upload.files[0]);
    file.onload = function(){
        img.src = file.result;
    }
    img.onload = function(){
        canvas.width = img.width;
        canvas.height = img.height;
        ctx.drawImage(img, 0 , 0,canvas.width, canvas.height);
        img.style.display = 'none';
    }
}}

// filters mode
{ let filters = document.querySelectorAll("ul li input");
 filters.forEach( filter =>{
     filter.addEventListener('input', function (eo) {
        ctx.filter = `
         saturate(${staurate.value}%)
         contrast(${contrast.value}%)
         brightness(${brightness.value}%)
         sepia(${sepia.value}%)
         grayscale(${grayscale.value})
         blur(${blur.value}px)
         hue-rotate(${hueRotate.value}deg)
         `
         ctx.drawImage(img, 0 , 0,canvas.width, canvas.height);
     });
 });}

// Download Function
download.onclick =function () {
    download.href = canvas.toDataURL('image/jpeg');
}