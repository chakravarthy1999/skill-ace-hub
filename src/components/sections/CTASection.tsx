import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Sparkles } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-4">
        <Card className="bg-gradient-card border-primary/30 relative overflow-hidden glow-primary">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0 bg-gradient-accent"></div>
          </div>
          
          <CardContent className="p-12 text-center relative z-10">
            <Badge variant="secondary" className="mb-6 animate-pulse-glow">
              <Sparkles className="w-4 h-4 mr-2" />
              Start Your Journey Today
            </Badge>
            
            <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Ready to{" "}
              <span className="bg-gradient-accent bg-clip-text text-transparent">
                Transform
              </span>
              <br />
              Your Interview Skills?
            </h2>
            
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
              Join thousands of developers who have successfully landed their dream jobs 
              with SkillAce's AI-powered interview preparation platform.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
              <Button 
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-8 py-6 glow-primary group"
              >
                Start Free Trial
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="text-lg px-8 py-6 border-border hover:bg-secondary/50"
              >
                Schedule Demo
              </Button>
            </div>
            
            <div className="flex items-center justify-center space-x-8 text-sm text-muted-foreground">
              <div className="flex items-center">
                <span className="w-2 h-2 bg-green-400 rounded-full mr-2"></span>
                No credit card required
              </div>
              <div className="flex items-center">
                <span className="w-2 h-2 bg-green-400 rounded-full mr-2"></span>
                14-day free trial
              </div>
              <div className="flex items-center">
                <span className="w-2 h-2 bg-green-400 rounded-full mr-2"></span>
                Cancel anytime
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default CTASection;