let addressbook_list = [{
    name: 'Evan',
    address: 'Jln. P.Diponegoro No. 27H Kel.Mencirim Kec. Binjai Timur Kota Binjai',
    phone: '081264406574' 
}]

const exampleInputName = document.getElementById("example_input_name")
const exampleInputAddress = document.getElementById("example_input_address")
const exampleInputPhone = document.getElementById("example_input_phone")
const signupButton = document.getElementById("btn_signup")
const output_display = document.getElementById("output_display")
const exampleInputSearch = document.getElementById("example_input_search")
const searchButton = document.getElementById("btn_search")

signupButton.addEventListener("click", addAddress)
searchButton.addEventListener("click", searchList)

function addAddress() {
    addressbook_list.push({
        name: exampleInputName.value,
        address: exampleInputAddress.value,
        phone: exampleInputPhone.value
    })
    displayAddress()
}

function displayAddress() {
    let temp = ""
    for(var i = 0; i < addressbook_list.length; i++) {
        temp += `<li class="list-group-item">Name: ${addressbook_list[i].name}
        <br>Address: ${addressbook_list[i].address}
        <br>Phone: ${addressbook_list[i].phone}
        <button onClick="updateList(${i})">update</button>
        <button onClick="deleteList(${i})">delete</button>
        </li>`;
    }
    output_display.innerHTML = temp
}

function updateList(index) {
    
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
            <br>Address: ${list.address}
            <br>Phone: ${list.phone}
            <button onClick="deleteList(${index})">delete</button>
            </li>`;
        }
    })
    output_display.innerHTML = temp
}

displayAddress()