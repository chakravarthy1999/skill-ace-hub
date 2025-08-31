import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { XCircle, RefreshCw, HelpCircle, ArrowLeft, CreditCard } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export default function PaymentFailed() {
  const navigate = useNavigate();

  const commonReasons = [
    "Insufficient funds in your account",
    "Card expired or blocked",
    "Incorrect card details entered",
    "Network connectivity issues",
    "Payment gateway timeout",
  ];

  const handleRetryPayment = () => {
    // Navigate back to pricing page or reopen payment dialog
    navigate("/pricing");
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-2xl mx-auto">
          {/* Failed Animation */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-red-100 rounded-full mb-4">
              <XCircle className="h-10 w-10 text-red-600" />
            </div>
            <h1 className="text-3xl font-bold text-foreground mb-2">Payment Failed</h1>
            <p className="text-muted-foreground">
              We couldn't process your payment. Please try again.
            </p>
          </div>

          {/* Error Alert */}
          <Alert className="mb-8 border-red-200 bg-red-50">
            <XCircle className="h-4 w-4 text-red-600" />
            <AlertDescription className="text-red-800">
              Your payment was declined. Please check your payment details and try again.
            </AlertDescription>
          </Alert>

          {/* Common Reasons */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <HelpCircle className="h-5 w-5" />
                Common Reasons for Payment Failure
              </CardTitle>
              <CardDescription>
                Check if any of these apply to your situation
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {commonReasons.map((reason, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-muted-foreground rounded-full flex-shrink-0" />
                    <span className="text-sm">{reason}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          {/* Troubleshooting Steps */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>What You Can Do</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xs font-semibold flex-shrink-0">
                    1
                  </div>
                  <div>
                    <h4 className="font-medium">Verify Your Card Details</h4>
                    <p className="text-sm text-muted-foreground">
                      Double-check your card number, expiry date, and CVV
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xs font-semibold flex-shrink-0">
                    2
                  </div>
                  <div>
                    <h4 className="font-medium">Check Your Balance</h4>
                    <p className="text-sm text-muted-foreground">
                      Ensure sufficient funds are available in your account
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xs font-semibold flex-shrink-0">
                    3
                  </div>
                  <div>
                    <h4 className="font-medium">Try a Different Card</h4>
                    <p className="text-sm text-muted-foreground">
                      Use an alternative payment method if available
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xs font-semibold flex-shrink-0">
                    4
                  </div>
                  <div>
                    <h4 className="font-medium">Contact Your Bank</h4>
                    <p className="text-sm text-muted-foreground">
                      Your bank might have blocked the transaction for security
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <Button 
              onClick={handleRetryPayment} 
              className="flex-1"
            >
              <RefreshCw className="h-4 w-4 mr-2" />
              Try Again
            </Button>
            <Button 
              variant="outline" 
              onClick={() => navigate("/")}
              className="flex-1"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Home
            </Button>
          </div>

          {/* Support Info */}
          <div className="text-center p-6 bg-muted/50 rounded-lg">
            <CreditCard className="h-8 w-8 mx-auto mb-3 text-muted-foreground" />
            <h3 className="font-semibold mb-2">Need Help?</h3>
            <p className="text-sm text-muted-foreground mb-4">
              If you continue to experience issues, please contact our support team
            </p>
            <div className="space-y-2">
              <p className="text-sm">
                Email:{" "}
                <a href="mailto:support@aiinterview.com" className="text-primary hover:underline">
                  support@aiinterview.com
                </a>
              </p>
              <p className="text-sm">
                Phone:{" "}
                <a href="tel:+911234567890" className="text-primary hover:underline">
                  +91 123 456 7890
                </a>
              </p>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}