function showImage(imageSrc) {
  let popupImage = document.getElementById("popupImage");
  popupImage.src = imageSrc;
   
  let imagePopup = document.getElementById("imagePopup");
  imagePopup.style.display = "block";
  document.body.style.overflow = "hidden";
}
// function to hide the image when we click on cross button
function closeImage() {
  let imagePopup = document.getElementById("imagePopup");
  imagePopup.style.display = "none";
 document.body.style.overflow = "auto";
}


var MenuItems = document.getElementById('MenuItems');
    MenuItems.style.maxHeight = '0px';
  
    function menutoggle() {
      if (MenuItems.style.maxHeight == '0px') {
        MenuItems.style.maxHeight = '200px';
      } else {
        MenuItems.style.maxHeight = '0px';
      }
    }