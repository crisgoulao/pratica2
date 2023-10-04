import { Component, OnInit } from '@angular/core';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  tasks: any[] = [];
  newTask = '';

  constructor(private taskService: TaskService) {}

  ngOnInit() {
    this.tasks = this.taskService.getTasks();
  }

  addTask() {
    if (this.newTask.trim() !== '') {
      const newId = this.tasks.length + 1;
      const newTaskObject = { id: newId, nombre: this.newTask, completado: false };
      this.tasks.push(newTaskObject);
      this.newTask = ''; // Limpar o campo de entrada
    }
  }

  removeTask(id: number) {
    this.taskService.removeTask(id);
    this.tasks = this.tasks.filter((task: any) => task.id !== id);
  }
}
