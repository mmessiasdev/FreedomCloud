module.exports = {
    routes: [
        {
            method: 'GET',
            path: '/complaint/me',
            handler: 'complaint.getMe',
            config: {}
        },
        {
            method: 'POST',
            path: '/complaint/me',
            handler: 'complaint.createMe',
            config: {}
        }
    ]
}