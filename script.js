const image = document.querySelectorAll('#image');
const displayImage = document.querySelector('#displayImage');
const imageLink = document.querySelector('#imageLink');
const imagePlaceholder = document.querySelector('#imagePlaceholder');

image.forEach((image)=>{
    image.addEventListener('click',()=>{
        console.log(image);
        console.log(imagePlaceholder);
        imagePlaceholder.className = "d-none";
        displayImage.className= "d-block";
        imageLink.src = image.src;
    })
})