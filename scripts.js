document.addEventListener('DOMContentLoaded', function() {
    fetch('/data/content.json')
        .then(response => response.json())
        .then(data => {
            const postsContainer = document.getElementById('posts');
            data.posts.forEach(post => {
                const postElement = document.createElement('div');
                postElement.classList.add('post');
                postElement.innerHTML = `
                    <h2>${post.title}</h2>
                    <p>${post.excerpt}</p>
                    <a href="${post.link}">Read more</a>
                `;
                postsContainer.appendChild(postElement);
            });
        });
});
