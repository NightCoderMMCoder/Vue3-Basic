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
      message: "Welcome To Vue3 Course",
      count: 1,
    };
  },
  methods: {
    increaseCount() {
      this.count++;
    },
    decreaseCount() {
      this.count--;
    },
  },
}).mount("#app");
