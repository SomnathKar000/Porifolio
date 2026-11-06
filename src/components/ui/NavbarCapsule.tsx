import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { TabBar, TabBarItem } from "glisse";

interface RouterLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href?: string;
  to?: string;
}

const RouterLink = React.forwardRef<HTMLAnchorElement, RouterLinkProps>(
  ({ href, to, onClick, children, ...props }, ref) => {
    const destination = to || href || "/";
    return (
      <Link
        ref={ref}
        to={destination}
        onClick={(e) => {
          window.scrollTo({ top: 0, behavior: "smooth" });
          onClick?.(e);
        }}
        {...props}
      >
        {children}
      </Link>
    );
  }
);

RouterLink.displayName = "RouterLink";

export const NavbarCapsule: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const pathname = location.pathname;

  const currentTab = pathname.startsWith("/blog")
    ? "/blog"
    : pathname === "/contact"
    ? "/contact"
    : "/";

  const tabs: TabBarItem[] = [
    {
      value: "/",
      label: "About",
      href: "/",
    },
    {
      value: "/blog",
      label: "Blog",
      href: "/blog",
    },
    {
      value: "/contact",
      label: "Contact",
      href: "/contact",
    },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 pointer-events-none">
      <div className="h-20 max-w-4xl mx-auto px-6 flex items-center pointer-events-auto justify-center">
        <TabBar
          value={currentTab}
          onValueChange={(val) => {
            if (val && val !== currentTab) {
              navigate(val);
              window.scrollTo({ top: 0, behavior: "smooth" });
            }
          }}
          items={tabs}
          link={RouterLink}
          className="shadow-[0_8px_32px_-4px_rgba(0,0,0,0.6)] border border-white/10"
        />
      </div>
    </header>
  );
};
