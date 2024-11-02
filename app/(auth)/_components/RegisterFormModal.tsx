"use client";

import { z } from "zod";
import axios from "axios";
import React, { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";

import { BASE_URL } from "@/lib/base-url";
import { useToast } from "@/hooks/use-toast";
import { Spinner } from "@/components/spinner";
import Modal from "@/components/modal";
import CheckUsername from "@/components/check-username";

const RegisterFormModal = () => {
  const { toast } = useToast();
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const formSchema = z.object({
    name: z.string().min(1, { message: "Name is required" }),
    email: z
      .string()
      .trim()
      .email({ message: "Invalid email address" })
      .min(1, { message: "Email is required" }),
    username: z.string().min(1, { message: "Username is required" }),
    dateOfBirth: z
      .string()
      .min(1, { message: "Date of birth is required" })
      .refine((val) => !isNaN(Date.parse(val)), {
        message: "Please enter a valid date",
      }),
    password: z.string().min(1, { message: "Password is required" }),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      username: "",
      dateOfBirth: "",
      password: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      setIsLoading(true);
      await axios.post(`${BASE_URL}/api/register`, {
        email: values.email,
        password: values.password,
        name: values.name,
        username: values.username,
        dateOfBirth: values.dateOfBirth,
      });
      form.reset();
      toast({
        title: "Success",
        description: "Registered successfully",
      });
      handleClose();
    } catch (error) {
      console.log(error);
      toast({
        title: "Error",
        description: "Registered successfully",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <Modal
      title="Create your account"
      isOpen={isOpen}
      onClose={handleClose}
      body={
        <Form {...form}>
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
                      autoComplete="off"
                    />
                  </FormControl>
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormControl>
                    <Input
                      placeholder="Name"
                      disabled={isLoading}
                      className="form--input focus:boder-0 dark:border-[rgba(255,255,255,.5)]"
                      {...field}
                      autoComplete="off"
                    />
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="username"
              render={() => (
                <FormItem className="w-full">
                  <FormControl>
                    <CheckUsername />
                  </FormControl>
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="dateOfBirth"
              render={({ field }) => (
                <FormItem className="w-full text-muted-foreground">
                  <FormLabel>
                    Date of birth
                    <FormControl>
                      <Input
                        placeholder="Enter Dob"
                        type="date"
                        disabled={isLoading}
                        className="form--input focus:boder-0 dark:border-[rgba(255,255,255,.5)]"
                        {...field}
                        autoComplete="off"
                      />
                    </FormControl>
                  </FormLabel>
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
                      type="password"
                      placeholder="Enter password"
                      disabled={isLoading}
                      className="form--input focus:boder-0 dark:border-[rgba(255,255,255,.5)]"
                      {...field}
                      autoComplete="off"
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
              Create
            </Button>
          </form>
        </Form>
      }
    >
      <Button
        variant="brandOutline"
        width="full"
        size="brandsm"
        className="!mt-5 !mb-4 gap-1 "
        onClick={() => setIsOpen(true)}
      >
        Create account
      </Button>
    </Modal>
  );
};

export default RegisterFormModal;
