import React, { useState } from "react";

export default function AddTodo(props) {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");

  const submit = (e) => {
    e.preventDefault();
    if (!title || !desc) {
      alert("Title and Description Cannot Be Empty");
    } else {
      props.addTodo(title, desc);
      setTitle("");
      setDesc("");
    }
  };

  return (
    <>
      <div className="ml-24">
        <h1 className="my-4 text-2xl font-semibold">Add A Developer</h1>
        <div className="w-full max-w-xl">
          <form
            onSubmit={submit}
            className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
          >
            <div className="mb-4">
              <label
                className="block text-black text-sm font-bold mb-2"
                htmlFor="title"
              >
                Developer Title
              </label>
              <input
                className="shadow appearance-none  focus:ring-2 focus:ring-inset focus:ring-blue-600 border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="title"
                type="text"
                value={title}
                onChange={(e) => {
                  setTitle(e.target.value);
                }}
              />
            </div>
            <div className="mb-6">
              <label
                className="block text-black text-sm font-bold mb-2"
                htmlFor="desc"
              >
                Developer Description
              </label>
              <input
                className="shadow appearance-none focus:ring-2 focus:ring-inset focus:ring-blue-600 border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                id="desc"
                type="text"
                value={desc}
                onChange={(e) => {
                  setDesc(e.target.value);
                }}
              />
            </div>
            <div className="flex items-center justify-between">
              <button
                className="bg-green-500 hover:bg-green-800 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit"
              >
                Add Dev.
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
