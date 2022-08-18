import { bdFirestore } from "./init";
import {
  getDocs,
  query,
  collection,
  addDoc,
  deleteDoc,
  doc,
  getDoc,
  updateDoc,
  where,
} from "firebase/firestore";

/**
 * Retourne la promesse incluant toutes les tâches dans la bd Firestore
 * @param {string} userId
 * @returns promise
 */
export async function getAllTasks(userId) {
  const tasks = await getDocs(
    query(collection(bdFirestore, "users", userId, "tasks"))
  );
  return tasks.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
}

/**
 * Créer une nouvelle tâche dans la bd Firestore et la retourne sous forme d'une promesse
 * @param {string} userId
 * @param {object} data
 * @returns promise
 */
export async function createTask(userId, data) {
  let newTask = await addDoc(
    collection(bdFirestore, "users", userId, "tasks"),
    data
  );
  return await getDoc(newTask);
}

/**
 * Supprime une tâche dans la bd Firestore et retourne son Id
 * @param {string} userId
 * @param {string} taskId
 * @returns string
 */
export async function deleteTask(userId, taskId) {
  const ref = doc(bdFirestore, "users", userId, "tasks", taskId);
  await deleteDoc(ref).catch((error) => {
    console.log(error);
  });
  return taskId;
}

/**
 * Change le status d'une tâche dans la bd Firestore et retourne son Id
 * @param {string} userId
 * @param {string} taskId
 * @param {boolean} taskCompleted
 * @returns string
 */
export async function upDateTaskStatus(userId, taskId, taskCompleted) {
  const ref = doc(bdFirestore, "users", userId, "tasks", taskId);
  const newTaskStatus = {
    taskCompleted: !taskCompleted,
  };
  await updateDoc(ref, newTaskStatus).catch((error) => {
    console.log(error);
  });
  return taskId;
}

/**
 * Supprime les tâches dont le status est complété dans la bd Firestore et les retourne sous forme de promesse
 * @param {string} userId
 * @returns array
 */
export async function deleteCompletedTasks(userId) {
  const tasksToDelete = await getDocs(
    query(
      collection(bdFirestore, "users", userId, "tasks"),
      where("taskCompleted", "==", true)
    )
  );
  tasksToDelete.docs.forEach(async (d) => {
    const ref = doc(bdFirestore, "users", userId, "tasks", d.id);
    await deleteDoc(ref).catch((error) => {
      console.log(error);
    });
  });
  return tasksToDelete.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
}
