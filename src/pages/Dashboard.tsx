import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { ChartContainer, ChartConfig } from "@/components/ui/chart";
import { RadialBarChart, RadialBar, ResponsiveContainer, LineChart, Line, XAxis, YAxis, CartesianGrid } from "recharts";
import { 
  TrendingUp, 
  Award, 
  Target, 
  Brain, 
  Users, 
  Lightbulb, 
  MessageCircle, 
  Calendar,
  Clock,
  BookOpen,
  Star,
  Play,
  BarChart3,
  Settings,
  User
} from "lucide-react";

const Dashboard = () => {
  // User data
  const userData = {
    name: "John Doe",
    credits: 7,
    totalInterviews: 12,
    avgScore: 84,
    streak: 5
  };

  // Analytics data
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

  const radialData = performanceData.slice(0, 4).map(item => ({
    ...item,
    fill: `hsl(var(--primary))`,
  }));

  const progressData = [
    { session: "1", score: 70 },
    { session: "2", score: 75 },
    { session: "3", score: 80 },
    { session: "4", score: 85 },
    { session: "5", score: 84 },
  ];

  // Recent interviews
  const recentInterviews = [
    { id: 1, role: "Frontend Developer", company: "Tech Corp", score: 88, date: "2024-01-15" },
    { id: 2, role: "Product Manager", company: "StartupXYZ", score: 82, date: "2024-01-12" },
    { id: 3, role: "Data Scientist", company: "AI Solutions", score: 91, date: "2024-01-10" },
  ];

  // Learning modules
  const learningModules = [
    { 
      title: "Behavioral Interview Mastery", 
      description: "Master the STAR method and common behavioral questions",
      progress: 75,
      icon: Users,
      difficulty: "Intermediate"
    },
    { 
      title: "Technical Problem Solving", 
      description: "Practice coding challenges and technical questions",
      progress: 45,
      icon: Brain,
      difficulty: "Advanced"
    },
    { 
      title: "Communication Skills", 
      description: "Improve clarity, confidence, and presentation skills",
      progress: 90,
      icon: MessageCircle,
      difficulty: "Beginner"
    },
    { 
      title: "Industry Knowledge", 
      description: "Stay updated with latest trends and best practices",
      progress: 20,
      icon: BookOpen,
      difficulty: "Intermediate"
    },
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20 pb-16">
        <div className="container mx-auto px-4 max-w-7xl">
          {/* Welcome Section */}
          <div className="mb-8">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-3xl md:text-4xl font-bold mb-2">
                  Welcome back, {userData.name}! 👋
                </h1>
                <p className="text-muted-foreground">
                  Ready to ace your next interview? Let's continue your preparation.
                </p>
              </div>
              <div className="flex items-center space-x-4">
                <Badge variant="secondary" className="text-sm">
                  {userData.credits} Credits
                </Badge>
                <Button>
                  <Play className="h-4 w-4 mr-2" />
                  Start Interview
                </Button>
              </div>
            </div>
          </div>

          {/* Stats Overview */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <Card className="card-gradient border-border/50">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">Total Interviews</p>
                    <p className="text-2xl font-bold text-primary">{userData.totalInterviews}</p>
                  </div>
                  <BarChart3 className="h-8 w-8 text-primary" />
                </div>
              </CardContent>
            </Card>

            <Card className="card-gradient border-border/50">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">Average Score</p>
                    <p className="text-2xl font-bold text-primary">{userData.avgScore}%</p>
                  </div>
                  <Target className="h-8 w-8 text-primary" />
                </div>
              </CardContent>
            </Card>

            <Card className="card-gradient border-border/50">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">Current Streak</p>
                    <p className="text-2xl font-bold text-primary">{userData.streak} days</p>
                  </div>
                  <Star className="h-8 w-8 text-primary" />
                </div>
              </CardContent>
            </Card>

            <Card className="card-gradient border-border/50">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">Credits Left</p>
                    <p className="text-2xl font-bold text-primary">{userData.credits}</p>
                  </div>
                  <Award className="h-8 w-8 text-primary" />
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-8">
            {/* Performance Overview */}
            <Card className="lg:col-span-2 card-gradient border-border/50">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <BarChart3 className="h-5 w-5 mr-2" />
                  Performance Analytics
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  {/* Progress Chart */}
                  <div>
                    <h4 className="font-semibold mb-4">Progress Over Time</h4>
                    <ChartContainer config={chartConfig} className="h-[200px]">
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
                            dataKey="score" 
                            stroke="hsl(var(--primary))" 
                            strokeWidth={3}
                            dot={{ fill: 'hsl(var(--primary))', strokeWidth: 2, r: 4 }}
                          />
                        </LineChart>
                      </ResponsiveContainer>
                    </ChartContainer>
                  </div>

                  {/* Radial Chart */}
                  <div>
                    <h4 className="font-semibold mb-4">Key Skills</h4>
                    <ChartContainer config={chartConfig} className="h-[200px]">
                      <ResponsiveContainer width="100%" height="100%">
                        <RadialBarChart data={radialData} innerRadius="30%" outerRadius="90%">
                          <RadialBar
                            dataKey="score"
                            cornerRadius={4}
                            fill="hsl(var(--primary))"
                            className="fill-primary"
                          />
                        </RadialBarChart>
                      </ResponsiveContainer>
                    </ChartContainer>
                  </div>
                </div>

                {/* Skills Grid */}
                <div className="mt-6">
                  <h4 className="font-semibold mb-4">Detailed Breakdown</h4>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {performanceData.slice(0, 4).map((skill) => {
                      const Icon = skill.icon;
                      return (
                        <div key={skill.name} className="text-center">
                          <Icon className="h-6 w-6 mx-auto mb-2 text-primary" />
                          <p className="text-sm font-medium">{skill.name}</p>
                          <p className="text-lg font-bold text-primary">{skill.score}%</p>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Recent Interviews */}
            <Card className="card-gradient border-border/50">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Clock className="h-5 w-5 mr-2" />
                  Recent Interviews
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {recentInterviews.map((interview) => (
                  <div key={interview.id} className="p-4 rounded-lg bg-secondary/50 border border-border/50">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <h4 className="font-semibold text-sm">{interview.role}</h4>
                        <p className="text-xs text-muted-foreground">{interview.company}</p>
                      </div>
                      <Badge variant={interview.score >= 85 ? "default" : "secondary"}>
                        {interview.score}%
                      </Badge>
                    </div>
                    <p className="text-xs text-muted-foreground">{interview.date}</p>
                  </div>
                ))}
                <Button variant="outline" size="sm" className="w-full">
                  View All Interviews
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Learning Modules */}
          <Card className="card-gradient border-border/50">
            <CardHeader>
              <CardTitle className="flex items-center">
                <BookOpen className="h-5 w-5 mr-2" />
                Learning Modules
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                {learningModules.map((module, index) => {
                  const Icon = module.icon;
                  return (
                    <div key={index} className="p-6 rounded-lg border border-border/50 bg-secondary/30">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex items-center space-x-3">
                          <Icon className="h-8 w-8 text-primary" />
                          <div>
                            <h3 className="font-semibold">{module.title}</h3>
                            <Badge variant="outline" className="text-xs mt-1">
                              {module.difficulty}
                            </Badge>
                          </div>
                        </div>
                        <Button size="sm" variant="outline">
                          Continue
                        </Button>
                      </div>
                      <p className="text-sm text-muted-foreground mb-4">
                        {module.description}
                      </p>
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span>Progress</span>
                          <span className="text-primary font-medium">{module.progress}%</span>
                        </div>
                        <Progress value={module.progress} className="h-2" />
                      </div>
                    </div>
                  );
                })}
              </div>
            </CardContent>
          </Card>

          {/* Quick Actions */}
          <div className="mt-8 flex justify-center space-x-4">
            <Button size="lg" className="bg-primary hover:bg-primary/90">
              <Play className="h-5 w-5 mr-2" />
              Start New Interview
            </Button>
            <Button size="lg" variant="outline">
              <Settings className="h-5 w-5 mr-2" />
              Settings
            </Button>
            <Button size="lg" variant="outline">
              <User className="h-5 w-5 mr-2" />
              Profile
            </Button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Dashboard;