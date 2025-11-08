import { ExternalLink, Sparkles } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const BrowserIntegration = () => {
  const academicResults = [
    {
      title: "Machine Learning Applications in Medical Diagnosis",
      source: "Nature Medicine",
      year: "2023",
      snippet: "Comprehensive study of ML algorithms in diagnostic accuracy..."
    },
    {
      title: "Neural Networks for Early Disease Detection",
      source: "The Lancet Digital Health",
      year: "2023",
      snippet: "Review of deep learning models for medical imaging..."
    },
    {
      title: "AI-Powered Diagnostic Tools in Healthcare",
      source: "JAMA Network",
      year: "2022",
      snippet: "Analysis of artificial intelligence applications..."
    }
  ];

  return (
    <section className="py-12 bg-wireframe-subtle">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left: Simulated Search Results */}
          <div className="lg:col-span-2 space-y-3">
            <div className="mb-6">
              <h2 className="text-xl font-bold text-foreground mb-2">
                Browser Integration Demo
              </h2>
              <p className="text-sm text-muted-foreground">
                Google Search Results: "machine learning medical diagnosis"
              </p>
            </div>

            {/* Mock Google Results */}
            <Card className="p-4 bg-card/50 border-dashed">
              <p className="text-xs text-accent font-medium mb-1">Ad • Medical Journal</p>
              <h3 className="text-base font-medium text-primary mb-1">
                Latest Research in Medical AI
              </h3>
              <p className="text-sm text-muted-foreground">
                Subscribe to our premium journal for cutting-edge research...
              </p>
            </Card>

            <Card className="p-4 bg-card/50 border-dashed">
              <p className="text-xs text-muted-foreground mb-1">wikipedia.org</p>
              <h3 className="text-base font-medium text-foreground mb-1">
                Machine Learning in Healthcare - Wikipedia
              </h3>
              <p className="text-sm text-muted-foreground">
                Machine learning is a branch of artificial intelligence focused on...
              </p>
            </Card>

            <Card className="p-4 bg-card/50 border-dashed">
              <p className="text-xs text-muted-foreground mb-1">healthline.com</p>
              <h3 className="text-base font-medium text-foreground mb-1">
                How AI is Changing Medical Diagnosis
              </h3>
              <p className="text-sm text-muted-foreground">
                Artificial intelligence and machine learning are revolutionizing...
              </p>
            </Card>
          </div>

          {/* Right: DScholars Sidebar */}
          <div className="lg:col-span-1">
            <Card className="p-5 sticky top-6 border-2 border-accent/20">
              <div className="flex items-center gap-2 mb-4 pb-4 border-b border-border">
                <div className="w-8 h-8 rounded-lg bg-accent flex items-center justify-center">
                  <Sparkles className="w-4 h-4 text-accent-foreground" />
                </div>
                <h3 className="font-bold text-foreground">Academic Insights</h3>
              </div>

              <p className="text-xs text-muted-foreground mb-4">
                Found {academicResults.length} peer-reviewed papers
              </p>

              <div className="space-y-3">
                {academicResults.map((result, index) => (
                  <Card key={index} className="p-3 bg-background hover:bg-accent/5 transition-colors">
                    <h4 className="text-sm font-semibold text-foreground mb-1 line-clamp-2">
                      {result.title}
                    </h4>
                    <p className="text-xs text-muted-foreground mb-2">
                      {result.source} • {result.year}
                    </p>
                    <p className="text-xs text-wireframe-text mb-2 line-clamp-2">
                      {result.snippet}
                    </p>
                    <Button size="sm" variant="outline" className="w-full text-xs">
                      <ExternalLink className="w-3 h-3 mr-1" />
                      View Summary
                    </Button>
                  </Card>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrowserIntegration;
