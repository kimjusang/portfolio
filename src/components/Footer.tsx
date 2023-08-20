import CustomLink from "./CustomLink";

const Footer = () => {
  const commonProps: { linkType: "footer" } = { linkType: "footer" };

  return (
    <footer className="max-w-md pb-16 text-sm text-slate-500 sm:pb-0">
      <p>
        This portfolio website is built with Next.js and Tailwind CSS. Please
        contact me via{" "}
        <CustomLink
          {...commonProps}
          href="https://www.linkedin.com/in/jusang-kim/"
          text="LinkedIn"
        />{" "}
        or{" "}
        <CustomLink
          {...commonProps}
          href="mailto:kimjusang@gmail.com"
          text="email"
        />{" "}
        if you have any questions!
      </p>
    </footer>
  );
};

export default Footer;
