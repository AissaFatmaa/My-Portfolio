
var typed = new Typed(".typing",{
    strings:["","","Web Developer","","Web Designer","","Front-end-Developer"],
    typedSpeed:10,
    BackSpeed:60,
    loop:true
})

// Script pour filtrer les projets
document.addEventListener('DOMContentLoaded', function () {
    const filterItems = document.querySelectorAll('.filter-item');
    const portfolioItems = document.querySelectorAll('.portfolio-item');

    function filterProjects(filterValue) {
        portfolioItems.forEach(project => {
            if (filterValue === 'all' || project.getAttribute('data-category') === filterValue) {
                project.style.display = 'block';
            } else {
                project.style.display = 'none';
            }
        });
    }

    // Afficher par défaut uniquement les projets HTML
    filterProjects('html');

    filterItems.forEach(item => {
        item.addEventListener('click', function () {
            // Enlever la classe active de tous les éléments du menu
            filterItems.forEach(el => el.classList.remove('active'));
            // Ajouter la classe active à l'élément cliqué
            this.classList.add('active');

            const filterValue = this.getAttribute('data-filter');
            filterProjects(filterValue);
        });
    });
});

function notify() {
    // Récupérer les valeurs des champs
    var user_name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var subject = document.getElementById("subject").value;
    var message = document.getElementById("message").value;

    // Vérifier si tous les champs sont remplis
    if (user_name && email && subject && message) {
        // Créer les paramètres pour EmailJS
        var params = {
            user_name: user_name,
            email: email,
            subject: subject,
            message: message
        };

        // Envoyer le message avec EmailJS
        emailjs.send("service_j9je9bz", "template_k4tvkyl", params)
            .then(function (res) {
                swal("Thank you for your message", "I will contact you as soon as possible", "success");
                // Réinitialiser le formulaire après envoi
                document.getElementById("contactForm").reset();
            })
          

        // Prévenir le comportement par défaut du formulaire (soumission)
        return false;
    } else {
        // Afficher une alerte si les champs ne sont pas tous remplis
        swal("All fields are required", "Please fill out all fields before sending your message", "warning");
        return false;
    }
}


// function sendEmail(e) {
//     e.preventDefault();
// }

// function notify(){
//     var params={
//         user_name:document.getElementById("name").value,
//         email:document.getElementById("email").value,
//         subject:document.getElementById("subject").value,
//         message:document.getElementById("message").value

//     }
//     if(user_name && email && subject && message !=""){
//     emailjs.send("service_j9je9bz","template_k4tvkyl",params).then(function (res){
//         // alert("thank you for your message i will respond you as soon as possible");
//         swal("Thank you for your message", "I will respond you as soon as possible", "success");
//     })}
// }