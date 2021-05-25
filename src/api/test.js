import { post, get } from '../plugins/request'

// 飞书登录
export function login(id) {
    // http://10.101.1.12/user/login?code=
    return get('/user/login', { code: id })
}
