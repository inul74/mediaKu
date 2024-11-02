"use client";

import { z } from "zod";
import React, { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormProvider, useForm } from "react-hook-form";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { FormControl, FormField, FormItem } from "@/components/ui/form";

import { Spinner } from "@/components/spinner";

const LoginForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const formSchema = z.object({
    email: z
      .string()
      .email({ message: "Invalid email address" })
      .min(1, { message: "Email is required" }),
    password: z.string().min(1, { message: "Password is required" }),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      setIsLoading(true);
      console.log(values);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <FormProvider {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex h-full w-full flex-col items-center justify-center space-y-3"
      >
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem className="w-full">
              <FormControl>
                <Input
                  placeholder="Email"
                  disabled={isLoading}
                  className="form--input focus:boder-0 dark:border-[rgba(255,255,255,.5)]"
                  {...field}
                />
              </FormControl>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem className="w-full">
              <FormControl>
                <Input
                  placeholder="Password"
                  disabled={isLoading}
                  className="form--input focus:boder-0 dark:border-[rgba(255,255,255,.5)]"
                  {...field}
                />
              </FormControl>
            </FormItem>
          )}
        />

        <Button
          variant="brandPrimary"
          width="full"
          size="brandsm"
          type="submit"
          className="!mt-5 gap-1"
          disabled={isLoading}
        >
          {isLoading && <Spinner size="default" />}
          Sign In
        </Button>
      </form>
    </FormProvider>
  );
};

export default LoginForm;
