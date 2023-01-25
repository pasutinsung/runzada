import Layout from "@/components/Layout";
import Link from "next/link";
import React from "react";
import { useForm } from "react-hook-form";
export default function LoginScreen() {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();
  const submitHandler = ({ email, password }) => {};
  return (
    <Layout title="login">
      <form
        className="mx-auto max-w-screen-md"
        onSubmit={handleSubmit(submitHandler)}
      >
        <h1 className="mb-4 text-xl">Login</h1>
        <div className="mb-4">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            {...register("email", { required: "please enter email" })}
            lassName="w-full"
            id="email"
            autoFocus
            className="w-full rounded border p-2 outline-none ring-amber-300 focus:ring"
          ></input>
          {errors.email && (
            <div className="text-red-500">{errors.email.message}</div>
          )}
        </div>
        <div className="mb-4">
          <label htmlFor="Password">Password</label>
          <input
            type="Password"
            autoFocus
            className="w-full rounded border p-2 outline-none ring-amber-300 focus:ring"
            id="Password"
          ></input>
        </div>
        <div className="mb-4">
          <button
            className="rounded bg-red-300  py-2 px-4 shadow outline-none hover:bg-red-200  active:bg-red-400"
            type="submit"
            onSubmit={handleSubmit()}
          >
            Login
          </button>
        </div>
        <div className="mb-4 ">
          Don&apos;t have an account? &nbsp;
          <Link href={`/register?redirect}`}>Register</Link>
        </div>
      </form>
    </Layout>
  );
}
