let form = document.getElementById('login-form');

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
        const errorText = document.getElementById('error-text');
        errorText.innerHTML = text;
        if(text == "true") {
            window.location.replace("#ChangeMe!.php");
        }

    } catch (error) {
        console.log(error);
    }
}