import {
  Brain,
  Heart,
  Users,
  AlertTriangle,
  Flower2,
  Shield,
  LucideIcon,
} from "lucide-react";

export interface Condition {
  id: string;
  title: string;
  body: string;
  shortDescription: string;
  icon: LucideIcon;
  symptoms: string[];
  treatments: string[];
  category: "mood" | "anxiety" | "personality" | "trauma" | "eating" | "other";
}

export const conditions: Condition[] = [
  {
    id: "depression",
    title: "Depression",
    shortDescription:
      "A common but serious mood disorder affecting how you feel, think, and handle daily activities.",
    body: "Depression is a complex mental health condition that affects millions globally. It can manifest as persistent sadness, loss of interest in activities, and changes in daily functioning. While everyone experiences occasional sadness, clinical depression is more severe and long-lasting.",
    icon: Brain,
    category: "mood",
    symptoms: [
      "Persistent sad or empty mood",
      "Loss of interest in activities",
      "Changes in appetite or weight",
      "Sleep problems",
      "Fatigue or decreased energy",
      "Difficulty concentrating",
    ],
    treatments: [
      "Psychotherapy (CBT, IPT)",
      "Antidepressant medications",
      "Lifestyle changes",
      "Support groups",
      "Regular exercise",
    ],
  },
  {
    id: "anxiety",
    title: "Anxiety Disorders",
    shortDescription:
      "A group of conditions characterized by excessive worry and fear about everyday situations.",
    body: "Anxiety disorders involve more than temporary worry or fear. For someone with an anxiety disorder, the anxiety does not go away and can get worse over time, interfering with daily activities.",
    icon: AlertTriangle,
    category: "anxiety",
    symptoms: [
      "Excessive worry",
      "Restlessness",
      "Difficulty concentrating",
      "Sleep problems",
      "Physical symptoms (rapid heartbeat, sweating)",
      "Avoidance behaviors",
    ],
    treatments: [
      "Cognitive Behavioral Therapy (CBT)",
      "Exposure therapy",
      "Anti-anxiety medications",
      "Relaxation techniques",
      "Mindfulness practices",
    ],
  },
  {
    id: "bipolar",
    title: "Bipolar Disorder",
    shortDescription:
      "A condition causing unusual shifts in mood, energy, activity levels, and ability to carry out daily tasks.",
    body: "Bipolar disorder is characterized by dramatic shifts in mood, energy, and activity levels. These shifts can last for days to months and are more severe than normal ups and downs. People with bipolar disorder experience periods of unusually intense emotions, changes in sleep patterns and activity levels.",
    icon: Brain,
    category: "mood",
    symptoms: [
      "Manic episodes (elevated mood, increased energy)",
      "Depressive episodes",
      "Racing thoughts",
      "Decreased need for sleep",
      "Impulsive behavior",
      "Changes in appetite and sleep",
    ],
    treatments: [
      "Mood stabilizers",
      "Psychotherapy",
      "Lifestyle management",
      "Support groups",
      "Regular sleep schedule",
    ],
  },
  {
    id: "ptsd",
    title: "Post-Traumatic Stress Disorder",
    shortDescription:
      "A condition triggered by experiencing or witnessing a terrifying event, causing lasting mental and physical effects.",
    body: "PTSD is a psychiatric disorder that can occur in people who have experienced or witnessed traumatic events. The condition can cause intense, disturbing thoughts and feelings related to the experience that last long after the traumatic event has ended.",
    icon: Shield,
    category: "trauma",
    symptoms: [
      "Intrusive memories",
      "Avoidance of triggers",
      "Negative changes in thinking and mood",
      "Heightened reactions",
      "Sleep disturbances",
      "Emotional numbness",
    ],
    treatments: [
      "Trauma-focused psychotherapy",
      "EMDR therapy",
      "Medication",
      "Exposure therapy",
      "Stress management techniques",
    ],
  },
  {
    id: "ocd",
    title: "Obsessive-Compulsive Disorder",
    shortDescription:
      "A disorder characterized by uncontrollable, recurring thoughts and behaviors that the person feels driven to repeat.",
    body: "OCD is a mental health condition where people experience recurring, unwanted thoughts, ideas, or sensations (obsessions) that make them feel driven to do something repetitively (compulsions). These repetitive behaviors can significantly interfere with daily activities and social interactions.",
    icon: Brain,
    category: "anxiety",
    symptoms: [
      "Intrusive thoughts",
      "Compulsive behaviors",
      "Fear of contamination",
      "Need for symmetry",
      "Excessive checking",
      "Ritualistic behaviors",
    ],
    treatments: [
      "Exposure and Response Prevention (ERP)",
      "Cognitive Behavioral Therapy",
      "Medication (SSRIs)",
      "Support groups",
      "Mindfulness techniques",
    ],
  },
  {
    id: "eating-disorders",
    title: "Eating Disorders",
    shortDescription:
      "Serious conditions related to persistent eating behaviors that negatively impact health and emotions.",
    body: "Eating disorders are complex mental health conditions marked by severe disturbances in eating behaviors. These disorders can affect people of any age or gender and can have serious health consequences if left untreated.",
    icon: Flower2,
    category: "eating",
    symptoms: [
      "Extreme food restriction",
      "Binge eating episodes",
      "Obsession with body weight",
      "Distorted body image",
      "Compensatory behaviors",
      "Social isolation around meals",
    ],
    treatments: [
      "Nutritional counseling",
      "Psychotherapy",
      "Medical monitoring",
      "Group therapy",
      "Family-based treatment",
    ],
  },
  {
    id: "borderline",
    title: "Borderline Personality Disorder",
    shortDescription:
      "A condition characterized by difficulties regulating emotion, leading to unstable relationships and self-image.",
    body: "Borderline Personality Disorder (BPD) is characterized by pervasive patterns of instability in relationships, self-image, and emotions. People with BPD may experience intense episodes of anger, depression, and anxiety that can last from a few hours to days.",
    icon: Users,
    category: "personality",
    symptoms: [
      "Intense fear of abandonment",
      "Unstable relationships",
      "Unclear or shifting self-image",
      "Impulsive behaviors",
      "Intense mood swings",
      "Chronic feelings of emptiness",
    ],
    treatments: [
      "Dialectical Behavior Therapy (DBT)",
      "Mentalization-based therapy",
      "Schema therapy",
      "Group therapy",
      "Medication for specific symptoms",
    ],
  },
  {
    id: "social-anxiety",
    title: "Social Anxiety Disorder",
    shortDescription:
      "An intense, persistent fear of being watched and judged by others in social situations.",
    body: "Social anxiety disorder involves intense fear and anxiety about social situations. People with this condition may worry about being embarrassed, humiliated, or rejected in social interactions, leading to avoidance of many situations.",
    icon: AlertTriangle,
    category: "anxiety",
    symptoms: [
      "Fear of social situations",
      "Physical symptoms in social settings",
      "Avoidance of social events",
      "Difficulty with eye contact",
      "Racing heart in social situations",
      "Excessive self-consciousness",
    ],
    treatments: [
      "Cognitive Behavioral Therapy",
      "Social skills training",
      "Exposure therapy",
      "Anti-anxiety medication",
      "Relaxation techniques",
    ],
  },
  {
    id: "schizophrenia",
    title: "Schizophrenia",
    shortDescription:
      "A serious mental disorder that affects how a person thinks, feels, and behaves.",
    body: "Schizophrenia is a complex, long-term mental health condition that affects how a person thinks, feels, and behaves. People with schizophrenia may seem to have lost touch with reality, experiencing hallucinations, delusions, and extremely disordered thinking.",
    icon: Brain,
    category: "other",
    symptoms: [
      "Hallucinations",
      "Delusions",
      "Disorganized speech",
      "Trouble with thinking",
      "Reduced expression of emotions",
      "Difficulty with daily activities",
    ],
    treatments: [
      "Antipsychotic medications",
      "Psychosocial therapy",
      "Family education",
      "Vocational rehabilitation",
      "Cognitive remediation",
    ],
  },
  {
    id: "adhd",
    title: "ADHD",
    shortDescription:
      "A chronic condition including attention difficulty, hyperactivity, and impulsiveness.",
    body: "Attention-deficit/hyperactivity disorder (ADHD) is a neurodevelopmental disorder affecting both children and adults. It impacts attention, hyperactivity, and impulsivity, making it difficult to focus, stay organized, and control behavior.",
    icon: Brain,
    category: "other",
    symptoms: [
      "Difficulty focusing",
      "Hyperactivity",
      "Impulsive behavior",
      "Disorganization",
      "Poor time management",
      "Frequent mood swings",
    ],
    treatments: [
      "Behavioral therapy",
      "Medication (stimulants)",
      "Educational support",
      "Organizational skills training",
      "Lifestyle modifications",
    ],
  },
];

export const categories = [
  { id: "mood", label: "Mood Disorders", icon: Brain },
  { id: "anxiety", label: "Anxiety Disorders", icon: AlertTriangle },
  { id: "personality", label: "Personality Disorders", icon: Users },
  { id: "trauma", label: "Trauma-Related", icon: Shield },
  { id: "eating", label: "Eating Disorders", icon: Flower2 },
  { id: "other", label: "Other Conditions", icon: Heart },
];
