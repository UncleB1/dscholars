import Navigation from "@/components/Navigation";
import SearchScreen from "@/components/SearchScreen";
import SummaryScreen from "@/components/SummaryScreen";
import LibraryScreen from "@/components/LibraryScreen";
import CitationModal from "@/components/CitationModal";
import BrowserIntegration from "@/components/BrowserIntegration";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Screen 1: Search */}
      <SearchScreen />
      
      {/* Screen 2: AI Summary */}
      <SummaryScreen />
      
      {/* Screen 3: Library */}
      <LibraryScreen />
      
      {/* Screen 4: Citation Modal (overlaid) */}
      <CitationModal />
      
      {/* Screen 5: Browser Integration */}
      <BrowserIntegration />
      
      {/* Footer */}
      <footer className="border-t border-border py-8 mt-12">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-sm text-muted-foreground">
            DScholars Prototype • AI-Powered Research Assistant
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
