/*
 * Welcome to your app's main JavaScript file!
 *
 * We recommend including the built version of this JavaScript file
 * (and its CSS file) in your base layout (base.html.twig).
 */

// any CSS you import will output into a single css file (app.css in this case)
import './styles/app.css';

// start the Stimulus application
import './bootstrap';

<script>
document.querySelectorAll('.btn-warning').forEach(item => {
    item.addEventListener('click', event => {
        event.preventDefault();
        const url = event.target.getAttribute('href');
        swal({
            title: 'Confirmation de suppression',
            text: "Êtes-vous sûr de vouloir supprimer cet élément ?",
            type: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Supprimer',
            cancelButtonText: 'Annuler'
        }).then((result) => {
            if (result.value) {
                window.location.href = url;
            }
        });
    })
});
</script>
