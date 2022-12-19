type Props = {
  clickFunction: any;
  btnText: String;
};

const TopBar = (props: Props) => {
  const { clickFunction, btnText } = props;
  return (
    <div className="h-16 w-full bg-[#252525] text-white">
      <button className=" px-5 py-2" onClick={clickFunction}>
        {btnText}
      </button>
    </div>
  );
};

export default TopBar;
