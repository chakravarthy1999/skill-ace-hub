import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Card, CardContent } from "@/components/ui/card";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20 pb-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Privacy Policy
            </h1>
            <p className="text-muted-foreground">Last updated: August 28, 2025</p>
          </div>

          <Card className="card-gradient border-border/50">
            <CardContent className="p-8 prose prose-gray dark:prose-invert max-w-none">
              <h2 className="text-2xl font-bold text-foreground mb-4">Introduction</h2>
              <p className="text-muted-foreground mb-6">
                Welcoming users to our AI interview platform, this Privacy Policy outlines how we collect, use, store, and protect your personal information when you use our website and services.
              </p>

              <h2 className="text-2xl font-bold text-foreground mb-4">Information We Collect</h2>
              <p className="text-muted-foreground mb-4">
                Defining the data collection process, we gather the following:
              </p>
              <ul className="text-muted-foreground mb-6 space-y-2">
                <li><strong>Name and Email:</strong> Provided during registration for identification and communication.</li>
                <li><strong>Company Name, Role, Interview Type, Job Description, Industry, Years of Experience, Key Skills, and Preferred Language:</strong> Submitted voluntarily to tailor your interview experience.</li>
                <li><strong>Resume Upload:</strong> Optional file uploads (PDF/DOC) for additional context, processed only for interview generation.</li>
                <li><strong>Usage Data:</strong> Technical data like IP address, browser type, and session duration, collected automatically for analytics.</li>
              </ul>

              <h2 className="text-2xl font-bold text-foreground mb-4">How We Use Your Information</h2>
              <p className="text-muted-foreground mb-4">
                Utilizing your data responsibly, we use it to:
              </p>
              <ul className="text-muted-foreground mb-6 space-y-2">
                <li>Personalize and deliver the AI interview service.</li>
                <li>Improve our platform through analytics and feedback.</li>
                <li>Communicate updates, results, or support, where consented.</li>
                <li>Ensure compliance with legal obligations.</li>
              </ul>

              <h2 className="text-2xl font-bold text-foreground mb-4">Data Storage and Security</h2>
              <p className="text-muted-foreground mb-6">
                Protecting your data diligently, we store it on secure servers with encryption. Data is retained for 30 days post-interview unless you request deletion, aligning with our commitment to privacy.
              </p>

              <h2 className="text-2xl font-bold text-foreground mb-4">Your Rights</h2>
              <p className="text-muted-foreground mb-4">
                Empowering users with control, you have the right to:
              </p>
              <ul className="text-muted-foreground mb-6 space-y-2">
                <li>Access, correct, or delete your personal data.</li>
                <li>Request details on how your data is processed.</li>
                <li>Withdraw consent at any time by contacting us at <a href="mailto:aiinterviewguide@gmail.com" className="text-primary hover:underline">aiinterviewguide@gmail.com</a>.</li>
              </ul>
              <p className="text-muted-foreground mb-6">
                These rights are enforced in accordance with applicable data protection laws.
              </p>

              <h2 className="text-2xl font-bold text-foreground mb-4">Cookies and Tracking</h2>
              <p className="text-muted-foreground mb-6">
                Managing website functionality, we use essential cookies for login and preferences. Analytics cookies help us improve user experience, but you can opt out through your browser settings.
              </p>

              <h2 className="text-2xl font-bold text-foreground mb-4">Third-Party Services</h2>
              <p className="text-muted-foreground mb-6">
                Integrating trusted partners, we may share minimal data with AI providers for interview generation and analytics services for insights. These partners operate under strict privacy agreements.
              </p>

              <h2 className="text-2xl font-bold text-foreground mb-4">Changes to This Policy</h2>
              <p className="text-muted-foreground mb-6">
                Keeping you informed, we will notify users of significant privacy policy changes via email or prominent website notices, with updates taking effect 30 days after posting.
              </p>

              <h2 className="text-2xl font-bold text-foreground mb-4">Contact Us</h2>
              <p className="text-muted-foreground">
                Providing accessible support, reach us at <a href="mailto:aiinterviewguide@gmail.com" className="text-primary hover:underline">aiinterviewguide@gmail.com</a> for any privacy-related questions or concerns.
              </p>
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;