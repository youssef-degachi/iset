import React, { useState } from "react";
// import axios from "axios";
import { useForm } from "react-hook-form";

const EntityManager = () => {
  const { register, handleSubmit, reset } = useForm();
  const [entity, setEntity] = useState("teacher");
  const [message, setMessage] = useState("");

  // const onSubmit = async (data) => {
  //   try {
  //     const response = await axios.post(`/api/${entity}`, data);
  //     setMessage(`Successfully added ${entity}!`);
  //     reset();
  //   } catch (error) {
  //     setMessage(error.response?.data?.message || `Error adding ${entity}.`);
  //   }
  // };
  const onSubmit = async () => {
    console.log(`Successfully added ${entity}!`);
  }
  const renderFields = () => {
    switch (entity) {
      case "teacher":
        return (
          <>
            <input {...register("name", { required: true })} placeholder="Name" className="input" />
            <input {...register("lastname", { required: true })} placeholder="Last Name" className="input" />
            <input {...register("cin", { required: true })} placeholder="CIN" className="input" />
            <input {...register("email", { required: true })} placeholder="Email" className="input" />
            <input {...register("title", { required: true })} placeholder="Title" className="input" />
            <input {...register("password", { required: true })} type="password" placeholder="Password" className="input" />
          </>
        );
      case "student":
        return (
          <>
            <input {...register("name", { required: true })} placeholder="Name" className="input" />
            <input {...register("lastname", { required: true })} placeholder="Last Name" className="input" />
            <input {...register("cin", { required: true })} placeholder="CIN" className="input" />
            <input {...register("email", { required: true })} placeholder="Email" className="input" />
            <input {...register("class_id")} placeholder="Class ID" className="input" />
            <input {...register("password", { required: true })} type="password" placeholder="Password" className="input" />
          </>
        );
      case "class":
        return (
          <>
            <input {...register("nameClass", { required: true })} placeholder="Class Name" className="input" />
          </>
        );
      case "classroom":
        return (
          <>
            <input {...register("namesalle", { required: true })} placeholder="Classroom Name" className="input" />
            <input {...register("typesalle", { required: true })} placeholder="Classroom Type" className="input" />
          </>
        );
      case "seance":
        return (
          <>
            <input {...register("day", { required: true })} placeholder="Day" className="input" />
            <input {...register("time", { required: true })} placeholder="Time" className="input" />
            <input {...register("salle_id")} placeholder="Classroom ID" className="input" />
            <input {...register("teacher_id")} placeholder="Teacher ID" className="input" />
            <input {...register("class_id")} placeholder="Class ID" className="input" />
            <input {...register("matiere_id")} placeholder="Matiere ID" className="input" />
          </>
        );
      case "matiere":
        return (
          <>
            <input {...register("name", { required: true })} placeholder="Matiere Name" className="input" />
            <input {...register("salleneed")} placeholder="Salle Need" className="input" />
            <input {...register("maxabsent", { valueAsNumber: true })} placeholder="Max Absent" className="input" />
          </>
        );
      default:
        return null;
    }
  };


  return (
    <div className="flex flex-col items-center p-6 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold mb-6">Entity Manager</h1>
      <select 
        onChange={(e) => setEntity(e.target.value)} 
        value={entity} 
        className="mb-4 p-2 border rounded-md bg-white shadow-sm">
        <option value="teacher">Teacher</option>
        <option value="student">Student</option>
        <option value="class">Class</option>
        <option value="classroom">Classroom</option>
        <option value="seance">Seance</option>
        <option value="matiere">Matiere</option>
      </select>

      <form onSubmit={handleSubmit(onSubmit)} className="bg-white p-6 rounded-lg shadow-md w-full max-w-md space-y-4">
        {renderFields()}
        <button 
          type="submit" 
          className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition">
          Add {entity}
        </button>
      </form>

      {message && <p className="mt-4 text-center text-green-600 font-semibold">{message}</p>}
    </div>
  );
};

export default EntityManager;
