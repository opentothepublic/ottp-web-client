export const Search: React.FC = () => {
  return (
    <form className="flex w-full justify-between mt-3">
      <input
        type="text"
        id="farcaster-username"
        name="farcaster-username"
        className="py-3 px-12 border-2 border-slate-400 grow"
        placeholder="search by Farcaster username"
      />
      <button className="w-40 bg-black text-white">Search</button>
    </form>
  );
};
