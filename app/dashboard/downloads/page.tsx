import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Download } from 'lucide-react';

export default function DownloadsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold tracking-tight">Downloads</h2>
        <p className="text-muted-foreground">
          Access and download educational resources
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Top Performers' Answers</CardTitle>
            <CardDescription>
              Sample answers from high-scoring students
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-medium">Mathematics - Grade 10</h4>
                  <p className="text-sm text-muted-foreground">
                    Advanced Algebra Solutions
                  </p>
                </div>
                <Button size="sm">
                  <Download className="mr-2 h-4 w-4" />
                  Download
                </Button>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-medium">Physics - Grade 12</h4>
                  <p className="text-sm text-muted-foreground">
                    Quantum Mechanics Essay
                  </p>
                </div>
                <Button size="sm">
                  <Download className="mr-2 h-4 w-4" />
                  Download
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Question Papers</CardTitle>
            <CardDescription>
              Previously generated question papers
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-medium">Mid-term Assessment</h4>
                  <p className="text-sm text-muted-foreground">
                    Mathematics - Grade 8
                  </p>
                </div>
                <Button size="sm">
                  <Download className="mr-2 h-4 w-4" />
                  Download
                </Button>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-medium">Final Examination</h4>
                  <p className="text-sm text-muted-foreground">
                    Science - Grade 9
                  </p>
                </div>
                <Button size="sm">
                  <Download className="mr-2 h-4 w-4" />
                  Download
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Worksheets</CardTitle>
            <CardDescription>Practice worksheets by topic</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-medium">Trigonometry Basics</h4>
                  <p className="text-sm text-muted-foreground">
                    Mathematics - Grade 11
                  </p>
                </div>
                <Button size="sm">
                  <Download className="mr-2 h-4 w-4" />
                  Download
                </Button>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-medium">Chemical Equations</h4>
                  <p className="text-sm text-muted-foreground">
                    Chemistry - Grade 10
                  </p>
                </div>
                <Button size="sm">
                  <Download className="mr-2 h-4 w-4" />
                  Download
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Answer Keys</CardTitle>
            <CardDescription>
              Solutions and marking schemes
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-medium">Physics Quiz 3</h4>
                  <p className="text-sm text-muted-foreground">
                    Mechanics - Grade 12
                  </p>
                </div>
                <Button size="sm">
                  <Download className="mr-2 h-4 w-4" />
                  Download
                </Button>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-medium">Biology Test 2</h4>
                  <p className="text-sm text-muted-foreground">
                    Genetics - Grade 11
                  </p>
                </div>
                <Button size="sm">
                  <Download className="mr-2 h-4 w-4" />
                  Download
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}