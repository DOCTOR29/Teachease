import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Link from 'next/link';
import { GraduationCap } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted">
      <div className="container mx-auto px-4 py-16">
        <div className="flex flex-col items-center text-center space-y-8">
          <GraduationCap className="h-16 w-16 text-primary" />
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
            Welcome to Teachease
          </h1>
          <p className="max-w-[600px] text-muted-foreground md:text-xl">
            Your all-in-one platform for lesson planning, assessment creation, and
            student evaluation.
          </p>
          <div className="flex gap-4">
            <Button asChild size="lg">
              <Link href="/auth/login">Get Started</Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="/auth/register">Create Account</Link>
            </Button>
          </div>
        </div>

        <div className="mt-24 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <FeatureCard
            title="Lesson Planning"
            description="Create and organize comprehensive lesson plans with our intuitive tools."
          />
          <FeatureCard
            title="Question Papers"
            description="Generate professional question papers with varied difficulty levels."
          />
          <FeatureCard
            title="Worksheets"
            description="Build custom worksheets from chapter topics for better practice."
          />
          <FeatureCard
            title="Interactive Quizzes"
            description="Create engaging quizzes for effective student assessment."
          />
          <FeatureCard
            title="Assignments"
            description="Design and manage assignments with manual grading capabilities."
          />
          <FeatureCard
            title="Progress Tracking"
            description="Monitor student progress and generate detailed reports."
          />
        </div>
      </div>
    </div>
  );
}

function FeatureCard({ title, description }: { title: string; description: string }) {
  return (
    <Card className="p-6 transition-all hover:shadow-lg">
      <h3 className="text-xl font-semibold">{title}</h3>
      <p className="mt-2 text-muted-foreground">{description}</p>
    </Card>
  );
}