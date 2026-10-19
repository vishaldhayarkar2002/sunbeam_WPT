
function InputEventHandlingPage() {
    return (
        <div>
            <h1>Handle the input events</h1>
            <input type='text' placeholder='enter name' onChange={(e) => {
                console.log('something has changed')
                console.log(e.target.value)
            }} />
        </div>
    )
}

export default InputEventHandlingPage
