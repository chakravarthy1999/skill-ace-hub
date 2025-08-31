import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Card, CardContent } from "@/components/ui/card";

const TermsConditions = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20 pb-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Terms of Service
            </h1>
            <p className="text-muted-foreground">Last updated: August 28, 2025</p>
          </div>

          <Card className="card-gradient border-border/50">
            <CardContent className="p-8 prose prose-gray dark:prose-invert max-w-none">
              <h2 className="text-2xl font-bold text-foreground mb-4">Acceptance of Terms</h2>
              <p className="text-muted-foreground mb-6">
                Establishing the agreement, by using our AI interview platform, you agree to these Terms of Service, forming a binding contract between you and our company.
              </p>

              <h2 className="text-2xl font-bold text-foreground mb-4">Service Description</h2>
              <p className="text-muted-foreground mb-6">
                Describing our offering, we provide an AI-powered interview simulation tool to help users practice for job interviews. Results are for personal use and not professional guarantees.
              </p>

              <h2 className="text-2xl font-bold text-foreground mb-4">User Obligations</h2>
              <p className="text-muted-foreground mb-4">
                Guiding user behavior, you agree to:
              </p>
              <ul className="text-muted-foreground mb-6 space-y-2">
                <li>Provide accurate information during setup.</li>
                <li>Use the service lawfully and ethically.</li>
                <li>Not share or reproduce AI-generated content without permission.</li>
              </ul>

              <h2 className="text-2xl font-bold text-foreground mb-4">Limitations of Liability</h2>
              <p className="text-muted-foreground mb-4">
                Clarifying our responsibility, we are not liable for:
              </p>
              <ul className="text-muted-foreground mb-6 space-y-2">
                <li>Inaccuracies in AI responses or interview outcomes.</li>
                <li>Any career decisions based on our service.</li>
                <li>Downtime or technical issues beyond our control.</li>
              </ul>
              <p className="text-muted-foreground mb-6">
                Our liability is limited to the amount paid, if any.
              </p>

              <h2 className="text-2xl font-bold text-foreground mb-4">Termination</h2>
              <p className="text-muted-foreground mb-6">
                Outlining account management, we may suspend or terminate your access for violation of these terms, with notice where possible.
              </p>

              <h2 className="text-2xl font-bold text-foreground mb-4">Intellectual Property</h2>
              <p className="text-muted-foreground mb-6">
                Protecting our rights, all platform content and AI technology are owned by our company. User inputs remain your property but are used to enhance the service.
              </p>

              <h2 className="text-2xl font-bold text-foreground mb-4">Governing Law</h2>
              <p className="text-muted-foreground mb-6">
                Specifying jurisdiction, these terms are governed by the laws of India, with disputes resolved in Indian courts.
              </p>

              <h2 className="text-2xl font-bold text-foreground mb-4">Changes to Terms</h2>
              <p className="text-muted-foreground mb-6">
                Notifying users of updates, we may modify these terms, with changes posted here and effective upon posting.
              </p>

              <h2 className="text-2xl font-bold text-foreground mb-4">Contact Us</h2>
              <p className="text-muted-foreground">
                Providing support access, reach us at <a href="mailto:aiinterviewguide@gmail.com" className="text-primary hover:underline">aiinterviewguide@gmail.com</a> for any questions.
              </p>
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default TermsConditions;