type Task = () => Promise<void>;

class TaskQueue {
  private queue: Task[] = [];
  private running = false;

  add(task: Task) {
    this.queue.push(task);
    this.run();
  }

  private async run() {
    if (this.running) return;
    this.running = true;

    while (this.queue.length > 0) {
      const task = this.queue.shift();
      if (task) {
        await task();
      }
    }

    this.running = false;
  }
}

export const taskQueue = new TaskQueue();