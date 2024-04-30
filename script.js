//API link for random dog Image
url="https://dog.ceo/api/breeds/image/random";
//Function to get random dog image
async function getNewImage(){
    await fetch(url)
    .then((response)=>response.json())
    .then((data)=>setImage(data.message))
    .catch((error)=>alert("Reload the page..."+error));
}
//Function to set dog image in the image tag
function setImage(source){
    document.getElementsByClassName("randomImage")[0].src=source;
}
//Function call
getNewImage();