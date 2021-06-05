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
          task: "Go Shopping",
          completed: false,
        },
        {
          task: "Buy Tickets",
          completed: false,
        },
        {
          task: "Game",
          completed: true,
        },
      ],
      formValidate: true,
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
          task: this.text,
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
  },
}).mount("#app");
