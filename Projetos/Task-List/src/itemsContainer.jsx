import { useState } from 'react'
import TaskItem from './taskList'

const ItemsContainer = ({taskList, removeFromList}) => {
    const [checked, setChecked] = useState(false);


    return (
        <div className='itensContainer'>
            <input type="checkbox" name='   btn-border' id='bottom-border' checked={checked} onClick={() => setChecked(!checked)}/>
            <label htmlFor="bottom-border">Habilitar Linhas</label>

            {
                taskList.map((t, idx) => (
                    <TaskItem 
                    task={t} 
                    removeFromList={removeFromList}  
                    key={`task-item ${idx}`}
                    showBorderBottom={checked}
                    />
                ))
            }
        </div>
    )
}

export default ItemsContainer;