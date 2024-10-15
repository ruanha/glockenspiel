function Bar({
  note,
  color,
  showNote,
}: {
  note: string;
  color: string;
  showNote: boolean;
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
      className={`
        w-12
        h-32
        md:w-16 
        md:h-64
        lg:w-20
        lg:h-72
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
