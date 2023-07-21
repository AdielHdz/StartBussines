"use client"
import { useState, useEffect  } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { getProjects } from "../redux/actions";
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.bundle.min';

export const SearchProjects = ({ setSuggestions }) => {
  // const [name, setName] = useState("");
  // const dispatch = useDispatch();
  // const usersYcompanies = useSelector((state) => state.usersYcompanies);

  // useEffect(() => {
  //   dispatch(getUsersAndCompanies());
  // }, [dispatch]);

  // const handleChange = (event) => {
  //   const searchValue = event.target.value.toLowerCase();
  //   setName(searchValue);

  //   // Filtrar la lista de nombres según el valor de búsqueda
  //   const filteredSuggestions = usersYcompanies.filter(
  //     (user) => user.userName.toLowerCase().includes(searchValue)
  //   );
  

  //   setSuggestions(searchValue ? filteredSuggestions : []);
  // };

  const [name, setName] = useState("");

  // Array simulado de proyectos (puedes reemplazar esto con tus datos reales)
  const projects = [
    {
      id: 1,
      projectName: "Proyecto 1",
      projectImage: "ruta/del/proyecto1.jpg",
      projectDescription: "Descripción del Proyecto 1...",
    },
    {
      id: 2,
      projectName: "Proyecto 2",
      projectImage: "ruta/del/proyecto2.jpg",
      projectDescription: "Descripción del Proyecto 2...",
    },
    {
      id: 3,
      projectName: "Proyecto 3",
      projectImage: "ruta/del/proyecto3.jpg",
      projectDescription: "Descripción del Proyecto 3...",
    },
    // Puedes agregar más proyectos simulados aquí
  ];

  const handleChange = (event) => {
    const searchValue = event.target.value.toLowerCase();
    setName(searchValue);

    // Filtrar la lista de proyectos simulados según el valor de búsqueda
    const filteredSuggestions = projects.filter(
      (project) => project.projectName.toLowerCase().includes(searchValue)
    );

    setSuggestions(searchValue ? filteredSuggestions : []);
  };

  return (
    <div className="d-flex flex-grow-2 w-50">
      <input
        className="form-control me-2 rounded-pill border border-blue-500"
        type="search"
        placeholder="Find Projects"
        value={name}
        onChange={handleChange}
      />
    </div>
  );
};
