export class Scheduler {
  public static registerEvent(func: () => void, interval = 1000): void {
    setInterval(func, interval);
  }
}
