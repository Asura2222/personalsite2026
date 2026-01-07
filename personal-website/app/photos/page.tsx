export const metadata = {
  title: "Photos | Name Surname",
  description: "A visual log of my journey.",
};

// Placeholder images - using simple colored divs in a real scenario these would be <Image />
const photos = [
  { id: 1, color: "bg-gray-200", aspect: "aspect-square", caption: "Speaking at Tech Summit 2024" },
  { id: 2, color: "bg-gray-300", aspect: "aspect-video", caption: "Build Myanmar Hackathon" },
  { id: 3, color: "bg-gray-400", aspect: "aspect-[3/4]", caption: "Yangon Office Opening" },
  { id: 4, color: "bg-gray-200", aspect: "aspect-square", caption: "Team Retreat" },
  { id: 5, color: "bg-gray-300", aspect: "aspect-[4/5]", caption: "Site Visit" },
  { id: 6, color: "bg-gray-400", aspect: "aspect-video", caption: "Community Workshop" },
];

export default function Photos() {
  return (
    <div className="mx-auto max-w-4xl">
      <h1 className="mb-12 text-4xl font-bold tracking-tight text-black dark:text-white">
        Photos
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Column 1 */}
        <div className="flex flex-col gap-4">
          {photos.filter((_, i) => i % 2 === 0).map((photo) => (
            <div key={photo.id} className="group relative overflow-hidden rounded-lg">
              <div className={`w-full ${photo.aspect} ${photo.color} dark:bg-gray-800 transition-opacity hover:opacity-90`} />
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                <p className="text-white text-sm font-medium">{photo.caption}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Column 2 */}
        <div className="flex flex-col gap-4">
          {photos.filter((_, i) => i % 2 !== 0).map((photo) => (
            <div key={photo.id} className="group relative overflow-hidden rounded-lg">
              <div className={`w-full ${photo.aspect} ${photo.color} dark:bg-gray-800 transition-opacity hover:opacity-90`} />
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                <p className="text-white text-sm font-medium">{photo.caption}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
