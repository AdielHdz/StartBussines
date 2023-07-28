import { AiOutlineFullscreen } from "react-icons/ai";
const GalleryMedium = ({ url, description }) => {
  return (
    <div className="relative max-w-images">
      <img
        src={url}
        alt={url}
        className="max-w-images w-full h-40 object-cover rounded-lg "
      />
      <p className="inline text-xs text-darkGray font-regular">{description}</p>
      <AiOutlineFullscreen className="w-8 h-8 text-whites bg-blacks bg-opacity-50 z-10 rounded-md absolute cursor-pointer right-2 top-2" />
    </div>
  );
};

export default GalleryMedium;
