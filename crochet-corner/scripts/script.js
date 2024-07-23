fetch("./scripts/crochet-patterns.json")
.then(function(response) {
    return response.json();
})
.then(function(data) {
    console.log(data);
    let placeholder = document.querySelector("data-output");
    for(let item of data){
        let out = 
        `
            <div>
                <img src="${item.image}" alt="${item.name}">
                <h3>${item.name}</h3>
            </div>
        `;
        document.body.appendChild(out.trim());
    }

    
})

function elementFromHtml(html){
    const template = document.createElement("template");

    template.innerHtml = html.trim();
    return template.content.firstElementChild;

}