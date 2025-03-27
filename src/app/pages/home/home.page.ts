import { NavController } from '@ionic/angular';
import { Component } from '@angular/core';

// Definindo o tipo Task
interface Task {
  description: string;
  dueDate: string;
  completed: boolean;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: false,
})
export class HomePage {
  isTaskFormOpen = false; // Controla a visibilidade do modal
  tasks: Task[] = []; // Lista de tarefas

  newTask = {
    description: '',
    dueDate: '',
  };

  constructor(private NavController: NavController) {}

  // Abrir o formulário de criação de tarefa
  openTaskForm() {
    this.isTaskFormOpen = true;
  }

  // Fechar o formulário de criação de tarefa
  closeTaskForm() {
    this.isTaskFormOpen = false;
  }

  // Adicionar nova task
  addTask() {
    if (this.newTask.description && this.newTask.dueDate) {
      // Agora podemos adicionar uma task sem erros
      this.tasks.push({ ...this.newTask, completed: false });
      this.newTask = { description: '', dueDate: '' }; // Resetar o form
      this.closeTaskForm(); // Fechar o modal após adicionar
    } else {
      alert('Por favor, preencha todos os campos!');
    }
  }

  // Marcar a task como concluída
  markTaskCompleted(task: Task) {
    task.completed = !task.completed;
  }

  // Excluir a task
  deleteTask(task: Task) {
    const index = this.tasks.indexOf(task);
    if (index > -1) {
      this.tasks.splice(index, 1);
    }
  }

  // Calcular o progresso baseado na data de conclusão
  getProgress(dueDate: string): number {
    const today = new Date();
    const due = new Date(dueDate);
    const timeLeft = due.getTime() - today.getTime();
    const maxTime = 7 * 24 * 60 * 60 * 1000; // 7 dias em milissegundos
    return Math.min(timeLeft / maxTime, 1); // Limitar entre 0 e 1
  }
  navIonic() {
    this.NavController.navigateForward('/ionic');
  }
  navMap() {
    this.NavController.navigateForward('/map');
  }
}
