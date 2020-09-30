import axios from 'axios'
const baseurl = process.env.Node_ENV === "production" ? 'http://120.24.63.27:2006/api' : 'http://10.3.138.24:2006/api'

const request = axios.create({
    baseURL: baseurl,
    withCredentials: true
})

export async function get(url, data, config = {}) {
    const { data: result } = await request({
        ...config,
        url,
        method: 'get',
        params: data
    })
    return result;
}

export async function post(url, data, config = {}) {
    const { data: result } = await request({
        ...config,
        url,
        method: 'post',
        data
    })

    return result;
}

export async function put(url, data, config = {}) {
    const { data: result } = await request.put(url, data, config);

    return result;
}


export async function remove(url, data, config = {}) {
    const { data: result } = await request.delete(url, {
        ...config,
        params: data
    });

    return result;
}
export default {
    get,
    post,
    put,
    remove,
}