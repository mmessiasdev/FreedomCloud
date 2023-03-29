module.exports = {
    routes: [
        {
            method: 'GET',
            path: '/place/me',
            handler: 'place.getMe',
            config: {}
        },
        {
            method: 'POST',
            path: '/place/me',
            handler: 'place.createMe',
            config: {}
        }
    ]
}