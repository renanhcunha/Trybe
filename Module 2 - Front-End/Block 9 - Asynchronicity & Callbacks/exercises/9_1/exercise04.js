const messageDelay = () => Math.floor(Math.random() * 5000);

const getMarsTemperature = () => {
  const maxTemperature = 58;
  return Math.floor(Math.random() * maxTemperature);
};

const sendMarsTemperature = (getTemperature) => {
  const temperature = getMarsTemperature();
  console.log(`Mars temperature is: ${temperature} degree Celsius`);
}
// crie a função sendMarsTemperature abaixo


setTimeout(() => sendMarsTemperature(), messageDelay()); // imprime "Mars temperature is: 20 degree Celsius", por exemplo