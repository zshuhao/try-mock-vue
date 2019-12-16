import request from '../utils/request'

export function testGet () {
    return request({ url: `http://localhost:3000/test/2/example/testmock2`, method: 'GET' })
}

export function testPost () {
    return request({ url: `http://localhost:3000/test/list` })
}

export function createUser (data) {
    return request({ url: `http://localhost:3000/users/create`, data })
}
