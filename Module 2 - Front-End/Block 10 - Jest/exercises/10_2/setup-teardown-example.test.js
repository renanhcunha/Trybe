let cities = [];

function getCities() {
  return cities;
}

function retrieveCitiesFromCache() {
  cities.push("Fortaleza");
  cities.push("Belo Horizonte");
}

function requestCities() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      cities.push("Fortaleza");
      cities.push("Belo Horizonte");
      cities.push("São Paulo");
      cities.push("Recife");
      cities.push("Porto Alegre");
      cities.push("Goiânia");
      cities.push("Manaus");
      cities.push("Teresina");
      resolve();
    }, 200);
  });
}

function removeCity(city) {
  const index = cities.indexOf(city);
  if (index > -1) cities.splice(index, 1);
}

function isCity(name) {
  return cities.includes(name);
}

function resetCities() {
  cities = [];
}

// Este beforeEach e este afterEach serão aplicados a todos os testes
beforeEach(() => {
  retrieveCitiesFromCache();
});

afterEach(() => {
  resetCities();
});

it("should have only 1 city after remove Belo Horizonte", () => {
  removeCity("Belo Horizonte");
  expect(getCities().length).toBe(1);
});

it("should have the city of Belo Horizonte", () => {
  expect(isCity("Belo Horizonte")).toBeTruthy();
});

describe('Requesting cities from api', () => {
  // Este beforeEach e este afterEach serão aplicados apenas aos testes
  // do bloco do describe
  beforeEach(() => {
    return requestCities();
  });
  
  afterEach(() => {
    resetCities();
  });

  it("should have 8 cities after request", () => {
    let cities = getCities();
    expect(cities.length).toBe(8);
  });

  it("should have the city of Belo Horizonte", () => {
    expect(isCity("Belo Horizonte")).toBeTruthy();
  });

  it("should have the city of Fortaleza", () => {
    expect(isCity("Fortaleza")).toBeTruthy();
  });
});