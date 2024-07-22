fetch("patterns.json")
.then(function(response){
    return response.json();
})
.then(function(products){
    let placeholder = document.querySelector("data-output");
    let out = "";
    for(let product of products){
        out += `
            <div class="popular-pattern">
                <img src="${product.image}" alt="${product.name}">
                <h3>${product.name}</h3>
            </div>
        `;
    }

    placeholder.innerHTML = out;
})