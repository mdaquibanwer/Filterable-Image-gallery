const filterItem = document.querySelector(".items"),
filterImg = document.querySelectorAll(".image")

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
}