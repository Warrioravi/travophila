"use client"
import React from "react";
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenuToggle, NavbarMenu, NavbarMenuItem, Link, Button} from "@nextui-org/react";
import Image from "next/image";
import Logo from '@components/assets/logo/travophila.png'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = [
    "Home",
    "Treks",
    "Camping",
    "Tour Packages",
    "Explore Places",
    "Expeditions",
    "Bike Trips",
    "Activities",
    "Work From Mountains",
    "About Us"
  ];

  return (
    <Navbar maxWidth="2xl" isBordered onMenuOpenChange={setIsMenuOpen}>
      <NavbarContent>
        <NavbarBrand>
          <img style={{height:25}} src={Logo.src} alt="travophila logo"/>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Link color="foreground" href="#">
            Tours
          </Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Link href="#" aria-current="page">
            Treks
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
            Places
          </Link>
        </NavbarItem>
       
        <NavbarItem>
          <Link color="foreground" href="#">
            Bike Trips
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
            Expeditions
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
            Camping
          </Link>
        </NavbarItem>

      </NavbarContent>
      <NavbarContent justify="end">
        {/* <NavbarItem className="hidden lg:flex">
          <Link href="#">Login</Link>
        </NavbarItem>
        <NavbarItem>
          <Button as={Link} color="primary" href="#" variant="flat">
            Sign Up
          </Button>
        </NavbarItem> */}
         {/* <NavbarItem>
          <Button as={Link} color="primary" href="#" variant="flat">
             Call us: 8448948112
          </Button>
        </NavbarItem> */}
            <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
      </NavbarContent>
      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              color={
                index === 0 ? "primary" : index === menuItems.length - 1 ? "danger" : "foreground"
              }
              className="w-full"
              href="#"
              size="lg"
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
