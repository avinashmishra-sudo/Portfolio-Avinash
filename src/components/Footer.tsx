import { Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-white py-12">
      <div className="section-container py-0">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Left side */}
            <div className="text-center md:text-left">
              <div className="text-2xl font-bold mb-2">Avinash Mishra</div>
              <div className="text-white/80">
                Software Tester (Manual | Automation | API Testing)
              </div>
            </div>

            {/* Center */}
            <div className="flex items-center gap-2 text-white/80">
              <span>Made with</span>
              <Heart className="h-4 w-4 text-accent-cyan fill-accent-cyan" />
              <span>and dedication</span>
            </div>

            {/* Right side */}
            <div className="text-center md:text-right text-white/80">
              <div>© {currentYear} Avinash Mishra</div>
              <div className="text-sm">All rights reserved</div>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-white/10 mt-8 pt-8 text-center text-sm text-white/60">
            <p>
              I believe we are here on the planet Earth to live, grow up and do what we can to
              <br />
              make this world a better place for all people to enjoy freedom.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
