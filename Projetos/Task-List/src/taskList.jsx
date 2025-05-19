const TaskItem = ({task, removeFromList, showBorderBottom}) => {
    return (
        <div className={`task-item ${showBorderBottom ? 'bottom-border' : '' }`}>
            <p>{task}</p>

            <button type="submit" onClick={() => removeFromList(task)}>Apagar</button>
        </div>
    )
}

export default TaskItem