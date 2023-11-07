import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './style.css';

const WeatherApp = () => {
  const [weatherData, setWeatherData] = useState({});
  const [city, setCity] = useState(''); // Defina a cidade que você deseja pesquisar
  const apiKey = '4acecbdda62e7c6a159f6f988f6c0716'; // Substitua com sua própria chave de API

  useEffect(() => {
    // Função para buscar dados de previsão do tempo
    const fetchWeatherData = async () => {
      try {
        const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`);
        setWeatherData(response.data);
      } catch (error) {
        console.error('Erro ao buscar dados de previsão do tempo:', error);
      }
    };

    if (city) {
      fetchWeatherData();
    }
  }, [city, apiKey]);

  // Função para mapear a descrição do clima para emojis
  const mapWeatherDescriptionToEmoji = (description) => {
    switch (description) {
      case "Clear":
        return "☀️";
      case "Rain":
        return "🌧️";
      case "Clouds":
        return "☁️";
      case "Haze":
        return "🌫️";
      default:
        return "❓";
    }
  };

  return (
    <div>
        <div className="previsao">
      <h1>Clima Tempo 🌤️</h1>
      </div>
      <div className="clima">
      <input className='retangulo'
      
        type="text"
        placeholder="Digite o nome da cidade"
        onChange={(e) => setCity(e.target.value)}
      /></div>

      {weatherData.main && (
        <div className="clima">
          <h2>Condição: {mapWeatherDescriptionToEmoji(weatherData.weather[0].main)}</h2>
          <p>Temperatura: {weatherData.main.temp}°C</p>
          <p>Umidade: {weatherData.main.humidity}%</p>
        </div>
      )}
    </div>
  );
};

export default WeatherApp;
