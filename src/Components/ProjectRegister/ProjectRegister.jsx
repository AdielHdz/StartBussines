import { useState, useEffect } from "react";
import axios from "axios";
import {
  description,
  validateBusinessName,
} from "./validations/validationProject";
import { differenceInDays } from "date-fns";
import categories from "./categories/categories";
import Saludo from "../Saludo/Saludo";
import {
  capitalizeFirstLetter,
  formatAllLetter,
} from "../StringUtils/StringUtils";
import Loading from "../Loading/Loading";

const ProjectRegister = () => {
  const [businessName, setBusinessName] = useState("");
  const [city, setCity] = useState("");
  const [startDate, setStartDate] = useState("");
  const [targetAmount, setTargetAmount] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [deadline, setDeadline] = useState("");
  const [descriptionInput, setDescriptionInput] = useState("");
  const [minAmount, setMinAmount] = useState("");
  const [maxAmount, setMaxAmount] = useState("");
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [isDescriptionError, setDescriptionError] = useState(false);
  const [deadlineError, setDeadlineError] = useState("");
  const [businessNameError, setBusinessNameError] = useState("");
  const [idSessionhome, setidSessionhome] = useState("");
  const [fullName, setfullName] = useState("");
  const [photos, setPhotos] = useState([]);
  const [isLoading, setLoading] = useState(false);

  const nombreUsuario = fullName;
  const textoPersonalizado = "What project are you going to create today?";

  useEffect(() => {
    if (typeof window !== "undefined") {
      const idSessionhome = localStorage.getItem("idSession");
      setidSessionhome(idSessionhome);
    }
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const fullName = localStorage.getItem("fullName");
      setfullName(fullName);
    }
  }, []);

  console.log("Id inicio: ", idSessionhome);
  console.log("Nombre Usuario: ", fullName);

  const handleChangeBusinessName = (e) => {
    const value = formatAllLetter(e.target.value);
    setBusinessName(value);
    setBusinessNameError("");
  };

  const handleBusinessNameBlur = () => {
    try {
      validateBusinessName(businessName);
      setBusinessNameError("");
    } catch (error) {
      setBusinessNameError(error.message);
    }
  };

  const handleChangeCity = (event) => {
    const formattedCity = capitalizeFirstLetter(event.target.value);
    setCity(formattedCity);
  };

  const handleDescriptionChange = (e) => {
    const value = capitalizeFirstLetter(e.target.value);
    setDescriptionInput(value);
    setDescriptionError(false);
    try {
      const validatedDescription = description(value);
      setDescriptionInput(validatedDescription);
    } catch (error) {
      console.error(error.message);
      setDescriptionError(true);
    }
  };

  const handlePhotoUpload = async (event) => {
    const file = event.target.files[0];
    setPhotos([file]);
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

  console.log("Nombre: ", businessName);
  const isStartDateValid = (startDate) => {
    const today = new Date();

    const selectedStartDate = new Date(startDate);
    return selectedStartDate >= today;
  };
  const isDeadlineValid = (startDate, deadline) => {
    const selectedStartDate = new Date(startDate);
    const selectedDeadline = new Date(deadline);
    const daysDifference = Math.floor(
      (selectedDeadline - selectedStartDate) / (1000 * 60 * 60 * 24)
    );
    return daysDifference >= 30;
  };

const handleDeadlineChange = (e) => {
  const newDeadline = e.target.value;
  setDeadline(newDeadline);

  const isDeadlineValid = validateDeadline(startDate, newDeadline);
  setDeadlineError(isDeadlineValid ? "" : "The deadline date must be at least 30 days after the start date.");
};

const validateDeadline = (startDate, deadline) => {
  
  const startDateObj = new Date(startDate);
  const deadlineObj = new Date(deadline);

  const thirtyDaysInMilliseconds = 30 * 24 * 60 * 60 * 1000;
  const isDeadlineValid = deadlineObj - startDateObj >= thirtyDaysInMilliseconds;

  return isDeadlineValid;
};

  const handlePostProject = async () => {
    setLoading(true);

    const projectData = {
      name: businessName,
      description: description(descriptionInput),
      min_amount: minAmount,
      max_amount: maxAmount,
      goal_amount: targetAmount,
      initial_date: formatDateToBackendFormat(startDate),
      deadline: formatDateToBackendFormat(deadline),
      category: selectedCategories,
      status: "Pending",
      city: city,
      UserId: idSessionhome,
    };

    try {
      validateBusinessName(businessName);
    } catch (error) {
      setLoading(false);
      setBusinessNameError(error.message);
      return;
    }

    if (!isStartDateValid(startDate)) {
      setLoading(false);
      console.log("The start date is not valid or is before the current date.");
      return;
    }

    if (!isDeadlineValid(startDate, deadline)) {
      setLoading(false);
      setDeadlineError(
        "The deadline date must be at least 30 days after the start date."
      );
      return;
    } else {
      setDeadlineError("");
    }

    const formData = new FormData();

    Object.entries(projectData).forEach(([key, value]) => {
      if (Array.isArray(value)) {
        value.forEach((item) => {
          formData.append(`${key}[]`, item);
        });
      } else {
        formData.append(key, value);
      }
    });

    if (photos.length > 0) {
      formData.append("image_cover", photos[0]);
    }

    try {
      const response = await axios.post("/projects/file", formData);
      const { name, status } = response.data.newProject;
      setLoading(false);
      alert(
        `Your new project ${name} has been created successfully. Currently, its status is ${status}. A moderator will review and approve it if it complies with our policies.`
      );
      setBusinessName("");
      setCity("");
      setStartDate("");
      setTargetAmount("");
      setSelectedCategory("");
      setDeadline("");
      setDescriptionInput("");
      setMinAmount("");
      setMaxAmount("");
      setSelectedCategories([]);
      setPhotos([]);
      setDescriptionError(false);
      setDeadlineError("");
      setBusinessNameError("");
    } catch (error) {
      setLoading(false);
      console.error("Error creating the project:", error);
    }
  };

  return (
    <>
      <div className="container mx-auto mt-8">
        <div className="flex justify-center mb-3 ">
          <Saludo nombre={nombreUsuario} textoAdicional={textoPersonalizado} />
        </div>
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
            onChange={handleChangeBusinessName}
            onBlur={handleBusinessNameBlur}
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
            onChange={handleChangeCity}
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
              The description cannot exceed 800 characters.
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
            onChange={handleDeadlineChange}
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
              handleCategoryChange(e);
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
          <label className="block mb-2 font-bold">Cover Photo</label>
          <div className="mb-5">
            <input
              className="hidden"
              type="file"
              accept="image/*"
              onChange={handlePhotoUpload}
              id="photo-upload"
            />
          </div>
          <div className="flex flex-wrap gap-4">
            {photos.map((photo, index) => (
              <div key={index} className="w-full">
                <div className="relative w-full max-w-full h-64">
                  <img
                    src={URL.createObjectURL(photo)}
                    alt={`Photo ${index + 1}`}
                    className="w-full h-64 object-cover rounded-lg"
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
      {isLoading && (
        <div className="fixed top-0 left-0 w-screen h-screen bg-black bg-opacity-50 flex items-center justify-center">
          <Loading width={20} height={20} borderWeight={5} loadingText={true} />
        </div>
      )}
    </>
  );
};

export default ProjectRegister;
