import React, { useEffect, useState, useContext } from "react";
import { db } from "../Firebase";
import { collection, query, where, getDocs } from "firebase/firestore";
import { AuthContext } from "../context/Authcontext";

const Tasks = () => {
  const { currentUser } = useContext(AuthContext); // Get currentUser from context
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!currentUser || !currentUser.email) return; // Ensure user is logged in

    const fetchTasks = async () => {
      setLoading(true);
      try {
        const q = query(collection(db, "tasks"), where("email", "==", currentUser.email));
        const querySnapshot = await getDocs(q);
        const fetchedTasks = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setTasks(fetchedTasks);
      } catch (error) {
        console.error("Error fetching tasks:", error);
      }
      setLoading(false);
    };

    fetchTasks();
  }, [currentUser]);

  return (
    <div className="tasks">
      <h2>Assigned Tasks</h2>
      {loading ? (
        <p>Loading...</p>
      ) : tasks.length === 0 ? (
        <p>No tasks assigned.</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>Title</th>
              <th>Description</th>
              <th>Start Date</th>
              <th>End Date</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {tasks.map((task) => (
              <tr key={task.id}>
                <td>{task.title}</td>
                <td>{task.description}</td>
                <td>{task.startDate}</td>
                <td>{task.endDate}</td>
                <td>{task.status === "Pending" ? "Pending" : "Completed"}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Tasks;
