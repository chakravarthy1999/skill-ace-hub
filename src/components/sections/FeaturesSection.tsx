import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Brain, 
  Video, 
  MessageSquare, 
  BarChart3, 
  Clock, 
  Target,
  Code,
  Users
} from "lucide-react";

const features = [
  {
    icon: Brain,
    title: "AI-Powered Feedback",
    description: "Get instant, personalized feedback on your coding solutions and interview performance from advanced AI.",
    badge: "Smart"
  },
  {
    icon: Video,
    title: "Real-time Video Interviews",
    description: "Practice with realistic video interviews that simulate actual company interview environments.",
    badge: "Live"
  },
  {
    icon: Code,
    title: "500+ Coding Problems",
    description: "Access a vast library of problems from easy to hard, covering all major algorithmic concepts.",
    badge: "Comprehensive"
  },
  {
    icon: BarChart3,
    title: "Performance Analytics",
    description: "Track your progress with detailed analytics and identify areas for improvement.",
    badge: "Insights"
  },
  {
    icon: MessageSquare,
    title: "Behavioral Questions",
    description: "Practice behavioral interviews with AI that adapts to your responses and background.",
    badge: "Adaptive"
  },
  {
    icon: Target,
    title: "Company-Specific Prep",
    description: "Prepare for specific companies with tailored questions and interview formats.",
    badge: "Targeted"
  },
  {
    icon: Clock,
    title: "Flexible Scheduling",
    description: "Practice anytime, anywhere with 24/7 access to AI interviewers and coding challenges.",
    badge: "24/7"
  },
  {
    icon: Users,
    title: "Peer Community",
    description: "Connect with other candidates, share experiences, and learn from the community.",
    badge: "Social"
  }
];

const FeaturesSection = () => {
  return (
    <section id="features" className="py-24 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">
            Features
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Everything You Need to{" "}
            <span className="bg-gradient-accent bg-clip-text text-transparent">Succeed</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our comprehensive platform provides all the tools and resources you need 
            to excel in technical interviews and land your dream job.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card 
                key={index} 
                className="bg-gradient-card border-border/50 hover:border-primary/30 transition-all duration-300 group hover:glow-accent"
              >
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between mb-3">
                    <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center group-hover:bg-primary/30 transition-colors">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <Badge variant="outline" className="text-xs">
                      {feature.badge}
                    </Badge>
                  </div>
                  <CardTitle className="text-lg">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;