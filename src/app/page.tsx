import { Button } from "@nextui-org/button";
import Link from "next/link";
import React from "react";
import { FaRegSmile } from "react-icons/fa";

export default function Home() {
  return (
   <div>
    <h1 className="text-2xl">hello</h1>
    <Button 
      as={Link}
      href="/members"
      color='primary' 
      variant='bordered' 
      startContent={<FaRegSmile size={20} />}>
      Click me!
    </Button>
   </div>
  );
}
