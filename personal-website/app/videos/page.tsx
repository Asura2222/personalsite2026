export const metadata = {
    title: "Videos | James Win",
    description: "A record of my work, ideas, and stories — on video.",
};

const videos = [
    {
        id: "nFmsdItCicg",
        title: "Video I",
        description: "",
    },
    {
        id: "sLO0P-j8pO0",
        title: "Video II",
        description: "",
    },
    {
        id: "NjsOKtwc1sY",
        title: "Video III",
        description: "",
    },
];

export default function Videos() {
    return (
        <div className="mx-auto max-w-4xl">
            <h1 className="mb-3 text-4xl font-bold tracking-tight text-black">
                Videos
            </h1>
            <p className="mb-12 text-gray-500 text-base">
                A record of my work, ideas, and stories —{" "}
                <a
                    href="https://www.youtube.com/@jameswin2222"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-black underline underline-offset-2 hover:text-gray-600 transition-colors"
                >
                    @jameswin2222
                </a>
            </p>

            <div className="flex flex-col gap-10">
                {videos.map((video) => (
                    <div key={video.id} className="group">
                        <div className="relative w-full overflow-hidden rounded-xl bg-gray-100 shadow-sm">
                            <div className="aspect-video w-full">
                                <iframe
                                    src={`https://www.youtube.com/embed/${video.id}`}
                                    title={video.title}
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    allowFullScreen
                                    className="h-full w-full"
                                />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
