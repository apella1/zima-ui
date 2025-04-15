import {
  categories,
  conditions,
} from "@/components/condition-preview/conditions";
import { PageTitle } from "@/components/page-title/page-title";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Search } from "lucide-react";
import { useState } from "react";

export default function ConditionsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const filteredConditions = conditions.filter((condition) => {
    const matchesSearch = condition.title
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    const matchesCategory =
      selectedCategory === "all" || condition.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <>
      <PageTitle
        title="Mental Health Conditions"
        description="Learn about various mental health conditions, their symptoms, and treatment options."
      />
      <div className="container py-12 space-y-8">
        <div className="space-y-4">
          <h1 className="text-4xl font-bold tracking-tighter md:text-5xl">
            Mental Health Conditions
          </h1>
          <p className="max-w-[700px] text-muted-foreground md:text-lg">
            Comprehensive information about various mental health conditions,
            their symptoms, and treatment options.
          </p>
        </div>

        <div className="flex flex-col gap-6 md:flex-row">
          <div className="w-full md:w-64 space-y-4">
            <div className="relative">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search conditions..."
                className="pl-8"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>

            <div className="space-y-2">
              <h3 className="font-medium">Categories</h3>
              <div className="flex flex-col gap-1">
                <Button
                  variant={selectedCategory === "all" ? "default" : "ghost"}
                  className="justify-start"
                  onClick={() => setSelectedCategory("all")}
                >
                  All Conditions
                </Button>
                {categories.map((category) => (
                  <Button
                    key={category.id}
                    variant={
                      selectedCategory === category.id ? "default" : "ghost"
                    }
                    className="justify-start gap-2"
                    onClick={() => setSelectedCategory(category.id)}
                  >
                    <category.icon className="w-4 h-4" />
                    {category.label}
                  </Button>
                ))}
              </div>
            </div>
          </div>

          <div className="flex-1 space-y-6">
            {filteredConditions.map((condition) => (
              <Card key={condition.id}>
                <CardHeader>
                  <div className="flex items-center gap-2">
                    <condition.icon className="w-5 h-5 text-primary" />
                    <CardTitle>{condition.title}</CardTitle>
                  </div>
                  <CardDescription>
                    {condition.shortDescription}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Tabs defaultValue="overview" className="w-full">
                    <TabsList>
                      <TabsTrigger value="overview">Overview</TabsTrigger>
                      <TabsTrigger value="symptoms">Symptoms</TabsTrigger>
                      <TabsTrigger value="treatments">Treatments</TabsTrigger>
                    </TabsList>
                    <TabsContent value="overview" className="mt-4">
                      <p className="text-muted-foreground">{condition.body}</p>
                    </TabsContent>
                    <TabsContent value="symptoms" className="mt-4">
                      <ul className="list-disc list-inside space-y-1">
                        {condition.symptoms.map((symptom, index) => (
                          <li key={index} className="text-muted-foreground">
                            {symptom}
                          </li>
                        ))}
                      </ul>
                    </TabsContent>
                    <TabsContent value="treatments" className="mt-4">
                      <ul className="list-disc list-inside space-y-1">
                        {condition.treatments.map((treatment, index) => (
                          <li key={index} className="text-muted-foreground">
                            {treatment}
                          </li>
                        ))}
                      </ul>
                    </TabsContent>
                  </Tabs>
                </CardContent>
              </Card>
            ))}

            {filteredConditions.length === 0 && (
              <div className="text-center py-12">
                <p className="text-muted-foreground">
                  No conditions found matching your search criteria.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
