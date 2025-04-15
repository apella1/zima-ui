import { useState } from "react";
import { conditions } from "./conditions";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ChevronDown, ChevronRight } from "lucide-react";
import { Link } from "react-router";
import { cn } from "@/lib/utils";

export default function ConditionPreview() {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const previewConditions = conditions.slice(0, 6);

  return (
    <section className="container py-12 space-y-8">
      <div className="text-center space-y-4">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
          Common Conditions
        </h2>
        <p className="mx-auto max-w-[700px] text-muted-foreground md:text-lg">
          Learn about various mental health conditions, their symptoms, and
          treatment options
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {previewConditions.map((condition) => (
          <Card key={condition.id} className="transition-all hover:shadow-lg">
            <CardHeader className="space-y-1">
              <div className="flex items-center gap-2">
                <condition.icon className="w-5 h-5 text-primary" />
                <CardTitle className="text-xl">{condition.title}</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                {condition.shortDescription}
              </p>
              <Button
                variant="ghost"
                className="group w-full justify-between"
                onClick={() =>
                  setExpandedId(
                    expandedId === condition.id ? null : condition.id
                  )
                }
              >
                Learn more
                {expandedId === condition.id ? (
                  <ChevronDown className="w-4 h-4 transition-transform group-hover:translate-y-0.5" />
                ) : (
                  <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
                )}
              </Button>
              <div
                className={cn(
                  "grid transition-all",
                  expandedId === condition.id
                    ? "grid-rows-[1fr] mt-4"
                    : "grid-rows-[0fr]"
                )}
              >
                <div className="overflow-hidden">
                  <p className="text-sm text-muted-foreground">
                    {condition.body}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="text-center pt-4">
        <Button asChild size="lg">
          <Link to="/conditions">View All Conditions</Link>
        </Button>
      </div>
    </section>
  );
}
