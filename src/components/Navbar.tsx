import { FC, useState, useEffect } from "react";
import {
  Navbar,
  Collapse,
  Typography,
  Button,
  IconButton,
  List,
  ListItem,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
} from "@material-tailwind/react";
import {
  ChevronDownIcon,
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/outline";

interface NavListMenuItem {
  title: string;
  link: string;
}

const navListMenuItems: NavListMenuItem[] = [
  {
    title: "Innovative Informatics Contest (I2C)",
    link: "/i2c"
  },
  {
    title: "Web Design Competition (WDC)",
    link: "/wdc"
  },
  {
    title: "Mobile UI/UX Competition (MUC)",
    link: "muc"
  },
];

interface Color {
  bg1: string;
  bg2: string;
  fg: string;
}

const NavListMenu: FC<Color> = (props:Color) => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
  const renderItems = navListMenuItems.map(
    (items , key) => (
      <a href={items.link} key={key}>
        <MenuItem className={`flex items-center gap-3 rounded-lg hover:bg-[${props.bg2}] hover:text-white ml-8 lg:ml-0`} placeholder={undefined}>
          <div>
            <Typography
              variant="h6"
              className="flex items-center text-sm font-bold font-brokenConsole" placeholder={undefined}            
              style={{color:isMobileMenuOpen ? props.fg : ""}}
            >
              {items.title}
            </Typography>
          </div>
        </MenuItem>
      </a>
    )
  );

  return (
    <>
      <Menu
        open={isMenuOpen}
        handler={setIsMenuOpen}
        offset={{ mainAxis: 20 }}
        placement="bottom"
        allowHover={true}
      >
        <MenuHandler>
          <Typography 
            as="div" 
            variant="paragraph" 
            className={`font-brokenConsole font-semibold`} 
            placeholder={undefined}
            style={{color:props.fg}}
          >
            <ListItem
              className={`flex items-center gap-2 pr-4 hover:bg-[${props.bg2}] hover:text-white focus:bg-[${props.bg2}] focus:text-white active:bg-[${props.bg2}] active:text-white`}
              selected={isMenuOpen || isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen((cur) => !cur)} 
              placeholder={undefined}       

            >
              Kompetisi
              <ChevronDownIcon
                strokeWidth={3.5}
                className={`hidden h-3 w-3 transition-transform lg:block ${
                  isMenuOpen ? "rotate-180" : ""
                }`}
              />
              <ChevronDownIcon
                strokeWidth={3.5}
                className={`block h-3 w-3 transition-transform lg:hidden ${
                  isMobileMenuOpen ? "rotate-180" : ""
                }`}
              />
            </ListItem>
          </Typography>
        </MenuHandler>
        <MenuList
          className="hidden max-w-screen-xl rounded-xl border-0 shadow-lg lg:block p-0"
          placeholder={undefined}
          style={{backgroundColor: props.bg1, color:props.fg}}
        >
          <ul className="outline-none outline-0" style={{backgroundColor: props.bg1, color:props.fg}}>
            <div className="grid grid-cols-1 gap-y-2 px-6 py-3">
              {renderItems}
            </div>
          </ul>
        </MenuList>
      </Menu>
      <div className="block lg:hidden">
        <Collapse open={isMobileMenuOpen}>{renderItems}</Collapse>
      </div>
    </>
  );
};

const NavList: FC<Color> = (props:Color) => {
  return (
    <List className="mt-4 mb-6 ml-12 p-0 lg:ml-0 lg:mt-0 lg:mb-0 lg:flex lg:flex-row lg:p-1 lg:gap-6" placeholder={undefined}>
      <NavListMenu bg1={props.bg1} bg2={props.bg2} fg={props.fg}/>
      <Typography
        as="a"
        href="/semnas"
        variant="paragraph"
        placeholder={undefined}
        className={`font-brokenConsole font-semibold`}
        style={{color: props.fg}}
      >
        <ListItem className={`flex items-center gap-2 pr-4 hover:bg-[${props.bg2}] hover:text-white focus:bg-[${props.bg2}] focus:text-white active:bg-[${props.bg2}] active:text-white`} placeholder={undefined}>
          Seminar Nasional
        </ListItem>
      </Typography>
      <Typography
        as="a"
        href="/sponsor"
        variant="paragraph"
        placeholder={undefined} 
        className={`font-brokenConsole font-semibold`}  
        style={{color: props.fg}}
      >
        <ListItem className={`flex items-center gap-2 pr-4 hover:bg-[${props.bg2}] hover:text-white focus:bg-[${props.bg2}] focus:text-white active:bg-[${props.bg2}] active:text-white`} placeholder={undefined}>
          Sponsor
        </ListItem>
      </Typography>
    </List>
  );
};

const NavBar: FC<Color> = (props: Color) => {
  const [openNav, setOpenNav] = useState<boolean>(false);

  useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  return (
    <Navbar 
      className={`fixed top-0 z-10 mx-auto max-w-full rounded-none px-0 lg:px-14 py-0 border-none text-xl transition`} 
      placeholder={undefined}
      blurred={false}
      shadow={false}
      style={{
        backgroundColor: props.bg1, 
        background: openNav ? props.bg1 : "none", 
        transitionProperty:"all", 
        transitionDuration: openNav ? "100ms" : "150ms", 
        transitionTimingFunction:"cubic-bezier(0.4, 0, 0.2, 1)", 
        transitionDelay: openNav ? "0ms" : "180ms"}}
      // style={{background: "none"}}
    >
      <div className="flex items-center justify-between">
        <Typography
          as="a"
          href="/"
          variant="h6"
          className="cursor-pointer ml-12 lg:ml-2" placeholder={undefined}        
        >
          <img src="images/ifest.webp" alt="ifest-logo" className="w-16 hover:scale-125 transition" />
        </Typography>
        <div className="flex items-center justify-end gap-6">
          <div className="hidden lg:block">
            <NavList bg1={props.bg1} bg2={props.bg2} fg={props.fg}/>
          </div>
          <div className="hidden lg:flex">
            <a href="/dash">
              <Button 
                size="lg" 
                placeholder={undefined}
                className={`font-montserrat`}
                style={{backgroundColor: props.bg2}}
              >
                Dashboard
              </Button>
            </a>
        </div>
        </div>
        <IconButton
          variant="text"
          color="blue"
          className={`lg:hidden mr-12`}
          style={{color:props.fg}}
          onClick={() => setOpenNav(!openNav)} placeholder={undefined}        
        >
          {openNav ? (
            <XMarkIcon className="h-8 w-8" strokeWidth={2} />
          ) : (
            <Bars3Icon className="h-8 w-8" strokeWidth={2} />
          )}
        </IconButton>
      </div>
      <Collapse className="" open={openNav} style={{backgroundColor: props.bg1}}>
        <NavList bg1={props.bg1} bg2={props.bg2} fg={props.fg}/>
        <div className="flex w-full ml-12 pl-3 mb-8 flex-nowrap items-center gap-2 lg:hidden">
          <a href="/dash">
            <Button 
              size="lg" 
              fullWidth 
              placeholder={undefined}
              className={`font-montserrat bg-[${props.bg2}]`}
              style={{backgroundColor: props.bg2}}
            >
              Dashboard
            </Button>
          </a>
        </div>
      </Collapse>
    </Navbar>
  );
};

export default NavBar;