import React, { useState } from "react";
import Form from "./components/Form";
import Table from "./components/Table";

function App() {
  const [forward, setForward] = useState([]);
  const handleEdit = (data) => {
    setForward(data);
  };
  const itemHandler = (prev) => {
    setForward([...prev, ...forward]);
  };
  const handleDelete = (id) => {
    setForward((prevData) => prevData.filter((item) => item.id !== id));
  };

  return (
    <div>
      <Form onSave={itemHandler} />

      <Table forwarding={forward} onDelete={handleDelete} onEdit={handleEdit} />
    </div>
  );
}

export default App;
