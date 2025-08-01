import { ReactNode } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import buddyLogo from "/lovable-uploads/7d691065-5f6f-4e8b-b20b-185fb181cb22.png";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const location = useLocation();

  const navigation = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Our Dams", href: "/case-studies" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <div className="min-h-screen bg-background" style={{backgroundImage: `url('/lovable-uploads/f97b239a-0163-46eb-879a-65cf5150e20a.png')`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundAttachment: 'fixed'}}>
      <div className="min-h-screen bg-background/90">
      {/* Navigation */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <img src={buddyLogo} alt="Buddy Tech" className="h-8 w-8 dark:invert" />
            <span className="text-xl font-bold text-primary">Buddy Tech</span>
          </Link>

          <nav className="hidden md:flex items-center space-x-6">
            {navigation.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  location.pathname === item.href
                    ? "text-primary border-b-2 border-primary"
                    : "text-muted-foreground"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          <Button asChild variant="default" className="bg-accent hover:bg-accent/90">
            <Link to="/contact">Get Started</Link>
          </Button>
        </div>
      </header>

      {/* Main Content */}
      <main>{children}</main>

      {/* Footer */}
      <footer className="border-t bg-muted/30">
        <div className="container py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <img src={buddyLogo} alt="Buddy Tech" className="h-6 w-6 dark:invert" />
                <span className="font-bold text-primary">Buddy Tech</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Your Buddy in IT Automation
              </p>
            </div>

            <div className="space-y-3">
              <h4 className="font-medium">Navigation</h4>
              <ul className="space-y-2 text-sm">
                {navigation.map((item) => (
                  <li key={item.href}>
                    <Link
                      to={item.href}
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-3">
              <h4 className="font-medium">Services</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>Email Automation</li>
                <li>Workflow Optimization</li>
                <li>Data Management</li>
                <li>Business Intelligence</li>
              </ul>
            </div>

            <div className="space-y-3">
              <h4 className="font-medium">Contact</h4>
              <p className="text-sm text-muted-foreground">
                Ready to build your masterpiece?
              </p>
              <Button asChild variant="outline" size="sm">
                <Link to="/contact">Book Free Consultation</Link>
              </Button>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t text-center text-sm text-muted-foreground">
            © 2024 Buddy Tech. All rights reserved. Building better dams, one automation at a time.
          </div>
        </div>
      </footer>
      </div>
    </div>
  );
};

export default Layout;