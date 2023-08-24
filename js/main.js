const { createApp } = Vue;

createApp({
    data() {
        return{
            discs: []
        }
    },
    methods: {

    },
    created() {
        axios.get('api.php')
            .then(response => {
                this.discs = response.data
            })
            .catch(error => {
                console.error('Errore nella richiesta api: ', error);
            });
    }
}).mount('#app');