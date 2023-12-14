import React from "react";

export default function TodoItem({ todo, onDelete }) {
  return (
    <>
      <div>
        <h2 className="text-2xl my-1">{todo.title}</h2>
        <p className="my-1">{todo.desc}</p>
        <button
          type="button"
          className="my-2 focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-1 focus:ring-red-300 font-medium rounded-lg text-sm px-3 py-2 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-black"
          onClick={() => {
            onDelete(todo);
          }}
        >
          Delete
        </button>
      </div>
    </>
  );
}
