export default Object.freeze({
    ADMIN: {
        path: '/admin',
    },
    HOME: {
        path: '/',
        children: [
            {
                name: 'COURSES',
                path: 'courses',
                children: [
                    { name: 'LIST', path: '/' },
                    { name: 'READ_UPDATE', path: ':id' },
                ]
            },
            {
                name: 'COURSE',
                path: 'course',
                children: [
                    { name: 'CREATE', path: '/' },
                ]
            }
        ]
    },
    ABOUT: {
        path: '/about',
    }
})