function Bar({ note, color }: { note: string; color: string }) {
  const playNote = () => {
    const audio = new Audio(`/${note}.wav`);
    audio.play();
  };
  return (
    <div
      className={`w-14 h-28 flex place-items-center justify-center rounded ${color}`}
      onClick={() => playNote()}
    >
      {note}
    </div>
  );
}

export default Bar;
