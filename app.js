const form = document.getElementById("travelForm")
const submit = document.getElementById("submit")

function formAlert(event){
    event.preventDefault();

    const firstName = form.firstName.value;
    const lastName = form.lastName.value;
    form.firstName.value= "";
    form.lastName.value= "";
    const age = form.age.value;
    form.age.value = "";
    const gender = form.gender.value
    const city = form.city.value;
    alert("First Name: " + firstName + "\nLast Name: " + lastName + "\nAge: " + age + "\nGender: " + gender + "\nCity: " + city); 
}
submit.addEventListener("click", formAlert);


