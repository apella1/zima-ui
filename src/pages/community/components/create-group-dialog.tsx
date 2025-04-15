import { zodResolver } from "@hookform/resolvers/zod";
import { Resolver, useForm } from "react-hook-form";
import { z } from "zod";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";
import { toast } from "react-toastify";

const createGroupSchema = z.object({
  name: z.string().min(3, "Name must be at least 3 characters"),
  description: z.string().min(10, "Description must be at least 10 characters"),
  topics: z.string().min(1, "At least one topic is required"),
  isPrivate: z.boolean().default(false),
});

type CreateGroupFormData = z.infer<typeof createGroupSchema>;

interface CreateGroupDialogProps {
  isOpen: boolean;
  onClose: () => void;
  onCreateGroup: (group: CreateGroupFormData) => Promise<void>;
}

export function CreateGroupDialog({
  isOpen,
  onClose,
  onCreateGroup,
}: CreateGroupDialogProps) {
  const form = useForm<CreateGroupFormData>({
    resolver: zodResolver(createGroupSchema) as Resolver<CreateGroupFormData>,
    defaultValues: {
      name: "",
      description: "",
      topics: "",
      isPrivate: false,
    },
  });

  const onSubmit = async (data: CreateGroupFormData) => {
    try {
      await onCreateGroup(data);
      form.reset();
      onClose();
    } catch (error) {
      toast.error("Failed to create group");
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Create Support Group</DialogTitle>
          <DialogDescription>
            Create a new support group. Your request will be reviewed by
            moderators.
          </DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Group Name</FormLabel>
                  <FormControl>
                    <Input {...field} placeholder="Enter group name" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Description</FormLabel>
                  <FormControl>
                    <Textarea
                      {...field}
                      placeholder="Describe the purpose of your group"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="topics"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Topics (comma-separated)</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      placeholder="Anxiety, Depression, Self-Care"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="isPrivate"
              render={({ field }) => (
                <FormItem className="flex items-center gap-2">
                  <FormControl>
                    <Input
                      type="checkbox"
                      checked={field.value}
                      onChange={field.onChange}
                      className="h-4 w-4"
                    />
                  </FormControl>
                  <FormLabel className="!mt-0">Make group private</FormLabel>
                  <FormMessage />
                </FormItem>
              )}
            />
            <DialogFooter>
              <Button
                type="submit"
                disabled={form.formState.isSubmitting}
                className="w-full"
              >
                {form.formState.isSubmitting && (
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                )}
                Submit for Review
              </Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
