"use client";

//import { validatePassword } from "../validation";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

export default function RecoverPassword() {
  const [showPassword, setShowPassword] = useState({
    newPassword: false,
    confirmPassword: false,
  });
  const [formValid, setFormValid] = useState(false);
  const [errorText, setErrorText] = useState({
    newPassword: "",
    confirmPassword: "",
  });

  const handleClick = (inputName) => {
    setShowPassword({
      ...showPassword,
      [inputName]: !showPassword[inputName],
    });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    const newPasswordError =
      name === "password" && !validatePassword(value)
        ? "La contraseña debe tener al menos una mayúscula, una minúscula, un carácter especial, un dígito y tener al menos 6 caracteres de longitud."
        : "";
    const confirmPasswordError =
      name === "confirmPassword" &&
      value !== document.querySelector("[name='password']").value
        ? "Las contraseñas no coinciden"
        : "";

    setErrorText({
      ...errorText,
      [name]: name === "password" ? newPasswordError : confirmPasswordError,
    });

    setFormValid(
      newPasswordError === "" && confirmPasswordError === "" && value !== ""
    );
  };

  const handleInputBlur = (e) => {
    handleInputChange(e);
    const { name, value } = e.target;
    const newPasswordError =
      name === "password" && !validatePassword(value)
        ? "La contraseña debe tener al menos una mayúscula, una minúscula, un carácter especial, un dígito y tener al menos 6 caracteres de longitud."
        : "";
    const confirmPasswordError =
      name === "confirmPassword" &&
      value !== document.querySelector("[name='password']").value
        ? "Las contraseñas no coinciden"
        : "";

    setErrorText({
      ...errorText,
      newPassword:
        name === "password" ? newPasswordError : errorText.newPassword,
      confirmPassword:
        name === "confirmPassword"
          ? confirmPasswordError
          : errorText.confirmPassword,
    });

    setFormValid(
      newPasswordError === "" && confirmPasswordError === "" && value !== ""
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formValid) {
      console.log("El formulario contiene errores y no puede enviarse.");
      return;
    }

    const form = e.target;
    const newPassword = form.password.value;
    const confirmPassword = form.confirmPassword.value;

    // Procede con el envío del correo electrónico u otras acciones para recuperar la contraseña
    // Después del envío exitoso, limpiamos el formulario y redirigimos al usuario
    setShowPassword({
      newPassword: false,
      confirmPassword: false,
    });
    form.reset(); // Limpia el formulario
    console.log("Formulario enviado correctamente");
    // Aquí puedes agregar el código para redirigir al usuario a ResetPasswordConfirm
    window.location.href = "/resetPass";
  };

  return (
    <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-lg">
        <h1 className="text-center text-2xl font-bold text-green-600 sm:text-3xl">
          Did you forget your password?
        </h1>

        <p className="mx-auto mt-4 max-w-md text-center text-gray-500">
          Please enter your new password and a new password confirmation. We
          will send you an email with the link to confirm your new password.
        </p>

        <form
          action=""
          className="mb-0 mt-6 space-y-4 rounded-lg p-4 shadow-lg sm:p-6 lg:p-8"
          onSubmit={handleSubmit}
        >
          <p className="text-center text-lg font-medium">
            Create your new password
          </p>

          <div>
            <label htmlFor="text" className="sr-only">
              Password
            </label>

            <div className="relative">
              <input
                type={showPassword.newPassword ? "text" : "password"}
                name="password"
                className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                placeholder="Enter new password"
                onChange={handleInputChange}
                onBlur={handleInputBlur} // Añadimos el evento onBlur
              />
              <span
                className="absolute inset-y-0 end-0 grid place-content-center px-4"
                onClick={() => handleClick("newPassword")}
              >
                <FontAwesomeIcon
                  icon={showPassword.newPassword ? faEyeSlash : faEye}
                  className="h-4 w-4 text-gray-400"
                />
              </span>
            </div>
            {errorText.newPassword && (
              <p className="text-red-600 text-sm text-center">
                {errorText.newPassword}
              </p>
            )}
          </div>

          <div>
            <label htmlFor="password" className="sr-only">
              Password
            </label>

            <div className="relative">
              <input
                name="confirmPassword"
                type={showPassword.confirmPassword ? "text" : "password"}
                className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                placeholder="Repeat your password"
                onChange={handleInputChange}
                onBlur={handleInputBlur} // Añadimos el evento onBlur
              />
              <span
                className="absolute inset-y-0 end-0 grid place-content-center px-4"
                onClick={() => handleClick("confirmPassword")}
              >
                <FontAwesomeIcon
                  icon={showPassword.confirmPassword ? faEyeSlash : faEye}
                  className="h-4 w-4 text-gray-400"
                />
              </span>
            </div>
            {errorText.confirmPassword && (
              <p className="text-red-600 text-sm text-center">
                {errorText.confirmPassword}
              </p>
            )}
          </div>

          <button
            type="submit"
            className={`block w-full rounded-lg bg-indigo-600 px-5 py-3 text-sm font-medium text-white ${
              formValid ? "" : "opacity-50"
            }`}
            style={{ backgroundColor: "#065A46" }}
            disabled={!formValid} // Deshabilitar el botón si el formulario no es válido
          >
            Send email
          </button>
        </form>
      </div>
    </div>
  );
}
