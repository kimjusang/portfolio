import Link from "next/link";

const Footer = () => {
  return (
    <footer className="max-w-md pb-16 text-sm text-slate-500 sm:pb-0">
      <p>
        Loosely designed in&nbsp;
        <Link
          className="font-medium text-slate-400 hover:text-teal-300 focus-visible:text-teal-300"
          href="https://www.figma.com/"
          target="_blank"
          rel="noreferrer"
        >
          Figma
        </Link>
        &nbsp;and coded in&nbsp;
        <Link
          className="font-medium text-slate-400 hover:text-teal-300 focus-visible:text-teal-300"
          href="https://www.figma.com/"
          target="_blank"
          rel="noreferrer"
        >
          Visual Studio Code
        </Link>
        &nbsp;by yours truly. Built with&nbsp;
        <Link
          className="font-medium text-slate-400 hover:text-teal-300 focus-visible:text-teal-300"
          href="https://www.figma.com/"
          target="_blank"
          rel="noreferrer"
        >
          Next.js
        </Link>
        &nbsp;and&nbsp;
        <Link
          className="font-medium text-slate-400 hover:text-teal-300 focus-visible:text-teal-300"
          href="https://www.figma.com/"
          target="_blank"
          rel="noreferrer"
        >
          Tailwind CSS
        </Link>
        , deployed with&nbsp;
        <Link
          className="font-medium text-slate-400 hover:text-teal-300 focus-visible:text-teal-300"
          href="https://www.figma.com/"
          target="_blank"
          rel="noreferrer"
        >
          Vercel
        </Link>
        . All text is set in the&nbsp;
        <Link
          className="font-medium text-slate-400 hover:text-teal-300 focus-visible:text-teal-300"
          href="https://www.figma.com/"
          target="_blank"
          rel="noreferrer"
        >
          Inter
        </Link>
        &nbsp;typeface.
      </p>
    </footer>
  );
};

export default Footer;
