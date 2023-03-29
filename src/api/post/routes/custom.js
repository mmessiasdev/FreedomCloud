module.exports = {
    routes: [
        {
            method: 'GET',
            path: '/post/me',
            handler: 'post.getMe',
            config: {}
        },
        {
            method: 'POST',
            path: '/post/me',
            handler: 'post.createMe',
            config: {}
        }
    ]
}