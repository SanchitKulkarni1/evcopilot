import logo from "@/assets/logo.png";

const footerLinks = {
  company: {
    title: "VOCOPILOT",
    links: ["About Us", "Careers", "Blog", "Press"],
  },
  products: {
    title: "Products",
    links: ["Data Analytics", "Full Stack Dev", "Generative AI", "DSA Courses"],
  },
  community: {
    title: "Community",
    links: ["Events", "Discord", "YouTube", "Newsletter"],
  },
  important: {
    title: "Important Links",
    links: ["Terms & Conditions", "Privacy Policy", "Refund Policy", "Contact Us"],
  },
};

const Footer = () => {
  return (
    <footer className="border-t border-border bg-card">
      <div className="container mx-auto px-4 py-12 lg:px-8 lg:py-16">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-5">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <img src={logo} alt="VOCOPILOT" className="mb-4 h-14 w-auto" />
            <p className="mb-6 text-sm text-muted-foreground">
              Transforming careers through industry-aligned tech education.
            </p>
            <div className="flex gap-4">
              {["LinkedIn", "Twitter", "YouTube", "Instagram"].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="flex h-10 w-10 items-center justify-center rounded-lg bg-secondary text-muted-foreground transition-colors hover:bg-primary hover:text-primary-foreground"
                >
                  {social[0]}
                </a>
              ))}
            </div>
          </div>

          {/* Links Columns */}
          {Object.values(footerLinks).map((section) => (
            <div key={section.title}>
              <h4 className="mb-4 font-semibold text-foreground">{section.title}</h4>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Payment Methods */}
        <div className="mt-12 flex flex-wrap items-center justify-between gap-4 border-t border-border pt-8">
          <div className="flex items-center gap-4">
            <span className="text-sm text-muted-foreground">We accept:</span>
            <div className="flex gap-2">
              {["Visa", "MC", "UPI", "PayPal"].map((method) => (
                <div
                  key={method}
                  className="rounded bg-secondary px-3 py-1 text-xs font-medium text-muted-foreground"
                >
                  {method}
                </div>
              ))}
            </div>
          </div>
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} VOCOPILOT. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
