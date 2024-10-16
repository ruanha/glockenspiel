function Bar({
  note,
  color,
  showNote,
  height,
  width,
}: {
  note: string;
  color: string;
  showNote: boolean;
  height: number;
  width: number;
}) {
  const audio = new Audio(`/${note}.wav`);
  const playNote = () => {
    if (audio.duration > 0) {
      audio.currentTime = 0;
    }
    audio.play();
  };
  return (
    <div
      style={{ height: `${height}rem`, width: `${width}rem` }}
      className={`
        flex
        place-items-center
        justify-center
        rounded-lg 
        ${color}
        select-none
        shadow-md
        `}
      onClick={() => playNote()}
    >
      {showNote && note}
    </div>
  );
}

export default Bar;
