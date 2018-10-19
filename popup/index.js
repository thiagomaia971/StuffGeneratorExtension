function S4() {
    return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
}

function generateGuid() {
    return (S4() + S4() + "-" + S4() + "-4" + S4().substr(0, 3) + "-" + S4() + "-" + S4() + S4() + S4()).toLowerCase();;
}

document.getElementById("generateGuidButton").addEventListener("click", () => {
    document.getElementById("guidInput").value = generateGuid();
    document.getElementById("guidInput").select();
    document.execCommand("copy");
});

document.getElementById("generateCnpjButton").addEventListener("click", () => {
    document.getElementById("cnpjInput").value = cnpj();
    document.getElementById("cnpjInput").select();
    document.execCommand("copy");
});

document.getElementById("generateCpfButton").addEventListener("click", () => {
    document.getElementById("cpfInput").value = cpf();
    document.getElementById("cpfInput").select();
    document.execCommand("copy");
});