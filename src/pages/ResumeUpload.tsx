import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Upload, FileText, Search, Type, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const ResumeUpload = () => {
  const [resumeFile, setResumeFile] = useState<File | null>(null);
  const [resumeText, setResumeText] = useState("");
  const [jobDescription, setJobDescription] = useState("");
  const [dragActive, setDragActive] = useState(false);
  const navigate = useNavigate();

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      setResumeFile(e.dataTransfer.files[0]);
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setResumeFile(e.target.files[0]);
    }
  };

  const handleStartScanning = () => {
    // Navigate to results page with state
    navigate("/resume-results", { 
      state: { 
        resumeFile: resumeFile?.name,
        resumeText,
        jobDescription 
      }
    });
  };

  const isFormValid = (resumeFile || resumeText.trim()) && jobDescription.trim();

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/5 via-background to-accent/5 py-12">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <h1 className="text-3xl lg:text-4xl font-bold mb-4">
                Secure Your Interview Chances With a 
                <span className="text-primary block">Tailored Resume</span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Turn applications into interviews with personalized suggestions, ATS scoring and matching cover letters.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              {/* Upload Resume Section */}
              <Card className="h-fit">
                <CardHeader>
                  <CardTitle className="flex items-center text-xl">
                    <span className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm mr-3">1</span>
                    Upload Your Resume*
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <Tabs defaultValue="upload" className="w-full">
                    <TabsList className="grid w-full grid-cols-3">
                      <TabsTrigger value="upload">
                        <Upload className="w-4 h-4 mr-2" />
                        Upload File
                      </TabsTrigger>
                      <TabsTrigger value="cake">Use Cake Resume</TabsTrigger>
                      <TabsTrigger value="paste">
                        <Type className="w-4 h-4 mr-2" />
                        Paste Text
                      </TabsTrigger>
                    </TabsList>
                    
                    <TabsContent value="upload" className="mt-6">
                      <div
                        className={`border-2 border-dashed rounded-lg p-8 text-center transition-colors ${
                          dragActive 
                            ? "border-primary bg-primary/5" 
                            : "border-muted-foreground/25 hover:border-primary/50"
                        }`}
                        onDragEnter={handleDrag}
                        onDragLeave={handleDrag}
                        onDragOver={handleDrag}
                        onDrop={handleDrop}
                      >
                        <Upload className="w-12 h-12 mx-auto mb-4 text-muted-foreground" />
                        <div className="space-y-2">
                          <p className="text-primary font-medium">Upload new files</p>
                          <p className="text-sm text-muted-foreground">
                            Drop files here or click to upload.
                          </p>
                          <input
                            type="file"
                            accept=".pdf,.doc,.docx"
                            onChange={handleFileChange}
                            className="hidden"
                            id="resume-upload"
                          />
                          <label htmlFor="resume-upload">
                            <Button variant="outline" className="mt-4" asChild>
                              <span>Choose File</span>
                            </Button>
                          </label>
                          {resumeFile && (
                            <p className="text-sm text-primary mt-2">
                              Selected: {resumeFile.name}
                            </p>
                          )}
                        </div>
                      </div>
                      <div className="mt-4 space-y-1">
                        <p className="text-xs text-muted-foreground">
                          Supported formats: .pdf, .doc, .docx. Max size: 5 MB.
                        </p>
                        <p className="text-xs text-muted-foreground">
                          All languages supported.
                        </p>
                      </div>
                    </TabsContent>
                    
                    <TabsContent value="cake" className="mt-6">
                      <div className="text-center py-12 border-2 border-dashed border-muted-foreground/25 rounded-lg">
                        <FileText className="w-12 h-12 mx-auto mb-4 text-muted-foreground" />
                        <p className="text-muted-foreground">Use Cake Resume Builder</p>
                        <Button variant="outline" className="mt-4">
                          Create Resume
                        </Button>
                      </div>
                    </TabsContent>
                    
                    <TabsContent value="paste" className="mt-6">
                      <Textarea
                        placeholder="Paste your resume text here..."
                        value={resumeText}
                        onChange={(e) => setResumeText(e.target.value)}
                        className="min-h-[200px] resize-none"
                      />
                    </TabsContent>
                  </Tabs>
                </CardContent>
              </Card>

              {/* Job Description Section */}
              <Card className="h-fit">
                <CardHeader>
                  <CardTitle className="flex items-center text-xl">
                    <span className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm mr-3">2</span>
                    Add a Job Description*
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <Tabs defaultValue="paste" className="w-full">
                    <TabsList className="grid w-full grid-cols-3">
                      <TabsTrigger value="paste">
                        <Type className="w-4 h-4 mr-2" />
                        Paste Text
                      </TabsTrigger>
                      <TabsTrigger value="search">
                        <Search className="w-4 h-4 mr-2" />
                        Search Jobs
                      </TabsTrigger>
                      <TabsTrigger value="upload">
                        <Upload className="w-4 h-4 mr-2" />
                        Upload File
                      </TabsTrigger>
                    </TabsList>
                    
                    <TabsContent value="paste" className="mt-6">
                      <Textarea
                        placeholder="Paste the job description here..."
                        value={jobDescription}
                        onChange={(e) => setJobDescription(e.target.value)}
                        className="min-h-[300px] resize-none"
                      />
                    </TabsContent>
                    
                    <TabsContent value="search" className="mt-6">
                      <div className="text-center py-12 border-2 border-dashed border-muted-foreground/25 rounded-lg">
                        <Search className="w-12 h-12 mx-auto mb-4 text-muted-foreground" />
                        <p className="text-muted-foreground">Search Jobs on Platform</p>
                        <Button variant="outline" className="mt-4">
                          Browse Jobs
                        </Button>
                      </div>
                    </TabsContent>
                    
                    <TabsContent value="upload" className="mt-6">
                      <div className="text-center py-12 border-2 border-dashed border-muted-foreground/25 rounded-lg">
                        <Upload className="w-12 h-12 mx-auto mb-4 text-muted-foreground" />
                        <p className="text-muted-foreground">Upload Job Description File</p>
                        <Button variant="outline" className="mt-4">
                          Upload File
                        </Button>
                      </div>
                    </TabsContent>
                  </Tabs>
                </CardContent>
              </Card>
            </div>

            {/* Start Scanning Button */}
            <div className="text-center mt-8">
              <Button 
                onClick={handleStartScanning}
                disabled={!isFormValid}
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 text-lg"
              >
                Start Scanning
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              {!isFormValid && (
                <p className="text-sm text-muted-foreground mt-2">
                  Please upload a resume and add a job description to continue
                </p>
              )}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ResumeUpload;