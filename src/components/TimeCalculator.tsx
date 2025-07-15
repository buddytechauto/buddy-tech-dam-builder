import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Badge } from "@/components/ui/badge";
import { Clock } from "lucide-react";

const TimeCalculator = () => {
  const [selectedTasks, setSelectedTasks] = useState<string[]>([]);

  const tasks = [
    { id: "reporting", name: "Monthly Reporting", hours: 8 },
    { id: "followups", name: "Customer Follow-ups", hours: 12 },
    { id: "dataentry", name: "Data Entry", hours: 15 },
    { id: "social", name: "Social Media Posting", hours: 6 },
    { id: "invoicing", name: "Invoice Creation", hours: 10 },
    { id: "scheduling", name: "Appointment Scheduling", hours: 5 },
    { id: "inventory", name: "Inventory Updates", hours: 7 },
    { id: "emails", name: "Email Management", hours: 20 },
  ];

  const totalHours = selectedTasks.reduce((total, taskId) => {
    const task = tasks.find(t => t.id === taskId);
    return total + (task?.hours || 0);
  }, 0);

  const monthlySavings = totalHours * 25; // Assuming $25/hour value
  const yearlySavings = monthlySavings * 12;

  const handleTaskToggle = (taskId: string) => {
    setSelectedTasks(prev => 
      prev.includes(taskId) 
        ? prev.filter(id => id !== taskId)
        : [...prev, taskId]
    );
  };

  return (
    <Card className="w-full max-w-4xl mx-auto">
      <CardHeader className="text-center">
        <CardTitle className="text-3xl mb-2">See How Much Time You Can Save</CardTitle>
        <p className="text-muted-foreground">
          Check the tasks that eat up your time each month. Watch the savings add up!
        </p>
      </CardHeader>
      <CardContent>
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Task Selection */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Common Time-Wasters</h3>
            <div className="space-y-3">
              {tasks.map((task) => (
                <div key={task.id} className="flex items-center space-x-3 p-3 rounded-lg border hover:bg-muted/50 transition-colors">
                  <Checkbox
                    id={task.id}
                    checked={selectedTasks.includes(task.id)}
                    onCheckedChange={() => handleTaskToggle(task.id)}
                  />
                  <label 
                    htmlFor={task.id} 
                    className="flex-1 cursor-pointer font-medium"
                  >
                    {task.name}
                  </label>
                  <Badge variant="outline">{task.hours}h/month</Badge>
                </div>
              ))}
            </div>
          </div>

          {/* Results Display */}
          <div className="space-y-6">
            <div className="text-center p-8 bg-accent/5 rounded-lg border-2 border-accent/20">
              <Clock className="w-12 h-12 text-accent mx-auto mb-4" />
              <div className="space-y-2">
                <p className="text-4xl font-bold text-accent">{totalHours}</p>
                <p className="text-lg font-medium">Hours Saved Per Month</p>
                {totalHours > 0 && (
                  <p className="text-sm text-muted-foreground">
                    That's {Math.round(totalHours / 8)} full workdays back in your schedule!
                  </p>
                )}
              </div>
            </div>

            {totalHours > 0 && (
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-4 bg-muted/30 rounded-lg">
                  <p className="text-2xl font-bold text-primary">${monthlySavings.toLocaleString()}</p>
                  <p className="text-sm text-muted-foreground">Monthly Value</p>
                </div>
                <div className="text-center p-4 bg-muted/30 rounded-lg">
                  <p className="text-2xl font-bold text-primary">${yearlySavings.toLocaleString()}</p>
                  <p className="text-sm text-muted-foreground">Yearly Value</p>
                </div>
              </div>
            )}

            {totalHours > 0 && (
              <div className="p-4 bg-primary/5 rounded-lg border border-primary/20">
                <p className="text-sm text-center">
                  <strong>Imagine having {totalHours} extra hours every month</strong> to focus on growing your business, 
                  spending time with family, or finally tackling those big projects you've been putting off.
                </p>
              </div>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default TimeCalculator;