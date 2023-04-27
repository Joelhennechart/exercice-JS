window.onload = init;

function init() {
    console.log("ok");

}

function loadImage(material) {
    console.log("ok");
    var bloc1 =document.getElementById("bloc1");

    while (bloc1.firstChild) {
         bloc1.removeChild(bloc1.firstChild);           
    }
    

    var divProduct = document.createElement("div");
    divProduct.setAttribute("id", "divProduct");
    bloc1.appendChild(divProduct);

    var imgProduct = document.createElement("img");
    imgProduct.setAttribute("class", "imgProduct");
    imgProduct.setAttribute("src", "media/images/products/AVEC_SOCLE_ET_PILIERS_EN_BETON_CELLULAIRE/" + material);

    
    divProduct.appendChild(imgProduct);
}