const rand = Math.floor(Math.random() * 500);
console.log(rand);
// fetching api from the json placeholder
fetch(`https://jsonplaceholder.typicode.com/comments/${rand}`)
  .then((res) => res.json()) //convert the data
  .then((post) => {
    const user = document.getElementById("userId");
    user.textContent = post.id;

    const userName = document.getElementById("name");
    userName.textContent = post.name;

    const userEmail = document.getElementById("email");
    userEmail.textContent = post.email;

    const userBody = document.getElementById("body");
    userBody.textContent = post.body;
  })
  .catch((err) => {
    console.log("Check your code, error name is : ", err);
  });