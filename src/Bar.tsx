function Bar({ note, color }: { note: string; color: string }) {
  return (
    <div
      className={`w-14 h-28 flex place-items-center justify-center rounded ${color}`}
    >
      {note}
    </div>
  );
}

export default Bar;
