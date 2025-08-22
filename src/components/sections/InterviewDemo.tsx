import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Play, Mic, MicOff, Camera, CameraOff } from "lucide-react";

const InterviewDemo = () => {
  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">
            Live Demo
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Experience Real Interview Environment
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Practice with our AI interviewer in a realistic setting that simulates actual technical interviews
          </p>
        </div>
        
        <div className="max-w-6xl mx-auto">
          <Card className="bg-gradient-card border-border/50 overflow-hidden glow-accent">
            <CardHeader className="bg-secondary/30 border-b border-border">
              <div className="flex items-center justify-between">
                <CardTitle className="text-lg font-semibold">Mock Interview Session</CardTitle>
                <Badge variant="outline" className="text-green-400 border-green-400">
                  ● Live
                </Badge>
              </div>
            </CardHeader>
            
            <CardContent className="p-6">
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                {/* User Video */}
                <div className="relative">
                  <div className="aspect-video bg-secondary/50 rounded-lg flex items-center justify-center border border-border">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-3">
                        <span className="text-2xl">👤</span>
                      </div>
                      <p className="text-muted-foreground">You</p>
                    </div>
                  </div>
                  <div className="absolute bottom-3 left-3 flex space-x-2">
                    <Button size="sm" variant="secondary" className="w-8 h-8 p-0">
                      <Mic className="w-4 h-4" />
                    </Button>
                    <Button size="sm" variant="secondary" className="w-8 h-8 p-0">
                      <Camera className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
                
                {/* AI Interviewer */}
                <div className="relative">
                  <div className="aspect-video bg-gradient-accent/20 rounded-lg flex items-center justify-center border border-primary/30 animate-pulse-glow">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-primary/30 rounded-full flex items-center justify-center mx-auto mb-3 animate-float">
                        <span className="text-2xl">🤖</span>
                      </div>
                      <p className="text-primary font-semibold">AI Interviewer</p>
                      <Badge variant="outline" className="mt-2 text-xs">Speaking...</Badge>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Code Editor */}
              <div className="mb-6">
                <div className="bg-secondary/30 rounded-lg p-4 border border-border">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="font-semibold">Coding Problem</h3>
                    <Badge variant="outline">Two Sum</Badge>
                  </div>
                  <div className="bg-background/50 rounded p-4 font-mono text-sm">
                    <div className="text-muted-foreground mb-2">// Given an array of integers nums and an integer target,</div>
                    <div className="text-muted-foreground mb-2">// return indices of the two numbers such that they add up to target.</div>
                    <div className="text-primary mb-2">function twoSum(nums, target) &#123;</div>
                    <div className="text-muted-foreground ml-4 mb-2">// Your solution here...</div>
                    <div className="text-primary">&#125;</div>
                  </div>
                </div>
              </div>
              
              {/* Controls */}
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <Button size="sm" className="bg-red-600 hover:bg-red-700">
                    End Interview
                  </Button>
                  <Button size="sm" variant="outline">
                    Need Help?
                  </Button>
                </div>
                
                <div className="flex items-center space-x-3 text-sm text-muted-foreground">
                  <span>⏱️ 25:30</span>
                  <span>📝 2/5 Problems</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default InterviewDemo;