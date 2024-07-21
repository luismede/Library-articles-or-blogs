const blogSection = document.querySelector('.artigo-area');

// CONSULTANDO OS ARTIGOS NO DB

db.collection("artigos").get().then((blogs) => {
    blogs.forEach(blog => {
        if(blog.id != decodeURI(location.pathname.split("/").pop())){
            createBlog(blog);
        }
    })
})

// CREATE ARTICLE CARDS

const createBlog = (blog) => {
    let data = blog.data();
    blogSection.innerHTML += `
    <div class="blog-card">
        <img src="${data.bannerImage}" class="artigo-image" alt="">
        <h1 class="artigo-title">${data.title.substring(0, 100) + '...'}</h1>
        <p class="artigo-overview">${data.article.substring(0, 100) + '...'}</p>
        <a href="/${blog.id}" class="btn-read-card">read</a>
    </div>
    `;
}
