import { useState, useEffect } from "react";
import { components } from "react-select";
import { Label, InputBox, Input, InputButton } from "./inputBox.styled";
import { default as ReactSelect } from "react-select";
import { PageContainer } from "../main/main.styled";

const Option = (props) => {
  return (
    <div>
      <components.Option {...props}>
        <input
          type="checkbox"
          checked={props.isSelected}
          onChange={() => null}
          style={{ margin: 0 }}
        />{" "}
        <label>{props.label}</label>
      </components.Option>
    </div>
  );
};
const Placeholder = (props) => {
  return <components.Placeholder {...props} />;
};

const selectOptions = [
  {
    label: "Понедельник",
    value: "moday",
  },
  {
    label: "Вторник",
    value: "tuesday",
  },
  {
    label: "Среда",
    value: "wednesday",
  },
  {
    label: "Четверг",
    value: "thursday",
  },
  {
    label: "Пятница",
    value: "friday",
  },
  {
    label: "Суббота",
    value: "saturday",
  },
  {
    label: "Воскресенье",
    value: "sunday",
  },
];

const InputBoxCouch = () => {
  const [optionSelected, setOptionSelected] = useState(null);
  const [name, setName] = useState("");
  const [eMail, setEMail] = useState("");
  const handleChange = (selected) => {
    setOptionSelected(selected);
  };
  useEffect(() => {
    console.log(optionSelected);
  }, [optionSelected]);

  console.log(optionSelected);
  console.log(name, eMail);
  return (
    <PageContainer>
      <InputBox>
        <Label for="name">Имя</Label>
        <Input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        ></Input>
        <Label for="e-mail">E-mail</Label>
        <Input
          type="email"
          id="e-mail"
          value={eMail}
          onChange={(e) => setEMail(e.target.value)}
        ></Input>
        <Label for="select">Предпочитамые дни</Label>
        <ReactSelect
          styles={{
            container: () => ({
              width: 368,
              margin: "0px auto 50px auto",
              height: 50,
              borderRadius: "8px",
              zIndex: 2,
            }),
            menu: () => ({
              width: 370,
              margin: 0,
              backgroundColor: "#FFFFFF",
              borderRadius: 5,
              fontFamily: "Montserrat",
              fontStyle: "normal",
              fontWeight: 700,
              fontSize: "15px",
              lineHeight: " 21px",
              zIndex: 2,
            }),
            control: () => ({
              minHeight: 50,
              display: "flex",
              backgroundColor: "#FFFFFF",
              borderRadius: "8px",
            }),
            input: () => ({
              minHeight: 30,
            }),
            placeholder: () => ({
              fontFamily: "Montserrat",
              fontStyle: "normal",
              fontWeight: 700,
              fontSize: "15px",
              lineHeight: " 21px",
            }),
            multiValue: () => ({
              display: "flex",
              fontFamily: "Montserrat",
              fontSize: "13px",
              backgroundColor: "#d9d9d9",
              margin: "0px 1px",
            }),
          }}
          id="select"
          options={selectOptions}
          isMulti
          closeMenuOnSelect={false}
          hideSelectedOptions={false}
          components={{
            Option,
            Placeholder,
          }}
          placeholder={""}
          onChange={() => handleChange()}
          allowSelectAll={true}
          value={optionSelected}
        />
      </InputBox>
      <InputButton filled={0}>Подробнее</InputButton>
      <InputButton filled={1}>Начать</InputButton>
    </PageContainer>
  );
};

export default InputBoxCouch;
