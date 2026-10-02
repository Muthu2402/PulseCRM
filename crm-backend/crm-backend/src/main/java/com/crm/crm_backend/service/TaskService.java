package com.crm.crm_backend.service;

import com.crm.crm_backend.entity.Task;
import com.crm.crm_backend.repository.TaskRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TaskService {

    @Autowired
    private TaskRepository taskRepository;

    public Task createTask(Task task){
        task.setStatus(Task.Status.OPEN);
        return taskRepository.save(task);
    }

    public List<Task> getAllTasks(){
        return taskRepository.findAll();
    }

    public Task getTaskById(Long id){
        return taskRepository.findById(id)
                .orElseThrow(()-> new RuntimeException("Task Not Found"));
    }

    public List<Task> getTasksByUser(Long userId){
        return taskRepository.findByAssignedTo_Id(userId);
    }

    public Task updateTask(Long id, Task updatedTask){
        Task task = getTaskById(id);
        task.setTitle(updatedTask.getTitle());
        task.setDescription(updatedTask.getDescription());
        task.setDueDate(updatedTask.getDueDate());
        task.setPriority(updatedTask.getPriority());
        return taskRepository.save(task);
    }

    public Task markComplete(Long id){
        Task task = getTaskById(id);
        task.setStatus(Task.Status.COMPLETED);
        return taskRepository.save(task);
    }

    public void deleteTask(Long id){
        taskRepository.deleteById(id);
    }

}
