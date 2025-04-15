import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Dialog,
  DialogContent,
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
import { Progress } from "@/components/ui/progress";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { z } from "zod";

const matchFormSchema = z.object({
  preferredGender: z.enum(["any", "male", "female", "non-binary"]),
  sessionType: z.array(z.enum(["video", "phone", "in-person"])),
  mainConcerns: z
    .array(z.string())
    .min(1, "Please select at least one concern"),
  priceRange: z.enum(["any", "0-5000", "5001-10000", "10001-15000", "15001+"]),
  preferredApproach: z.array(z.string()),
  languages: z.array(z.string()),
});

export type MatchFormData = z.infer<typeof matchFormSchema>;

const concerns = [
  "Anxiety",
  "Depression",
  "Relationships",
  "Trauma",
  "Stress",
  "Self-esteem",
  "Career",
  "Grief",
];

const approaches = [
  {
    value: "cbt",
    label: "Cognitive Behavioral Therapy (CBT)",
    description:
      "A practical approach that helps you identify and change negative thought patterns and behaviors. Effective for anxiety, depression, and stress management.",
  },
  {
    value: "psychodynamic",
    label: "Psychodynamic",
    description:
      "Explores how past experiences and unconscious processes influence current behavior. Helpful for deep-seated emotional issues and relationship patterns.",
  },
  {
    value: "humanistic",
    label: "Humanistic",
    description:
      "Focuses on personal growth and self-actualization. Emphasizes your capacity to make rational choices and develop to your maximum potential.",
  },
  {
    value: "mindfulness",
    label: "Mindfulness-based",
    description:
      "Combines meditation and behavioral techniques to help reduce stress and anxiety. Teaches present-moment awareness and emotional regulation.",
  },
  {
    value: "emdr",
    label: "EMDR",
    description:
      "Eye Movement Desensitization and Reprocessing helps process traumatic memories. Particularly effective for PTSD and trauma-related issues.",
  },
];

const languages = [
  "English",
  "Swahili",
];

const priceRanges = [
  { value: "any", label: "No preference" },
  { value: "0-5000", label: "KES 0 - 5,000" },
  { value: "5001-10000", label: "KES 5,001 - 10,000" },
  { value: "10001-15000", label: "KES 10,001 - 15,000" },
  { value: "15001+", label: "KES 15,001+" },
];

interface TherapistMatchModalProps {
  open: boolean;
  onClose: () => void;
  onMatch: (data: MatchFormData) => void;
}

export function TherapistMatchModal({
  open,
  onClose,
  onMatch,
}: TherapistMatchModalProps) {
  const [step, setStep] = useState(1);
  const totalSteps = 6;

  const form = useForm<MatchFormData>({
    resolver: zodResolver(matchFormSchema),
    defaultValues: {
      preferredGender: "any",
      sessionType: ["video"],
      mainConcerns: [],
      priceRange: "any",
      preferredApproach: [],
      languages: ["English"],
    },
  });

  const onSubmit = async (data: MatchFormData) => {
    try {
      onMatch(data);
      toast.success("Finding your perfect match!");
      onClose();
      // Reset form and step after successful submission
      form.reset();
      setStep(1);
    } catch (error) {
      toast.error("Failed to process matching preferences");
    }
  };

  const nextStep = () => {
    const currentFields = getCurrentStepFields(step);

    // Validate current step fields before proceeding
    form.trigger(currentFields).then((isValid) => {
      if (isValid) {
        setStep((prev) => Math.min(prev + 1, totalSteps));
      }
    });
  };

  const prevStep = () => setStep((prev) => Math.max(prev - 1, 1));

  // Helper function to get fields for current step
  const getCurrentStepFields = (
    currentStep: number
  ): Array<keyof MatchFormData> => {
    switch (currentStep) {
      case 1:
        return ["preferredGender"];
      case 2:
        return ["sessionType"];
      case 3:
        return ["mainConcerns"];
      case 4:
        return ["priceRange"];
      case 5:
        return ["preferredApproach"];
      case 6:
        return ["languages"];
      default:
        return [];
    }
  };

  // Handle modal close
  const handleClose = () => {
    form.reset();
    setStep(1);
    onClose();
  };

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle>Find Your Perfect Match</DialogTitle>
        </DialogHeader>

        <Progress value={(step / totalSteps) * 100} className="mb-4" />

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            {step === 1 && (
              <FormField
                control={form.control}
                name="preferredGender"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Preferred therapist gender</FormLabel>
                    <FormControl>
                      <RadioGroup
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                        className="space-y-2"
                      >
                        <FormItem className="flex items-center space-x-3">
                          <RadioGroupItem value="any" />
                          <FormLabel className="font-normal">
                            No preference
                          </FormLabel>
                        </FormItem>
                        <FormItem className="flex items-center space-x-3">
                          <RadioGroupItem value="male" />
                          <FormLabel className="font-normal">Male</FormLabel>
                        </FormItem>
                        <FormItem className="flex items-center space-x-3">
                          <RadioGroupItem value="female" />
                          <FormLabel className="font-normal">Female</FormLabel>
                        </FormItem>
                        <FormItem className="flex items-center space-x-3">
                          <RadioGroupItem value="non-binary" />
                          <FormLabel className="font-normal">
                            Non-binary
                          </FormLabel>
                        </FormItem>
                      </RadioGroup>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            )}

            {step === 2 && (
              <FormField
                control={form.control}
                name="sessionType"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Preferred session type</FormLabel>
                    <FormControl>
                      <div className="space-y-2">
                        {["video", "phone", "in-person"].map((type) => (
                          <FormItem
                            key={type}
                            className="flex items-center space-x-3"
                          >
                            <Checkbox
                              checked={field.value?.includes(type as any)}
                              onCheckedChange={(checked) => {
                                const newValue = checked
                                  ? [...(field.value || []), type]
                                  : field.value?.filter((t) => t !== type) ||
                                    [];
                                field.onChange(newValue);
                              }}
                            />
                            <FormLabel className="font-normal capitalize">
                              {type}
                            </FormLabel>
                          </FormItem>
                        ))}
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            )}

            {step === 3 && (
              <FormField
                control={form.control}
                name="mainConcerns"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>What brings you to therapy?</FormLabel>
                    <FormControl>
                      <div className="grid grid-cols-2 gap-2">
                        {concerns.map((concern) => (
                          <FormItem
                            key={concern}
                            className="flex items-center space-x-3"
                          >
                            <Checkbox
                              checked={field.value?.includes(concern)}
                              onCheckedChange={(checked) => {
                                const newValue = checked
                                  ? [...(field.value || []), concern]
                                  : field.value?.filter((c) => c !== concern) ||
                                    [];
                                field.onChange(newValue);
                              }}
                            />
                            <FormLabel className="font-normal">
                              {concern}
                            </FormLabel>
                          </FormItem>
                        ))}
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            )}

            {step === 4 && (
              <FormField
                control={form.control}
                name="priceRange"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Price range per session (KES)</FormLabel>
                    <FormControl>
                      <RadioGroup
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                        className="space-y-2"
                      >
                        {priceRanges.map((range) => (
                          <FormItem
                            key={range.value}
                            className="flex items-center space-x-3"
                          >
                            <RadioGroupItem value={range.value} />
                            <FormLabel className="font-normal">
                              {range.label}
                            </FormLabel>
                          </FormItem>
                        ))}
                      </RadioGroup>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            )}

            {step === 5 && (
              <FormField
                control={form.control}
                name="preferredApproach"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Preferred therapy approach</FormLabel>
                    <FormControl>
                      <div className="space-y-4">
                        {approaches.map((approach) => (
                          <div key={approach.value} className="space-y-2">
                            <FormItem className="flex items-center space-x-3">
                              <Checkbox
                                checked={field.value.includes(approach.value)}
                                onCheckedChange={(checked) => {
                                  const newValue = checked
                                    ? [...field.value, approach.value]
                                    : field.value.filter(
                                        (a) => a !== approach.value
                                      );
                                  field.onChange(newValue);
                                }}
                              />
                              <FormLabel className="font-medium">
                                {approach.label}
                              </FormLabel>
                            </FormItem>
                            <p className="text-sm text-muted-foreground pl-7">
                              {approach.description}
                            </p>
                          </div>
                        ))}
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            )}

            {step === 6 && (
              <FormField
                control={form.control}
                name="languages"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Preferred languages</FormLabel>
                    <FormControl>
                      <div className="grid grid-cols-2 gap-2">
                        {languages.map((language) => (
                          <FormItem
                            key={language}
                            className="flex items-center space-x-3"
                          >
                            <Checkbox
                              checked={field.value.includes(language)}
                              onCheckedChange={(checked) => {
                                const newValue = checked
                                  ? [...field.value, language]
                                  : field.value.filter((l) => l !== language);
                                field.onChange(newValue);
                              }}
                            />
                            <FormLabel className="font-normal">
                              {language}
                            </FormLabel>
                          </FormItem>
                        ))}
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            )}

            <div className="flex justify-between">
              <Button
                type="button"
                variant="outline"
                onClick={prevStep}
                disabled={step === 1}
              >
                Previous
              </Button>
              {step < totalSteps ? (
                <Button type="button" onClick={nextStep}>
                  Next
                </Button>
              ) : (
                <Button type="submit">Find Matches</Button>
              )}
            </div>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
