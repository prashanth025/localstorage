const formId = "save-later-form";
const saveButton = document.querySelector("#save");
const displayButton = document.querySelector("#display-form-data");
let form = document.querySelector(`#${formId}`);
let formElements = form.elements;
let users = [];

const getFormData = () => {
    let formObj = {};
    formObj['name'] = formElements['full-name'].value;
    formObj['email'] = formElements['email'].value;
    formObj['phone'] = formElements['phone'].value;
    formObj['id'] = Date.now();
    users.push(formObj);
    return users;
};


const getFromLocalStorage = () => {
    let usersData = JSON.parse(localStorage.getItem("formData"));
    console.table(usersData);
}


saveButton.onclick = event => {
    event.preventDefault();
    let data = getFormData();
    localStorage.setItem("formData", JSON.stringify(data));
    alert("data saved to local storage")
};


displayButton.onclick = event => {
    event.preventDefault();
    getFromLocalStorage();
};