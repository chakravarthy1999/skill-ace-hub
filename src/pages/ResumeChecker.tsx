import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { CheckCircle, FileText, Target, TrendingUp, Zap } from "lucide-react";
import { useNavigate } from "react-router-dom";

const ResumeChecker = () => {
  const navigate = useNavigate();

  const handleScanResume = () => {
    navigate("/resume-upload");
  };

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/5 via-background to-accent/5 py-20">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <Badge variant="secondary" className="w-fit">
                <Zap className="w-4 h-4 mr-2" />
                AI-Powered Resume Analysis
              </Badge>
              
              <div className="space-y-4">
                <h1 className="text-4xl lg:text-5xl font-bold text-foreground">
                  AI Resume Checker: 
                  <span className="text-primary block">ATS Score Analysis</span>
                </h1>
                <p className="text-lg text-muted-foreground max-w-lg">
                  Optimize your resume to secure more interviews. Stand out in today's competitive job market with our AI-powered ATS resume checker.
                </p>
              </div>

              <div className="space-y-4">
                <Button 
                  onClick={handleScanResume}
                  size="lg"
                  className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 text-lg"
                >
                  <FileText className="w-5 h-5 mr-2" />
                  Scan My Resume Now
                </Button>
                <p className="text-sm text-muted-foreground">
                  Optimize and download your resume — 100% free!
                </p>
              </div>

              {/* Trust Indicators */}
              <div className="flex items-center space-x-4 pt-4">
                <div className="flex -space-x-1">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <div key={i} className="w-8 h-8 rounded-full bg-primary/20 border-2 border-background flex items-center justify-center">
                      <span className="text-xs text-primary">★</span>
                    </div>
                  ))}
                </div>
                <div className="text-sm text-muted-foreground">
                  <strong>4.8/5</strong> from 2,500+ users
                </div>
              </div>
            </div>

            {/* Resume Preview */}
            <div className="relative">
              <Card className="transform rotate-3 shadow-2xl">
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <Badge variant="outline" className="text-primary border-primary">
                        ATS Score
                      </Badge>
                      <div className="text-3xl font-bold text-primary">92%</div>
                    </div>
                    
                    <div className="space-y-3">
                      <div className="flex justify-between text-sm">
                        <span>Content</span>
                        <span className="text-primary">Excellent</span>
                      </div>
                      <div className="w-full bg-accent/20 rounded-full h-2">
                        <div className="bg-primary h-2 rounded-full w-[92%]"></div>
                      </div>
                      
                      <div className="flex justify-between text-sm">
                        <span>Format</span>
                        <span className="text-amber-500">Good</span>
                      </div>
                      <div className="w-full bg-accent/20 rounded-full h-2">
                        <div className="bg-amber-500 h-2 rounded-full w-[78%]"></div>
                      </div>

                      <div className="flex justify-between text-sm">
                        <span>Keywords</span>
                        <span className="text-primary">Excellent</span>
                      </div>
                      <div className="w-full bg-accent/20 rounded-full h-2">
                        <div className="bg-primary h-2 rounded-full w-[95%]"></div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Why Your Resume Might Be Overlooked</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Even highly qualified candidates often miss out on interviews—not because they're unfit, 
              but because their resumes aren't optimized for Applicant Tracking Systems (ATS).
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="text-center p-8 border-primary/20">
              <CardContent className="space-y-4">
                <div className="text-6xl font-bold text-primary">42%</div>
                <p className="text-muted-foreground">
                  Fortune 500 companies use ATS to filter applications before recruiters see them.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-8 border-primary/20">
              <CardContent className="space-y-4">
                <div className="text-6xl font-bold text-primary">29%</div>
                <p className="text-muted-foreground">
                  applications are filtered out by ATS systems due to misalignment with specific keywords and formats.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Button onClick={handleScanResume} size="lg" className="bg-primary hover:bg-primary/90">
              Scan My Resume Now
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">How Our AI Resume Checker Works</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our advanced AI analyzes your resume against industry standards and ATS requirements
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent className="space-y-4">
                <div className="w-16 h-16 mx-auto bg-primary/10 rounded-full flex items-center justify-center">
                  <Target className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">ATS Optimization</h3>
                <p className="text-muted-foreground">
                  Analyze your resume's compatibility with Applicant Tracking Systems used by top companies.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent className="space-y-4">
                <div className="w-16 h-16 mx-auto bg-primary/10 rounded-full flex items-center justify-center">
                  <TrendingUp className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">Score & Feedback</h3>
                <p className="text-muted-foreground">
                  Get a detailed ATS score with actionable insights to improve your resume's performance.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent className="space-y-4">
                <div className="w-16 h-16 mx-auto bg-primary/10 rounded-full flex items-center justify-center">
                  <CheckCircle className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">Instant Results</h3>
                <p className="text-muted-foreground">
                  Receive immediate analysis and recommendations to optimize your resume in minutes.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-primary/10 to-accent/10">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-2xl mx-auto space-y-6">
            <h2 className="text-3xl font-bold">Ready to Optimize Your Resume?</h2>
            <p className="text-muted-foreground text-lg">
              Join thousands of job seekers who have improved their interview chances with our AI-powered resume checker.
            </p>
            <Button 
              onClick={handleScanResume}
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4"
            >
              <FileText className="w-5 h-5 mr-2" />
              Start Free Resume Analysis
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ResumeChecker;