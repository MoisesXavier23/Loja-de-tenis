const ImageSlider = () => {
  return (
    <div
      style={{
        backgroundImage: `url(/assets/Promo-Image.png)`,
      }}
      className="max-w-full w-full min-[320px]:h-[160px] min-[425px]:h-[180px] min-[500px]:h-[280px] max-[540px]:h-[220px] min-[768px]:h-[320px] min-[1024px]:h-[430px] xl:h-[450px] bg-cover bg-center bg-no-repeat"
    ></div>
  );
};

export default ImageSlider;
