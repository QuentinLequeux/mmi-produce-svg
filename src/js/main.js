const textColor = document.getElementById("tx-color");
const svgElement = document.getElementById("Logo");

function uploadLogo () {
    svgElement.getElementById("title").textContent = document.getElementById("titleTextElement").value;
    svgElement.getElementById("acronym").textContent = document.getElementById("acronymTextElement").value;
    svgElement.getElementById("title").setAttribute("fill", textColor.value);
    svgElement.getElementById("acronym").setAttribute("fill", textColor.value);
    document.getElementById("background").setAttribute("fill", document.getElementById("bg-color").value);
    document.getElementById("rBrace").setAttribute("fill", textColor.value);
    document.getElementById("lBrace").setAttribute("fill", textColor.value);
}

document.querySelector("form").addEventListener("input", uploadLogo);

document.getElementById("download").addEventListener("click", () => {
    const svgContent = new XMLSerializer().serializeToString(svgElement);
    const base64Data = btoa(svgContent);
    const downloadLink = document.createElement('a');

    downloadLink.href = 'data:image/svg+xml;base64,' + base64Data;
    downloadLink.download = acronymTitle.value + '.svg';

    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
});