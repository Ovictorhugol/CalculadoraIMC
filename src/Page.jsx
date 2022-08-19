import React, { useState } from "react";

import InputRanger from "./micros/InputRanger";
import Button from "./micros/Button";
import { Container, Title, Text } from "./Page.styled";
function Page() {
  const [valueWeight, setValueWeight] = useState();
  const [valueHeight, setValueHeight] = useState();

  const [result, setResult] = useState();

  return (
    <Container>
      <Title>Calcule seu IMC</Title>
      <InputRanger
        rangeMin={30}
        rangeMax={120}
        stepRange={1}
        setValueWeight={setValueWeight}
        title="Peso"
      />
      <InputRanger
        rangeMin={1.31}
        rangeMax={2.11}
        stepRange={0.01}
        setValueHeight={setValueHeight}
        title="Altura"
      />
      <Button
        valueWeight={valueWeight}
        valueHeight={valueHeight}
        setResult={setResult}
      />
      <Text>{result} </Text>
    </Container>
  );
}

export default Page;
