import request from 'superagent';

const URL = 'https://rocky-wave-27071.herokuapp.com';

//signup
export async function signup(email, password) {
    const data = await request
    .post(`${URL}/auth/signup`)
    .send({
        email: email,
        password: password
    })

    return data.body.token;
}

//login ( auth route "auth/signin")
export async function login(email, password) {
    const data = await request
    .post(`${URL}/auth/signin`)
    .send({
        email: email,
        password: password
    })

    return data.body.token;
}

//get todos

//add todo

//complete todo