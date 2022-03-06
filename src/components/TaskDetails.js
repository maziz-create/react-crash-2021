import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { fetcher } from "../api/fetcher";
import useSWR from "swr";

import Button from "./Button";

const TaskDetails = () => {
  const navigate = useNavigate();
  const { taskId } = useParams();

  // id ? `${id}` : null demek ile alttaki gibi callback vermek aynı şeyler.
  const { data: taskDetail, error: taskDetailError } = useSWR(
    () => `tasks/${taskId}`,
    fetcher
  );

  return (
    <>
      <div style={{ textAlign: "left" }}>
        <h2>Task Details</h2>
        <p>Id: {taskDetail?.id}</p>
        <p>Day: {taskDetail?.day}</p>
        <p>Reminder: {taskDetail?.reminder}</p>
        <p>Content: {taskDetail?.text}</p>
        <Button onClick={() => navigate(-1)} text="<- Back" />
      </div>
    </>
  );
};

export default TaskDetails;
