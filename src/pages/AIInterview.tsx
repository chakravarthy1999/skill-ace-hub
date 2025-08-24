import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Progress } from "@/components/ui/progress";
import { 
  Mic, 
  MicOff, 
  Volume2, 
  VolumeX, 
  Play, 
  Pause, 
  RotateCcw,
  Home,
  MessageSquare
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const questions = [
  "Tell me about yourself and your background in software development.",
  "What motivated you to pursue a career in technology?",
  "Describe a challenging project you've worked on recently.",
  "How do you approach problem-solving when debugging code?",
  "Where do you see yourself in the next 5 years?",
];

const AIInterview = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [isListening, setIsListening] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [transcript, setTranscript] = useState("");
  const [isInterviewStarted, setIsInterviewStarted] = useState(false);
  const [progress, setProgress] = useState(0);
  const [candidateData, setCandidateData] = useState<any>(null);
  
  const navigate = useNavigate();
  const recognitionRef = useRef<any>(null);
  const speechSynthesisRef = useRef<SpeechSynthesisUtterance | null>(null);

  useEffect(() => {
    // Get candidate data from session storage
    const storedData = sessionStorage.getItem('interviewSetupData');
    if (storedData) {
      setCandidateData(JSON.parse(storedData));
    }

    // Initialize Speech Recognition
    if ('webkitSpeechRecognition' in window || 'SpeechRecognition' in window) {
      const SpeechRecognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
      recognitionRef.current = new SpeechRecognition();
      recognitionRef.current.continuous = true;
      recognitionRef.current.interimResults = true;
      recognitionRef.current.lang = 'en-US';

      recognitionRef.current.onresult = (event: any) => {
        let finalTranscript = '';
        let interimTranscript = '';

        for (let i = event.resultIndex; i < event.results.length; i++) {
          const transcript = event.results[i][0].transcript;
          if (event.results[i].isFinal) {
            finalTranscript += transcript;
          } else {
            interimTranscript += transcript;
          }
        }

        setTranscript(prev => prev + finalTranscript + interimTranscript);
      };

      recognitionRef.current.onerror = (event: any) => {
        console.error('Speech recognition error:', event.error);
        setIsListening(false);
      };

      recognitionRef.current.onend = () => {
        setIsListening(false);
      };
    }

    return () => {
      if (recognitionRef.current) {
        recognitionRef.current.stop();
      }
      if (speechSynthesisRef.current) {
        speechSynthesis.cancel();
      }
    };
  }, []);

  const speakQuestion = (questionText: string) => {
    if ('speechSynthesis' in window) {
      speechSynthesis.cancel();
      
      const utterance = new SpeechSynthesisUtterance(questionText);
      utterance.rate = 0.9;
      utterance.pitch = 1;
      utterance.volume = 1;
      
      utterance.onstart = () => setIsSpeaking(true);
      utterance.onend = () => setIsSpeaking(false);
      
      speechSynthesisRef.current = utterance;
      speechSynthesis.speak(utterance);
    }
  };

  const startInterview = () => {
    setIsInterviewStarted(true);
    setCurrentQuestion(0);
    setTranscript("");
    setProgress(0);
    speakQuestion(questions[0]);
  };

  const toggleListening = () => {
    if (!recognitionRef.current) return;

    if (isListening) {
      recognitionRef.current.stop();
      setIsListening(false);
    } else {
      recognitionRef.current.start();
      setIsListening(true);
    }
  };

  const nextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      const next = currentQuestion + 1;
      setCurrentQuestion(next);
      setTranscript("");
      setProgress((next / questions.length) * 100);
      setTimeout(() => {
        speakQuestion(questions[next]);
      }, 500);
    }
  };

  const resetInterview = () => {
    setIsInterviewStarted(false);
    setCurrentQuestion(0);
    setTranscript("");
    setProgress(0);
    setIsListening(false);
    setIsSpeaking(false);
    speechSynthesis.cancel();
    if (recognitionRef.current) {
      recognitionRef.current.stop();
    }
  };

  const toggleSpeaking = () => {
    if (isSpeaking) {
      speechSynthesis.cancel();
      setIsSpeaking(false);
    } else {
      speakQuestion(questions[currentQuestion]);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800">
      {/* Header */}
      <header className="border-b border-border bg-background/80 backdrop-blur-lg">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Button 
              variant="ghost" 
              size="sm" 
              onClick={() => navigate('/')}
              className="flex items-center space-x-2"
            >
              <Home className="w-4 h-4" />
              <span>Back to Home</span>
            </Button>
            <Separator orientation="vertical" className="h-6" />
            <h1 className="text-xl font-bold">AI Interview Practice</h1>
            {candidateData && (
              <div className="ml-4 text-sm text-muted-foreground">
                {candidateData.name} • {candidateData.role} • {candidateData.interviewType}
              </div>
            )}
          </div>
          <Badge variant="secondary" className="flex items-center space-x-2">
            <MessageSquare className="w-3 h-3" />
            <span>Question {currentQuestion + 1} of {questions.length}</span>
          </Badge>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto space-y-6">
          {/* Progress Bar */}
          {isInterviewStarted && (
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium">Interview Progress</span>
                  <span className="text-sm text-muted-foreground">{Math.round(progress)}%</span>
                </div>
                <Progress value={progress} className="w-full" />
              </CardContent>
            </Card>
          )}

          {/* AI Interviewer Section */}
          <Card className="bg-gradient-card border-border/50">
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                <span>AI Interviewer</span>
                <div className="flex items-center space-x-2">
                  {isSpeaking && (
                    <Badge variant="secondary" className="animate-pulse">
                      <Volume2 className="w-3 h-3 mr-1" />
                      Speaking...
                    </Badge>
                  )}
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={toggleSpeaking}
                    disabled={!isInterviewStarted}
                  >
                    {isSpeaking ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                  </Button>
                </div>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="bg-secondary/50 rounded-lg p-4 mb-4">
                <p className="text-lg leading-relaxed">
                  {isInterviewStarted ? questions[currentQuestion] : "Click 'Start Interview' to begin your AI-powered interview session."}
                </p>
              </div>
              
              <div className="flex flex-wrap gap-3">
                {!isInterviewStarted ? (
                  <Button onClick={startInterview} className="glow-primary">
                    <Play className="w-4 h-4 mr-2" />
                    Start Interview
                  </Button>
                ) : (
                  <>
                    <Button 
                      variant="outline" 
                      onClick={nextQuestion}
                      disabled={currentQuestion >= questions.length - 1}
                    >
                      Next Question
                    </Button>
                    <Button variant="outline" onClick={resetInterview}>
                      <RotateCcw className="w-4 h-4 mr-2" />
                      Reset
                    </Button>
                  </>
                )}
              </div>
            </CardContent>
          </Card>

          {/* User Response Section */}
          <Card className="bg-gradient-card border-border/50">
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                <span>Your Response</span>
                <div className="flex items-center space-x-2">
                  {isListening && (
                    <Badge variant="secondary" className="animate-pulse">
                      <Mic className="w-3 h-3 mr-1" />
                      Listening...
                    </Badge>
                  )}
                  <Button
                    variant={isListening ? "destructive" : "default"}
                    size="sm"
                    onClick={toggleListening}
                    disabled={!isInterviewStarted}
                    className={isListening ? "animate-pulse" : ""}
                  >
                    {isListening ? <MicOff className="w-4 h-4" /> : <Mic className="w-4 h-4" />}
                  </Button>
                </div>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="bg-secondary/50 rounded-lg p-4 min-h-[200px]">
                <p className="text-muted-foreground text-sm mb-2">
                  {isInterviewStarted ? "Your speech will appear here in real-time:" : "Start the interview to begin recording your responses."}
                </p>
                <div className="prose prose-invert max-w-none">
                  <p className="whitespace-pre-wrap text-foreground leading-relaxed">
                    {transcript || (isInterviewStarted ? "Click the microphone button and start speaking..." : "")}
                  </p>
                </div>
              </div>
              
              {isInterviewStarted && (
                <div className="mt-4 p-3 bg-muted/20 rounded-lg">
                  <p className="text-xs text-muted-foreground">
                    💡 <strong>Tip:</strong> Speak clearly and at a moderate pace. You can pause and restart recording anytime.
                  </p>
                </div>
              )}
            </CardContent>
          </Card>

          {/* Interview Complete */}
          {isInterviewStarted && currentQuestion >= questions.length - 1 && progress >= 80 && (
            <Card className="border-emerald-500/50 bg-emerald-500/10">
              <CardContent className="pt-6 text-center">
                <h3 className="text-xl font-bold text-emerald-400 mb-2">Interview Complete!</h3>
                <p className="text-muted-foreground mb-4">
                  Great job completing your AI interview practice session. Review your responses and keep practicing!
                </p>
                <Button onClick={resetInterview} variant="outline">
                  Start New Interview
                </Button>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
};

export default AIInterview;