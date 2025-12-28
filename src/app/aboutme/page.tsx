import { GithubIcon, LinkedinIcon } from "lucide-react";
import Image from "next/image";

export default async function AboutMe() {
  return (
    <main className="flex flex-col items-center justify-center text-white">
      <div className="container flex flex-col items-center justify-center gap-6 px-4 py-4">
        <div className="flex flex-row items-center justify-center pb-2">
          <Image
            alt="Profile Picture"
            width={200}
            height={200}
            src="/profile.png"
            className="mr-8 h-20 w-auto"
          ></Image>
          <div className="items-begin flex shrink-0 flex-col justify-center">
            <h1 className="text-3xl font-bold">Robert Kennedy</h1>
            <h2 className="text-xl font-bold">SalarymanDev</h2>
            <h3 className="text-md font-bold">Founder of Salaryman Inc.</h3>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-6 p-2">
          <p className="col-span-2 text-center">
            {
              "Hello! I'm Robert an ex-Amazon software engineer and amateur game developer."
            }
          </p>
          <p className="col-span-2 text-center">
            {
              "I'm originally from the United States but moved to Japan to study Japanese. I'm now based out of Tokyo."
            }
          </p>
          <div className="flex flex-col items-center justify-center">
            <h3 className="text-lg font-bold">Experience</h3>
            <p>Founder of Salaryman Inc.</p>
            <p>5 Years at Amazon</p>
            <p>2 Years at ImageSoft</p>
            <p>1 Year of Contract Work</p>
          </div>

          <div className="flex flex-col items-center justify-center">
            <h3 className="text-lg font-bold">Hobbies</h3>
            <p>Video Games</p>
            <p>Backpacking/Hiking</p>
            <p>Traveling</p>
            <p>AI Agent Workflows</p>
          </div>

          <div className="flex flex-col items-center justify-center">
            <h3 className="text-lg font-bold">Languages</h3>
            <p>English (Native)</p>
            <p>Japanese (Elementary)</p>
          </div>

          <div className="flex flex-col items-center justify-center">
            <h3 className="text-lg font-bold">Links</h3>
            <div className="flex flex-col items-center">
              <a
                className="flex flex-row items-center justify-center hover:text-gray-300"
                href="https://github.com/SalarymanDev"
                target="_blank"
              >
                <GithubIcon className="mr-1 size-5" />
                GitHub
              </a>
              <a
                className="flex flex-row items-center justify-center hover:text-gray-300"
                href="https://www.linkedin.com/in/salaryman/"
                target="_blank"
              >
                <LinkedinIcon className="mr-1 size-5" />
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
