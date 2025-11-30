const Skills = () => {
  const skillCategories = [
    {
      category: "Testing Expertise",
      skills: [
        "Manual Testing",
        "Regression Testing",
        "Functional Testing",
        "Test Case Design",
        "Bug Reporting",
        "Mobile Testing",
        "Cross Browser Testing",
        "Smoke Testing"
      ]
    },
    {
      category: "Automation & Programming",
      skills: [
        "Selenium WebDriver",
        "Java (Basics)",
        "TestNG",
        "Maven",
        "Page Object Model (POM)",
        "XPath/CSS Locators",
        "Assertions",
        "Git/GitHub"
      ]
    },
    {
      category: "API Testing",
      skills: [
        "Postman (Manual)",
        "API Automation Basics",
        "REST API Testing",
        "API Validation",
        "Request/Response Testing"
      ]
    },
    {
      category: "Tools & Technologies",
      skills: [
        "JIRA",
        "Azure DevOps",
        "Bugzilla",
        "Git/GitHub",
        "CI/CD Concepts"
      ]
    },
    {
      category: "Methodologies & Concepts",
      skills: [
        "Agile/Scrum",
        "SDLC",
        "STLC",
        "PCI DSS Compliance",
        "Test Strategy",
        "Defect Lifecycle"
      ]
    }
  ];

  return (
    <section className="section-container bg-muted/30">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Section header */}
        <div className="text-center space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-primary">
            Skills & Expertise
          </h2>
          <div className="w-20 h-1 bg-accent-cyan mx-auto rounded-full"></div>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Comprehensive skill set covering the entire software testing lifecycle
          </p>
        </div>

        {/* Skills grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div 
              key={index} 
              className="card-elevated p-6 space-y-4 hover:scale-105 transition-transform"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <h3 className="text-xl font-bold text-primary flex items-center gap-3">
                <div className="w-1 h-6 bg-accent-cyan rounded-full"></div>
                {category.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span 
                    key={skillIndex}
                    className="badge-skill"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Technical proficiency note */}
        <div className="card-elevated p-6 border-l-4 border-accent-cyan">
          <p className="text-muted-foreground">
            <span className="font-semibold text-primary">Technical Note:</span> Continuously expanding expertise in test automation and API testing. Proficient in building maintainable test frameworks using Selenium WebDriver with Page Object Model design pattern, integrated with Maven for dependency management and TestNG for test execution and reporting.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Skills;
