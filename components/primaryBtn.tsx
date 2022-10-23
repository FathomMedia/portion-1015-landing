const BtnPrim = (props: any) => {
  return (
    <div>
      <button
        disabled={props.disabled}
        className="bg-primary text-secondary font-medium px-8 py-2 text-sm rounded-full hover:brightness-[0.98] duration-200"
      >
        {props.content}
      </button>
    </div>
  );
};

export default BtnPrim;
