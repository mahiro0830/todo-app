const { useQueryClient } = require('react-query');

const useCurrentToDoList = () => {
    const queryClient = useQueryClient();
    return queryClient.getQueryData('toDoList');
}

export default useCurrentToDoList;
