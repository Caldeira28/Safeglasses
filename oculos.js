function Product(name, color, price, mainImage) {
    this.name = name;
    this.color = color;
    this.price = price;
    this.mainImage = mainImage;
    this.specifications = function () {
        return this;
    };
}
const product = new Product(
    "Óculos de sol",
    "cor Lilas",
    50,
    "imagem/lilas.png"
);

document.getElementsByClassName("texto_oculos")[0].innerHTML = product.name;
document.getElementById("cor_oculos").innerHTML = product.color;
document.getElementsByClassName("preco_oculos")[0].innerHTML =
    product.price + "€";
document.getElementById("imagem").setAttribute("src", product.mainImage);
