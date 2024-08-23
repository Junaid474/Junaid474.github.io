document.addEventListener('DOMContentLoaded', () => {
    // Load site settings
    const siteTitle = localStorage.getItem('siteTitle') || 'My Blog';
    const siteDescription = localStorage.getItem('siteDescription') || 'Welcome to my blog';
    document.title = siteTitle;
    document.querySelector('header h1').textContent = siteTitle;

    // Load posts
    loadBlogPosts();

    // Load pages content
    loadPageContent('home', 'index.html');
    loadPageContent('about', 'about.html');
    loadPageContent('contact', 'contact.html');
});

// Load blog posts on home page
function loadBlogPosts() {
    const postsContainer = document.getElementById('blog-posts');
    const posts = JSON.parse(localStorage.getItem('posts')) || [];
    postsContainer.innerHTML = '';

    posts.forEach((post) => {
        const postElement = document.createElement('div');
        postElement.classList.add('post');
        postElement.innerHTML = `
            <h3>${post.title}</h3>
            <p>${post.content}</p>
        `;
        postsContainer.appendChild(postElement);
    });
}

// Load page content dynamically
function loadPageContent(page, filename) {
    const pageContent = localStorage.getItem(`${page}PageContent`);
    if (pageContent && window.location.pathname.includes(filename)) {
        document.querySelector('.container').innerHTML = `<p>${pageContent}</p>`;
    }
}

