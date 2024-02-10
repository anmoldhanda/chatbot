const inputquery = document.getElementById("inputquery");
const chatbotdetailscontainer = document.querySelector(
  ".chatbotdetailscontainer"
);
let showqueryanswer = document.createElement("p");
showqueryanswer.className = "showqueryanswer";
inputquery.addEventListener("keydown", (e) => {
  if (e.keyCode == 13) {
    // console.log(`the key is ${e.key} and it's key code is ${e.keyCode}`);
    const chatbotdata = {
      "what is api": "it's called application programming interface",
      "i want help": "how we may help you sir",
      "what tech stack is used to create you":
        "basically i'm created using traditional technologies html,css,js",
      "who are you":
        "i'm a chatbot & i'll give answer to all your questions if possible",
    };
    let userinputquery = inputquery.value;
    if (userinputquery in chatbotdata) {
      // if we have the user's question in our object as key then we will return him particular object's key's value as his question's answer
      showqueryanswer.innerHTML = chatbotdata[userinputquery];
      chatbotdetailscontainer.appendChild(showqueryanswer);
    } else {
      showqueryanswer.innerHTML = "we don't have answer of this question";
      // otherwise print this message because we don't have his question chatgpt is like a chatbot not completely but in some cases because it works on the trained data if he has the data then it returns otherwise not
      chatbotdetailscontainer.appendChild(showqueryanswer);
    }
  }
});
