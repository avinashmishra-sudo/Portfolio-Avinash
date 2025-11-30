import { Button } from "@/components/ui/button";
import { Printer, Download } from "lucide-react";

const Resume = () => {
  const handlePrint = () => {
    window.print();
  };

  const handleDownloadText = () => {
    const textContent = `
AVINASH MISHRA
Software Tester | QA Automation Specialist
Phone: +91 9429565147 | Email: mishra.avinash.r@gmail.com
GitHub: github.com/avinashmishra-sudo

PROFESSIONAL SUMMARY
Software Tester with 6+ years of comprehensive experience specializing in manual testing, automation frameworks, and API validation for enterprise financial applications. Expert in ensuring quality and reliability of high-volume transaction systems processing $11M+ daily. Proven track record in test automation using Selenium WebDriver with Java, TestNG, and Maven. Strong background in PCI DSS compliance and financial systems security.

CORE SKILLS
Testing: Manual Testing, Regression Testing, Functional Testing, Test Case Design, Bug Reporting, Agile/Scrum, Mobile Testing, Cross Browser Testing, Smoke Testing
Automation: Selenium WebDriver, Java (Basics), TestNG, Maven, Page Object Model (POM), XPath/CSS Locators, Assertions, Git/GitHub
API Testing: Postman (Manual), API Automation Basics, REST API Testing, API Validation
Tools: JIRA, Azure DevOps, Bugzilla, Git/GitHub, CI/CD Concepts
Methodologies: Agile/Scrum, SDLC, STLC, PCI DSS Compliance

PROFESSIONAL EXPERIENCE

TATA CONSULTANCY SERVICES (TCS) — Software Tester | 2019 – Present
• Executed comprehensive testing for financial systems processing $11M+ in daily transactions while ensuring 100% PCI DSS compliance and data security standards
• Designed and documented 300+ test scenarios and 500+ detailed test cases covering major banking modules, improving test coverage by 35%
• Identified and logged 30+ critical and high-priority defects per sprint using JIRA, achieving 95% defect resolution rate before production releases
• Performed regression testing across 15+ interconnected modules each sprint, reducing production incidents by 28%
• Optimized defect triage process and collaboration with development teams, reducing average resolution turnaround time by 40%
• Conducted mobile application testing across iOS and Android platforms, identifying 25+ UI/UX issues that increased customer satisfaction scores by 15%
• Developed and implemented smoke test automation suite using Selenium WebDriver with Java and TestNG, reducing smoke test execution time by 60%
• Integrated automated tests with Maven build system and GitHub version control, enabling continuous testing in CI/CD pipeline
• Performed comprehensive API validation using Postman and introduced basic API automation, improving API test coverage by 45%
• Mentored 3 junior testers on testing best practices, automation frameworks, and defect management processes

SANSKRUTI TV — Production Control Room Head | 2015 – 2019
• Managed broadcast operations and technical production workflows for live television programming
• Implemented quality control processes that reduced on-air errors by 15%
• Coordinated with production teams to ensure seamless content delivery and technical execution

SET BLUE — Content Writer & Marketing Associate | 2014 – 2015
• Created engaging content for marketing campaigns and digital platforms
• Collaborated with marketing team to develop content strategies and promotional materials
• Contributed to brand messaging and customer engagement initiatives

EDUCATION
Bachelor of Computer Applications (BCA)
Computer Science & Applications

PROFESSIONAL DEVELOPMENT
• Practical experience with Selenium WebDriver, TestNG, and Maven
• Extensive knowledge of Agile/Scrum methodologies
• PCI DSS compliance and financial systems security training

Note: Some metrics are estimated based on project scope and are being validated with project documentation.
`;
    
    const blob = new Blob([textContent], { type: 'text/plain' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'Avinash_Mishra_Resume_ATS.txt';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    window.URL.revokeObjectURL(url);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Print controls - hidden when printing */}
      <div className="bg-primary text-white print:hidden sticky top-0 z-50 shadow-lg">
        <div className="max-w-4xl mx-auto px-6 py-4 flex items-center justify-between">
          <div>
            <h1 className="font-semibold">Resume Preview</h1>
            <p className="text-sm text-white/80">Download original PDF or print this page for ATS compatibility</p>
          </div>
          <div className="flex gap-3">
            <Button
              variant="outline"
              size="sm"
              onClick={() => window.open('/Avinash_Mishra_Resume.pdf', '_blank')}
              className="bg-accent-cyan hover:bg-accent-cyan/90 text-primary font-semibold border-accent-cyan"
            >
              <Download className="mr-2 h-4 w-4" />
              Download PDF
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={handleDownloadText}
              className="bg-white/10 border-white/30 hover:bg-white/20 text-white"
            >
              <Download className="mr-2 h-4 w-4" />
              Download TXT
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={handlePrint}
              className="bg-white/10 border-white/30 hover:bg-white/20 text-white"
            >
              <Printer className="mr-2 h-4 w-4" />
              Print to PDF
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={() => window.location.href = '/'}
              className="bg-white/10 border-white/30 hover:bg-white/20 text-white"
            >
              Back to Portfolio
            </Button>
          </div>
        </div>
      </div>

      {/* Resume content - optimized for printing */}
      <div className="max-w-4xl mx-auto px-8 py-12 bg-white print:px-12 print:py-8">
        {/* Header */}
        <header className="mb-8 pb-6 border-b-2 border-gray-300">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">AVINASH MISHRA</h1>
          <h2 className="text-xl text-gray-700 mb-3">Software Tester | QA Automation Specialist</h2>
          <div className="text-sm text-gray-600 space-y-1">
            <div>Phone: +91 9429565147 | Email: mishra.avinash.r@gmail.com</div>
            <div>GitHub: github.com/avinashmishra-sudo</div>
          </div>
        </header>

        {/* Professional Summary */}
        <section className="mb-6">
          <h3 className="text-lg font-bold text-gray-900 mb-3 uppercase border-b border-gray-300 pb-1">Professional Summary</h3>
          <p className="text-sm text-gray-800 leading-relaxed">
            Software Tester with 6+ years of comprehensive experience specializing in manual testing, automation frameworks, and API validation for enterprise financial applications. Expert in ensuring quality and reliability of high-volume transaction systems processing $11M+ daily. Proven track record in test automation using Selenium WebDriver with Java, TestNG, and Maven. Strong background in PCI DSS compliance and financial systems security.
          </p>
        </section>

        {/* Core Skills */}
        <section className="mb-6">
          <h3 className="text-lg font-bold text-gray-900 mb-3 uppercase border-b border-gray-300 pb-1">Core Skills</h3>
          <div className="text-sm text-gray-800 space-y-2">
            <div><span className="font-semibold">Testing:</span> Manual Testing, Regression Testing, Functional Testing, Test Case Design, Bug Reporting, Agile/Scrum, Mobile Testing, Cross Browser Testing, Smoke Testing</div>
            <div><span className="font-semibold">Automation:</span> Selenium WebDriver, Java (Basics), TestNG, Maven, Page Object Model (POM), XPath/CSS Locators, Assertions, Git/GitHub</div>
            <div><span className="font-semibold">API Testing:</span> Postman (Manual), API Automation Basics, REST API Testing, API Validation</div>
            <div><span className="font-semibold">Tools:</span> JIRA, Azure DevOps, Bugzilla, Git/GitHub, CI/CD Concepts</div>
            <div><span className="font-semibold">Methodologies:</span> Agile/Scrum, SDLC, STLC, PCI DSS Compliance</div>
          </div>
        </section>

        {/* Professional Experience */}
        <section className="mb-6">
          <h3 className="text-lg font-bold text-gray-900 mb-3 uppercase border-b border-gray-300 pb-1">Professional Experience</h3>
          
          <div className="mb-5">
            <div className="flex justify-between items-start mb-2">
              <div>
                <h4 className="font-bold text-gray-900">Software Tester</h4>
                <div className="text-sm text-gray-700">Tata Consultancy Services (TCS)</div>
              </div>
              <div className="text-sm text-gray-700 text-right">2019 – Present</div>
            </div>
            <ul className="list-disc list-outside ml-5 text-sm text-gray-800 space-y-1.5">
              <li>Executed comprehensive testing for financial systems processing $11M+ in daily transactions while ensuring 100% PCI DSS compliance and data security standards</li>
              <li>Designed and documented 300+ test scenarios and 500+ detailed test cases covering major banking modules, improving test coverage by 35%</li>
              <li>Identified and logged 30+ critical and high-priority defects per sprint using JIRA, achieving 95% defect resolution rate before production releases</li>
              <li>Performed regression testing across 15+ interconnected modules each sprint, reducing production incidents by 28%</li>
              <li>Optimized defect triage process and collaboration with development teams, reducing average resolution turnaround time by 40%</li>
              <li>Conducted mobile application testing across iOS and Android platforms, identifying 25+ UI/UX issues that increased customer satisfaction scores by 15%</li>
              <li>Developed and implemented smoke test automation suite using Selenium WebDriver with Java and TestNG, reducing smoke test execution time by 60%</li>
              <li>Integrated automated tests with Maven build system and GitHub version control, enabling continuous testing in CI/CD pipeline</li>
              <li>Performed comprehensive API validation using Postman and introduced basic API automation, improving API test coverage by 45%</li>
              <li>Mentored 3 junior testers on testing best practices, automation frameworks, and defect management processes</li>
            </ul>
          </div>

          <div className="mb-5">
            <div className="flex justify-between items-start mb-2">
              <div>
                <h4 className="font-bold text-gray-900">Production Control Room Head</h4>
                <div className="text-sm text-gray-700">Sanskruti TV</div>
              </div>
              <div className="text-sm text-gray-700 text-right">2015 – 2019</div>
            </div>
            <ul className="list-disc list-outside ml-5 text-sm text-gray-800 space-y-1.5">
              <li>Managed broadcast operations and technical production workflows for live television programming</li>
              <li>Implemented quality control processes that reduced on-air errors by 15%</li>
              <li>Coordinated with production teams to ensure seamless content delivery and technical execution</li>
            </ul>
          </div>

          <div className="mb-5">
            <div className="flex justify-between items-start mb-2">
              <div>
                <h4 className="font-bold text-gray-900">Content Writer & Marketing Associate</h4>
                <div className="text-sm text-gray-700">Set Blue</div>
              </div>
              <div className="text-sm text-gray-700 text-right">2014 – 2015</div>
            </div>
            <ul className="list-disc list-outside ml-5 text-sm text-gray-800 space-y-1.5">
              <li>Created engaging content for marketing campaigns and digital platforms</li>
              <li>Collaborated with marketing team to develop content strategies and promotional materials</li>
              <li>Contributed to brand messaging and customer engagement initiatives</li>
            </ul>
          </div>
        </section>

        {/* Education */}
        <section className="mb-6">
          <h3 className="text-lg font-bold text-gray-900 mb-3 uppercase border-b border-gray-300 pb-1">Education</h3>
          <div className="text-sm text-gray-800">
            <div className="font-semibold">Bachelor of Computer Applications (BCA)</div>
            <div className="text-gray-700">Computer Science & Applications</div>
          </div>
        </section>

        {/* Professional Development */}
        <section className="mb-6">
          <h3 className="text-lg font-bold text-gray-900 mb-3 uppercase border-b border-gray-300 pb-1">Professional Development</h3>
          <ul className="list-disc list-outside ml-5 text-sm text-gray-800 space-y-1.5">
            <li>Practical experience with Selenium WebDriver, TestNG, and Maven</li>
            <li>Extensive knowledge of Agile/Scrum methodologies</li>
            <li>PCI DSS compliance and financial systems security training</li>
          </ul>
        </section>

        {/* Footer note */}
        <div className="mt-8 pt-4 border-t border-gray-300 text-xs text-gray-600 italic">
          Note: Some metrics are estimated based on project scope and are being validated with project documentation.
        </div>
      </div>

      <style>{`
        @media print {
          body {
            print-color-adjust: exact;
            -webkit-print-color-adjust: exact;
          }
          
          @page {
            margin: 0.5in;
            size: letter;
          }
          
          * {
            box-shadow: none !important;
          }
        }
      `}</style>
    </div>
  );
};

export default Resume;
