const service = {};

service.getUser = async () => {
    const res = await fetch("https://reqres.in/api/users?page=4")
    return res.json();
}

service.addUser = async (data) => {
    const res = await fetch("https://reqres.in/api/users", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data),
    });
    return res.json();
}

service.updateUser = async (data, id) => { //id = 2
    const res = await fetch(`https://reqres.in/api/users/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data),
    });
    return res.json();
}

service.deleteUser = async (id) => { //id = 2
    const res = await fetch(`https://reqres.in/api/users/${id}`, {
        method: 'DELETE',
    });
    return res.json();
}

export default service;