// const h1 = document.querySelector("h1");
// const button = document.querySelector("button");

// let message = "Welcome To Vue3 Course";
// h1.innerText = message;

// button.addEventListener("click", handleClick);

// function handleClick() {
//   message = "Vue 3 Course";
//   // h1.innerText = message;
// }
Vue.createApp({
  // template, data, methods
  data() {
    return {
      message: "<p>Welcome To Vue3 Course</p>",
      count: 1,
      fruit: "apple",
      showText: false,
      googleLink: "https://www.google.com/",
      image:
        "https://cdn.pixabay.com/photo/2018/08/24/18/28/background-3628553__340.jpg",
      imageName: "bgImage",
      isLike: false,
      text: "",
      todos: [
        {
          id: 1,
          task: "Go Shopping",
          completed: false,
        },
        {
          id: 2,
          task: "Buy Tickets",
          completed: false,
        },
        {
          id: 3,
          task: "Game",
          completed: true,
        },
      ],
      formValidate: true,
      firstName: "Aung Myat",
      lastName: "Oo",
    };
  },
  methods: {
    increaseCount() {
      this.count++;
    },
    decreaseCount() {
      this.count--;
    },
    handleShowText(show) {
      this.showText = show;
    },
    handleClick() {
      if (this.text) {
        let newTask = {
          id: Math.floor(Math.random() * 1000000000000000),
          task: this.text,
          completed: false,
        };
        this.todos.push(newTask);
        this.text = "";
      }
      // this.$refs.task.style.borderColor = "red";
    },
    updateText(e) {
      if (!e.target.value) {
        this.formValidate = false;
      } else {
        this.formValidate = true;
      }
      this.text = e.target.value;
    },
    handelDelete(id) {
      const idx = this.todos.findIndex((todo) => todo.id === id);
      this.todos.splice(idx, 1);
    },
  },
  computed: {
    fullName() {
      return `${this.firstName} ${this.lastName}`;
    },
    completedTodos() {
      return this.todos.filter((todo) => todo.completed);
    },
    remainTodos() {
      return this.todos.filter((todo) => !todo.completed);
    },
  },
}).mount("#app");
