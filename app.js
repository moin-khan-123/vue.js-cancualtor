const myData = () => {
  const data = {
    output: "0",
  };
  return data;
};

const methods = {
  handleButtonClick(event) {
    const value = event.target.value;
    if (this.output === "0") {
      this.output = value;
    } else {
      this.output = this.output + value;
    }
  },
  handleButtonBackspace() {
    if (this.output.length === 1) {
      this.output = "0";
    } else {
      this.output = this.output.slice(0, -1);
    }
  },
  handleClear() {
    this.output = "0";
  },

  handleCalculate() {
    this.output = `${eval(this.output)}`;
  },
};

const app = Vue.createApp({ data: myData, methods });
app.mount("#app");
