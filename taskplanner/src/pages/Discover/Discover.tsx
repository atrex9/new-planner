import TaskCard from "../../components/TaskCard/TaskCard";
import SearchPanel from "../../components/SearchPanel/SearchPanel";
import { StyledCont, StyledTasksCont } from "./Discover.styles";
import { useEffect, useState } from "react";

const Discover = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const fetchAllTasks = async () => {
      try {
        const res = await fetch("http://localhost:8800/tasks");
        const tasksJSON = await res.json();
        setTasks(tasksJSON);
      } catch (err) {
        // set error message
      }
    };

    fetchAllTasks();
  });

  return (
    <StyledCont>
      <SearchPanel></SearchPanel>
      <StyledTasksCont>
        {tasks.map((task) => {
          return <TaskCard task={task} />;
        })}
      </StyledTasksCont>
    </StyledCont>
  );
};

export default Discover;
