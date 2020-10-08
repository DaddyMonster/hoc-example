import { Button, Paper, Typography } from "@material-ui/core";
import React from "react";

const ListComponent = ({ addList, removeList, mapList }) => {
    return (
      <div style={{ width: 500, height: 500 }}>
        <Button onClick={() => addList(Math.random())}>추가</Button>
        {mapList.map((item, index) => (
          <Paper
            style={{ display: "flex", justifyContent: "center", padding: 20 }}
          >
            <Typography>{item}</Typography>
            <Button onClick={() => removeList(index)}>제거</Button>
          </Paper>
        ))}
      </div>
    );
  };
  
  export default ListComponent;
  