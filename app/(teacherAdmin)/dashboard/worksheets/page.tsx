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

export default function WorksheetPage() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold tracking-tight">Create Worksheet</h2>
        <p className="text-muted-foreground">
          Generate practice worksheets from chapter topics
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Worksheet Configuration</CardTitle>
          <CardDescription>
            Configure the content and format of your worksheet
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
              <Label htmlFor="topic">Topic</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select topic" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="algebra">Algebra</SelectItem>
                  <SelectItem value="geometry">Geometry</SelectItem>
                  <SelectItem value="calculus">Calculus</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="difficulty">Difficulty Level</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select difficulty" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="beginner">Beginner</SelectItem>
                  <SelectItem value="intermediate">Intermediate</SelectItem>
                  <SelectItem value="advanced">Advanced</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="questions">Number of Questions</Label>
              <Input type="number" id="questions" placeholder="e.g., 20" />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="instructions">Instructions</Label>
            <Textarea
              id="instructions"
              placeholder="Add instructions for students"
            />
          </div>

          <div className="space-y-2">
            <Label>Question Types</Label>
            <div className="grid gap-4 md:grid-cols-2">
              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-center justify-between">
                    <div className="space-y-1">
                      <h4 className="text-sm font-medium">Practice Problems</h4>
                      <p className="text-sm text-muted-foreground">
                        Standard practice questions
                      </p>
                    </div>
                    <Input
                      type="number"
                      className="w-20"
                      placeholder="Count"
                    />
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-center justify-between">
                    <div className="space-y-1">
                      <h4 className="text-sm font-medium">Word Problems</h4>
                      <p className="text-sm text-muted-foreground">
                        Application-based questions
                      </p>
                    </div>
                    <Input
                      type="number"
                      className="w-20"
                      placeholder="Count"
                    />
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="flex justify-end space-x-2">
            <Button variant="outline">Preview</Button>
            <Button>Generate Worksheet</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}