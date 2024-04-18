const { default: axios } = require("axios");
const { useQueryClient, useQuery } = require("react-query");

const getToDoList = async () => {
    const { data } = await axios.get("/todo-app/public/api/todos");
    return data;
};

const useGetToDoList = () => {
    const queryClient = useQueryClient();
    return useQuery("toDoList", getToDoList, {
        onError: () => {
            queryClient.setQueryData("toDoList", null);
        },
    });
};

export default useGetToDoList;
