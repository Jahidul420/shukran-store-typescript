
type Props = { kg: Number };

const KgButton = (props: Props) => {
  const { kg } = props;
  return (
    <button className={`py-[2px] px-2 border rounded-full  duration-500`}>
      {kg + " KG"}
    </button>
  );
};

export default KgButton;
