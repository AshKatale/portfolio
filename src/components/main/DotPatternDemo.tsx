"use client";

import { cn } from "@/lib/utils";
import { DotPattern } from "../sub/DotPattern";
import { ParticlesDemo } from "./Particles";

export function DotPatternLinearGradient() {
  return (
    <div className="relative gap-20 flex-wrap flex size-full items-center justify-center overflow-hidden rounded-lg bg-background p-20 md:shadow-xl">
      
      <ParticlesDemo
        image={"./nexcall.png"}
        title={"Nexcall"}
        desc={
          "A seamless web-based communication platform bringing people together with just a click"
        }
        tech={["react.png","tailwind.png","mui.png","node-js.png","/express.png", "mongodb.png", "webrtc.png"]}
        link={["https://github.com/AshKatale/nex-call","https://nexcall.vercel.app/"]}
      />
      <ParticlesDemo
        image={"./wanderlust.png"}
        title={"Wanderlust"}
        desc={"Your gateway to unique travel stays and experiences, tailored to ignite adventure."}
        tech={["node-js.png","/express.png", "mongodb.png"]}
        link={["https://github.com/AshKatale/WanderLust","https://wanderlust-mlqi.onrender.com/"]}
      />
      <ParticlesDemo
        image={"./travelapp.jpg"}
        title={"AI Traveler"}
        desc={"Smart, personalized trip planning powered by AI for effortless exploration"}
        tech={["ReactNative .png","mui.png","mongodb.png","Firebase.png","expo.png"]}
        link={["https://github.com/AshKatale/travel-app","https://github.com/AshKatale/travel-app/releases/tag/v1.0.0"]}

      />
      <ParticlesDemo
        image={"./weather.png"}
        title={"Weather App"}
        desc={"Accurate forecasts at your fingertips, wherever you go"}
        tech={["node-js.png","/express.png", "mongodb.png","react.png","mui.png"]}
        link={["https://github.com/AshKatale/weather-app","https://weatherbyashkatale.netlify.app/"]}
      />
      <ParticlesDemo
        image={"./nextauth.png"}
        title={"Next Auth"}
        desc={"Secure and seamless authentication powered by MongoDB."}
        tech={["/ts.png","mui.png","next.png","jwt.svg","mongodb.png"]}
        link={["https://github.com/AshKatale/nextjs-auth","https://authnextjs-ash.vercel.app/"]}
      />

      <DotPattern
        width={20}
        height={20}
        cx={1}
        cy={1}
        cr={1}
        className={cn(
          "[mask-image:linear-gradient()] "
        )}
      />
    </div>
  );
}
