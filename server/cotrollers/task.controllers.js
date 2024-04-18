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