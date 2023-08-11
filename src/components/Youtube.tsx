type Props = {
  embedId: string;
};

export function YoutubeEmbed({ embedId }: Props) {
  return (
    <iframe
      className="h-[90vh] w-full"
      src={`https://www.youtube.com/embed/${embedId}`}
      allowFullScreen
      title="Embedded youtube"
    />
  );
}
