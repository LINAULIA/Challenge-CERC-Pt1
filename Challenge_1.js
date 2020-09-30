const challenge1 = () => {
  axios
    .get("https://jsonplaceholder.typicode.com/posts/9/comments")
    .then((res) => {
      console.log("Lina Aulia");
      console.log(res.data);
    });
};
challenge1();
