import { PillProps } from "@/interfaces";

const Pill = ( { label } : PillProps) => {
  return (
    <button className="px-4 py-2 mr- mb-2 rounded-full border border-[#e9e9e9]">
      <a href="#">{label}</a>
    </button>
  );
};

export default Pill;
