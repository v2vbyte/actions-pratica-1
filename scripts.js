// Função para fazer uma requisição GET a uma API e retornar dados em JSON
const fetchData = async (url) => {
  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error("Erro na requisição");
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Erro:", error);
    return null;
  }
};

// Função para filtrar dados por uma propriedade específica
const filterData = (data, key, value) =>
  data.filter((item) => item[key] === value);

// Função para calcular a média de uma propriedade numérica nos dados
const calculateAverage = (data, key) => {
  const values = data.map((item) => item[key]);
  const total = values.reduce((sum, val) => sum + val, 0);
  return values.length ? total / values.length : 0;
};

// Função para formatar dados em strings de exibição
const formatData = (data, key) =>
  data.map((item) => `${key}: ${item[key]}`).join(", ");

module.exports = { fetchData, filterData, calculateAverage, formatData };
