import { AiOutlineFullscreen } from "react-icons/ai";
const GalleryMedium = ({ url, description }) => {
  return (
    <div className="relative  w-full flex flex-col gap-2 ">
      <img
        src={url}
        alt={url}
        className="w-full max-h-images object-cover rounded-lg "
      />
      <p className="inline-block  text-darkGray font-regular text-base">
        {description}
      </p>
      <AiOutlineFullscreen className="w-8 h-8 text-whites bg-blacks bg-opacity-50 z-10 rounded-md absolute cursor-pointer right-2 top-2" />
    </div>
  );
};

export default GalleryMedium;
