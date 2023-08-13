type Props = {
  embedId: string;
};

export function YoutubeEmbed({ embedId }: Props) {
  return (
    <div className="p-2 lg:p-8">
      <iframe
        className="h-[60vh] w-full lg:h-[90vh]"
        src={`https://www.youtube.com/embed/${embedId}`}
        allowFullScreen
        title="Embedded youtube"
      />
    </div>
  );
}
