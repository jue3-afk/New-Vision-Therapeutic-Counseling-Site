export default function PrivacyPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-secondary">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-serif font-semibold text-foreground text-center text-balance">
            Privacy Policy
          </h1>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 bg-background">
        <div className="max-w-3xl mx-auto px-4">
          <div className="prose prose-lg max-w-none">
            <div className="space-y-8 text-muted-foreground leading-relaxed">
              <div>
                <h2 className="text-2xl font-serif font-semibold text-foreground mb-4">Your Privacy Matters</h2>
                <p>
                  At New Vision Therapy, we are committed to protecting your privacy and maintaining the confidentiality
                  of your personal health information. This policy outlines how we collect, use, and safeguard your
                  information.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-serif font-semibold text-foreground mb-4">Information We Collect</h2>
                <p>
                  We collect information necessary to provide you with quality mental health services, including your
                  name, contact information, health history, and treatment records. This information is collected
                  directly from you during the intake process and throughout your treatment.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-serif font-semibold text-foreground mb-4">How We Use Your Information</h2>
                <p>
                  Your information is used solely for the purpose of providing mental health treatment services,
                  including:
                </p>
                <ul className="list-disc list-inside mt-2 space-y-1">
                  <li>Scheduling and managing appointments</li>
                  <li>Providing therapy services</li>
                  <li>Processing payments</li>
                  <li>Communicating with you about your care</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-serif font-semibold text-foreground mb-4">Confidentiality</h2>
                <p>
                  All information shared during therapy sessions is confidential and protected by law. We will not
                  disclose your information without your written consent, except as required by law (such as cases
                  involving imminent harm to yourself or others, or suspected child/elder abuse).
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-serif font-semibold text-foreground mb-4">Data Security</h2>
                <p>
                  We use industry-standard security measures to protect your information, including encrypted
                  communications, secure electronic health records, and strict access controls.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-serif font-semibold text-foreground mb-4">Contact Us</h2>
                <p>
                  If you have questions about this privacy policy or how your information is handled, please contact us
                  at dejiofor@hotmail.com
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
