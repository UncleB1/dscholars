import { Bookmark, Quote, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const SummaryScreen = () => {
  return (
    <section className="py-12 bg-muted/30">
      <div className="max-w-5xl mx-auto px-6">
        {/* Paper Header */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-foreground mb-2">
            Machine Learning Applications in Medical Diagnosis
          </h2>
          <p className="text-muted-foreground">
            Smith, J., Davis, R., & Thompson, K. (2023) • Nature Medicine
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main Summary */}
          <div className="lg:col-span-2 space-y-6">
            <Card className="p-6">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center">
                  <FileText className="w-4 h-4 text-accent" />
                </div>
                <h3 className="font-semibold text-foreground">
                  AI Summary (Plain English)
                </h3>
              </div>
              <div className="prose prose-sm max-w-none text-wireframe-text leading-relaxed">
                <p className="mb-3">
                  This research explores how machine learning algorithms can improve medical diagnosis accuracy. 
                  The study analyzed over 50,000 patient cases across multiple hospitals.
                </p>
                <p className="mb-3">
                  Key findings show that ML models achieved 94% accuracy in detecting early-stage diseases, 
                  outperforming traditional diagnostic methods by 12%. The algorithms were particularly 
                  effective in identifying patterns in medical imaging data.
                </p>
                <p>
                  The authors conclude that integrating AI-powered diagnostic tools could significantly reduce 
                  misdiagnosis rates and improve patient outcomes, especially in resource-limited settings.
                </p>
              </div>
            </Card>

            {/* Action Buttons */}
            <div className="flex gap-3">
              <Button className="flex items-center gap-2">
                <Bookmark className="w-4 h-4" />
                Save
              </Button>
              <Button variant="outline" className="flex items-center gap-2">
                <Quote className="w-4 h-4" />
                Cite
              </Button>
              <Button variant="outline">Read Full Paper</Button>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <Card className="p-6">
              <h3 className="font-semibold text-foreground mb-4">
                Key Findings
              </h3>
              <ul className="space-y-3 text-sm">
                <li className="flex gap-2">
                  <span className="text-accent font-bold">•</span>
                  <span className="text-wireframe-text">
                    94% diagnostic accuracy achieved
                  </span>
                </li>
                <li className="flex gap-2">
                  <span className="text-accent font-bold">•</span>
                  <span className="text-wireframe-text">
                    50,000+ patient cases analyzed
                  </span>
                </li>
                <li className="flex gap-2">
                  <span className="text-accent font-bold">•</span>
                  <span className="text-wireframe-text">
                    12% improvement over traditional methods
                  </span>
                </li>
                <li className="flex gap-2">
                  <span className="text-accent font-bold">•</span>
                  <span className="text-wireframe-text">
                    Effective for early-stage detection
                  </span>
                </li>
              </ul>
            </Card>

            <Card className="p-6">
              <h3 className="font-semibold text-foreground mb-4">
                Citations
              </h3>
              <div className="space-y-2 text-sm text-wireframe-text">
                <p className="pb-2 border-b border-border">127 citations</p>
                <p className="text-xs">Most cited by:</p>
                <p className="text-xs leading-relaxed">
                  • AI in Healthcare (2024)<br />
                  • Diagnostic Algorithms (2023)<br />
                  • Medical Imaging Review (2023)
                </p>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SummaryScreen;
