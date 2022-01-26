// Indicarle las 10 llaves posibles con sus imágenes y cofla debe seleccionar cuál llave usar
// Una vez seleccionada enviar los datos al servidor y que otro programador se encargue

const div = document.createElement(`DIV`);
div.classList.add(`container`);
document.body.appendChild(div);

let alphabet = `ABCDEFGHIJKLMNOPQRSTUVWXYZ`;

let documentFragment = document.createDocumentFragment();
for (let i = 1; i <= 20; i++) {
    const divContainer = document.createElement(`DIV`);
    divContainer.classList.add(`containerItem`);
    divContainer.tabIndex = i;
    const imageDivContainer = document.createElement(`IMG`);
    const titleDivContainer = document.createElement(`H2`);
    const modelDivContainer = document.createElement(`H3`);
    const priceDivContainer = document.createElement(`P`);

    let model = `${alphabet[Math.floor(Math.random() * 26)]}${Math.floor(Math.random() * 1000)}`;
    imageDivContainer.setAttribute(`src`,`img/llave${Math.floor(Math.random() * 3 + 1)}.webp`);
    titleDivContainer.innerHTML = `Llave ${i}`;
    modelDivContainer.innerHTML = `Modelo : ${model}`;
    priceDivContainer.innerHTML = `price : $${Math.floor(Math.random() * 30 + 20)}`;

    divContainer.addEventListener("click", () => {document.querySelector(`.keyData`).value = model});

    divContainer.appendChild(imageDivContainer);
    divContainer.appendChild(titleDivContainer);
    divContainer.appendChild(modelDivContainer);
    divContainer.appendChild(priceDivContainer);
    documentFragment.appendChild(divContainer);

}
div.appendChild(documentFragment);