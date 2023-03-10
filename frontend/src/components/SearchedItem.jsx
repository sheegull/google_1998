const SearchedItem = ({ data }) => {
  return (
    <div className="flex flex-col py-3 max-w-[700px]">
      <div className="group cursor-pointer" onClick={() => window.open(data.link, "_blank")}>
        <div className="underline text-xl text-[#2914E8] border-b-1 pt-2">{data.title}</div>
      </div>
      <div className="text-sm text-[#4d5156] leading-6 pt-1">{data.snippet}</div>
      <div className="text-sm truncate text-[#629889]">{data.formattedUrl}</div>
    </div>
  );
};

export default SearchedItem;
