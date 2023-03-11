const filterItem = document.querySelector(".items"),
filterImg = document.querySelectorAll(".image"),
previewBox = document.querySelector(".preview-box"),
closeIcon = previewBox.querySelector(".icon"),
previewImg = previewBox.querySelector("img"),
categoryName = previewBox.querySelector(".title p"),
shadow = document.querySelector(".shadow")

window.onload = ()=>{
    filterItem.onclick = (item)=>{
        if(item.target.classList.contains("item")){
            filterItem.querySelector(".active").classList.remove("active");
            item.target.classList.add("active");
            let filterName = item.target.getAttribute("data-name"); //getting data name value of the item selected by the user
            filterImg.forEach((image)=>{
                let filterImages = image.getAttribute("data-name"); // getting image data name value
                if((filterImages == filterName) || filterName == "all"){
                    image.classList.add("show");
                    image.classList.remove("hide");
                }else{
                    image.classList.remove("show");
                    image.classList.add("hide");

                }
            })
        }
    }
    for(let i = 0; i<filterImg.length; i++){
        filterImg[i].setAttribute("onclick","preview(this)");   // adding onclick attribute in all available images
    }
}

// preview image function

function preview(element){
    let selectedPreviewImg = element.querySelector("img").src;
    let selectedImageCategory = element.getAttribute("data-name");
    previewImg.src = selectedPreviewImg;
    previewBox.classList.add("show"); 
    shadow.classList.add("show"); 
    categoryName.innerHTML = selectedImageCategory;
    closeIcon.addEventListener("click",()=>{
        previewBox.classList.remove("show");
        shadow.classList.remove("show"); 
    })
}