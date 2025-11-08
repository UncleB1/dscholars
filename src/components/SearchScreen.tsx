import { Search, Sparkles } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const SearchScreen = () => {
  const searchResults = [
    {
      title: "Machine Learning Applications in Medical Diagnosis",
      author: "Smith, J. et al.",
      year: "2023",
      journal: "Nature Medicine"
    },
    {
      title: "Neural Networks for Image Recognition: A Comprehensive Review",
      author: "Johnson, M. & Williams, R.",
      year: "2023",
      journal: "IEEE Transactions"
    },
    {
      title: "Deep Learning Architectures for Natural Language Processing",
      author: "Chen, L. et al.",
      year: "2022",
      journal: "ACM Computing Surveys"
    }
  ];

  return (
    <section className="py-12">
      <div className="max-w-4xl mx-auto px-6">
        {/* Search Header */}
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-foreground mb-3">
            Search scholarly articles
          </h2>
          <p className="text-muted-foreground">
            Find research papers in plain English
          </p>
        </div>

        {/* Search Bar */}
        <div className="relative mb-6">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-wireframe-icon" />
          <Input
            placeholder="Search scholarly articles…"
            className="pl-12 h-14 text-base border-2 focus:border-primary"
          />
        </div>

        {/* Filters */}
        <div className="flex gap-3 mb-8">
          <Button variant="outline" size="sm" className="rounded-full">
            Relevance
          </Button>
          <Button variant="outline" size="sm" className="rounded-full">
            Date
          </Button>
          <Button variant="outline" size="sm" className="rounded-full">
            Open Access
          </Button>
        </div>

        {/* Results */}
        <div className="space-y-4">
          {searchResults.map((result, index) => (
            <div
              key={index}
              className="bg-card border border-border rounded-lg p-6 hover:border-primary/50 transition-colors cursor-pointer"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {result.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-1">
                    {result.author} • {result.year}
                  </p>
                  <p className="text-sm text-wireframe-text">
                    {result.journal}
                  </p>
                </div>
                <Button size="sm" className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4" />
                  AI Summary
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SearchScreen;
