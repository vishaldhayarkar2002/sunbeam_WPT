import type Person from "../types/Person"

function PersonComponent() {
    const p1: Person = {
        name: 'anil',
        age: 30,
        mobile: '9876543210'
    }

    return <>
        <p>Name : {p1.name} </p>
        <p>Age : {p1.age} </p>
        <p>Mobile : {p1.mobile}</p>
    </>
}

export default PersonComponent