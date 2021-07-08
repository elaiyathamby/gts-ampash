import { getAllToDos, updateToDo, addNewToDo, getTodayToDos, getFilterToDos } from '@/api/todos';
import { ToDo } from '@/model/todo';
import { onMounted, ref } from 'vue';

export function useTodos() {

    const todos = ref<ToDo[]>([]);

    const newTodo = ref<ToDo>({});

    const orderedTodo = ref<any>({});

    const getTodos = async () => {
        try {
            todos.value = await getAllToDos();
            orderedTodo.value = [...new Set(todos.value.map((x) => x.due))].map((k) => ({ date: k, todos: todos.value.filter((x) => x.due == k).map((x) => x),}));
        } catch (error) {
            console.log(error); // FIXME: Errorhandling
        }
    }

    const getTodayTodos = async () => {
        try {
            todos.value = await getTodayToDos();
        } catch (error) {
            console.log(error); // FIXME: Errorhandling
        }
    }

    const getFilterTodos = async (filter: string) => {
        try {
            todos.value = await getFilterToDos(filter);
        } catch (error) {
            console.log(error); // FIXME: Errorhandling
        }
    }


    const addTodo = async () => {
        try {
            // add the new todo and update the list of all todos afterwards
            console.log(newTodo.value.description);
            await addNewToDo(newTodo.value);
            getTodos();
        } catch (error) {
            console.log(error); // FIXME: Errorhandling
        }
    }

    onMounted(getTodos);

    return {
        newTodo,
        todos,
        getTodos,
        addTodo,
        orderedTodo
    }
}