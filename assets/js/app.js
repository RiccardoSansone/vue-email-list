const { createApp } = Vue

  createApp({
    data() {
      return {
        randomEmail: [], //array vuoto per pushare i valori delle 10 mail randomiche
        error: '' //variabile per salvare il valore dell'eventuale errore
      }
    },
    mounted(){ //viene compilato subito
        for(i = 0; i < 10; i++){ //ciclo per avere 10 mail
            axios //richiamo axios
            .get('https://flynn.boolean.careers/exercises/api/random/mail') //chiamata get all'API di Boolean
            .then(response => { //response sará l'ogetto in questione
                this.randomEmail.push(response.data.response) //prendo il valore di response che vedendo con postman so che conterrá l'email rasndomica e lo salvo in una variabile
            })
            .catch(error => {
                this.error = error.message //prendo il valore di un potenziale errore e lo salvo in una vaeiabile  
            })
        }
    }
  }).mount('#app')