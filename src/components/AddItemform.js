import {useState} from 'react';
import { useDispatch } from 'react-redux';
import {addToDo} from '../Redux/todostore';


const AddItemform = () => {
   
   const dispatch = useDispatch();
   const [value, setValue] = useState('')

   const handleSubmit = (e) => {
     e.preventDefault();
     if (value){
      dispatch(
        addToDo({
          title: value
        })
        )
     }
     setValue('');
   }

   return (
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label h4">To Do List</label>
          <input type="text" className="form-control" value={value} onChange={(e) =>setValue(e.target.value)} />
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
  )
}

export default AddItemform