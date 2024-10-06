interface CatalogMediaYoutubeProps {
  data: any;
}

export default function MediaYoutube({ data }: CatalogMediaYoutubeProps) {
  return (
    <iframe
      key={data.id}
      className="w-96 rounded-xl shadow-md mb-2 aspect-video"
      src={data.url}
      title={data.title}
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      referrerPolicy="strict-origin-when-cross-origin"
      allowFullScreen
    />
  );
}
