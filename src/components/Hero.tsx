import { Button } from "@/components/ui/button";
import { Download, Mail, Github, Linkedin } from "lucide-react";

const Hero = () => {
  return (
    <section className="gradient-hero text-white min-h-[90vh] flex items-center relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-72 h-72 bg-accent-cyan rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-secondary rounded-full blur-3xl animate-float" style={{ animationDelay: "1s" }}></div>
      </div>

      <div className="section-container relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
            <span className="w-2 h-2 bg-accent-cyan rounded-full animate-pulse"></span>
            <span className="text-sm font-medium">Available for opportunities</span>
          </div>

          {/* Main heading */}
          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
              Avinash Mishra
            </h1>
            <p className="text-2xl md:text-3xl text-white/90 font-medium">
              Software Tester (Manual | Automation | API Testing) 
            </p>
          </div>

          {/* Tagline */}
          <p className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto leading-relaxed">
            Delivering quality assurance excellence with 6+ years of expertise in manual testing, automation frameworks, and API validation for mission-critical financial systems
          </p>

          {/* Key highlights */}
          <div className="flex flex-wrap justify-center gap-6 text-white/90 pt-4">
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 bg-accent-cyan rounded-full"></div>
              <span>6+ Years Experience</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 bg-accent-cyan rounded-full"></div>
              <span>Financial Systems Expert</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 bg-accent-cyan rounded-full"></div>
              <span>PCI DSS Compliance</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap justify-center gap-4 pt-8">
            <Button 
              size="lg" 
              className="bg-accent-cyan hover:bg-accent-cyan/90 text-primary font-semibold px-8 py-6 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all"
              onClick={() => window.open('/Avinash_Mishra_Resume.pdf', '_blank')}
            >
              <Download className="mr-2 h-5 w-5" />
              Download Resume
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="bg-white/10 border-white/30 hover:bg-white/20 text-white font-semibold px-8 py-6 text-lg rounded-xl backdrop-blur-sm"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <Mail className="mr-2 h-5 w-5" />
              Contact Me
            </Button>
          </div>

          {/* Social links */}
          <div className="flex justify-center gap-6 pt-8">
            <a 
              href="https://github.com/avinashmishra-sudo" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-12 h-12 flex items-center justify-center bg-white/10 hover:bg-white/20 rounded-full backdrop-blur-sm transition-all hover:scale-110"
            >
              <Github className="h-5 w-5" />
            </a>
            <a 
              href="https://linkedin.com/in/avinash-mishra-4b5544377" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-12 h-12 flex items-center justify-center bg-white/10 hover:bg-white/20 rounded-full backdrop-blur-sm transition-all hover:scale-110"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a 
              href="mailto:mishra.avinash.r@gmail.com"
              className="w-12 h-12 flex items-center justify-center bg-white/10 hover:bg-white/20 rounded-full backdrop-blur-sm transition-all hover:scale-110"
            >
              <Mail className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
