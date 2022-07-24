import throttle from "lodash.throttle";

const form = document.querySelector("form")
const email = form.elements.email;
const message = form.elements.message;
const submitButton = document.querySelector('button');

form.addEventListener("input", throttle(enteredData, 500));

function enteredData() {
    const data = {
        [email.name]: email.value,
        [message.name]: message.value
    }

    localStorage.setItem("fedback-from-state", JSON.stringify(data))

}

function onFieldCheck() {
    const localSavedData = localStorage.getItem("fedback-from-state")
    const parsedData = JSON.parse(localSavedData)

    email.value = parsedData?.email || "";
    message.value = parsedData?.message || "";
}

onFieldCheck()

submitButton.addEventListener("click", onFormSubmit);

function onFormSubmit(evt) {
    evt.preventDefault();

    if (email.value !== "" || message.value !== "") {
        const savedData = {
        [email.name]: email.value,
        [message.name]: message.value
    }
    console.log(savedData)

    localStorage.clear()

    form.reset()
    } else {
        console.log(`Please fill in the fields "${email.name}" and "${message.name}"`)
    }
}



