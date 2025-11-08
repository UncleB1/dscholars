import { Plus, Tag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const LibraryScreen = () => {
  const savedPapers = [
    {
      title: "Machine Learning in Medical Diagnosis",
      author: "Smith, J. et al.",
      year: "2023",
      tags: ["ML", "Healthcare"]
    },
    {
      title: "Neural Networks for Image Recognition",
      author: "Johnson, M.",
      year: "2023",
      tags: ["Deep Learning", "CV"]
    },
    {
      title: "NLP Architectures Review",
      author: "Chen, L. et al.",
      year: "2022",
      tags: ["NLP", "Survey"]
    },
    {
      title: "Quantum Computing Applications",
      author: "Williams, R.",
      year: "2023",
      tags: ["Quantum", "Theory"]
    },
    {
      title: "Blockchain in Supply Chain",
      author: "Davis, K. et al.",
      year: "2022",
      tags: ["Blockchain", "Industry"]
    },
    {
      title: "Reinforcement Learning Methods",
      author: "Anderson, P.",
      year: "2023",
      tags: ["RL", "Algorithms"]
    }
  ];

  return (
    <section className="py-12">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-foreground mb-6">Library</h2>
          
          {/* Tabs */}
          <div className="flex gap-4 border-b border-border">
            <button className="pb-3 px-1 border-b-2 border-accent text-accent font-medium text-sm">
              All
            </button>
            <button className="pb-3 px-1 text-muted-foreground hover:text-foreground text-sm">
              Saved
            </button>
            <button className="pb-3 px-1 text-muted-foreground hover:text-foreground text-sm">
              Offline
            </button>
          </div>
        </div>

        {/* Papers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
          {savedPapers.map((paper, index) => (
            <Card 
              key={index}
              className="p-5 hover:border-accent/50 transition-colors cursor-pointer"
            >
              <h3 className="font-semibold text-foreground mb-2 line-clamp-2">
                {paper.title}
              </h3>
              <p className="text-sm text-muted-foreground mb-3">
                {paper.author} • {paper.year}
              </p>
              <div className="flex gap-2 flex-wrap">
                {paper.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="inline-flex items-center gap-1 px-2 py-1 rounded-md bg-accent/10 text-accent text-xs font-medium"
                  >
                    <Tag className="w-3 h-3" />
                    {tag}
                  </span>
                ))}
              </div>
            </Card>
          ))}
        </div>

        {/* Floating Add Button */}
        <div className="fixed bottom-8 right-8">
          <Button
            size="lg"
            className="rounded-full w-14 h-14 shadow-lg hover:shadow-xl transition-shadow"
          >
            <Plus className="w-6 h-6" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default LibraryScreen;
