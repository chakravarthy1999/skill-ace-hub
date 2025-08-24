import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, User, Building2, Briefcase } from "lucide-react";

const INDUSTRIES = [
  "Information Technology",
  "Healthcare & Medical",
  "Finance & Banking",
  "Education",
  "Manufacturing",
  "Retail & E-commerce",
  "Consulting",
  "Marketing & Advertising",
  "Others"
];

const INTERVIEW_TYPE_EXAMPLES = [
  "HR/Behavioral",
  "Technical",
  "Managerial",
  "CTO/Executive",
  "Sales",
  "Customer Service"
];

interface InterviewData {
  name: string;
  industry: string;
  company: string;
  role: string;
  interviewType: string;
  jobDescription: string;
}

const InterviewSetup = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState<InterviewData>({
    name: "",
    industry: "",
    company: "",
    role: "",
    interviewType: "",
    jobDescription: ""
  });
  const [errors, setErrors] = useState<{[key: string]: string}>({});

  const validateForm = () => {
    const newErrors: {[key: string]: string} = {};
    
    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }
    
    if (!formData.industry) {
      newErrors.industry = "Industry type is required";
    }
    
    if (!formData.role.trim()) {
      newErrors.role = "Role is required";
    }
    
    if (!formData.interviewType.trim()) {
      newErrors.interviewType = "Interview type is required";
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validateForm()) {
      // Store the form data in sessionStorage to pass to AI Interview page
      sessionStorage.setItem('interviewSetupData', JSON.stringify(formData));
      navigate('/ai-interview');
    }
  };

  const updateFormData = (field: keyof InterviewData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: "" }));
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5 p-4">
      <div className="max-w-2xl mx-auto pt-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent mb-4">
            Interview Setup
          </h1>
          <p className="text-muted-foreground text-lg">
            Tell us about yourself and the interview you're preparing for
          </p>
        </div>

        <Card className="backdrop-blur-sm bg-card/90 border-primary/20 shadow-xl">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-2xl">
              <User className="h-6 w-6 text-primary" />
              Candidate Information
            </CardTitle>
            <CardDescription>
              Help us customize your interview experience
            </CardDescription>
          </CardHeader>
          
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Field */}
              <div className="space-y-2">
                <Label htmlFor="name" className="text-sm font-medium">
                  Full Name <span className="text-destructive">*</span>
                </Label>
                <Input
                  id="name"
                  value={formData.name}
                  onChange={(e) => updateFormData("name", e.target.value)}
                  placeholder="Enter your full name"
                  className={errors.name ? "border-destructive" : ""}
                />
                {errors.name && (
                  <p className="text-sm text-destructive">{errors.name}</p>
                )}
              </div>

              {/* Industry Dropdown */}
              <div className="space-y-2">
                <Label htmlFor="industry" className="text-sm font-medium">
                  Industry <span className="text-destructive">*</span>
                </Label>
                <Select value={formData.industry} onValueChange={(value) => updateFormData("industry", value)}>
                  <SelectTrigger className={errors.industry ? "border-destructive" : ""}>
                    <SelectValue placeholder="Select your industry" />
                  </SelectTrigger>
                  <SelectContent>
                    {INDUSTRIES.map((industry) => (
                      <SelectItem key={industry} value={industry}>
                        {industry}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                {errors.industry && (
                  <p className="text-sm text-destructive">{errors.industry}</p>
                )}
              </div>

              {/* Company Name */}
              <div className="space-y-2">
                <Label htmlFor="company" className="text-sm font-medium flex items-center gap-2">
                  <Building2 className="h-4 w-4" />
                  Company Name <span className="text-muted-foreground">(Optional)</span>
                </Label>
                <Input
                  id="company"
                  value={formData.company}
                  onChange={(e) => updateFormData("company", e.target.value)}
                  placeholder="Enter company name"
                />
              </div>

              {/* Role */}
              <div className="space-y-2">
                <Label htmlFor="role" className="text-sm font-medium flex items-center gap-2">
                  <Briefcase className="h-4 w-4" />
                  Role/Position <span className="text-destructive">*</span>
                </Label>
                <Input
                  id="role"
                  value={formData.role}
                  onChange={(e) => updateFormData("role", e.target.value)}
                  placeholder="e.g., Software Engineer, Marketing Manager, Data Analyst"
                  className={errors.role ? "border-destructive" : ""}
                />
                {errors.role && (
                  <p className="text-sm text-destructive">{errors.role}</p>
                )}
              </div>

              {/* Interview Type */}
              <div className="space-y-2">
                <Label htmlFor="interviewType" className="text-sm font-medium">
                  Interview Type <span className="text-destructive">*</span>
                </Label>
                <Input
                  id="interviewType"
                  value={formData.interviewType}
                  onChange={(e) => updateFormData("interviewType", e.target.value)}
                  placeholder="e.g., Technical, HR/Behavioral, Managerial, CTO/Executive"
                  className={errors.interviewType ? "border-destructive" : ""}
                />
                <div className="text-xs text-muted-foreground">
                  Examples: {INTERVIEW_TYPE_EXAMPLES.join(", ")}
                </div>
                {errors.interviewType && (
                  <p className="text-sm text-destructive">{errors.interviewType}</p>
                )}
              </div>

              {/* Job Description */}
              <div className="space-y-2">
                <Label htmlFor="jobDescription" className="text-sm font-medium">
                  Job Description <span className="text-muted-foreground">(Optional)</span>
                </Label>
                <Textarea
                  id="jobDescription"
                  value={formData.jobDescription}
                  onChange={(e) => updateFormData("jobDescription", e.target.value)}
                  placeholder="Paste the job description or key requirements here..."
                  rows={4}
                  className="resize-none"
                />
                <div className="text-xs text-muted-foreground">
                  Adding job description helps us ask more relevant questions
                </div>
              </div>

              <div className="flex gap-4 pt-4">
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => navigate('/')}
                  className="flex-1"
                >
                  Back to Home
                </Button>
                <Button type="submit" className="flex-1 bg-gradient-to-r from-primary to-accent hover:opacity-90">
                  Start Interview
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default InterviewSetup;