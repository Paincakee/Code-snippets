const form = document.getElementById('register-form');

form.addEventListener('submit', function(e){

    e.preventDefault();

    let formData = new FormData(form);

    sendData(formData);
})

async function sendData(formData) {  
    try {
        const response = await fetch('#ChangeMe!.php',{
            method: 'POST',
            body: formData
        });

        const text = await response.text();

        console.log(text);
        const errorText = document.getElementById('#ChangeMe!');
        errorText.innerHTML = text;
        if (text == "Created") {
            window.location.replace("#ChangeMe!")
        }   

    } catch (error) {
        console.log(error);
    }
}