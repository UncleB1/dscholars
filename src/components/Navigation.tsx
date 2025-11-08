import { Home, Library, FileText, User } from "lucide-react";

const Navigation = () => {
  return (
    <nav className="border-b border-border bg-card">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-8">
            <h1 className="text-2xl font-bold text-foreground">DScholars</h1>
            <div className="flex items-center gap-6">
              <button className="flex items-center gap-2 text-sm font-medium text-foreground hover:text-primary transition-colors">
                <Home className="w-4 h-4" />
                Home
              </button>
              <button className="flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
                <Library className="w-4 h-4" />
                Library
              </button>
              <button className="flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
                <FileText className="w-4 h-4" />
                Citations
              </button>
              <button className="flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
                <User className="w-4 h-4" />
                Profile
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
