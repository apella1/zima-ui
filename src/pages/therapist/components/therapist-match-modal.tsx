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

const NO_PREFERENCE = "no_preference";

const matchFormSchema = z.object({
  preferredGender: z.enum(["any", "male", "female", "non-binary"]),
  sessionType: z
    .array(z.enum(["video", "phone", "in-person"]))
    .min(1, "Please select at least one session type"),
  mainConcerns: z
    .array(z.string())
    .min(1, "Please select at least one concern"),
  priceRange: z.enum(["any", "0-5000", "5001-10000", "10001-15000", "15001+"]),
  preferredApproach: z
    .array(z.string())
    .min(1, "Please select at least one approach"),
  languages: z.array(z.string()).min(1, "Please select at least one language"),
});

export type MatchFormData = z.infer<typeof matchFormSchema>;

const concerns = [
  { value: NO_PREFERENCE, label: "Nothing specific" },
  { value: "anxiety", label: "Anxiety" },
  { value: "depression", label: "Depression" },
  { value: "relationships", label: "Relationships" },
  { value: "stress", label: "Stress" },
  { value: "trauma", label: "Trauma" },
  { value: "grief", label: "Grief" },
  { value: "self-esteem", label: "Self-esteem" },
  { value: "career", label: "Career" },
  { value: "addiction", label: "Addiction" },
];

const approaches = [
  {
    value: NO_PREFERENCE,
    label: "No specific preference",
    description: "Open to any therapeutic approach that might help",
  },
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

const sessionTypes = [
  { value: "video", label: "Video Call" },
  { value: "phone", label: "Phone Call" },
  { value: "in-person", label: "In-Person" },
];

const languages = [
  { value: NO_PREFERENCE, label: "Any language" },
  { value: "English", label: "English" },
  { value: "Swahili", label: "Swahili" },
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
      mainConcerns: [NO_PREFERENCE],
      priceRange: "any",
      preferredApproach: [NO_PREFERENCE],
      languages: [NO_PREFERENCE],
    },
  });

  const onSubmit = async (data: MatchFormData) => {
    try {
      if (data.languages.length === 0) {
        toast.error("Please select at least one language");
        return;
      }

      onMatch(data);
      toast.success("Finding your perfect match!");
      onClose();
      form.reset();
      setStep(1);
    } catch (error) {
      toast.error("Failed to process matching preferences");
    }
  };

  const nextStep = () => {
    const currentFields = getCurrentStepFields(step);

    form.trigger(currentFields).then((isValid) => {
      if (isValid) {
        setStep((prev) => Math.min(prev + 1, totalSteps));
      } else {
        // Optional: Show error toast if validation fails
        toast.error("Please fill in all required fields");
      }
    });
  };

  const prevStep = () => setStep((prev) => Math.max(prev - 1, 1));

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
            {/* Step 1: Gender Preference */}
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

            {/* Step 2: Session Type */}
            {step === 2 && (
              <FormField
                control={form.control}
                name="sessionType"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>
                      Preferred session type (select at least one)
                    </FormLabel>
                    <FormControl>
                      <div className="space-y-2">
                        {sessionTypes.map((type) => (
                          <FormItem
                            key={type.value}
                            className="flex items-center space-x-3"
                          >
                            <Checkbox
                              checked={field.value?.includes(type.value as any)}
                              onCheckedChange={(checked) => {
                                const newValue = checked
                                  ? [...(field.value || []), type.value]
                                  : field.value?.filter(
                                      (t) => t !== type.value
                                    ) || [];
                                field.onChange(newValue);
                              }}
                            />
                            <FormLabel className="font-normal">
                              {type.label}
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

            {/* Step 3: Main Concerns */}
            {step === 3 && (
              <FormField
                control={form.control}
                name="mainConcerns"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>
                      What brings you to therapy? (select at least one)
                    </FormLabel>
                    <FormControl>
                      <div className="grid grid-cols-2 gap-2">
                        {concerns.map((concern) => (
                          <FormItem
                            key={concern.value}
                            className="flex items-center space-x-3"
                          >
                            <Checkbox
                              checked={field.value?.includes(concern.value)}
                              onCheckedChange={(checked) => {
                                let newValue: string[];
                                if (concern.value === NO_PREFERENCE) {
                                  newValue = checked ? [NO_PREFERENCE] : [];
                                } else {
                                  newValue = checked
                                    ? [
                                        ...field.value.filter(
                                          (v) => v !== NO_PREFERENCE
                                        ),
                                        concern.value,
                                      ]
                                    : field.value.filter(
                                        (v) => v !== concern.value
                                      );
                                }
                                field.onChange(newValue);
                              }}
                            />
                            <FormLabel className="font-normal">
                              {concern.label}
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

            {/* Step 4: Price Range */}
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

            {/* Step 5: Preferred Approach */}
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
                                  let newValue: string[];
                                  if (approach.value === NO_PREFERENCE) {
                                    newValue = checked ? [NO_PREFERENCE] : [];
                                  } else {
                                    newValue = checked
                                      ? [
                                          ...field.value.filter(
                                            (v) => v !== NO_PREFERENCE
                                          ),
                                          approach.value,
                                        ]
                                      : field.value.filter(
                                          (v) => v !== approach.value
                                        );
                                  }
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

            {/* Step 6: Languages */}
            {step === 6 && (
              <FormField
                control={form.control}
                name="languages"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Preferred languages</FormLabel>
                    <FormControl>
                      <div className="space-y-2">
                        {languages.map((language) => (
                          <FormItem
                            key={language.value}
                            className="flex items-center space-x-3"
                          >
                            <Checkbox
                              checked={field.value?.includes(language.value)}
                              onCheckedChange={(checked) => {
                                let newValue: string[];
                                if (language.value === NO_PREFERENCE) {
                                  newValue = checked ? [NO_PREFERENCE] : [];
                                } else {
                                  newValue = checked
                                    ? [
                                        ...field.value.filter(
                                          (v) => v !== NO_PREFERENCE
                                        ),
                                        language.value,
                                      ]
                                    : field.value.filter(
                                        (v) => v !== language.value
                                      );
                                }
                                field.onChange(newValue);
                              }}
                            />
                            <FormLabel className="font-normal">
                              {language.label}
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

            {/* Navigation Buttons */}
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
