const Sidebar = (props: { imgUrl: string }) => {
  return (
    <div>
      {" "}
      <div
        className="tw:[&_img]:cursor-pointer tw:[&_img]:w-17 tw:[&_img]:aspect-square tw:[&_img]:rounded-[5px]
            tw:max-h-100 tw:overflow-scroll tw:p-3 tw:flex tw:flex-col tw:gap-4 no-scrollbar"
      >
        <div>
          <img className="" src={props.imgUrl} />
        </div>
        <div>
          <img className="" src={props.imgUrl} />
        </div>
        <div>
          <img className="" src={props.imgUrl} />
        </div>
        <div>
          <img className="" src={props.imgUrl} />
        </div>
        <div>
          <img className="" src={props.imgUrl} />
        </div>
        <div>
          <img className="" src={props.imgUrl} />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
