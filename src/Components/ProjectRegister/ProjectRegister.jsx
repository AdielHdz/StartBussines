import { useState } from 'react';

const ProjectRegister = () => {
  const [businessName, setBusinessName] = useState('');
  const [startDate, setStartDate] = useState('');
  const [targetAmount, setTargetAmount] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [photos, setPhotos] = useState([]);
  const [imageDescriptions, setImageDescriptions] = useState([]);

  const categories = [
    'Art',
    'Comics',
    'Crafts',
    'Dance',
    'Design',
    'Fashion',
    'Film & Video',
    'Food',
    'Games',
    'Journalism',
    'Music',
    'Photography',
    'Publishing',
    'Technology',
    'Theater',
    // Agrega más categorías aquí según tus necesidades.
  ];

  const handlePhotoUpload = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
  
    reader.onloadend = () => {
      setPhotos((prevPhotos) => [...prevPhotos, reader.result]);
      setImageDescriptions((prevDescriptions) => [...prevDescriptions, '']);
    };
  
    if (file) {
      reader.readAsDataURL(file);
    }
  };
  

  const handleRemovePhoto = (index) => {
    setPhotos((prevPhotos) => prevPhotos.filter((_, i) => i !== index));
  };

  const handlePostProject = () => {
    // Aquí puedes enviar los datos, incluyendo las imágenes y descripciones,
    // al servidor o realizar cualquier otra acción necesaria.
  };
  

  return (
    <div className="container mx-auto mt-8">
      <h2 className="text-2xl font-bold mb-4">Project Register</h2>
      <div className="mb-4">
        <label className="block mb-2 font-bold" htmlFor="businessName">Business Name</label>
        <input
          className="w-full px-4 py-2 border rounded-lg"
          type="text"
          id="businessName"
          value={businessName}
          onChange={(e) => setBusinessName(e.target.value)}
        />
      </div>
      <div className="mb-4">
        <label className="block mb-2 font-bold" htmlFor="startDate">Start Date</label>
        <input
          className="w-full px-4 py-2 border rounded-lg"
          type="date"
          id="startDate"
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
        />
      </div>
      <div className="mb-4">
        <label className="block mb-2 font-bold" htmlFor="targetAmount">Target Amount</label>
        <input
          className="w-full px-4 py-2 border rounded-lg"
          type="number"
          id="targetAmount"
          value={targetAmount}
          onChange={(e) => setTargetAmount(e.target.value)}
        />
      </div>
      <div className="mb-4">
        <label className="block mb-2 font-bold" htmlFor="category">Categories</label>
        <select
          className="w-full px-4 py-2 border rounded-lg"
          id="category"
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          <option value="">Select a category</option>
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>
      <div className="mb-4">
        <label className="block mb-2 font-bold">Photos</label>
        <div className="mb-5">
          <input
            className="hidden"
            type="file"
            accept="image/*"
            onChange={handlePhotoUpload}
            id="photo-upload"
          />
        </div>
        {/* Flexbox container to display images */}
        <div className="flex flex-wrap gap-4">
        {photos.map((photo, index) => (
            <div key={index} className="w-full">
            <div className="relative w-full max-w-full h-64">
                <img
                src={photo}
                alt={`Photo ${index + 1}`}
                className="w-full h-64 object-cover rounded-lg"
                />
                <input
                type="text"
                value={imageDescriptions[index]}
                onChange={(e) => {
                    const newDescriptions = [...imageDescriptions];
                    newDescriptions[index] = e.target.value;
                    setImageDescriptions(newDescriptions);
                }}
                placeholder="Image Description"
                className="w-full px-4 py-2 border rounded-lg mt-2 mb-4"
                />
            
                <button
                className="absolute top-2 right-2 text-red-500"
                onClick={() => handleRemovePhoto(index)}
                >
                X
                </button>
            </div>
            <br></br>
            <br></br>
            </div>
        ))}
                  <label
            className="px-4 py-2 bg-blue-500 text-white rounded-lg cursor-pointer"
            htmlFor="photo-upload"
          >
            + Add Photo
          </label>
        </div>
        <div className="my-4 mt-8 ">
        <button
            className="px-4 py-2 bg-green-500 text-white rounded-lg"
            onClick={handlePostProject}
        >
            Post Project
        </button>
        </div>
     </div>
    </div>
  );
};

export default ProjectRegister;
