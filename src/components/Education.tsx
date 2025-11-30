import { GraduationCap, Award, ExternalLink } from "lucide-react";

const Education = () => {
  return (
    <section className="section-container bg-muted/30">
      <div className="max-w-5xl mx-auto space-y-12">
        {/* Section header */}
        <div className="text-center space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-primary">
            Education & Certifications
          </h2>
          <div className="w-20 h-1 bg-accent-cyan mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Education */}
          <div className="card-elevated p-8 space-y-6">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 bg-accent-cyan/10 rounded-xl flex items-center justify-center">
                <GraduationCap className="h-7 w-7 text-accent-cyan" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-primary">Education</h3>
              </div>
            </div>

            <div className="space-y-4">
              <div className="space-y-2">
                <div className="text-xl font-semibold text-primary">
                  Bachelor of Computer Applications (BCA)
                </div>
                <div className="text-muted-foreground">
                  Computer Science & Applications
                </div>
              </div>

              <div className="p-4 bg-accent-cyan/5 rounded-lg border border-accent-cyan/20">
                <p className="text-sm text-muted-foreground">
                  Comprehensive foundation in computer science fundamentals, programming concepts, software development lifecycle, and application development.
                </p>
              </div>
            </div>
          </div>

          {/* Certifications placeholder */}
          <div className="card-elevated p-8 space-y-6">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 bg-accent-cyan/10 rounded-xl flex items-center justify-center">
                <Award className="h-7 w-7 text-accent-cyan" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-primary">Certifications</h3>
              </div>
            </div>

            <div className="space-y-4">
              <div className="p-4 bg-accent-cyan/5 rounded-lg border border-accent-cyan/20 space-y-3">
                <p className="text-sm text-muted-foreground">
                  <span className="font-semibold text-primary">Professional Development:</span> Continuously expanding knowledge through hands-on experience with industry-standard testing tools and frameworks.
                </p>
                <div className="space-y-2 pt-2">
                  <div className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-accent-cyan rounded-full flex-shrink-0 mt-2"></div>
                    <span className="text-sm text-muted-foreground">
                      Practical experience with Selenium WebDriver, TestNG, and Maven
                    </span>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-accent-cyan rounded-full flex-shrink-0 mt-2"></div>
                    <span className="text-sm text-muted-foreground">
                      Extensive knowledge of Agile/Scrum methodologies
                    </span>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-accent-cyan rounded-full flex-shrink-0 mt-2"></div>
                    <span className="text-sm text-muted-foreground">
                      PCI DSS compliance and financial systems security training
                    </span>
                  </div>
                </div>
              </div>

              <div className="pt-2">
                <a 
                  href="https://www.linkedin.com/in/avinash-mishra" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-accent-cyan hover:text-accent-cyan/80 text-sm font-medium transition-colors"
                >
                  View credentials on LinkedIn
                  <ExternalLink className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Continuous learning note */}
        <div className="card-elevated p-6 border-l-4 border-accent-cyan">
          <p className="text-muted-foreground">
            <span className="font-semibold text-primary">Continuous Learning:</span> Committed to staying current with evolving testing methodologies, automation frameworks, and quality assurance best practices through hands-on project work, technical documentation, and industry resources.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Education;
