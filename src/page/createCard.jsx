import Modal from "../components/modal";
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import TextField from "../components/textField";
import { validator } from "../utils/validator";

const CreateCard = () => {
  const [data, setData] = useState({
    name: "",
    surname: "",
    birthYear: "",
    web: "",
  });

  const [editMode, setEditMode] = useState(false);

  const [errors, setErrors] = useState({});
  const [showModal, setShowModal] = useState(false);
  const [func, setFunc] = useState(false);

  const history = useHistory();

  const validatorConfig = {
    name: {
      isRequired: { message: `Поле "Имя" обязательно для заполнения` },
    },
    surname: {
      isRequired: { message: `Поле "Фамилия" обязательно для заполнения` },
    },
    birthYear: {
      isRequired: {
        message: `Поле "Год рождения" обязательно для заполнения`,
      },
      min: {
        message: `Поле "Год рождения" не корректно`,
        value: 4,
      },
      isNowYeah: {
        message: "Год рождения не может быть больше, чем текущий год",
      },
    },
    web: {
      isRequired: { message: `Поле "Портфолио" обязательно для заполнения` },
      isWeb: { message: `Поле "Портфолио" должно быть ссылкой` },
    },
  };
  const validate = () => {
    const error = validator(data, validatorConfig);
    setErrors(error);
    return Object.keys(errors).length === 0;
  };
  const isValide = Object.keys(errors).length === 0;

  const handleData = ({ target }) => {
    setData((prevState) => ({ ...prevState, [target.name]: target.value }));
  };

  const saveCard = () => {
    localStorage.setItem("student-card", JSON.stringify(data));
    setShowModal(false);
    history.push("/");
  };

  const handleBack = () => {
    history.push("/");
  };

  const handleUpdate = () => {
    localStorage.setItem("student-card", JSON.stringify(data));
    setShowModal(false);
    history.push("/");
  };

  const toggleModal = (e) => {
    const { target } = e;
    console.log(target.textContent);
    setShowModal((prevState) => !prevState);
    if (target.textContent === "Обновить") {
      setFunc(() => false);
    } else {
      setFunc(() => true);
    }
  };

  useEffect(() => {
    if (localStorage.getItem("student-card")) {
      setData({ ...JSON.parse(localStorage.getItem("student-card")) });
      setEditMode(true);
    }
  }, []);

  useEffect(() => {
    validate();
  }, [data]);
  return (
    <div className="container">
      <h1>Создать</h1>
      <TextField
        label="Имя"
        name="name"
        value={data.name}
        handler={handleData}
        error={errors.name}
      />
      <TextField
        label="Фамилия"
        name="surname"
        value={data.surname}
        handler={handleData}
        error={errors.surname}
      />
      <TextField
        label="Год рождения"
        name="birthYear"
        type="number"
        value={data.birthYear}
        handler={handleData}
        error={errors.birthYear}
        max={new Date(Date.now()).getFullYear()}
      />
      <TextField
        label="Портфолио"
        name="web"
        value={data.web}
        handler={handleData}
        error={errors.web}
      />
      <button className="btn btn-secondary mt-3 me-3" onClick={handleBack}>
        Назад
      </button>
      {editMode ? (
        <>
          <button className="btn btn-info mt-3" onClick={toggleModal}>
            Обновить
          </button>
        </>
      ) : (
        <button
          className="btn btn-primary mt-3"
          onClick={toggleModal}
          disabled={!isValide}
        >
          Создать
        </button>
      )}

      <Modal
        label={func ? "Запись создана" : "Обновлено"}
        show={showModal}
        handle={func ? saveCard : handleUpdate}
      />
    </div>
  );
};

export default CreateCard;
