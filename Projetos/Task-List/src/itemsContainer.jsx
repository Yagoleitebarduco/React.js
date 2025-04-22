import TaskItem from './taskList'

const ItemsContainer = ({taskList, removeFromList}) => {


    return (
        <div className='itensContainer'>
            {
                taskList.map((t, idx) => (
                    <TaskItem task={t} removeFromList={removeFromList} key={`task-item ${idx}`}/>
                ))
            }
        </div>
    )
}

export default ItemsContainer;