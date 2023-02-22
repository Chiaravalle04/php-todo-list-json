const { createApp } = Vue

  createApp({

    data() {
    
        return {
    
    
        }
    },

    created() {
       
        axios
            .get('./api.php')
            .then((response) => {
                console.log(response.data)
            })

    },
  
}).mount('#app');