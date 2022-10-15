import styled from "styled-components";

export const ReviewText = styled.div`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 700;
  font-size: 22px;
  line-height: 165.9%;
  text-align: center;
  color: #ffffff;
  background: rgba(82, 88, 117, 0.56);
  border-radius: 11px 11px 0px 0px;
  padding 11px 14px;
  max-width:360px;
  margin:0 auto;
`;

export const ReviewForm = styled.div`
  background: rgba(156, 161, 180, 0.73);
  border-radius: 0px 0px 11px 11px;
  max-width: 360px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
`;

export const Label = styled.label`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 700;
  font-size: 17px;
  line-height: 21px;

  color: #000000;
  margin: 15px 13px 5px 13px;
`;

export const Input = styled.input`
  margin: 0px auto 20px auto;
  background: #ffffff;
  border-radius: 8px;
  width: 95%;
  height: 50px;
  border: 0;
  font-size: 20px;
`;

export const SpecificsBox = styled.div`
  width: 95%;
  display: grid;
  grid-template-columns: 200px 150px;
  margin: 0px auto;
`;

export const GenderBox = styled.form`
  display: flex;
  flex-direction: column;
  margin: 0px 0px 20px 0px;
`;

export const RadioOption = styled.div`
  margin: 0;
  display: flex;
  align-items: center;
  //   flex-direction: row-reverse;
`;

export const RadioLabel = styled.label`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 700;
  font-size: 15px;
  line-height: 21px;

  color: #000000;
  margin: 3px 3px 0px 5px;
`;

export const RadioBoxInput = styled.input`
  height: 20px;
  width: 20px;
`;

export const SelectBox = styled.div`
  max-width: 250px;
  display: flex;
  margin: 3px 0px;
  justify-content: space-between;
  align-items: baseline;
`;

export const Select = styled.select`
  width: ${({ width }) => {
    `${width}px`;
  }};
  background-color: #ffffff;
`;

export const ReviewButton = styled.div`
  background: #323edd;
  width: 95%;
  height: 70px;
  border-radius: 40px;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 700;
  font-size: 17px;
  line-height: 21px;
  color: #ffffff;
  margin: 0px auto 20px auto;
  display: flex;
  align-items: center;
  justify-content: center;
`;
