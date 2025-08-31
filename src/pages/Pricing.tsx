import { useState } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check, Star, Users, Zap } from "lucide-react";
import { PaymentDialog } from "@/components/payment/PaymentDialog";

const Pricing = () => {
  const [isPaymentOpen, setIsPaymentOpen] = useState(false);

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20 pb-16">
        <div className="container mx-auto px-4 max-w-6xl">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Choose Your Plan
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Start practicing for free or unlock unlimited interviews with our premium plans
            </p>
          </div>

          {/* Pricing Cards */}
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            
            {/* Free Plan */}
            <Card className="card-gradient border-border/50 relative">
              <CardHeader className="text-center pb-6">
                <div className="w-12 h-12 bg-muted rounded-full flex items-center justify-center mx-auto mb-4">
                  <Star className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-2xl font-bold">Free</CardTitle>
                <div className="text-3xl font-bold text-primary">₹0</div>
                <p className="text-muted-foreground">Perfect for getting started</p>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center justify-center">
                  <Badge variant="secondary" className="text-lg py-2 px-4">
                    3 Credits
                  </Badge>
                </div>
                
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-primary mr-3 flex-shrink-0" />
                    <span className="text-muted-foreground">3 AI Interview Sessions</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-primary mr-3 flex-shrink-0" />
                    <span className="text-muted-foreground">Basic Performance Analytics</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-primary mr-3 flex-shrink-0" />
                    <span className="text-muted-foreground">Standard Question Bank</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-primary mr-3 flex-shrink-0" />
                    <span className="text-muted-foreground">Email Support</span>
                  </li>
                </ul>

                <Button className="w-full" variant="outline">
                  Get Started Free
                </Button>
              </CardContent>
            </Card>

            {/* Referral Plan */}
            <Card className="card-gradient border-primary/50 relative scale-105 shadow-2xl">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <Badge className="bg-primary text-primary-foreground px-6 py-2">
                  Most Popular
                </Badge>
              </div>
              <CardHeader className="text-center pb-6">
                <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-2xl font-bold">Referral</CardTitle>
                <div className="text-3xl font-bold text-primary">₹0</div>
                <p className="text-muted-foreground">Earn credits by referring friends</p>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center justify-center">
                  <Badge className="bg-primary text-primary-foreground text-lg py-2 px-4">
                    3 Credits per Referral
                  </Badge>
                </div>
                
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-primary mr-3 flex-shrink-0" />
                    <span className="text-muted-foreground">Unlimited Referrals</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-primary mr-3 flex-shrink-0" />
                    <span className="text-muted-foreground">All Free Plan Features</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-primary mr-3 flex-shrink-0" />
                    <span className="text-muted-foreground">Referral Dashboard</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-primary mr-3 flex-shrink-0" />
                    <span className="text-muted-foreground">Priority Support</span>
                  </li>
                </ul>

                <Button className="w-full glow-primary">
                  Start Referring
                </Button>
              </CardContent>
            </Card>

            {/* Premium Plan */}
            <Card className="card-gradient border-border/50 relative">
              <CardHeader className="text-center pb-6">
                <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="h-6 w-6 text-accent" />
                </div>
                <CardTitle className="text-2xl font-bold">Premium</CardTitle>
                <div className="text-3xl font-bold text-accent">₹30</div>
                <p className="text-muted-foreground">Best value for serious practice</p>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center justify-center">
                  <Badge variant="secondary" className="text-lg py-2 px-4">
                    10 Credits
                  </Badge>
                </div>
                
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-accent mr-3 flex-shrink-0" />
                    <span className="text-muted-foreground">10 AI Interview Sessions</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-accent mr-3 flex-shrink-0" />
                    <span className="text-muted-foreground">Advanced Analytics Dashboard</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-accent mr-3 flex-shrink-0" />
                    <span className="text-muted-foreground">Premium Question Bank</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-accent mr-3 flex-shrink-0" />
                    <span className="text-muted-foreground">Detailed Performance Reports</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-accent mr-3 flex-shrink-0" />
                    <span className="text-muted-foreground">Priority Support</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-accent mr-3 flex-shrink-0" />
                    <span className="text-muted-foreground">Custom Interview Scenarios</span>
                  </li>
                </ul>

                <Button 
                  className="w-full" 
                  variant="secondary"
                  onClick={() => setIsPaymentOpen(true)}
                >
                  Upgrade to Premium
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* FAQ Section */}
          <div className="mt-20 max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
            <div className="space-y-6">
              <Card className="card-gradient border-border/50">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-3">What is a credit?</h3>
                  <p className="text-muted-foreground">
                    A credit represents one complete AI interview session. Each session includes personalized questions, real-time feedback, and performance analytics.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="card-gradient border-border/50">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-3">How does the referral system work?</h3>
                  <p className="text-muted-foreground">
                    Share your unique referral link with friends. When they sign up and complete their first interview, both you and your friend receive 3 credits each.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="card-gradient border-border/50">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-3">Do credits expire?</h3>
                  <p className="text-muted-foreground">
                    No, your credits never expire. Use them at your own pace whenever you're ready to practice.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
      <Footer />
      
      <PaymentDialog 
        open={isPaymentOpen} 
        onOpenChange={setIsPaymentOpen} 
      />
    </div>
  );
};

export default Pricing;