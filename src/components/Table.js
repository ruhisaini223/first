import React from "react";
import "../components/Table.module.css";

function Table(props) {
  const delHandler = (id) => {
    props.onDelete(id);
  };

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Date of birth</th>
          <th>Address</th>
          <th>Place of birth</th>
          <th>Phone number</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {props.forwarding.map((item) => (
          <tr key={item.id}>
            <th>{`${item.fname} ${item.lname}`}</th>
            <th>{item.date}</th>
            <th>{`${item.addresso} , ${item.addresst}`}</th>
            <th>{item.place}</th>
            <th>{item.phone}</th>

            <th>
              <button>Edit</button>{" "}
              <button onClick={() => delHandler(item.id)}>Delete</button>
            </th>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Table;
