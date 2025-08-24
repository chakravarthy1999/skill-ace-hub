import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import LoginDialog from "@/components/auth/LoginDialog";
import { useState } from "react";
import heroImage from "@/assets/hero-coding.jpg";

const HeroSection = () => {
  const [loginOpen, setLoginOpen] = useState(false);

  const handleGoogleLogin = () => {
    // Connect this to your backend authentication
    console.log('Google login clicked');
    setLoginOpen(false);
  };
  return (
    <section className="min-h-screen flex items-center justify-center pt-16 relative overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      
      {/* Hero Content */}
      <div className="container mx-auto px-4 text-center relative z-10">
        <Badge variant="secondary" className="mb-6 animate-pulse-glow">
          <span className="mr-2">✨</span>
          AI-Powered Interview Practice
        </Badge>
        
        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
          Ace Your <span className="bg-gradient-accent bg-clip-text text-transparent">Coding</span>
          <br />
          Interviews with{" "}
          <span className="bg-gradient-accent bg-clip-text text-transparent">SkillAce</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
          Practice real coding interviews with AI-powered feedback. 
          Get personalized insights and improve your skills for top tech companies.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
          <Button 
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-8 py-6 glow-primary animate-pulse-glow"
            onClick={() => setLoginOpen(true)}
          >
            Start Practice Interview
          </Button>
          <Button 
            variant="outline" 
            size="lg"
            className="text-lg px-8 py-6 border-border hover:bg-secondary/50"
          >
            Watch Demo
          </Button>
        </div>
        
        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-2xl mx-auto">
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">10K+</div>
            <div className="text-muted-foreground">Interviews Completed</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">500+</div>
            <div className="text-muted-foreground">Companies</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">95%</div>
            <div className="text-muted-foreground">Success Rate</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">24/7</div>
            <div className="text-muted-foreground">AI Support</div>
          </div>
        </div>
      </div>
      
      <LoginDialog 
        open={loginOpen} 
        onOpenChange={setLoginOpen}
        onGoogleLogin={handleGoogleLogin}
      />
    </section>
  );
};

export default HeroSection;