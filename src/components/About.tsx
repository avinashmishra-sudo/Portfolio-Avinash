import { CheckCircle2 } from "lucide-react";

const About = () => {
  const highlights = [
    {
      number: "6+",
      label: "Years Experience",
      description: "In software testing & QA"
    },
    {
      number: "10+",
      label: "End-to-End",
      description: "QA & Web Projects"
    },
    {
      number: "500+",
      label: "Test Cases",
      description: "Designed & executed"
    }
  ];

  return (
    <section className="section-container bg-background">
      <div className="max-w-4xl mx-auto space-y-12">
        {/* Section header */}
        <div className="text-center space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-primary">
            About Me
          </h2>
          <div className="w-20 h-1 bg-accent-cyan mx-auto rounded-full"></div>
        </div>

        {/* Professional summary */}
        <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
          <p>
            Results-driven Software Tester with over 6 years of comprehensive experience specializing in manual testing, automation frameworks, and API validation for enterprise financial applications. Currently delivering quality assurance excellence at Tata Consultancy Services (TCS), where I ensure the reliability and security of high-volume transaction systems processing over $11 million daily.
          </p>
          <p>
            My expertise spans the complete software testing lifecycle, from test strategy development and test case design to defect management and regression validation. I have a proven track record of improving testing efficiency through automation using Selenium WebDriver with Java, TestNG, and Maven, while maintaining rigorous standards for PCI DSS compliance and financial data security.
          </p>
        </div>

        {/* Key highlights */}
        <div className="grid md:grid-cols-3 gap-8 pt-8">
          {highlights.map((highlight, index) => (
            <div 
              key={index} 
              className="card-elevated p-8 text-center space-y-3 hover:scale-105 transition-transform"
            >
              <div className="text-4xl font-bold text-accent-cyan">
                {highlight.number}
              </div>
              <div className="text-xl font-semibold text-primary">
                {highlight.label}
              </div>
              <div className="text-sm text-muted-foreground">
                {highlight.description}
              </div>
            </div>
          ))}
        </div>

        {/* Core strengths */}
        <div className="card-elevated p-8 space-y-6">
          <h3 className="text-2xl font-bold text-primary flex items-center gap-3">
            <div className="w-1 h-8 bg-accent-cyan rounded-full"></div>
            Core Strengths
          </h3>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              "Comprehensive manual & automation testing expertise",
              "Strong understanding of SDLC, STLC, and Agile methodologies",
              "Proficient in test automation using Selenium & Java",
              "Expert in API testing with Postman & basic automation",
              "PCI DSS compliance and financial systems security",
              "Excellent defect tracking and resolution using JIRA/Azure DevOps"
            ].map((strength, index) => (
              <div key={index} className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-accent-cyan flex-shrink-0 mt-0.5" />
                <span className="text-muted-foreground">{strength}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
