import React from "react";
import {
  Navbar,
  Collapse,
  Typography,
  Button,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  IconButton,
} from "@material-tailwind/react";
import {
  CubeTransparentIcon,
  UserCircleIcon,
  CodeBracketSquareIcon,
  Square3Stack3DIcon,
  ChevronDownIcon,
  Cog6ToothIcon,
  InboxArrowDownIcon,
  LifebuoyIcon,
  PowerIcon,
  Bars2Icon,
  BookOpenIcon
} from "@heroicons/react/24/outline";
 

const defaultBlogItems = [
];

/*
  {
    title: "",
    href: ""
  }
*/


// nav list menu
const navListMenuItems = [
  {
    title: "Over mij",
    href: "/over"
  },
  {
    title: "Contact",
    href: "/contact"
  },
];


// nav list component - simple version where items appear directly next to each other
const navListItems = [
  {
    label: "Accomodatie",
    url: "/accomodatie"
  },
  {
    label: "Foto's",
    url: "/fotos"
  }
];

const navListItemsConfig = {
  dynamicPages: false
}



{/*
  {
    label: "",
    url: ""
  }
*/}


 interface Props {
   blogTypes: string[];
 }

function BlogListMenu(  { blogTypes }: Props) {

  const blogItems = blogTypes.length > 0 ? blogTypes.map((type) => {
    return {
      title: type.charAt(0).toUpperCase() + type.slice(1),
      href: `/blog/${type.toLowerCase()}`
    };
  }) : [];
  blogItems.push(...defaultBlogItems);


  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
 
  const triggers = {
    onMouseEnter: () => setIsMenuOpen(true),
    onMouseLeave: () => setIsMenuOpen(false),
  };
 
  const renderItems = blogItems.map(({ title, href }) => (
    <a href={href} key={title}>
      <MenuItem>
        <Typography variant="paragraph" color="blue-gray" className="mb-1 font-normal">
          {title}
        </Typography>
      </MenuItem>
    </a>
  ));
 
  return (
    <React.Fragment>
      <Menu open={isMenuOpen} handler={setIsMenuOpen}>
        <MenuHandler>
          <Typography as="a" href="#" variant="small" className="font-normal outline-none focus:outline-none">
            <MenuItem
              {...triggers}
              className="hidden items-center gap-2 text-blue-gray-900 lg:flex lg:rounded-full"
            >
              <BookOpenIcon className="h-[18px] w-[18px]" /> Blogsecties{" "}
              <ChevronDownIcon
                strokeWidth={2}
                className={`h-3 w-3 transition-transform ${
                  isMenuOpen ? "rotate-180" : ""
                }`}
              />
            </MenuItem>
          </Typography>
        </MenuHandler>
        <MenuList
          {...triggers}
          className="hidden grid-cols-7 gap-3 overflow-visible lg:grid"
        >
          <ul className="col-span-12 flex w-full flex-col gap-1 outline-none focus:outline-none">
            {renderItems}
          </ul>
        </MenuList>
      </Menu>
      <MenuItem className="flex items-center gap-2 text-blue-gray-900 lg:hidden">
        <BookOpenIcon className="h-[18px] w-[18px]" /> Blogsecties{" "}
      </MenuItem>
      <ul className="ml-6 flex w-full flex-col gap-1 lg:hidden">
        {renderItems}
      </ul>
    </React.Fragment>
  );
}

interface NavListMenuProps {
  title: string;
  links: { label: string; url: string }[];
}
 
function NavListMenu({ title, links }: NavListMenuProps) {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
 
  const triggers = {
    onMouseEnter: () => setIsMenuOpen(true),
    onMouseLeave: () => setIsMenuOpen(false),
  };
 
  const renderItems = links.map(({ label, url }) => (
    <a href={url} key={label}>
      <MenuItem>
        <Typography variant="paragraph" color="blue-gray" className="mb-1 font-normal">
          {label}
        </Typography>
      </MenuItem>
    </a>
  ));
 
  return (
    <React.Fragment>
      <Menu open={isMenuOpen} handler={setIsMenuOpen}>
        <MenuHandler>
          <Typography as="a" href="#" variant="small" className="font-normal outline-none focus:outline-none">
            <MenuItem
              {...triggers}
              className="hidden items-center gap-2 text-blue-gray-900 lg:flex lg:rounded-full"
            >
              <Square3Stack3DIcon className="h-[18px] w-[18px]" /> {title}{" "}
              <ChevronDownIcon
                strokeWidth={2}
                className={`h-3 w-3 transition-transform ${
                  isMenuOpen ? "rotate-180" : ""
                }`}
              />
            </MenuItem>
          </Typography>
        </MenuHandler>
        <MenuList
          {...triggers}
          className="hidden grid-cols-7 gap-3 overflow-visible lg:grid"
        >
          <ul className="col-span-12 flex w-full flex-col gap-1 outline-none focus:outline-none">
            {renderItems}
          </ul>
        </MenuList>
      </Menu>
      <MenuItem className="flex items-center gap-2 text-blue-gray-900 lg:hidden">
        <Square3Stack3DIcon className="h-[18px] w-[18px]" /> {title}{" "}
      </MenuItem>
      <ul className="ml-6 flex w-full flex-col gap-1 lg:hidden">
        {renderItems}
      </ul>
    </React.Fragment>
  );
}


 interface NavListProps {
   allNavListItems: { label: string; url?: string; links?: {label: string; url: string}[] }[];
 }

function NavList( {allNavListItems}: NavListProps) {
  return (
    <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center">

      { allNavListItems.map(({ label, url, links }) => {
        if (links && links.length > 0) {
          return <NavListMenu key={label} title={label} links={links} />
        } else {
          return (
        <Typography
          key={url}
          as="a"
          href={url}
          variant="small"
          color="blue-gray"
          className="font-normal"
        >
          <MenuItem className="flex items-center gap-2 lg:rounded-full">
            {label}
          </MenuItem>
        </Typography>
          )
        }
      })}
    </ul>
  );
}


interface ComplexNavbarProps {
  paginas: { label: string; url?: string; links?: {label: string; url: string}[] }[];
}
 
export default function ComplexNavbar(paginas: ComplexNavbarProps) {


  const [isNavOpen, setIsNavOpen] = React.useState(false);
  const [shouldShowBorder, setShouldShowBorder] = React.useState(false);

  const toggleIsNavOpen = () => setIsNavOpen((cur) => !cur);
 
  React.useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setShouldShowBorder(true);
      } else {
        setShouldShowBorder(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setIsNavOpen(false)
    );
  }, []);
 
  return (
    <Navbar
      className={`sticky inset-0 z-10 mx-auto max-w-screen-2xl p-2 lg:pl-6 mt-4 transition-shadow bg-primary-200 ${
        shouldShowBorder ? "border-b border-gray-300 shadow-none" : ""
      }`}
    >
      <div className="relative mx-auto flex items-center text-blue-gray-900">
        <Typography
          as="a"
          href="/"
          className="mr-4 ml-2 cursor-pointer py-1.5 font-medium"
        >
           't Vijverdal
        </Typography>
        <div className="hidden lg:flex ml-auto">
          <NavList allNavListItems={paginas.paginas} />
        </div>
        <IconButton
          size="sm"
          color="blue-gray"
          variant="text"
          onClick={toggleIsNavOpen}
          className="ml-auto mr-2 lg:hidden"
        >
          <Bars2Icon className="h-6 w-6" />
        </IconButton>
        <a href="/zaalkalenders">
          <Button className="bg-accent">Kalenders</Button>
        </a>
      </div>
      <Collapse open={isNavOpen} className="overflow-scroll">
        <NavList allNavListItems={navListItems} />
      </Collapse>
    </Navbar>
  );
}