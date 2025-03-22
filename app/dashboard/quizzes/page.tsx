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

export default function QuizPage() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold tracking-tight">Create Quiz</h2>
        <p className="text-muted-foreground">
          Design custom quizzes for student assessment
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Quiz Details</CardTitle>
          <CardDescription>Set up your quiz parameters</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid gap-4 md:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="title">Quiz Title</Label>
              <Input id="title" placeholder="Enter quiz title" />
            </div>
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
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="duration">Duration (minutes)</Label>
              <Input type="number" id="duration" placeholder="e.g., 30" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="passing-score">Passing Score (%)</Label>
              <Input type="number" id="passing-score" placeholder="e.g., 60" />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="instructions">Instructions</Label>
            <Textarea
              id="instructions"
              placeholder="Add quiz instructions"
              className="min-h-[100px]"
            />
          </div>

          <div className="space-y-4">
            <Label>Questions</Label>
            <Card>
              <CardContent className="pt-6 space-y-6">
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label>Question 1</Label>
                    <Input placeholder="Enter your question title" className="mb-2" />
                    <Textarea placeholder="Question description or additional details" />
                  </div>
                  <div className="space-y-2">
                    <Label>Question Type</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="short">Short Answer</SelectItem>
                        <SelectItem value="paragraph">Paragraph</SelectItem>
                        <SelectItem value="multiple">Multiple Choice</SelectItem>
                        <SelectItem value="checkbox">Checkboxes</SelectItem>
                        <SelectItem value="dropdown">Dropdown</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label>Options</Label>
                    <div className="space-y-2">
                      <Input placeholder="Option 1" />
                      <Input placeholder="Option 2" />
                      <Input placeholder="Option 3" />
                      <Input placeholder="Option 4" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label>Correct Answer</Label>
                    <div className="space-y-1">
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select correct option" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="1">Option 1</SelectItem>
                          <SelectItem value="2">Option 2</SelectItem>
                          <SelectItem value="3">Option 3</SelectItem>
                          <SelectItem value="4">Option 4</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label>Required</Label>
                    <div className="flex items-center space-x-2">
                      <input type="checkbox" id="required" className="rounded border-gray-300" />
                      <label htmlFor="required" className="text-sm">Make this question required</label>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Button variant="outline" className="w-full">
              Add Another Question
            </Button>
          </div>

          <div className="flex justify-end space-x-2">
            <Button variant="outline">Save as Draft</Button>
            <Button>Create Quiz</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}