import { getMeans } from "./firebase/meanCrud.js";
window.addEventListener('load', async () => {
    await getMeans((results) => {
        meanArray = []
        results.forEach((documento) => {
            console.log(documento)
            meanArray.push({
                aluno: documento.data().aluno,
                media: documento.data().media
            });
        });
        console.log(meanArray)
        loadMeans(meanArray);
    })
})
let meanArray = [];
const createMean = (mean) => {
    const cardDiv = document.createElement("div");
    const cardName = document.createElement('p')
    cardName.textContent = `Aluno: ${mean.aluno}`

    const cardMean = document.createElement('p')
    cardMean.textContent = `Média: ${mean.media}`

    cardDiv.appendChild(cardName);
    cardDiv.appendChild(cardMean);

    return cardDiv;
};
const loadMeans = async () => {
    const cardContainer = document.querySelector(".containerMean");
    cardContainer.innerHTML = ""
    for (const mean of meanArray) {
        let card = createMean(mean);
        cardContainer.appendChild(card);
    }
};