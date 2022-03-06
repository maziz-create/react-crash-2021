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
    fetcher,
    {
      onErrorRetry: (error, key, config, revalidate, { retryCount }) => {
        if (error.status === 404) {
          navigate("/");
          return;
        }
        // if (key === "tasks/51") {
        //   console.log("Access to area 51 is denied!");
        // }

        // if (retryCount >= 2) {
        //   console.log("You have requested more than 10 times!");
        // }

        // setTimeout(() => revalidate({ retryCount }), 5000);
      },
    }
  );

  // bu ile onErrorRetry içindeki error aynı işlevi görüyor bu projede.
  // if (taskDetailError) {
  //   return <div>Failed to fetcH!</div>;
  // }

  if (!taskDetail) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div style={{ textAlign: "left" }}>
        <h2>Task Details</h2>
        <p>Id: {taskDetail?.id}</p>
        <p>Day: {taskDetail?.day}</p>
        <p>Reminder: {taskDetail?.reminder ? "True" : "False"}</p>
        <p>Content: {taskDetail?.text}</p>
        <Button onClick={() => navigate(-1)} text="<- Back" />
      </div>
    </>
  );
};

export default TaskDetails;
