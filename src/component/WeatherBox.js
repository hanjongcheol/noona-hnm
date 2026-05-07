import React from "react";
import { Card } from "react-bootstrap";

const WeatherBox = ({ weather }) => {
  // weather 데이터가 없으면 null 반환
  if (!weather || !weather.weather) {
    return null;
  }

  return (
    <Card className="weather-card">
      <Card.Body>
        <Card.Title>{weather.name}</Card.Title>
        <Card.Text>
          <div>Temperature: {weather.main.temp}°C</div>
          <div>Weather: {weather.weather[0].description}</div>
          <div>Humidity: {weather.main.humidity}%</div>
          {/* 원래 있던 다른 정보들도 여기에 추가 */}
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default WeatherBox;