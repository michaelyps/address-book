let addressbook_list = JSON.parse(localStorage.addressbook_list || `[{
        "name": "Evan",
        "email": "surbaktievan@ymail.com",
        "address": "Jln. P.Diponegoro No. 27H Kel.Mencirim Kec. Binjai Timur Kota Binjai",
        "phone": "081264406574"
    }]`)

const exampleInputName = document.getElementById("example_input_name")
const exampleInputEmail = document.getElementById("example_input_email")
const exampleInputAddress = document.getElementById("example_input_address")
const exampleInputPhone = document.getElementById("example_input_phone")
const signupButton = document.getElementById("btn_signup")
const output_display = document.getElementById("output_display")
const exampleInputSearch = document.getElementById("example_input_search")
const searchButton = document.getElementById("btn_search")
const update_button = document.getElementById("btn_update")

signupButton.addEventListener("click", addAddress)
searchButton.addEventListener("click", searchList)

window.onbeforeunload = function () {
    localStorage.addressbook_list = JSON.stringify(addressbook_list)
}

function addAddress() {
    addressbook_list.push({
        name: exampleInputName.value,
        email: exampleInputEmail.value,
        address: exampleInputAddress.value,
        phone: exampleInputPhone.value
    })
    displayAddress()
}

function displayAddress() {
    let temp = ""
    for(var i = 0; i < addressbook_list.length; i++) {
        temp += `<li class="list-group-item"><div>Name: ${addressbook_list[i].name}
        <br>Email: ${addressbook_list[i].email}
        <br>Address: ${addressbook_list[i].address}
        <br>Phone: ${addressbook_list[i].phone}</div>
        <div><button onClick="updateList(${i})" class="edit"><i class="material-icons">mode_edit</i></button>
        <button onClick="deleteList(${i})" class="sampah"><i class="material-icons">delete</i></button></div>
        </li>`;
    }
    output_display.innerHTML = temp
}

function deleteList(index) {
    addressbook_list.splice(index, 1)
    displayAddress()
}

function searchList() {
    let temp = ""
    addressbook_list.forEach(function (list, index) {
        if (list.name === exampleInputSearch.value) {
            temp += `<li class="list-group-item">Name: ${list.name}
            <br>Email: ${list.email}
            <br>Address: ${list.address}
            <br>Phone: ${list.phone}
            <button onClick="deleteList(${index})">delete</button>
            </li>`;
        }
    })
    output_display.innerHTML = temp
}

function updateList(index) {
    exampleInputName.value = addressbook_list[index].name
    exampleInputEmail.value = addressbook_list[index].email
    exampleInputAddress.value = addressbook_list[index].address
    exampleInputPhone.value = addressbook_list[index].phone
    update_button.style.display = "block"
    
    update_button.onclick = function () {
        update_address(index)
    }
}

function update_address(index) {
    addressbook_list[index].name = exampleInputName.value
    addressbook_list[index].email = exampleInputEmail.value
    addressbook_list[index].address = exampleInputAddress.value
    addressbook_list[index].phone = exampleInputPhone.value

    update_button.style.display = "none"
    displayAddress()
}

displayAddress()