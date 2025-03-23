import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

export default function LessonPlanPage() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold tracking-tight">Create Lesson Plan</h2>
        <p className="text-muted-foreground">
          Design comprehensive lesson plans for your classes
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Lesson Details</CardTitle>
          <CardDescription>
            Fill in the basic information about your lesson
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid gap-4 md:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="subject">Subject</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select subject" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="mathematics">Mathematics</SelectItem>
                  <SelectItem value="science">Science</SelectItem>
                  <SelectItem value="english">English</SelectItem>
                  <SelectItem value="history">History</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="grade">Grade Level</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select grade" />
                </SelectTrigger>
                <SelectContent>
                  {[...Array(12)].map((_, i) => (
                    <SelectItem key={i} value={`grade-${i + 1}`}>
                      Grade {i + 1}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="title">Lesson Title</Label>
            <Input id="title" placeholder="Enter lesson title" />
          </div>

          <div className="space-y-2">
            <Label htmlFor="objectives">Learning Objectives</Label>
            <Textarea
              id="objectives"
              placeholder="List the main learning objectives"
              className="min-h-[100px]"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="materials">Required Materials</Label>
            <Textarea
              id="materials"
              placeholder="List required materials and resources"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="procedure">Lesson Procedure</Label>
            <Textarea
              id="procedure"
              placeholder="Describe the step-by-step teaching procedure"
              className="min-h-[200px]"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="assessment">Assessment Methods</Label>
            <Textarea
              id="assessment"
              placeholder="Describe how you will assess student understanding"
            />
          </div>

          <div className="flex justify-end space-x-2">
            <Button variant="outline">Save as Draft</Button>
            <Button>Create Lesson Plan</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}