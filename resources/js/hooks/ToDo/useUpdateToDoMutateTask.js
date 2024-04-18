import axios from 'axios';
import { useMutation } from 'react-query';

const useUpdateToDoMutateTask = () => {
    const updateToDoMutation = useMutation(
        (toDo) => axios.put('/todo-app/public/api/todos/' + toDo.id, { title: toDo.title })
    );
    return { updateToDoMutation };
};

export default useUpdateToDoMutateTask;
