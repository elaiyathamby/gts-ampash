import { getAllToDos, updateToDoApi, addNewToDo, getTodayToDos, getFilterToDos ,getToDoById} from '@/api/todos';
import { ToDo } from '@/model/todo';
import { onMounted, ref } from 'vue';
import { useRouter } from 'vue-router';

export function useTodos() {

    const todos = ref<ToDo[]>([]);

    const todo = ref<ToDo>({});

    const newTodo = ref<ToDo>({});

    const orderedTodo = ref<any>({});
    const router = useRouter();

    const getTodos = async () => {
        try {
            todos.value = await getAllToDos();
            orderedTodo.value = [...new Set(todos.value.map((x) => x.due))].map((k) => ({ date: k, todos: todos.value.filter((x) => x.due == k).map((x) => x),}));
        } catch (error) {
            console.log(error); // FIXME: Errorhandling
        }
    }

    const getTodoById = async (id: string) => {
        try {
            todo.value = await getToDoById(id);
        } catch (error) {
            console.log(error); // FIXME: Errorhandling
        }
    }

    const getTodayTodos = async () => {
        try {
            todos.value = await getTodayToDos();
            orderedTodo.value = [...new Set(todos.value.map((x) => x.due))].map((k) => ({ date: k, todos: todos.value.filter((x) => x.due == k).map((x) => x),}));
        } catch (error) {
            console.log(error); // FIXME: Errorhandling
        }
    }

    const getFilterTodos = async (filter: string) => {
        try {
            todos.value = await getFilterToDos(filter);
            orderedTodo.value = [...new Set(todos.value.map((x) => x.due))].map((k) => ({ date: k, todos: todos.value.filter((x) => x.due == k).map((x) => x),}));
        } catch (error) {
            console.log(error); // FIXME: Errorhandling
        }
    }


    const addTodo = async () => {
        try {
            // add the new todo and update the list of all todos afterwards
            await addNewToDo(newTodo.value);
            await getTodos();
            alert("Gespeichert!")
            router.push('/tabs/calendar');
        } catch (error) {
            console.log(error); // FIXME: Errorhandling
        }
    }

    const updateTodo = async () => {
        try {
            // add the new todo and update the list of all todos afterwards
            await updateToDoApi(todo.value);
            await getTodos();
            alert("Gespeichert!");
            router.push('/tabs/calendar');
        } catch (error) {
            console.log(error); // FIXME: Errorhandling
        }
    }

    onMounted(getTodos);

    return {
        newTodo,
        todos,
        orderedTodo,
        todo,
        getTodos,
        addTodo,
        getTodoById,
        getTodayTodos,
        getFilterTodos,
        updateTodo
    }
}