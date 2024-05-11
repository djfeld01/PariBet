"use client";

import { NextPage } from "next";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

interface Props {
  name: string;
  team: string;
}

const formSchema = z.object({
  event: z
    .string()
    .min(5, { message: "event name is too short" })
    .max(50, { message: "event name is too long" }),
  betType: z.string().min(5).max(50),
});
const Betform: NextPage<Props> = ({ name, team }: Props) => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      event: "",
      betType: "",
    },
  });
  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="event"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Event</FormLabel>
              <FormControl>
                <Input placeholder="something" {...field} />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="betType"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Bet Type</FormLabel>
              <FormControl>
                <Input placeholder="bet type" {...field} />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
      <div>
        {name}
        {team}
      </div>
    </Form>
  );
};

export default Betform;
