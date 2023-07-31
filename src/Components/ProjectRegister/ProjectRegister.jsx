import { useState } from "react";
import axios from "axios";
import { useLocalStorage } from "../../hooks/useLocalStorage";
import {
  startDate,
  description,
  validateBusinessName,
} from "./validations/validationProject";
import { differenceInDays } from "date-fns";

const ProjectRegister = () => {
  const [formData, setFormData] = useLocalStorage("user", {});
  const [userState, setUserState] = useLocalStorage("user", {});
  const [businessName, setBusinessName] = useState("");
  const [city, setCity] = useState("");
  const [startDate, setStartDate] = useState("");
  const [targetAmount, setTargetAmount] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [deadline, setDeadline] = useState(""); // Agregamos el estado para la fecha límite
  const [descriptionInput, setDescriptionInput] = useState(""); // Agregamos el estado para la descripción
  const [minAmount, setMinAmount] = useState("");
  const [maxAmount, setMaxAmount] = useState(""); // Agregamos el estado para el monto máximo
  const [photos, setPhotos] = useState([]);
  const [imageDescriptions, setImageDescriptions] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState([]); // Agregamos el estado para las categorías seleccionadas
  const [isDescriptionError, setDescriptionError] = useState(false);
  const [deadlineError, setDeadlineError] = useState("");
  const [businessNameError, setBusinessNameError] = useState("");

  const categories = [
    "Art",
    "Comics",
    "Crafts",
    "Dance",
    "Design",
    "Fashion",
    "Film & Video",
    "Food",
    "Games",
    "Journalism",
    "Music",
    "Photography",
    "Publishing",
    "Technology",
    "Theater",
    // Agrega más categorías aquí según tus necesidades.
  ];

  const handlePhotoUpload = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      setPhotos((prevPhotos) => [...prevPhotos, reader.result]);
      setImageDescriptions((prevDescriptions) => [...prevDescriptions, ""]);
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const handleRemovePhoto = (index) => {
    setPhotos((prevPhotos) => prevPhotos.filter((_, i) => i !== index));
  };

  const handleCategoryChange = (e) => {
    const selectedCategory = e.target.value;
    const isCategorySelected = selectedCategories.includes(selectedCategory);

    if (!isCategorySelected && selectedCategory.trim() !== "") {
      setSelectedCategories((prevCategories) => [
        ...prevCategories,
        selectedCategory,
      ]);
    }
    setSelectedCategory("");
  };

  function formatDateToBackendFormat(date) {
    const day = date.slice(8, 10);
    const month = date.slice(5, 7);
    const year = date.slice(0, 4);
    return `${day}/${month}/${year}`;
  }

  const handleDescriptionChange = (e) => {
    const value = e.target.value;
    setDescriptionInput(value);
    setDescriptionError(false); // Establecemos el estado de error en falso para ocultar el mensaje de error
    try {
      const validatedDescription = description(value);
      setDescriptionInput(validatedDescription);
    } catch (error) {
      console.error(error.message);
      setDescriptionError(true); // Aquí indicamos que ha ocurrido un error
    }
  };

  const id = "e2d2c8d4-c08e-46ba-8958-cc8a75826ab6";
  const foto =
    "https://img.freepik.com/fotos-premium/ilustracion-joystick-gamepad-controlador-juegos-cyberpunk_691560-5812.jpg";

  console.log("Nombre: ", businessName);
  const isStartDateValid = (startDate) => {
    const today = new Date();

    // Compara la fecha de inicio con la fecha actual
    const selectedStartDate = new Date(startDate);
    return selectedStartDate >= today;
  };
  const isDeadlineValid = (startDate, deadline) => {
    const selectedStartDate = new Date(startDate);
    const selectedDeadline = new Date(deadline);
    const daysDifference = differenceInDays(
      selectedDeadline,
      selectedStartDate
    );
    return daysDifference >= 30;
  };

  const handlePostProject = () => {
    const projectData = {
      name: businessName,
      description: description(descriptionInput),
      min_amount: minAmount,
      max_amount: maxAmount,
      goal_amount: targetAmount,
      initial_date: formatDateToBackendFormat(startDate),
      deadline: formatDateToBackendFormat(deadline),
      image_cover: foto,
      category: selectedCategories,
      status: "Pending",
      city: city,
      UserId: id,
    };

    try {
      const validatedName = validateBusinessName(businessName);
      setBusinessName(validatedName);
    } catch (error) {
      setBusinessNameError(error.message);
      return;
    }

    console.log("Datos del proyecto:", projectData);

    if (!isStartDateValid(startDate)) {
      console.log(
        "La fecha de inicio no es válida o es anterior a la fecha actual."
      );
      return;
    }

    if (!isDeadlineValid(startDate, deadline)) {
      setDeadlineError(
        "La fecha de deadline debe ser al menos 30 días después de la fecha de inicio."
      );
      return;
    } else {
      setDeadlineError("");
    }

    const daysDifference = differenceInDays(
      new Date(deadline),
      new Date(startDate)
    );

    console.log("ID USUARIO: ", id);
    console.log(projectData);
    console.log("Lista de categorias: ", selectedCategories);

    axios
      .post("http://localhost:3001/projects", projectData)
      .then((response) => {
        // Aquí puedes manejar la respuesta del backend si es necesario
        console.log("Respuesta del servidor:", response.data);
      })
      .catch((error) => {
        // Aquí puedes manejar errores, si ocurre algún problema en la solicitud
        console.error("Error al crear el proyecto:", error);
      });
  };

  return (
    <div className="container mx-auto mt-8">
      <h2 className="text-2xl font-bold mb-4">Project Register</h2>
      <div className="mb-4">
        <label className="block mb-2 font-bold" htmlFor="businessName">
          Business Name
        </label>
        <input
          className="w-full px-4 py-2 border rounded-lg"
          type="text"
          id="businessName"
          value={businessName}
          onChange={(e) => setBusinessName(e.target.value)}
          onBlur={() => {
            try {
              validateBusinessName(businessName);
              setBusinessNameError("");
            } catch (error) {
              setBusinessNameError(error.message);
            }
          }}
        />
        {businessNameError && (
          <p className="text-red-500">{businessNameError}</p>
        )}
      </div>

      <div className="mb-4">
        <label className="block mb-2 font-bold" htmlFor="businessName">
          City
        </label>
        <input
          className="w-full px-4 py-2 border rounded-lg"
          type="text"
          id="city"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
      </div>
      <div className="mb-4">
        <label className="block mb-2 font-bold" htmlFor="startDate">
          Start Date
        </label>
        <input
          className="w-full px-4 py-2 border rounded-lg"
          type="date"
          id="startDate"
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
        />
      </div>
      {isStartDateValid(startDate) ? null : (
        <p className="text-red-500">
          La fecha de inicio no es válida o es anterior a la fecha actual.
        </p>
      )}
      <div className="mb-4">
        <label className="block mb-2 font-bold" htmlFor="targetAmount">
          Target Amount
        </label>
        <input
          className="w-full px-4 py-2 border rounded-lg"
          type="number"
          id="targetAmount"
          value={targetAmount}
          onChange={(e) => setTargetAmount(e.target.value)}
          min={1}
        />
      </div>
      <div className="mb-4">
        <label className="block mb-2 font-bold" htmlFor="minAmount">
          Min Amount
        </label>
        <input
          className="w-full px-4 py-2 border rounded-lg"
          type="number"
          id="minAmount"
          value={minAmount}
          onChange={(e) => setMinAmount(e.target.value)}
          min={1}
        />
      </div>
      <div className="mb-4">
        <label className="block mb-2 font-bold" htmlFor="maxAmount">
          Max Amount
        </label>
        <input
          className="w-full px-4 py-2 border rounded-lg"
          type="number"
          id="maxAmount"
          value={maxAmount}
          onChange={(e) => setMaxAmount(e.target.value)}
          min={1}
        />
      </div>
      <div className="mb-4">
        <label className="block mb-2 font-bold" htmlFor="description">
          Description
        </label>
        <textarea
          className="w-full px-4 py-2 border rounded-lg"
          id="description"
          value={descriptionInput}
          onChange={handleDescriptionChange}
          placeholder="Describe your project..."
        />
        {isDescriptionError && (
          <p className="text-red-500">
            The description cannot exceed 200 characters.
          </p>
        )}
      </div>
      <div className="mb-4">
        <label className="block mb-2 font-bold" htmlFor="deadline">
          Deadline
        </label>
        <input
          className="w-full px-4 py-2 border rounded-lg"
          type="date"
          id="deadline"
          value={deadline}
          onChange={(e) => setDeadline(e.target.value)}
        />
        {deadlineError && <p className="text-red-500">{deadlineError}</p>}
      </div>
      <div className="mb-4">
        <label className="block mb-2 font-bold" htmlFor="category">
          Categories
        </label>
        <select
          className="w-full px-4 py-2 border rounded-lg"
          id="category"
          value={selectedCategory}
          onChange={(e) => {
            handleCategoryChange(e); // Agregamos esta línea para llamar a la función handleCategoryChange al cambiar la selección
            setSelectedCategory(e.target.value);
          }}
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
        <div className="flex flex-wrap gap-2">
          {selectedCategories.map((category) => (
            <div key={category} className="bg-gray-200 p-2 rounded-lg">
              {category}
              <button
                className="ml-2 text-red-500"
                onClick={() =>
                  setSelectedCategories((prevCategories) =>
                    prevCategories.filter((c) => c !== category)
                  )
                }
              >
                X
              </button>
            </div>
          ))}
        </div>
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
