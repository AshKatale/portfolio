import React from 'react'
import "./Footer.css"

interface TerminalCardProps {
  logo: string;
  title: string;
  link: string;
}

export default function TerminalCard({logo, title, link}: TerminalCardProps)  {
  return (
    <div className="card">
        <div className="wrap">
          <div className="terminal">
            <hgroup className="head">
              <p className="title">
                <a href={link}><img src={logo} className="size-8"></img></a>
                {title}
              </p>
            </hgroup>
            <div className="body">
              <pre className="pre">
                {" "}
                <code>-&nbsp;</code>
                <code>npx&nbsp;</code>
                <code>{link}</code>
              </pre>
            </div>
          </div>
        </div>
      </div>
  )
}
