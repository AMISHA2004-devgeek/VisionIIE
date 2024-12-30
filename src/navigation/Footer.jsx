const Footer = () => {
  return (
    <footer className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Newsletter Section */}
        <div className="mb-12">
          <h3 className="font-serif text-2xl mb-4">
            Innovation in your inbox.
          </h3>
          <p className="text-gray-400 mb-4">
            Get the latest insights on rural innovation and Global South
            collaboration in your inbox.
          </p>
          <button className="border border-white px-6 py-2 hover:bg-white hover:text-black transition-colors">
            SIGN UP
          </button>
        </div>

        {/* Navigation Links */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div>
            <h4 className="font-medium mb-4">What We Do</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#approach" className="hover:text-white">
                  Approach
                </a>
              </li>
              <li>
                <a href="#events" className="hover:text-white">
                  Events
                </a>
              </li>
              <li>
                <a href="#changemakers" className="hover:text-white">
                  Changemakers
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium mb-4">Insights</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#insights" className="hover:text-white">
                  Blog & Reports
                </a>
              </li>
              <li>
                <a href="#media" className="hover:text-white">
                  Media
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium mb-4">Who We Are</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#about" className="hover:text-white">
                  About Us
                </a>
              </li>
              <li>
                <a href="#partners" className="hover:text-white">
                  Partners
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium mb-4">Connect</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#contact" className="hover:text-white">
                  Contact Us
                </a>
              </li>
              <li>
                <a
                  href="mailto:connect@visioniie.in"
                  className="hover:text-white"
                >
                  connect@visioniie.in
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-400 mb-4 md:mb-0">
              © 2024 Vision IIE. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm text-gray-400">
              <a href="#privacy" className="hover:text-white">
                Privacy Policy
              </a>
              <a href="#terms" className="hover:text-white">
                Terms of Use
              </a>
              <a href="#accessibility" className="hover:text-white">
                Accessibility
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
