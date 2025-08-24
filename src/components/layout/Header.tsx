import { Button } from "@/components/ui/button";
import LoginDialog from "@/components/auth/LoginDialog";
import { useState } from "react";

const Header = () => {
  const [loginOpen, setLoginOpen] = useState(false);

  const handleGoogleLogin = () => {
    // Connect this to your backend authentication
    console.log('Google login clicked');
    setLoginOpen(false);
  };
  return (
    <header className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <img 
            src="/logo.png" 
            alt="AI-Interview Guide Logo" 
            className="w-8 h-8 object-contain"
          />
          <span className="text-xl font-bold text-foreground">AI-Interview Guide</span>
        </div>
        
        <nav className="hidden md:flex items-center space-x-8">
          <a href="/" className="text-muted-foreground hover:text-foreground transition-colors">
            Home
          </a>
          <a href="#features" className="text-muted-foreground hover:text-foreground transition-colors">
            Features
          </a>
          <a href="/ai-interview" className="text-muted-foreground hover:text-foreground transition-colors">
            AI Interview
          </a>
          <a href="#pricing" className="text-muted-foreground hover:text-foreground transition-colors">
            Pricing
          </a>
          <a href="#about" className="text-muted-foreground hover:text-foreground transition-colors">
            About
          </a>
        </nav>
        
        <div className="flex items-center space-x-4">
          <Button 
            variant="ghost" 
            className="text-muted-foreground hover:text-foreground"
            onClick={() => setLoginOpen(true)}
          >
            Login
          </Button>
          <Button 
            className="bg-primary hover:bg-primary/90 text-primary-foreground glow-primary"
            onClick={() => setLoginOpen(true)}
          >
            Get Started
          </Button>
        </div>
      </div>
      
      <LoginDialog 
        open={loginOpen} 
        onOpenChange={setLoginOpen}
        onGoogleLogin={handleGoogleLogin}
      />
    </header>
  );
};

export default Header;