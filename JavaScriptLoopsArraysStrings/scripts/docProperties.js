function displayProperties() {
    var documentProperties = window.Object.keys(document);
    documentProperties.sort();

    for(var key in documentProperties){
        console.log(documentProperties[key]);
    }
}