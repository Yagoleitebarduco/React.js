const AddItemsContainer = ({ addToList }) => {
    let newTask = '';

    return (
        <div className="add-items-container">
            <input type="text" onChange={(event) => {
                newTask = event.target.value;
            }} />
            <button onClick={() => {
                if (newTask !== "") {
                    addToList(newTask)
                }
            }}
            >Adicionar</button>
        </div>
    )
}

export default AddItemsContainer;