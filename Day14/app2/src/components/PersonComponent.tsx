import type Person from "../types/Person"

function PersonComponent(p: Person) {
    console.log(p)
    return (
        <div>
            <p>Name : {p.name}</p>
            <p>Age : {p.age}</p>
        </div>
    )
}

export default PersonComponent
