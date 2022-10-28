const BtnPrim = (props: any) => {
  return (
    <div>
      <button
        disabled={props.disabled}
        className="bg-primary text-secondary font-medium px-8 py-2 text-xl md:text-sm rounded-full hover:brightness-[0.90] duration-200"
      >
        {props.content}
      </button>
    </div>
  );
};

export default BtnPrim;
