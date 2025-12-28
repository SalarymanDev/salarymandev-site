export default async function Company() {
  return (
    <main className="flex flex-col items-center justify-center text-white">
      <div className="container grid grid-cols-2 items-center justify-center gap-6 px-4 py-4">
        <h1 className="col-span-2 text-center text-3xl font-bold">
          Salaryman Inc.
        </h1>
        <p className="col-span-2 pt-4 text-center">
          This is my company! I created it to publish software and video games.
        </p>
        <p className="col-span-2 text-center">
          However, I am also open to contract opportunities if you are looking
          for an experienced software engineer or maybe an amateur game
          developer.
        </p>
      </div>
    </main>
  );
}
