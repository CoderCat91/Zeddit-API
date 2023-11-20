fetch('https://www.reddit.com/r/animals/comments.json')
.then(res =>res.json())
    .then(data => console.log(data.data.children))
    .catch(err => console.log('Error', err))

    