// Object for updated list
let td = []

// Get all data from JSON file
fetch('js/data.json')
    .then(Response => Response.json())
    .then(data => {
        td = data;
        td.forEach(element => {
            document.querySelector('.table').innerHTML += text(element)
        })
    })

// Converting JSON data into HTML tr
function text(x) {
    return `<tr class="grid-3" id="id-${x.id}">
   <td>${x.name}</td>
   <td><a href="mailto: ${x.mail}">${x.mail}</a></td>
   <td><button type="button" onclick="delete_row(${x.id})">Delete</button></td></tr>`
}

// Updating the table
function table_update() {
    // Removing old data
    document.querySelector('.table').innerHTML = ""

    // Adding new data
    td.forEach(element => {
        if(element !== undefined){
            document.querySelector('.table').innerHTML += text(element)
        }
    })
    
    // Message for empty list
    if (document.querySelector('.table').innerHTML === "") {
        document.querySelector('.table').innerHTML = '<th  style="text-transform: capitalize;text-align:center;"> no data found </th>'
    }
}

// Deleting a row
function delete_row(x) {
    document.querySelector("#id-" + x).classList.add('deleting')
    setTimeout(() => {
        for(i in td){
            if(x == td[i].id){
                delete td[i]
                table_update()
            }
        }
    }, 500)
}
