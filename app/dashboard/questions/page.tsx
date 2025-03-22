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

export default function QuestionPaperPage() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold tracking-tight">
          Generate Question Paper
        </h2>
        <p className="text-muted-foreground">
          Create balanced question papers with varied difficulty levels
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Paper Configuration</CardTitle>
          <CardDescription>
            Set up the basic parameters for your question paper
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

          <div className="grid gap-4 md:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="duration">Duration (minutes)</Label>
              <Input type="number" id="duration" placeholder="e.g., 120" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="marks">Total Marks</Label>
              <Input type="number" id="marks" placeholder="e.g., 100" />
            </div>
          </div>

          <div className="space-y-2">
            <Label>Difficulty Distribution</Label>
            <div className="grid gap-4 md:grid-cols-3">
              <div>
                <Label htmlFor="easy">Easy (%)</Label>
                <Input type="number" id="easy" placeholder="30" />
              </div>
              <div>
                <Label htmlFor="medium">Medium (%)</Label>
                <Input type="number" id="medium" placeholder="50" />
              </div>
              <div>
                <Label htmlFor="hard">Hard (%)</Label>
                <Input type="number" id="hard" placeholder="20" />
              </div>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="sections">Question Sections</Label>
            <div className="space-y-4">
              <Card>
                <CardContent className="pt-6">
                  <div className="grid gap-4 md:grid-cols-2">
                    <div>
                      <Label htmlFor="section-type">Section Type</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="mcq">Multiple Choice</SelectItem>
                          <SelectItem value="short">Short Answer</SelectItem>
                          <SelectItem value="long">Long Answer</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label htmlFor="questions">Number of Questions</Label>
                      <Input type="number" id="questions" placeholder="e.g., 10" />
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Button variant="outline" className="w-full">
                Add Another Section
              </Button>
            </div>
          </div>

          <div className="flex justify-end space-x-2">
            <Button variant="outline">Preview</Button>
            <Button>Generate Paper</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}