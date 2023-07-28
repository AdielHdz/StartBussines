const thirdPartyRegister = () => {
  const handleClick = (event) => {
    event.preventDefault();
    console.log(form);

    axios
      .post('http://localhost:3001/user/login', form)
      .then((response) => {
        // console.log(response.data.userRegistered.data); // Muestra la respuesta en la consola
        // console.log(response.data.userRegistered.accessToken);

        setTokenSession(response.data.userRegistered.accessToken);
        setIdSession(response.data.userRegistered.data.id);
        setUserNameSession(response.data.userRegistered.data.fullName);
        setAvatarSession(response.data.userRegistered.data.avatar);
        setRolSession(response.data.userRegistered.data.rol);
        setSavedEmail(response.data.userRegistered.data.email);
        setUserSession({
          fullName: response.data.userRegistered.data.fullName,
          email: response.data.userRegistered.data.email,
          rol: response.data.userRegistered.data.rol,
          address: response.data.userRegistered.data.address,
          password: response.data.userRegistered.data.password,
          gender: response.data.userRegistered.data.gender,
          birthdate: response.data.userRegistered.data.birthdate,
          phone: response.data.userRegistered.data.phone,
          country: response.data.userRegistered.data.country,
          avatar: response.data.userRegistered.data.avatar,
          status: response.data.userRegistered.data.status,
          thirdPartyCreated:
            response.data.userRegistered.data.thirdPartyCreated,
        });

        router.push('/home');
      })
      .catch((error) => {
        console.log('Error:', error.response.data);
        setErrorLogin(error.response.data.error);
      });
  };
};

module;
