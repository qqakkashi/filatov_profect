import React, { useState } from "react";
import bg from "../../images/bg.png";
import { Container, PageContainer } from "../main/main.styled";
import {
  ReviewText,
  ReviewForm,
  Label,
  Input,
  SpecificsBox,
  GenderBox,
  RadioBoxInput,
  RadioOption,
  RadioLabel,
  SelectBox,
  Select,
  ReviewButton,
} from "./review.styled";
import { app } from "../../lib/firebase";
import { db } from "../../lib/firebase";
import { firebaseMethods } from "../../firebase_api/firebaseApi";

export const Review = () => {
  const [like, setLike] = useState("");
  const [uncomfortable, setUncomfortable] = useState("");
  const [notEnough, setNotEnough] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [nameSurname, setNameSurname] = useState("");
  const dates = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
    22, 23, 24, 25, 26, 27, 28, 29, 30, 31,
  ];

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const years = [
    1950, 1951, 1952, 1953, 1954, 1955, 1956, 1957, 1958, 1959, 1960, 1961,
    1962, 1963, 1964, 1965, 1966, 1967, 1968, 1969, 1970, 1971, 1972, 1973,
    1974, 1975, 1976, 1977, 1978, 1979, 1980, 1981, 1982, 1983, 1984, 1985,
    1986, 1987, 1988, 1989, 1990, 1991, 1992, 1993, 1994, 1995, 1996, 1997,
    1998, 1999, 2000,
  ];
  console.log(app);
  console.log(db);

  return (
    <Container image={bg.src}>
      <PageContainer>
        <ReviewText>
          Помогите нам сделать приложение лучше ответив на четыре вопроса
        </ReviewText>
        <ReviewForm>
          <Label for="name_surname">Имя Фамилия</Label>
          <Input
            id="name_surname"
            type="text"
            value={nameSurname}
            onChange={(e) => setNameSurname(e.target.value)}
          ></Input>
          <Label for="like">Что понравилось</Label>
          <Input
            id="like"
            type="text"
            value={like}
            onChange={(e) => setLike(e.target.value)}
          ></Input>
          <Label for="uncomfortable">Что показалось не удобным</Label>
          <Input
            id="uncomfortable"
            type="text"
            value={uncomfortable}
            onChange={(e) => setUncomfortable(e.target.value)}
          ></Input>
          <Label for="not_enough">Чего не хватает</Label>
          <Input
            id="not_enough"
            type="text"
            value={notEnough}
            onChange={(e) => setNotEnough(e.target.value)}
          ></Input>
          <SpecificsBox>
            <Label for="age">Возраст</Label>
            <Label for="gender">Пол</Label>
            <SelectBox>
              <Select required width={60} tabIndex="7">
                <option disabled>День</option>
                {dates.map((date) => {
                  return (
                    <option key={date} value={date}>
                      {date}
                    </option>
                  );
                })}
              </Select>
              <Select required width={100} tabIndex="7">
                <option disabled>Месяц</option>
                {months.map((month) => {
                  return (
                    <option key={month} value={month}>
                      {month}
                    </option>
                  );
                })}
              </Select>
              <Select required width={60} tabIndex="7">
                <option disabled>Год</option>
                {years.map((year) => {
                  return (
                    <option key={year} value={year}>
                      {year}
                    </option>
                  );
                })}
              </Select>
            </SelectBox>
            <GenderBox action="#" id="gender">
              <RadioOption>
                <RadioBoxInput
                  id="man"
                  type="radio"
                  name="radio-group"
                  value="man"
                  onClick={(e) => setGender(e.target.value)}
                ></RadioBoxInput>
                <RadioLabel for="man">Муж</RadioLabel>
              </RadioOption>
              <RadioOption>
                <RadioBoxInput
                  id="women"
                  type="radio"
                  name="radio-group"
                  value="women"
                  onClick={(e) => setGender(e.target.value)}
                ></RadioBoxInput>
                <RadioLabel for="women">Жен</RadioLabel>
              </RadioOption>
            </GenderBox>
          </SpecificsBox>
          <ReviewButton
            onClick={() =>
              firebaseMethods.setData({
                like: like,
                uncomfortable: uncomfortable,
                notEnough: notEnough,
                gender: gender,
                nameSurname: nameSurname,
              })
            }
          >
            Отправить отзыв
          </ReviewButton>
        </ReviewForm>
      </PageContainer>
    </Container>
  );
};

export default Review;
