function Bar({ note, color }: { note: string; color: string }) {
  const playNote = () => {
    const audio = new Audio(`/${note}.wav`);
    audio.play();
  };
  return (
    <div
      className={`w-12 h-40 md:w-16 md:h-64 lg:w-20 lg:h-72 flex place-items-center justify-center rounded-lg ${color}`}
      onClick={() => playNote()}
    >
      {note}
    </div>
  );
}

export default Bar;
// 80 / 24 = 3.3333333333333335
//
