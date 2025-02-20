const form = document.getElementById("travelForm")
const submit = document.getElementById("submit")

function formAlert(event){
    event.preventDefault();

    const firstName = form.elements["firstName"].value;
    const lastName = form.elements["lastName"].value;
    //form.firstName.value= "";
    //form.lastName.value= "";
    const age = form.elements["age"].value;
    const gender = form.elements["gender"].value
    const city = form.elements["city"].value;
    alert("First Name: " + firstName + "\nLast Name: " + lastName + "\nAge: " + age + "\nGender: " + gender + "\nCity: " + city);
}
submit.addEventListener("click", formAlert);

