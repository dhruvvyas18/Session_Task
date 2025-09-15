const ImagePart = (props: { imgUrl: string }) => {
  return (
    <div className="tw:w-[48%] tw:aspect-square">
      <div className="tw:[&_img]:rounded-2xl tw:w-full tw:h-full">
        <img src={props.imgUrl} />
      </div>
    </div>
  );
};

export default ImagePart;
