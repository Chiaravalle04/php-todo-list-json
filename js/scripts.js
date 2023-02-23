const { createApp } = Vue

  createApp({

    data() {
    
        return {
    
            toDoList: [],

            newTask: {

                "task": "",
                "completed": false
            },

        }
    },

    methods: {

        addTask() {
            axios
            .post('./create.php', 
            { 
                addTask: this.newTask
            },
            { 
                headers: { 'Content-Type': 'multipart/form-data' }
            })
            .then((response) => {
                this.toDoList.push(this.newTask)
            })
        }

    },

    created() {
       
        axios
            .get('./read.php')
            .then((response) => {
                console.log(response.data.list);
                this.toDoList = response.data.list
            })

    },
  
}).mount('#app');