// Fetch the JSON file and populate the landing page
fetch('articles.json')
    .then(response => response.json())
    .then(articles => {
        const articleList = document.getElementById('article-list');

        // Clear any existing content
        articleList.innerHTML = '';

        // Loop through articles and create list items
        articles.forEach(article => {
            const listItem = document.createElement('li');

            // Create the link element
            const link = document.createElement('a');
            link.href = article.url;
            link.textContent = article.title;

            // Create the date element
            const date = document.createElement('span');
            date.className = 'date';
            date.textContent = article.date;

            // Append the link and date to the list item
            listItem.appendChild(link);
            listItem.appendChild(date);

            // Append the list item to the article list
            articleList.appendChild(listItem);
        });
    })
    .catch(error => console.error('Error fetching the articles:', error));
