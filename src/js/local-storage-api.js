import { TASKS_LS_KEY } from "./config";

export function loadLS() {
  const dataFromLS = JSON.parse(localStorage.getItem(TASKS_LS_KEY)) ?? [];

  return dataFromLS;
}

export function saveLS(tasks) {
  localStorage.setItem(TASKS_LS_KEY, JSON.stringify(tasks));
}

export function removeLS(task) {}
