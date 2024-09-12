"use client";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { FieldValues, useForm } from "react-hook-form";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Input } from "./ui/input";
import { Loader2 } from "lucide-react";

export function Feedback() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = useForm<FieldValues>();
  async function handleFeedback(data: FieldValues) {
    let { email, feedback } = data;
    try {
      if (email.length === 0) {
        email = "No email provided"; // Set default message
      }
      const response = await fetch("/api/send-feedback", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ feedback, email }),
      });

      if (response.ok) reset();
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="text-gray-300 bg-slate-700 hover:text-black">Feedback</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Feedback</DialogTitle>
        </DialogHeader>
        <form
          className="grid gap-4 py-4"
          onSubmit={handleSubmit(handleFeedback)}
        >
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="email" className="text-right">
              Email
            </Label>
            <Input
              type="email"
              id="email"
              className="col-span-3"
              placeholder="email optional"
              {...register("email")}
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="feedback" className="text-right">
              Feedback <span className="text-red-500">*</span>
            </Label>
            <Textarea
              id="feedback"
              placeholder="Feedback"
              className="resize-none col-span-3"
              {...register("feedback", {
                required: "Feedback is required.",
                minLength: {
                  value: 8,
                  message: "Feedback must be at least 8 characters long.",
                },
              })}
            />
            {errors.feedback && (
              <span className="col-span-4 text-red-500 text-center pl-6 text-sm">
                {errors.feedback.message as string}
              </span>
            )}
          </div>
          <DialogFooter>
            <Button type="submit" className="w-max mt-4" size={"lg"}>
              {isSubmitting ? (
                <Loader2 className="animate-spin" />
              ) : (
                "Send Feedback"
              )}
            </Button>
          </DialogFooter>
        </form>
        <div
          className={`${
            isSubmitSuccessful ? "text-green-500 block" : "text-rose-500 hidden"
          } text-sm text-center w-full`}
        >
          {isSubmitSuccessful ? "Feedback submitted!" : "Some Error Occured"}
        </div>
      </DialogContent>
    </Dialog>
  );
}
