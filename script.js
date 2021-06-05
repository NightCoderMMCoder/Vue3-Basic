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
  },
}).mount("#app");
