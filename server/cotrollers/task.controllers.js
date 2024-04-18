import Task from "../models/task.model.js";


export const createTask=async (req,res)=>{
   
    const taskData = req.body;
    try {
        const createTask=await Task.create(taskData);
        res.status(200).json({message:"Task created successfully",status:true});

        } catch (error) {
            res.status(500).json({message: error.message})
            console.log("Task is not created Error::",error)
            
        
    }

}

export const getTask= async (req,res)=>{
    try {
        const  taskList= await Task.find();
        res.status(200).json(taskList);
        
    } catch (error) {
        console.log("Error in getTask::",error)
        
    }
    
}
export const deleteTask = async (req, res) => {
    const taskId = req.params.id;
    try {
        const deletedTask = await Task.findByIdAndDelete(taskId);
        if (!deletedTask) {
            return res.status(404).json({ message: "Task not found" });
        }
        res.status(200).json({ message: "Task deleted successfully", status: true });
    } catch (error) {
        console.log("Error in deleteTask::", error);
        res.status(500).json({ message: error.message });
    }
};


// Controller function to update a task
export const updateTask = async (req, res) => {
    const taskId = req.params.taskId; // Get the task ID from request parameters
    const updatedTaskData = req.body; // Get the updated task data from request body
  
    try {
      // Find the task by ID and update it with the new data
      const updatedTask = await Task.findByIdAndUpdate(taskId, updatedTaskData, { new: true });
  
      if (!updatedTask) {
        // If task is not found, return 404 Not Found
        return res.status(404).json({ message: "Task not found" });
      }
  
      // If task is updated successfully, return success response
      res.status(200).json({ message: "Task updated successfully", updatedTask });
    } catch (error) {
      // If an error occurs, return 500 Internal Server Error
      console.log("Error in updating task:", error);
      res.status(500).json({ message: "Internal Server Error" });
    }
  };