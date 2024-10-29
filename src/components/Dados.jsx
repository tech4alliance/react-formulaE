import React, { useEffect, useState } from 'react';
import {
    CartesianGrid,
    Line,
    LineChart,
    Tooltip,
    XAxis,
    YAxis,
    Legend,
} from 'recharts';
import '../css/dados.css';

export default function SensorChart() {
    const [chartData, setChartData] = useState([]);
    const [latitude, setLatitude] = useState(null);
    const [longitude, setLongitude] = useState(null);
    const [velocity, setVelocity] = useState(null);

    const myHeaders = new Headers();
    myHeaders.append("fiware-service", "smart");
    myHeaders.append("fiware-servicepath", "/");
    myHeaders.append("Content-Type", "application/json");

    // Função para buscar cada atributo individualmente
    const fetchData = async (attribute) => {
        const requestOptions = {
            method: "GET",
            headers: myHeaders,
            redirect: "follow",
        };

        try {
            const response = await fetch(
                `/STH/v1/contextEntities/type/Sensor/id/urn:ngsi-ld:Sensor:TechAlliance/attributes/${attribute}?lastN=30`,
                requestOptions
            );

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(`Network response was not ok: ${errorData.message}`);
            }

            const data = await response.json();
            return data.contextResponses[0].contextElement.attributes[0].values;

        } catch (error) {
            console.error(`Error fetching ${attribute} data:`, error);
            return [];
        }
    };

    const fetchAllData = async () => {
        const temperatureData = await fetchData('temperature');
        const humidityData = await fetchData('humidity');
        const latData = await fetchData('latitude');
        const lonData = await fetchData('longitude');
        const velocityData = await fetchData('velocity');

        // Formatação para o gráfico usando temperatura e umidade
        const formattedData = temperatureData.map((item, index) => {
            const date = new Date(item.recvTime);
            const formattedTime = date.toLocaleTimeString('pt-PT', { timeZone: 'UTC' });
            return {
                time: formattedTime,
                temperature: parseFloat(item.attrValue) || null,
                humidity: parseFloat(humidityData[index]?.attrValue) || null,
            };
        });

        setChartData(formattedData);

        // Definindo os últimos valores para latitude, longitude e velocity nos cards
        setLatitude(latData[latData.length - 1]?.attrValue || 'N/A');
        setLongitude(lonData[lonData.length - 1]?.attrValue || 'N/A');
        setVelocity(velocityData[velocityData.length - 1]?.attrValue || 'N/A');
    };

    useEffect(() => {
        fetchAllData();
        const interval = setInterval(fetchAllData, 5000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="chart-wrapper">
            <h1>Dados do Sensor</h1>
            <div className="chart-container">
                <LineChart
                    width={900}
                    height={400}
                    data={chartData}
                    margin={{
                        top: 20,
                        right: 30,
                        left: 20,
                        bottom: 20,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="time" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line
                        type="monotone"
                        dataKey="temperature"
                        stroke="#0078ff"
                        strokeWidth={3}
                    />
                    <Line
                        type="monotone"
                        dataKey="humidity"
                        stroke="#ff8c00"
                        strokeWidth={3}
                    />
                </LineChart>
            </div>
            <div className="card-container">
                <div className="card">
                    <h2>Latitude</h2>
                    <p>{latitude}</p>
                </div>
                <div className="card">
                    <h2>Longitude</h2>
                    <p>{longitude}</p>
                </div>
                <div className="card">
                    <h2>Velocity</h2>
                    <p>{velocity}</p>
                </div>
            </div>
        </div>
    );
}
