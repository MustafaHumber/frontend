// import { API_URL } from "./utils"


// export const CreateTask = async (taskObj) => {
//     const url = `${API_URL}/tasks`;
//     console.log('url ', url)
//     const options = {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify(taskObj)
//     };
//     try {
//         const result = await fetch(url, options);
//         const data = await result.json();
//         return data;
//     } catch (err) {
//         return err;
//     }
// }
// export const GetAllTasks = async () => {
//     const url = `${API_URL}/tasks`;
//     console.log('url ', url)
//     const options = {
//         method: 'GET',
//         headers: {
//             'Content-Type': 'application/json'
//         }
//     };
//     try {
//         const result = await fetch(url, options);
//         const data = await result.json();
//         return data;
//     } catch (err) {
//         return err;
//     }
// }

// export const DeleteTaskById = async (id) => {
//     const url = `${API_URL}/tasks/${id}`;
//     console.log('url ', url)
//     const options = {
//         method: 'DELETE',
//         headers: {
//             'Content-Type': 'application/json'
//         }
//     };
//     try {
//         const result = await fetch(url, options);
//         const data = await result.json();
//         return data;
//     } catch (err) {
//         return err;
//     }
// }


// export const UpdateTaskById = async (id, reqBody) => {
//     const url = `${API_URL}/tasks/${id}`;
//     console.log('url ', url)
//     const options = {
//         method: 'PUT',
//         headers: {
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify(reqBody)
//     };
//     try {
//         const result = await fetch(url, options);
//         const data = await result.json();
//         return data;
//     } catch (err) {
//         return err;
//     }
// }

import { API_URL } from './utils';

// Create a new task
export const CreateTask = async (taskObj) => {
    const url = `${API_URL}/tasks`;
    console.log('url ', url);

    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(taskObj)
    };

    try {
        const result = await fetch(url, options);
        const data = await result.json();
        // Assuming the API response contains a message and success status
        if (result.ok) {
            return { success: true, message: data.message || 'Task created successfully' };
        } else {
            return { success: false, message: data.message || 'Failed to create task' };
        }
    } catch (err) {
        console.error("Error in CreateTask:", err);
        return { success: false, message: 'Error creating task' };
    }
};

// Get all tasks
export const GetAllTasks = async () => {
    const url = `${API_URL}/tasks`;
    console.log('url ', url);

    const options = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    };

    try {
        const result = await fetch(url, options);
        const data = await result.json();
        // Check if the response is valid and contains data
        if (result.ok) {
            return { success: true, data: data };
        } else {
            return { success: false, message: data.message || 'Failed to fetch tasks' };
        }
    } catch (err) {
        console.error("Error in GetAllTasks:", err);
        return { success: false, message: 'Error fetching tasks' };
    }
};

// Delete a task by ID
export const DeleteTaskById = async (id) => {
    const url = `${API_URL}/tasks/${id}`;
    console.log('url ', url);

    const options = {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        }
    };

    try {
        const result = await fetch(url, options);
        const data = await result.json();
        if (result.ok) {
            return { success: true, message: data.message || 'Task deleted successfully' };
        } else {
            return { success: false, message: data.message || 'Failed to delete task' };
        }
    } catch (err) {
        console.error("Error in DeleteTaskById:", err);
        return { success: false, message: 'Error deleting task' };
    }
};

// Update a task by ID
export const UpdateTaskById = async (id, reqBody) => {
    const url = `${API_URL}/tasks/${id}`;
    console.log('url ', url);

    const options = {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(reqBody)
    };

    try {
        const result = await fetch(url, options);
        const data = await result.json();
        if (result.ok) {
            return { success: true, message: data.message || 'Task updated successfully' };
        } else {
            return { success: false, message: data.message || 'Failed to update task' };
        }
    } catch (err) {
        console.error("Error in UpdateTaskById:", err);
        return { success: false, message: 'Error updating task' };
    }
};
