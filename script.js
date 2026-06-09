const images = document.querySelectorAll(".gallery img");

let currentIndex = 0;

function openLightbox(img){

    document.getElementById("lightbox").style.display = "flex";

    document.getElementById("lightbox-img").src = img.src;

    currentIndex = [...images].indexOf(img);
}

function closeLightbox(){
    document.getElementById("lightbox").style.display = "none";
}

function changeImage(direction){

    currentIndex += direction;

    if(currentIndex < 0){
        currentIndex = images.length - 1;
    }

    if(currentIndex >= images.length){
        currentIndex = 0;
    }

    document.getElementById("lightbox-img").src =
    images[currentIndex].src;
}

function filterImages(category, button){

    document.querySelectorAll(".filters button").forEach(btn=>{
        btn.classList.remove("active");
    });

    button.classList.add("active");

    images.forEach(img=>{

        if(category === "all" || img.classList.contains(category)){
            img.style.display = "block";
        }else{
            img.style.display = "none";
        }

    });
}