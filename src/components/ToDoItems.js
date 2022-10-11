import {useDispatch} from 'react-redux';
import {deleteReducer,toggleReducer} from '../Redux/todostore';

const ToDoItems = ({ title, id, completed }) => {

    const dispatch = useDispatch();

    const handleCheckboxClick =() =>{
        dispatch(toggleReducer({ id, completed: !completed }))
    }

    const DeleteHandler = () => {
        dispatch(deleteReducer({id}))
    }
    
return (
        <>
            <li className= {`list-group-item  ${completed && 'list-group-item-success'}` }>
                <div className='d-flex justify-content-between'>
                 <span className='d-flex align-items-center'>
					<input
						type='checkbox'
						className='mr-3'
                        checked={completed}
                        onChange={handleCheckboxClick }
					></input>
					{title}
				</span>
                <button className='btn btn-danger' onClick={DeleteHandler}>
					Delete
				</button>
                </div>
            </li>

        </>
    )
}

export default ToDoItems