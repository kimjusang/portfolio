import Link from "next/link";

interface CustomLinkProps {
  href: string;
  text: string;
}

const CustomLink: React.FC<CustomLinkProps> = ({ href, text }) => {
  return (
    <Link
      href={href}
      target="_blank"
      rel="noreferrer"
      className="font-medium text-slate-200 hover:text-teal-300 focus-visible:text-teal-300"
    >
      {text}
    </Link>
  );
};

export default CustomLink;
