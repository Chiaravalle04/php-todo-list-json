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
                    }
                )
                .then((response) => {
                    this.toDoList.push({
                        task: this.newTask.task,
                        completed: this.newTask.completed
                    })
                    this.newTask.task = "";
                });
        },

        taskCompleted(item) {

            item.completed = !item.completed

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