import { type ReactNode } from "react";
import Link from "next/link";

interface CustomLinkProps {
  linkType: "about" | "footer";
  href: string;
  text: string;
}

const CustomLink = ({ linkType, href, text }: CustomLinkProps): ReactNode => {
  const commonProps = {
    href,
    target: "_blank",
    rel: "noreferrer",
  };

  const classes = {
    about:
      "font-medium text-slate-200 hover:text-teal-300 focus-visible:text-teal-300",
    footer:
      "font-medium text-slate-400 hover:text-teal-300 focus-visible:text-teal-300",
  };

  return (
    <Link {...commonProps} className={classes[linkType]}>
      {text}
    </Link>
  );
};

export default CustomLink;
