"use client";

import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form } from "@/components/ui/form";
import { toast } from "sonner";
import React from "react";
import {
  CustomFormField,
  GoogleButton,
  CustomButton,
} from "../components/Inputs";
import { LineThroghText } from "../components/LineThroghText";
import { BottomText } from "../components/BottomText";
import { AuthHeaderText } from "../components/AuthHeaderText";
import Link from "next/link";

const validationSchema = z.object({
  firstName: z.string().min(1, { message: "First Name is required" }),
  lastName: z.string().min(1, { message: "Last Name is required" }),
  email: z.string().min(1, { message: "Email is required" }).email({
    message: "Must be a valid email",
  }),
  phoneNumber: z
    .string()
    .min(10, { message: "Phone Number must be at least 10 digits" })
    .regex(/^\d+$/, { message: "Phone Number must contain only digits" }),
  password: z
    .string()
    .min(6, { message: "Password must be at least 6 characters" }),
});

type FormValues = z.infer<typeof validationSchema>;

export default function SignUpPage() {
  const form = useForm<FormValues>({
    resolver: zodResolver(validationSchema),
    mode: "onBlur",
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phoneNumber: "",
      password: "",
    },
  });

  const onSubmit = (values: FormValues) => {
    console.log(values);

    toast(
      <div>
        <p className="font-bold">You submitted the following values:</p>
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(values, null, 2)}</code>
        </pre>
      </div>
    );
  };

  return (
    <div className="flex flex-col justify-center self-center">
      <AuthHeaderText
        title="Create Account"
        className="mb-5"
        subText={
          <>
            It takes less than a minute to create an account. Already have an
            account?{" "}
            <Link className="text-blue-400" href={"/login"}>
              {" "}
              Sign in instead.
            </Link>
          </>
        }
      />

      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex-1 max-w-[500px] w-full space-y-5 flex flex-col gap-5 self-center"
        >
          <CustomFormField
            name="firstName"
            form={form}
            label="First Name"
            placeholder="Enter your first name"
            className="mt-1"
          />

          <CustomFormField
            name="lastName"
            form={form}
            label="Last Name"
            placeholder="Enter your last name"
            className="mt-1"
          />

          <CustomFormField
            name="email"
            form={form}
            label="Email"
            placeholder="Enter your email"
            type="email"
            className="mt-1"
          />
          <CustomFormField
            name="phoneNumber"
            form={form}
            label="Phone Number"
            placeholder="Enter your phone number"
            type="text"
            className="mt-1"
          />
          <CustomFormField
            name="password"
            form={form}
            label="Password"
            placeholder="Enter your password"
            type="password"
            className="mt-3"
          />

          <CustomButton label="Create Account" />
        </form>
      </Form>

      <LineThroghText
        text="Or"
        className="mt-5 mb-4 max-w-[500px] self-center"
      />

      <GoogleButton
        label="Continue with Google"
        className="mb-10 max-w-[500px] w-full self-center"
      />

      <BottomText />
    </div>
  );
}
