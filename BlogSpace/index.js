let blogPosts = [];
const titleInput = document.getElementById("newpost-title");
const bodyInput = document.getElementById("newpost-body");

function renderPosts() {
    let blogPost = document.getElementById("blog-post");
    blogPost.innerHTML = "";
    blogPosts.forEach(post => {
        console.log(post);
        blogPost.innerHTML +=
            `
            <h3 id='title'>${post.title}</h3>
            <div id='body'>${post.body}</div>
            <hr />
            `
    });
}

fetch("https://apis.scrimba.com/jsonplaceholder/posts", { method: "GET" })
    .then(response => response.json())
    .then(data => {
        console.log(data);
        blogPosts = data.slice(0, 5);
        renderPosts();
    });


document.getElementById("post-button").addEventListener("click", (e) => {
    e.preventDefault();
    const title = titleInput.value;
    const body = bodyInput.value;
    const newPost = {
        title: title,
        body: body,
    }

    const options = {
        method: "POST",
        body: JSON.stringify(newPost),
        headers: {
            "Content-Type": "application/json"
        }
    };

    fetch("https://apis.scrimba.com/jsonplaceholder/posts", options)
        .then(response => response.json())
        .then(post => {
            blogPosts.unshift(post);
            renderPosts();
            // clear the form
            titleInput.value = "";
            bodyInput.value = "";

        })
});

