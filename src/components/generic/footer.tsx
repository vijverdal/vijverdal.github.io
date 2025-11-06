
import { Typography } from "@material-tailwind/react";

const YEAR = new Date().getFullYear();





const LINKS = [
  {
    name: "Zaalkalenders",
    link: "/zaalkalenders",
  },
  {
    name: "Reservatie-aanvraag",
    link: "/reservatie",
  },
  {
    name: "Reglement",
    link: "/reglement",
  },
];


export function Footer() {
  return (
    <footer className="relative z-50 px-8 pt-12 pb-6 bg-primary-800 !text-contrasttext">
      <div className="container mx-auto">
        <hr className="my-6 border-accent" />
        <div className="flex flex-wrap">
          <div className="w-full md:w-4/12">
            <Typography
              variant="h4"
              className="mb-2 !font-semibold !text-accent"
            >
              't Vijverdal
            </Typography>
            <Typography className="text-md mt-0 mb-2 font-normal !text-contrasttext">
              Ontmoetingscentrum in het hart van Merchtem.
            </Typography>
          </div>
          <div className="ml-auto w-full px-4 md:w-7/12">
            <div className="items-top mb-6 flex flex-wrap">
              <div className="w-6/12 pt-6 md:ml-auto md:px-4 md:pt-0 xl:w-3/12">
                <span className="text-md mb-4 block font-medium text-accent">
                  Ontmoetingscentrum 't Vijverdal
                </span>
                <ul className="list-unstyled">
                  {LINKS.map(({ name, link }, key) => (
                    <li key={key}>
                      <a
                        href={link}
                        target="_blank"
                        rel="noreferrer"
                        className="block pb-2 text-sm font-normal leading-relaxed text-!text-contrasttext transition-colors hover:text-accent"
                      >
                        {name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              
            </div>
          </div>
        </div>
        <hr className="my-6 border-accent" />
        <div className="flex flex-wrap items-center justify-center gap-2 md:justify-between">
          <div className="text-center lg:text-left">
            
            <div className="text-md mt-2 py-1 font-normal text-!text-contrasttext">
              Copyright &copy; {YEAR}{" "}
              <a href="/" className="text-inherit transition-all">
                't Vijverdal
              </a>{" "}
              <a
                href="https://atelierdp.github.io?ref=vijverdal-website"
                target="_blank"
                rel="noreferrer"
                className="text-inherit transition-all"
              >Made with ❤️ for a better web.
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
