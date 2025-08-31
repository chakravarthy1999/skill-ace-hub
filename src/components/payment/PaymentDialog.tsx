import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, CreditCard, Shield, Zap } from "lucide-react";

interface PaymentDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const paymentPlans = [
  {
    id: "basic",
    name: "Basic Plan",
    price: "₹299",
    duration: "per month",
    features: ["5 AI Interviews", "Basic Analytics", "Email Support"],
  },
  {
    id: "premium",
    name: "Premium Plan",
    price: "₹599",
    duration: "per month",
    features: ["Unlimited AI Interviews", "Advanced Analytics", "Priority Support", "Custom Reports"],
    popular: true,
  },
  {
    id: "enterprise",
    name: "Enterprise Plan",
    price: "₹1299",
    duration: "per month",
    features: ["Everything in Premium", "Team Management", "API Access", "Dedicated Support"],
  },
];

export function PaymentDialog({ open, onOpenChange }: PaymentDialogProps) {
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);

  const handlePayment = async (planId: string) => {
    setIsProcessing(true);
    
    try {
      // Simulate payment processing
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Redirect to Razorpay (simulate)
      const paymentUrl = `https://razorpay.com/checkout?plan=${planId}&amount=${getPlanAmount(planId)}`;
      
      // In a real implementation, you would open Razorpay checkout
      // For demo purposes, we'll simulate success/failure
      const isSuccess = Math.random() > 0.3; // 70% success rate for demo
      
      if (isSuccess) {
        window.location.href = "/payment-success";
      } else {
        window.location.href = "/payment-failed";
      }
    } catch (error) {
      console.error("Payment error:", error);
      window.location.href = "/payment-failed";
    } finally {
      setIsProcessing(false);
    }
  };

  const getPlanAmount = (planId: string) => {
    const plan = paymentPlans.find(p => p.id === planId);
    return plan?.price.replace('₹', '').replace(',', '') || '0';
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-center">Choose Your Plan</DialogTitle>
        </DialogHeader>
        
        <div className="grid md:grid-cols-3 gap-6 mt-6">
          {paymentPlans.map((plan) => (
            <Card 
              key={plan.id} 
              className={`relative cursor-pointer transition-all hover:shadow-lg ${
                plan.popular ? 'border-primary ring-2 ring-primary/20' : ''
              } ${selectedPlan === plan.id ? 'ring-2 ring-primary' : ''}`}
              onClick={() => setSelectedPlan(plan.id)}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-semibold">
                    Most Popular
                  </span>
                </div>
              )}
              
              <CardHeader className="text-center pb-4">
                <CardTitle className="text-xl">{plan.name}</CardTitle>
                <div className="mt-2">
                  <span className="text-3xl font-bold">{plan.price}</span>
                  <span className="text-muted-foreground ml-1">{plan.duration}</span>
                </div>
              </CardHeader>
              
              <CardContent>
                <ul className="space-y-3">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-primary flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Button 
                  className="w-full mt-6" 
                  variant={selectedPlan === plan.id ? "default" : "outline"}
                  onClick={(e) => {
                    e.stopPropagation();
                    handlePayment(plan.id);
                  }}
                  disabled={isProcessing}
                >
                  {isProcessing ? (
                    <>
                      <Zap className="h-4 w-4 mr-2 animate-spin" />
                      Processing...
                    </>
                  ) : (
                    <>
                      <CreditCard className="h-4 w-4 mr-2" />
                      Select Plan
                    </>
                  )}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="flex items-center justify-center gap-4 mt-6 pt-6 border-t">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Shield className="h-4 w-4" />
            Secure Payment with Razorpay
          </div>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <CreditCard className="h-4 w-4" />
            All major cards accepted
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}