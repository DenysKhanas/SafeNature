import React, { useEffect, useState } from 'react';
import '../styles/ClimateData.css'; 
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
import Navigation from './Navigation';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const ClimateData = () => {
  const [climateData, setClimateData] = useState(null);
  const [temperatureData, setTemperatureData] = useState({
    labels: [],
    datasets: [
      {
        label: 'Глобальна температура (°C)',
        data: [],
        borderColor: 'rgba(75, 192, 192, 1)',
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        fill: true,
        tension: 0.1
      },
      {
        label: 'Світове забруднення (PM2.5)',
        data: [],
        borderColor: 'rgba(255, 99, 132, 1)',
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        fill: true,
        tension: 0.1
      },
      {
        label: 'Концентрація CO₂ (ppm)',
        data: [],
        borderColor: 'rgba(54, 162, 235, 1)',
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
        fill: true,
        tension: 0.1
      },
      {
        label: 'Рівень Світового океану (см)',
        data: [],
        borderColor: 'rgba(153, 102, 255, 1)',
        backgroundColor: 'rgba(153, 102, 255, 0.2)',
        fill: true,
        tension: 0.1
      }
    ]
  });

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [
    'https://upload.wikimedia.org/wikipedia/commons/a/ab/%D0%9B%D0%B5%D0%B4%D0%BD%D0%B8%D0%BA_%D0%BD%D0%B0_%D0%B7%D0%B0%D0%BF%D0%B0%D0%B4%D0%BD%D0%BE%D0%BC_%D0%BF%D0%BE%D0%B1%D0%B5%D1%80%D0%B5%D0%B6%D1%8C%D0%B5_%D0%97%D0%B5%D0%BC%D0%BB%D0%B8_%D0%93%D1%80%D0%B5%D0%B9%D0%B0%D0%BC%D0%B0.jpg',
    'https://lesgazeta.by/wp-content/uploads/2024/03/1000.jpg',
    'https://images.wallpaperscraft.ru/image/single/palmy_dzhungli_art_128116_1920x1080.jpg'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); 

    return () => clearInterval(interval);
  }, [images.length]);

  useEffect(() => {
    const years = [2000, 2005, 2010, 2015, 2020];
    const temperatureValues = [14, 14.2, 14.5, 14.8, 15];
    const pollutionValues = [50, 55, 60, 65, 70]; 
    const co2Values = [370, 380, 390, 400, 412]; 
    const seaLevelValues = [0, 3, 7, 10, 15]; 

    setClimateData({
      year: years,
      temperature: temperatureValues,
      pollution: pollutionValues,
      co2: co2Values,
      seaLevel: seaLevelValues
    });

    setTemperatureData({
      labels: years,
      datasets: [
        {
          label: 'Глобальна температура (°C)',
          data: temperatureValues,
          borderColor: 'rgba(75, 192, 192, 1)',
          backgroundColor: 'rgba(75, 192, 192, 0.2)',
          fill: true,
          tension: 0.1
        },
        {
          label: 'Світове забруднення (PM2.5)',
          data: pollutionValues,
          borderColor: 'rgba(255, 99, 132, 1)',
          backgroundColor: 'rgba(255, 99, 132, 0.2)',
          fill: true,
          tension: 0.1
        },
        {
          label: 'Концентрація CO₂ (ppm)',
          data: co2Values,
          borderColor: 'rgba(54, 162, 235, 1)',
          backgroundColor: 'rgba(54, 162, 235, 0.2)',
          fill: true,
          tension: 0.1
        },
        {
          label: 'Рівень Світового океану (см)',
          data: seaLevelValues,
          borderColor: 'rgba(153, 102, 255, 1)',
          backgroundColor: 'rgba(153, 102, 255, 0.2)',
          fill: true,
          tension: 0.1
        }
      ]
    });
  }, []);

  return (
    <>
      <Navigation />
      <div className="climate-data-container">
        <h1>Дані про зміни клімату</h1>

        <div className="content-container">
          <div className="temperature-chart">
            <h2>Температурні зміни та екологічні показники</h2>
            {climateData && (
              <Line data={temperatureData} />
            )}
          </div>

          <div className="image-slider">
            <img src={images[currentImageIndex]} alt="Nature" />
          </div>

          <div className="eco-tips">
            <h2>Поради для боротьби зі зміною клімату</h2>
            <ul>
              <li>Скоротіть споживання енергії, використовуючи енергоефективні прилади.</li>
              <li>Перехід до відновлювальних джерел енергії, таких як сонце та вітер.</li>
              <li>Сортуйте відходи та зменшуйте використання пластику.</li>
              <li>Підтримуйте програми з відновлення лісів та збереження біорізноманіття.</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default ClimateData;
