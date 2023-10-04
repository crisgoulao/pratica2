import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private tasks = [
    { id: 1, nombre: 'Limpiar la casa', completado: false },
    { id: 2, nombre: 'Cepillarse los dientes', completado: true },
    { id: 3, nombre: 'Comprar pan', completado: true },
    { id: 4, nombre: 'Reservar peluquería', completado: false }
  ];

  getTasks() {
    return this.tasks;
  }

  removeTask(id: number) {
    this.tasks = this.tasks.filter(task => task.id !== id);
  }
  
  constructor() { }
}
