import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import { ruleYear } from "../utils/ruleYear";

const Card = () => {
  const [card, setCard] = useState({});
  const history = useHistory();
  console.log(card);
  useEffect(() => {
    if (localStorage.getItem("student-card")) {
      setCard({ ...JSON.parse(localStorage.getItem("student-card")) });
    }
  }, []);

  const goEdit = () => {
    history.push("/create");
  };

  const deleteCard = () => {
    localStorage.removeItem("student-card");
    history.push("/");
  };

  return (
    <div className="container">
      <h1>Карточка студента</h1>
      {!localStorage.getItem("student-card") ? (
        <>
          <p>Нет данных</p>
          <button className="btn btn-primary" onClick={goEdit}>
            Добавить
          </button>
        </>
      ) : (
        <div>
          <div>
            <strong>Имя:</strong> {card.name}
          </div>
          <div>
            <strong>Фамилия:</strong> {card.surname}
          </div>
          <div>
            <strong>Год рождения:</strong> {card.birthYear} (
            {new Date(Date.now()).getFullYear() - card.birthYear}{" "}
            {ruleYear(new Date(Date.now()).getFullYear() - card.birthYear)})
          </div>
          <div>
            <strong>Портфолио:</strong>{" "}
            <a href={card.web} target="_blank" rel="noreferrer">
              {card.web}
            </a>
          </div>
          <button className="btn btn-primary mt-4 me-4" onClick={goEdit}>
            Редактировать
          </button>
          <button className="btn btn-danger mt-4" onClick={deleteCard}>
            Удалить
          </button>
        </div>
      )}
    </div>
  );
};

export default Card;
