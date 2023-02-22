const { createApp } = Vue

  createApp({

    data() {
    
        return {
    
            toDoList: [],

        }
    },

    created() {
       
        axios
            .get('./api.php')
            .then((response) => {
                console.log(response.data.list);
                this.toDoList = response.data.list
            })

    },
  
}).mount('#app');