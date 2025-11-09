import { Copy, Check } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useState } from "react";

interface CitationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const CitationModal = ({ isOpen, onClose }: CitationModalProps) => {
  const [selectedFormat, setSelectedFormat] = useState("APA");
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const citations = {
    APA: "Smith, J., Davis, R., & Thompson, K. (2023). Machine Learning Applications in Medical Diagnosis. Nature Medicine, 29(4), 567-580. https://doi.org/10.1038/example",
    MLA: "Smith, John, et al. \"Machine Learning Applications in Medical Diagnosis.\" Nature Medicine, vol. 29, no. 4, 2023, pp. 567-580.",
    Harvard: "Smith, J., Davis, R. and Thompson, K. (2023) 'Machine Learning Applications in Medical Diagnosis', Nature Medicine, 29(4), pp. 567-580."
  };

  const handleCopy = () => {
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 bg-background/80 backdrop-blur-sm flex items-center justify-center p-4 z-50">
      <Card className="w-full max-w-2xl p-6">
        <h2 className="text-2xl font-bold text-foreground mb-6">
          Citation Assistant
        </h2>

        {/* Format Selector */}
        <div className="flex gap-3 mb-6">
          {["APA", "MLA", "Harvard"].map((format) => (
            <Button
              key={format}
              variant={selectedFormat === format ? "default" : "outline"}
              size="sm"
              onClick={() => setSelectedFormat(format)}
              className="rounded-full"
            >
              {format}
            </Button>
          ))}
        </div>

        {/* Citation Display */}
        <div className="bg-muted rounded-lg p-4 mb-4">
          <p className="text-sm text-wireframe-text leading-relaxed font-mono">
            {citations[selectedFormat as keyof typeof citations]}
          </p>
        </div>

        {/* Actions */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              id="auto-detect"
              className="w-4 h-4 rounded border-border text-accent"
            />
            <label htmlFor="auto-detect" className="text-sm text-muted-foreground">
              Auto-detect fields
            </label>
          </div>

          <div className="flex gap-2">
            <Button variant="outline" size="sm" onClick={onClose}>
              Close
            </Button>
            <Button
              size="sm"
              onClick={handleCopy}
              className="flex items-center gap-2"
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4" />
                  Copied!
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4" />
                  Copy
                </>
              )}
            </Button>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default CitationModal;
