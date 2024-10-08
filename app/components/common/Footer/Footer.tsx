import React from 'react'

function Footer() {
  return (
    <section className=" backdrop-blur-sm mt-32  ">
      <div className="max-w-screen-xl px-4 py-12 mx-auto space-y-8 overflow-hidden sm:px-6 lg:px-8">
        <nav className="flex flex-wrap justify-center -mx-5 -my-2">
          {["About", "Blog", "Team", "Pricing", "Contact", "Terms"].map((item) => (
            <div key={item} className="px-5 py-2">
              <a href="#" className="text-base leading-6 text-gray-500 hover:text-gray-900">
                {item}
              </a>
            </div>
          ))}
        </nav>
        <div className="flex justify-center mt-8 space-x-6">
          {[
            { name: "Facebook", icon: <FacebookIcon />,link:"#"},
            { name: "Instagram", icon: <InstagramIcon />,link:"#" },
            { name: "Twitter", icon: <TwitterIcon />,link:"#" },
            { name: "GitHub", icon: <GitHubIcon />,link:"#" },
            { name: "Dribbble", icon: <DribbbleIcon />,link:"#" },
          ].map((social) => (
            <a key={social.name} href={social.link} className="text-gray-400 hover:text-gray-500">
              <span className="sr-only">{social.name}</span>
              {social.icon}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

const FacebookIcon = () => (
  <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 24 24">
    <path
      fillRule="evenodd"
      d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
      clipRule="evenodd"
    />
  </svg>
);

const InstagramIcon = () => (
  <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 24 24">
    <path
      fillRule="evenodd"
      d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
      clipRule="evenodd"
    />
  </svg>
);

const TwitterIcon = () => (
  <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 24 24">
    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
  </svg>
);

const GitHubIcon = () => (
  <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 24 24">
    <path
      fillRule="evenodd"
      d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.167 6.839 9.49.5.092.682-.217.682-.483 0-.237-.01-1.02-.014-1.849-2.782.604-3.37-1.342-3.37-1.342-.454-1.157-1.11-1.466-1.11-1.466-.908-.62.069-.607.069-.607 1.004.07 1.533 1.032 1.533 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.944 0-1.092.39-1.984 1.03-2.682-.104-.253-.446-1.272.098-2.65 0 0 .84-.269 2.75 1.024a9.564 9.564 0 012.5-.336 9.55 9.55 0 012.5.336c1.91-1.293 2.75-1.024 2.75-1.024.544 1.378.202 2.397.099 2.65.64.698 1.03 1.59 1.03 2.682 0 3.841-2.339 4.687-4.566 4.935.36.31.68.923.68 1.86 0 1.343-.013 2.424-.013 2.753 0 .269.18.58.688.481C19.137 20.165 22 16.418 22 12c0-5.523-4.477-10-10-10z"
      clipRule="evenodd"
    />
  </svg>
);

const DribbbleIcon = () => (
  <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 24 24">
    <path
      fillRule="evenodd"
      d="M12 2C6.477 2 2 6.477 2 12c0 5.523 4.477 10 10 10s10-4.477 10-10S17.523 2 12 2zM3.802 12.934a7.96 7.96 0 008.88-.105A24.068 24.068 0 0113.46 20 8.001 8.001 0 013.8 12.934zm10.27 6.395a22.595 22.595 0 00-1.12-6.323 6.476 6.476 0 017.036 1.171 8.001 8.001 0 01-5.916 5.152zm6.045-7.204a8.04 8.04 0 00-8.03-2.77 22.884 22.884 0 00-1.887-3.263 8.001 8.001 0 019.917 6.034zm-11.224-7.12a7.962 7.962 0 015.254 2.938 22.94 22.94 0 00-4.04 2.582 7.962 7.962 0 01-3.861-4.315c.865-.45 1.78-.828 2.647-1.204zM4.31 9.437a6.46 6.46 0 003.343 4.265 23.022 23.022 0 00-3.686.489 8.025 8.025 0 01.343-4.754z"
      clipRule="evenodd"
    />
  </svg>
);

export default Footer