import Link from "next/link";

const Footer = () => {
  return (
    <footer className="max-w-md pb-16 text-sm text-slate-500 sm:pb-0">
      <p>
        This portfolio website is built with Next.js and Tailwind CSS. Please
        contact me via{" "}
        <Link
          className="font-medium text-slate-400 hover:text-teal-300 focus-visible:text-teal-300"
          href="https://www.linkedin.com/in/jusang-kim/"
          target="_blank"
          rel="noreferrer"
        >
          LinkedIn{" "}
        </Link>
        or{" "}
        <Link
          className="font-medium text-slate-400 hover:text-teal-300 focus-visible:text-teal-300"
          href="mailto: kimjusang@gmail.com"
          target="_blank"
          rel="noreferrer"
        >
          email{" "}
        </Link>
        if you have any questions!
      </p>
    </footer>
  );
};

export default Footer;
