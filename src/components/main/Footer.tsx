import React from "react";
import "./Footer.css";
import TerminalCard from "./TerminalCard";

export default function Footer() {
  return (
    <div>

<p id='contact' className="z-10 mb-16 whitespace-pre-wrap text-center text-5xl font-medium tracking-tighter text-black dark:text-white">Contact Me</p>
    <div className="p-10 m-20 flex flex-wrap" >
      

      <TerminalCard title={"LinkedIn"} logo={"./linkedinlogo.svg"}  link={"http://www.linkedin.com/in/ashitoshkatale"} />
      <TerminalCard title={"Github"} logo={"github-142-svgrepo-com.svg"}  link={"http://www.github.com/ashitoshkatale"} />
      <TerminalCard title={"Gmail"} logo={"/gmail.svg"} link={"kataleashitosh123@gmail.com"} />
      <TerminalCard title={"Phone"} logo={"/phone.svg"} link={"+91 9322818122"} />


    </div>
    <h1 className="text-white text-l text-center mb-5">  Copyright © 2024 Ashitosh Katale. All Rights Reserved.</h1>
    </div>
  );
}
