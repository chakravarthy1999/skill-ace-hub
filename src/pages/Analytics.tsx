import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ChartContainer, ChartConfig } from "@/components/ui/chart";
import { RadialBarChart, RadialBar, ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, LineChart, Line, PieChart, Pie, Cell } from "recharts";
import { TrendingUp, Award, Target, Brain, Users, Lightbulb, MessageCircle } from "lucide-react";

const Analytics = () => {
  // Sample data for the analytics
  const performanceData = [
    { name: "Communication", score: 85, icon: MessageCircle },
    { name: "Technical Knowledge", score: 78, icon: Brain },
    { name: "Problem-Solving", score: 92, icon: Lightbulb },
    { name: "Behavioral Fit", score: 88, icon: Users },
    { name: "Industry Knowledge", score: 75, icon: Award },
    { name: "Motivation and Cultural Fit", score: 90, icon: Target },
    { name: "Responsiveness", score: 82, icon: TrendingUp },
  ];

  const chartConfig: ChartConfig = {
    score: {
      label: "Score",
      color: "hsl(var(--primary))",
    },
  };

  const radialData = performanceData.map(item => ({
    ...item,
    fill: `hsl(var(--primary))`,
  }));

  const progressData = [
    { session: "Session 1", communication: 70, technical: 65, problemSolving: 75 },
    { session: "Session 2", communication: 75, technical: 70, problemSolving: 80 },
    { session: "Session 3", communication: 80, technical: 75, problemSolving: 85 },
    { session: "Session 4", communication: 85, technical: 78, problemSolving: 92 },
  ];

  const pieData = performanceData.map((item, index) => ({
    name: item.name,
    value: item.score,
    fill: `hsl(${262 + index * 15}, 83%, ${58 + index * 2}%)`,
  }));

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20 pb-16">
        <div className="container mx-auto px-4 max-w-7xl">
          {/* Hero Section */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Performance Analytics
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Track your progress and identify areas for improvement with detailed performance insights
            </p>
          </div>

          {/* Overall Score */}
          <Card className="mb-8 card-gradient border-primary/50">
            <CardContent className="p-8 text-center">
              <div className="flex items-center justify-center mb-4">
                <div className="w-32 h-32 rounded-full border-8 border-primary/20 flex items-center justify-center relative">
                  <div className="w-24 h-24 rounded-full border-4 border-primary flex items-center justify-center">
                    <span className="text-3xl font-bold text-primary">84%</span>
                  </div>
                </div>
              </div>
              <h2 className="text-2xl font-bold mb-2">Overall Interview Score</h2>
              <p className="text-muted-foreground">Based on your last 4 interview sessions</p>
            </CardContent>
          </Card>

          {/* Performance Metrics Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {performanceData.map((metric, index) => {
              const Icon = metric.icon;
              return (
                <Card key={metric.name} className="card-gradient border-border/50">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <Icon className="h-8 w-8 text-primary" />
                      <span className="text-2xl font-bold text-primary">{metric.score}%</span>
                    </div>
                    <h3 className="font-semibold text-sm text-foreground">{metric.name}</h3>
                    <div className="mt-3 w-full bg-secondary rounded-full h-2">
                      <div 
                        className="bg-primary h-2 rounded-full transition-all duration-500"
                        style={{ width: `${metric.score}%` }}
                      />
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            {/* Radial Chart */}
            <Card className="card-gradient border-border/50">
              <CardHeader>
                <CardTitle>Performance Overview</CardTitle>
              </CardHeader>
              <CardContent>
                <ChartContainer config={chartConfig} className="h-[400px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <RadialBarChart data={radialData} innerRadius="20%" outerRadius="90%">
                      <RadialBar
                        dataKey="score"
                        cornerRadius={4}
                        fill="hsl(var(--primary))"
                        className="fill-primary"
                      />
                    </RadialBarChart>
                  </ResponsiveContainer>
                </ChartContainer>
              </CardContent>
            </Card>

            {/* Bar Chart */}
            <Card className="card-gradient border-border/50">
              <CardHeader>
                <CardTitle>Skills Breakdown</CardTitle>
              </CardHeader>
              <CardContent>
                <ChartContainer config={chartConfig} className="h-[400px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={performanceData}>
                      <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                      <XAxis 
                        dataKey="name" 
                        tick={{ fill: 'hsl(var(--muted-foreground))', fontSize: 12 }}
                        angle={-45}
                        textAnchor="end"
                        height={100}
                      />
                      <YAxis tick={{ fill: 'hsl(var(--muted-foreground))' }} />
                      <Bar dataKey="score" fill="hsl(var(--primary))" radius={[4, 4, 0, 0]} />
                    </BarChart>
                  </ResponsiveContainer>
                </ChartContainer>
              </CardContent>
            </Card>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Progress Line Chart */}
            <Card className="card-gradient border-border/50">
              <CardHeader>
                <CardTitle>Progress Over Time</CardTitle>
              </CardHeader>
              <CardContent>
                <ChartContainer config={chartConfig} className="h-[300px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={progressData}>
                      <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                      <XAxis 
                        dataKey="session" 
                        tick={{ fill: 'hsl(var(--muted-foreground))' }}
                      />
                      <YAxis tick={{ fill: 'hsl(var(--muted-foreground))' }} />
                      <Line 
                        type="monotone" 
                        dataKey="communication" 
                        stroke="hsl(var(--primary))" 
                        strokeWidth={3}
                        dot={{ fill: 'hsl(var(--primary))', strokeWidth: 2, r: 4 }}
                      />
                      <Line 
                        type="monotone" 
                        dataKey="technical" 
                        stroke="hsl(var(--accent))" 
                        strokeWidth={3}
                        dot={{ fill: 'hsl(var(--accent))', strokeWidth: 2, r: 4 }}
                      />
                      <Line 
                        type="monotone" 
                        dataKey="problemSolving" 
                        stroke="hsl(var(--secondary-foreground))" 
                        strokeWidth={3}
                        dot={{ fill: 'hsl(var(--secondary-foreground))', strokeWidth: 2, r: 4 }}
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </ChartContainer>
              </CardContent>
            </Card>

            {/* Pie Chart */}
            <Card className="card-gradient border-border/50">
              <CardHeader>
                <CardTitle>Skills Distribution</CardTitle>
              </CardHeader>
              <CardContent>
                <ChartContainer config={chartConfig} className="h-[300px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={pieData}
                        cx="50%"
                        cy="50%"
                        outerRadius={100}
                        fill="hsl(var(--primary))"
                        dataKey="value"
                        label={({ name, value }) => `${name}: ${value}%`}
                        labelLine={false}
                      >
                        {pieData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.fill} />
                        ))}
                      </Pie>
                    </PieChart>
                  </ResponsiveContainer>
                </ChartContainer>
              </CardContent>
            </Card>
          </div>

          {/* Insights Section */}
          <Card className="mt-12 card-gradient border-border/50">
            <CardHeader>
              <CardTitle>Key Insights & Recommendations</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-start space-x-3">
                <TrendingUp className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold">Strong Performance in Problem-Solving</h4>
                  <p className="text-muted-foreground text-sm">Your problem-solving skills are excellent (92%). Keep practicing complex scenarios to maintain this strength.</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Target className="h-5 w-5 text-accent mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold">Improvement Opportunity: Industry Knowledge</h4>
                  <p className="text-muted-foreground text-sm">Consider studying recent industry trends and developments to boost your score from 75% to 85%+.</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Award className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold">Consistent Growth</h4>
                  <p className="text-muted-foreground text-sm">You've shown steady improvement across all sessions. Your communication skills have improved by 15% since your first session.</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Analytics;