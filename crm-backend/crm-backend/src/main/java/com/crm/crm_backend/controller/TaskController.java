package com.crm.crm_backend.controller;

import com.crm.crm_backend.entity.Task;
import com.crm.crm_backend.service.TaskService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/tasks")
public class TaskController {

    @Autowired
    private TaskService taskService;

    @PostMapping
    public Task create(@RequestBody Task task){
        return taskService.createTask(task);
    }

    @GetMapping
    public List<Task> getAll(){
        return taskService.getAllTasks();
    }

    @GetMapping("/{id}")
    public Task getById(@PathVariable Long id){
        return taskService.getTaskById(id);
    }

    @GetMapping("/user/{userId}")
    public List<Task> getByUser(@PathVariable Long userId){
        return taskService.getTasksByUser(userId);
    }

    @PutMapping("/{id}")
    public Task update(@PathVariable Long id, @RequestBody Task task){
        return taskService.updateTask(id,task);
    }

    @PutMapping("/{id}/Complete")
    public Task complete(@PathVariable Long id){
        return taskService.markComplete(id);
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable Long id){
        taskService.deleteTask(id);
    }

}
