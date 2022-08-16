import { bdFirestore } from "./init";
import {
  getDocs,
  query,
  collection,
  orderBy,
  addDoc,
  deleteDoc,
  doc,
  getDoc,
  updateDoc,
  writeBatch,
  where,
} from "firebase/firestore";

export async function getAllTasks(userId) {
  const tasks = await getDocs(
    query(collection(bdFirestore, "users", userId, "tasks"))
  );
  return tasks.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
}

export async function createTask(userId, data) {
  let newTask = await addDoc(
    collection(bdFirestore, "users", userId, "tasks"),
    data
  );
  return await getDoc(newTask);
}

export async function deleteTask(userId, taskId) {
  const ref = doc(bdFirestore, "users", userId, "tasks", taskId);
  await deleteDoc(ref).catch((error) => {
    console.log(error);
  });
}

export async function upDateTaskStatus(userId, taskId, taskCompleted) {
  const ref = doc(bdFirestore, "users", userId, "tasks", taskId);
  const newTaskStatus = {
    taskCompleted: !taskCompleted,
  };
  await updateDoc(ref, newTaskStatus).catch((error) => {
    console.log(error);
  });
}

export async function deleteCompletedTasks(userId) {
  const tasksBatch = writeBatch(bdFirestore);
  const tasksToDelete = await getDocs(
    query(
      collection(bdFirestore, "users", userId, "tasks"),
      where("taskCompleted", true)
    )
  );
  tasksToDelete.docs.forEach((doc) => tasksBatch.delete(doc.ref));
}
