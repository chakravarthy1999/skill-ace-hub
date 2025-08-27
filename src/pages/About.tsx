import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20 pb-16">
        <div className="container mx-auto px-4 max-w-4xl">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              About AI InterviewGuide
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Empowering job seekers to ace their interviews with confidence and precision through cutting-edge AI technology.
            </p>
          </div>

          {/* Our Mission */}
          <Card className="mb-12 card-gradient border-border/50">
            <CardContent className="p-8">
              <h2 className="text-3xl font-bold mb-6 text-primary">Our Mission</h2>
              <p className="text-muted-foreground leading-relaxed text-lg">
                At AI InterviewGuide, our mission is to empower job seekers to ace their interviews with confidence and precision. We understand the challenges of navigating today's competitive job market—nerves, unexpected questions, and the pressure to stand out. That's why we've harnessed the power of cutting-edge artificial intelligence to create a platform that transforms interview preparation into a seamless, personalized, and effective experience. Whether you're a recent graduate, a career changer, or a seasoned professional, we're here to help you land your dream job.
              </p>
            </CardContent>
          </Card>

          {/* Who We Are */}
          <Card className="mb-12 card-gradient border-border/50">
            <CardContent className="p-8">
              <h2 className="text-3xl font-bold mb-6 text-primary">Who We Are</h2>
              <p className="text-muted-foreground leading-relaxed text-lg mb-4">
                AI InterviewGuide was founded by a passionate and innovative team of tech enthusiasts and career coaches dedicated to revolutionizing the interview process. We recognized the limitations of traditional interview prep methods—generic advice, limited practice opportunities, and a lack of real-time feedback. Our solution? An AI-driven platform that delivers tailored mock interviews, actionable insights, and real-time coaching to prepare you for any job interview, from tech to healthcare to finance.
              </p>
              <p className="text-muted-foreground leading-relaxed text-lg">
                Our team combines expertise in artificial intelligence, data science, and career coaching to create a cutting-edge tool that adapts to your unique career goals. We're driven by a commitment to make interview preparation accessible, inclusive, and empowering for job seekers worldwide.
              </p>
            </CardContent>
          </Card>

          {/* What We Offer */}
          <Card className="mb-12 card-gradient border-border/50">
            <CardContent className="p-8">
              <h2 className="text-3xl font-bold mb-6 text-primary">What We Offer</h2>
              <p className="text-muted-foreground leading-relaxed text-lg mb-6">
                AI InterviewGuide is your personal interview coach, available 24/7. Our platform leverages advanced AI technologies, including natural language processing and machine learning, to provide a comprehensive suite of tools designed to boost your interview performance:
              </p>
              <ul className="space-y-4 text-muted-foreground">
                <li className="flex items-start">
                  <span className="text-primary font-semibold mr-3">•</span>
                  <div>
                    <strong>Personalized Mock Interviews:</strong> Upload a job description or select your industry and role, and our AI generates realistic, job-specific questions—behavioral, technical, and situational—to simulate the real interview experience.
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-primary font-semibold mr-3">•</span>
                  <div>
                    <strong>Real-Time Feedback:</strong> Receive instant, actionable insights on your responses, including clarity, confidence, and relevance, along with suggestions to refine your answers and eliminate filler words.
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-primary font-semibold mr-3">•</span>
                  <div>
                    <strong>Tailored Practice Scenarios:</strong> Practice for any role, from entry-level to executive, with questions crafted to match the skills and competencies employers seek.
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-primary font-semibold mr-3">•</span>
                  <div>
                    <strong>Flexible Plans:</strong> Choose from our free plan for basic practice or our premium plan for unlimited mock interviews, in-depth analysis, and personalized coaching.
                  </div>
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* Privacy Commitment */}
          <Card className="mb-12 card-gradient border-border/50">
            <CardContent className="p-8">
              <h2 className="text-3xl font-bold mb-6 text-primary">Our Commitment to Your Privacy</h2>
              <p className="text-muted-foreground leading-relaxed text-lg">
                At AI InterviewGuide, your trust is our top priority. We are committed to safeguarding your privacy with the highest standards of data protection. We do not store any personal data beyond what is strictly necessary for your experience. Temporary session-based login information (via secure Google login) and records of your previous mock interviews are the only data we retain, solely to enhance your practice sessions. No audio, video, or sensitive personal information—such as photos or names—is ever stored. Our platform employs industry-standard encryption and robust security measures to ensure your data is protected and cannot be misused, giving you peace of mind as you prepare for your interviews.
              </p>
            </CardContent>
          </Card>

          {/* Why Choose Us */}
          <Card className="mb-12 card-gradient border-border/50">
            <CardContent className="p-8">
              <h2 className="text-3xl font-bold mb-6 text-primary">Why Choose AI InterviewGuide?</h2>
              <ul className="space-y-4 text-muted-foreground">
                <li className="flex items-start">
                  <span className="text-primary font-semibold mr-3">•</span>
                  <div>
                    <strong>Realistic Preparation:</strong> Our AI simulates the pressure of real interviews, complete with follow-up questions and dynamic scenarios, so you're ready for anything.
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-primary font-semibold mr-3">•</span>
                  <div>
                    <strong>Data-Driven Insights:</strong> Get detailed feedback on your performance, including pacing, word choice, and key talking points, to help you improve with every practice session.
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-primary font-semibold mr-3">•</span>
                  <div>
                    <strong>Time-Saving Efficiency:</strong> No need to schedule mock interviews with friends or mentors—practice anytime, anywhere, and get instant results.
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-primary font-semibold mr-3">•</span>
                  <div>
                    <strong>Privacy and Security:</strong> With seamless Google login, you can sign up quickly without sharing sensitive personal details, ensuring a flexible and privacy-first experience.
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-primary font-semibold mr-3">•</span>
                  <div>
                    <strong>Proven Results:</strong> AI InterviewGuide is designed to boost your communication and speaking skills, helping you confidently showcase your knowledge and expertise.
                  </div>
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* Our Vision */}
          <Card className="mb-12 card-gradient border-border/50">
            <CardContent className="p-8">
              <h2 className="text-3xl font-bold mb-6 text-primary">Our Vision</h2>
              <p className="text-muted-foreground leading-relaxed text-lg">
                We believe that everyone deserves a fair shot at their dream job. By combining innovative AI technology with a deep understanding of the hiring process, we aim to level the playing field and make high-quality interview preparation accessible to all. Our vision is to redefine how job seekers prepare for interviews, making the process less stressful and more empowering, so you can focus on showcasing your skills and potential.
              </p>
            </CardContent>
          </Card>

          {/* Get Started */}
          <Card className="card-gradient border-border/50 text-center">
            <CardContent className="p-8">
              <h2 className="text-3xl font-bold mb-6 text-primary">Get Started Today</h2>
              <p className="text-muted-foreground leading-relaxed text-lg mb-6">
                Ready to take your interview skills to the next level? Sign up for AI InterviewGuide with a quick Google login and start practicing with our free plan, or unlock the full power of our premium features. Whether you're preparing for your first job or your next big career move, we're here to help you shine.
              </p>
              <p className="text-muted-foreground mb-6">
                Join us on our mission to make every interview a success story. Start your journey with AI InterviewGuide today!
              </p>
              <p className="text-sm text-muted-foreground">
                Contact us at <a href="mailto:aiinterviewguide@gmail.com" className="text-primary hover:underline">aiinterviewguide@gmail.com</a> for any questions or to learn more about our platform.
              </p>
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default About;