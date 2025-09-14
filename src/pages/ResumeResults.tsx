import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { 
  FileText, 
  TrendingUp, 
  AlertCircle, 
  CheckCircle, 
  Download,
  RotateCcw,
  Star,
  Target,
  Zap
} from "lucide-react";

const ResumeResults = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("overview");

  // Mock data - in real app this would come from API
  const results = {
    overallScore: 92,
    categories: {
      content: { score: 95, status: "excellent", color: "text-primary" },
      format: { score: 78, status: "good", color: "text-amber-500" },
      keywords: { score: 96, status: "excellent", color: "text-primary" },
      sections: { score: 85, status: "good", color: "text-amber-500" },
      style: { score: 88, status: "good", color: "text-amber-500" }
    },
    improvements: [
      {
        type: "high",
        title: "Add measurable results",
        description: "Include specific metrics to demonstrate the impact of your work",
        icon: TrendingUp
      },
      {
        type: "medium", 
        title: "Improve format consistency",
        description: "Ensure consistent formatting throughout your resume",
        icon: Target
      },
      {
        type: "low",
        title: "Add technical skills",
        description: "Include more relevant technical skills mentioned in the job description",
        icon: Zap
      }
    ],
    highlights: [
      "Demonstrates proficiency in backend technologies such as Node.js, AWS, and SQL",
      "Extensive experience working with AWS and building scalable microservices", 
      "Shows leadership skills and cross-functional collaboration experience"
    ]
  };

  const handleNewScan = () => {
    navigate("/resume-upload");
  };

  const handleDownload = () => {
    // Mock download functionality
    console.log("Downloading optimized resume...");
  };

  return (
    <div className="min-h-screen">
      <Header />
      
      <section className="py-12 bg-gradient-to-br from-primary/5 via-background to-accent/5">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            
            {/* Header */}
            <div className="text-center mb-8">
              <Badge variant="secondary" className="mb-4">
                <CheckCircle className="w-4 h-4 mr-2" />
                Analysis Complete
              </Badge>
              <h1 className="text-3xl font-bold mb-2">Your Resume Analysis Results</h1>
              <p className="text-muted-foreground">
                Backend Engineer / Google Position
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              
              {/* Main Results */}
              <div className="lg:col-span-2 space-y-6">
                
                {/* Overall Score Card */}
                <Card className="border-primary/20">
                  <CardHeader className="text-center">
                    <div className="w-32 h-32 mx-auto relative">
                      <div className="w-full h-full rounded-full border-8 border-primary/20 flex items-center justify-center">
                        <div className="text-center">
                          <div className="text-4xl font-bold text-primary">{results.overallScore}</div>
                          <div className="text-sm text-muted-foreground">Match Score</div>
                        </div>
                      </div>
                      <div className="absolute top-0 left-0 w-full h-full rounded-full border-8 border-primary border-r-transparent transform rotate-[270deg]" 
                           style={{ clipPath: `polygon(0 0, ${results.overallScore}% 0, ${results.overallScore}% 100%, 0 100%)` }}>
                      </div>
                    </div>
                    <CardTitle className="text-2xl text-primary">Excellent Match!</CardTitle>
                    <p className="text-muted-foreground">
                      Your resume is well-optimized for this position
                    </p>
                  </CardHeader>
                </Card>

                {/* Detailed Analysis */}
                <Card>
                  <CardHeader>
                    <CardTitle>Detailed Analysis</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <Tabs value={activeTab} onValueChange={setActiveTab}>
                      <TabsList className="grid w-full grid-cols-3">
                        <TabsTrigger value="overview">Overview</TabsTrigger>
                        <TabsTrigger value="content">Content</TabsTrigger>
                        <TabsTrigger value="improvements">Improvements</TabsTrigger>
                      </TabsList>
                      
                      <TabsContent value="overview" className="mt-6 space-y-6">
                        {Object.entries(results.categories).map(([category, data]) => (
                          <div key={category} className="space-y-2">
                            <div className="flex justify-between items-center">
                              <span className="capitalize font-medium">{category}</span>
                              <span className={`text-sm font-medium ${data.color}`}>
                                {data.status}
                              </span>
                            </div>
                            <Progress value={data.score} className="h-2" />
                            <div className="text-right text-sm text-muted-foreground">
                              {data.score}%
                            </div>
                          </div>
                        ))}
                      </TabsContent>
                      
                      <TabsContent value="content" className="mt-6">
                        <div className="space-y-4">
                          <div>
                            <h4 className="font-medium mb-2 text-primary">Highlights</h4>
                            <ul className="space-y-2">
                              {results.highlights.map((highlight, index) => (
                                <li key={index} className="flex items-start space-x-2">
                                  <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                                  <span className="text-sm">{highlight}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </TabsContent>
                      
                      <TabsContent value="improvements" className="mt-6">
                        <div className="space-y-4">
                          {results.improvements.map((improvement, index) => {
                            const Icon = improvement.icon;
                            return (
                              <Card key={index} className="p-4">
                                <div className="flex items-start space-x-3">
                                  <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                                    improvement.type === 'high' ? 'bg-red-100 text-red-600' :
                                    improvement.type === 'medium' ? 'bg-amber-100 text-amber-600' :
                                    'bg-blue-100 text-blue-600'
                                  }`}>
                                    <Icon className="w-4 h-4" />
                                  </div>
                                  <div className="flex-1">
                                    <h5 className="font-medium">{improvement.title}</h5>
                                    <p className="text-sm text-muted-foreground mt-1">
                                      {improvement.description}
                                    </p>
                                  </div>
                                  <Badge variant={
                                    improvement.type === 'high' ? 'destructive' :
                                    improvement.type === 'medium' ? 'secondary' : 'outline'
                                  }>
                                    {improvement.type} priority
                                  </Badge>
                                </div>
                              </Card>
                            );
                          })}
                        </div>
                      </TabsContent>
                    </Tabs>
                  </CardContent>
                </Card>
              </div>

              {/* Sidebar */}
              <div className="space-y-6">
                
                {/* Action Buttons */}
                <Card>
                  <CardContent className="p-6 space-y-4">
                    <Button 
                      onClick={handleDownload}
                      className="w-full bg-primary hover:bg-primary/90"
                    >
                      <Download className="w-4 h-4 mr-2" />
                      Download Optimized Resume
                    </Button>
                    <Button 
                      onClick={handleNewScan}
                      variant="outline" 
                      className="w-full"
                    >
                      <RotateCcw className="w-4 h-4 mr-2" />
                      Scan Another Resume
                    </Button>
                  </CardContent>
                </Card>

                {/* Tips Card */}
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg flex items-center">
                      <Star className="w-5 h-5 mr-2 text-primary" />
                      Pro Tips
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="text-sm space-y-2">
                      <p className="font-medium">Quick Wins:</p>
                      <ul className="space-y-1 text-muted-foreground">
                        <li>• Quantify your achievements</li>
                        <li>• Use action verbs</li>
                        <li>• Match job keywords</li>
                        <li>• Keep format consistent</li>
                      </ul>
                    </div>
                  </CardContent>
                </Card>

                {/* Stats Card */}
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Your Progress</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Resumes Scanned</span>
                      <Badge variant="secondary">1</Badge>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Avg. Score</span>
                      <Badge variant="secondary">{results.overallScore}%</Badge>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Best Score</span>
                      <Badge variant="secondary">{results.overallScore}%</Badge>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ResumeResults;