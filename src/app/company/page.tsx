// import Image from "next/image";

export default async function Company() {
  return (
    <main className="flex flex-col items-center justify-center text-white">
      <div className="container flex flex-col items-center justify-center gap-6 px-4 py-4">
        <div className="flex flex-col items-center justify-center pb-2">
          {/* <Image
            alt="Profile Picture"
            width={200}
            height={200}
            src="/profile.png"
            className="mr-8 h-20 w-auto"
          ></Image> */}
          <h1 className="text-3xl font-bold">Salaryman LLC</h1>
          <h3 className="text-xl">Test</h3>
          {/* <div className="items-begin flex shrink-0 flex-col justify-center">
            <h1 className="text-3xl font-bold">Salaryman LLC</h1>
            <h2 className="text-xl font-bold">SalarymanDev</h2>
            <h3 className="text-md font-bold">Founder of Salaryman, LLC</h3>
          </div> */}
        </div>
        <div className="grid grid-cols-2 gap-6 p-2">
          {/* <p className="col-span-2">
            {
              "Yo, I'm Robert an ex-Amazon software engineer from the United States currently living in Tokyo, Japan."
            }
          </p> */}
        </div>
      </div>
    </main>
  );
}
