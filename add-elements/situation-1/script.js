const posts = [
    {
        title: 'Эффект флексбокса',
        date: '2022-02-23 20:05',
        img: 'https://source.unsplash.com/user/davidmarcu',
        text: 'Почему мы везде стали использовать флексбоксы, даже там, где можно обойтись обычным margin: auto. Британские ученые наконец-то выяснили причину этого необычного феномена.',
    },
    {
        title: 'Незаслуженно униженные и оскорбленные нашим невниманием теги html',
        date: '2022-02-23 23:32',
        img: 'https://source.unsplash.com/user/nasa',
        text: 'Как часто вы предавали забвению cite, figure, legend, address, fieldset? О тяжелой судьбе этих и не только тегов мы расскажем в этой статье.',
    }
];

const postsContainer = document.querySelector('.posts');

const postsString = posts.map(({title, date, text, img}) => `
  <section class="post">
    <header class="post__header">
      <h2>${title}</h2>
      <img src=${img} alt="Рандомная картинка">
      <time datetime="${date}">${date}</time>
    </header>
    <div class="post__content">
      <p>${text}</p>
    </div>
  </section>
  `).join('');

postsContainer.insertAdjacentHTML('beforeend', postsString);