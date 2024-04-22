import axios from 'axios';
import { useMutation } from 'react-query';

const useUpdateToDoDetailMutateTask = () => {
    const updateToDoDetailMutation = useMutation(
        (toDoDetail) => axios.put('/todo-app/public/api/todo_details/' + toDoDetail.id, {
            name: toDoDetail.name,
            completed_flag: toDoDetail.completed_flag,
        })
    );
    return { updateToDoDetailMutation };
};

export default useUpdateToDoDetailMutateTask;
