const list = document.querySelector(".todo-list");

const params = new URLSearchParams({
    _limit: 5,
    _page: 2
});

fetch(`https://jsonplaceholder.typicode.com/todos?${params}`)

    .then(res => {
        console.log("then", res);
        
        if (!res.ok) {
            throw new Error("Ooops");
            
        }
        return res.json();
    
    })
    .then(data => {
        // console.log("then2", data);
        list.insertAdjacentHTML("beforeend", createMarkup(data)):
        
    })
    .catch(error => {
console.log("catch", error);

    });
function createMarkup(arr) {
    return arr.map(({ id, title, completed }) => `
        <li data-id="${id}" class="list-item>
        input type="checkbox" ${completed && "checked"}/>
        <p>${title}</p>
        </li>`).join("")
}
    


function foo(url) {
    return fetch(url)
        .then(res => {
            if (!res.ok) {
        }
    })
}

