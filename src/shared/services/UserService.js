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

export default service;