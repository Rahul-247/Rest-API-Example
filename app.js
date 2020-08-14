const fetch = require("node-fetch");
// Let's see
// Get Method

fetch("https://jsonplaceholder.typicode.com/posts/1")
  .then((response) => response.json())
  .then((json) => {
    // document.write(
    //   "<h1>Get Method Response</h1> <br/><br/> Response Title is: " + json.title
    // );
    console.log(json);
  });

// Post Method
fetch("https://jsonplaceholder.typicode.com/posts", {
  method: "POST",
  headers: {
    "Content-Type": "application/json; charset=UTF-8",
  },
  body: JSON.stringify({
    title: "foo",
    body: "bar",
    userId: 1,
  }),
})
  .then((res) => {
    return res.json();
  })
  .then((data) => {
    document.write(
      "<br/><br/><h1>Post Method Response</h1> <br/><br/> Response Title is: " +
        data.title
    );
    console.log(data);
  });
