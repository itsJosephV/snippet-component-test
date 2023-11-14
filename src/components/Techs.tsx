import { RadixIcon } from "../icons/RadixIcon";
import { ReactIcon } from "../icons/ReactIcon";
import { TSIcon } from "../icons/TSIcon";
import { TWIcon } from "../icons/TWIcon";


const Techs = () => {
  return (
    <p className="flex text-emerald-200 justify-center items-center flex-row gap-4">
      <TSIcon width="1.5em" height="1.5em" />
      <ReactIcon width="1.5em" height="1.5em" />{" "}
      <TWIcon width="1.5em" height="1.5em" />{" "}
      <RadixIcon width="1.5em" height="1.5em" />{" "}
    </p>
  );
};

export default Techs;
