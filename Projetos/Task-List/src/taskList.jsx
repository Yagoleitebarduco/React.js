const TaskItem = ({task, removeFromList}) => {
    return (
        <div className="task-item">
            <p>{task}</p>

            <button type="submit" onClick={() => removeFromList(task)}>Apagar</button>
        </div>
    )
}

export default TaskItem