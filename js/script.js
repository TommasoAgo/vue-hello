// Descrizione:
// Stampare a schermo un messaggio all’interno di un h1, utilizzando i data.

// Bonus:
// Aggiungere alla pagina un’immagine, presa anch’essa da un data.

var app = new Vue(
    {
        el: '#root',
        data: {
            message : 'Vuoi vedere un quadro di De Chirico?',
            textColor : 'green',
            image : 'img/giorgio-de-chirico.jpg'
        },
        methods: {
            miaFunzione() {
                immagine = document.getElementById('image');
                if (immagine.className == 'hidden') {
                    immagine.className = 'active';
                }
            }
        }
    }
);