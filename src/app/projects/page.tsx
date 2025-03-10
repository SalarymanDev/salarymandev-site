export default async function Projects() {
  return (
    <main className="flex flex-col items-center justify-center text-white">
      <div className="container flex flex-col items-center justify-center gap-6 px-4 py-4">
        <h1 className="text-3xl font-bold">Projects</h1>

        <div className="grid grid-cols-2">
          <div className="flex flex-col p-4">
            <h1 className="text-2xl font-bold">Backcountry</h1>
            <p>
              Backcountry is a video game where you backpack a scenic mountain
              range and take pictures of nature. From your cabin in the
              mountains you must plan and prepare your food, water, and
              equipment to trek deep into the mountains.
            </p>
            <p className="pt-4">Created using Unreal Engine 5</p>
          </div>

          <div className="flex flex-col p-4">
            <h1 className="text-2xl font-bold">Floating Star</h1>
            <p>
              Help bring color back in this pastel sci-fi world where you travel
              around the galaxy helping those you find. The color in the world
              is reflected by emotions becoming grey around those who are sad or
              virbant around those that are happy.
            </p>
            <p className="pt-4">Created using Godot 4.4</p>
          </div>

          <div className="flex flex-col p-4">
            <h1 className="text-2xl font-bold">Salaryman AI Coder</h1>
            <p>
              This is a GitHub Application that will automatically write code
              and submit pull requests for any repository issues assigned to it.
            </p>
            <p className="pt-4">
              Created using NextJS, Vercel, GitHub Apps, and Redis.
            </p>
          </div>

          <div className="flex flex-col p-4">
            <h1 className="text-2xl font-bold">TASTE</h1>
            <p>
              The Anime Soundtrack Testing Establishment (TASTE) is database for
              my friends and I to track and rate anime opening/outro music to
              determine if they are certified bangers, or not. This includes
              TASTE board members being able to vote yea or nay on each song.
            </p>
            <p className="pt-4">
              Created using NextJS, Vercel, and Postgresql.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
