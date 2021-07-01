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
export async function getTodos(token) {
    const data = await request
        .get(`${URL}/api/todos`)
        .set('Authorization', token)

    return data.body;
}

//add todo
export async function createTodo(todo, token) {
    const data = await request
        .post(`${URL}/api/todos`)
        .send({
            todo: todo
        })
        .set('Authorization', token)

    return data.body;
}

//complete todo
export async function completeTodo(id, token) {
    const data = await request
        .put(`${URL}/api/todos/${id}`)
        .set('Authorization', token)

        return data.body;
}