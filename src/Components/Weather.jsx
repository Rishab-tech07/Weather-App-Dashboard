import React from 'react';

const Weather = ({ weatherdata }) => {
    return (
        <div className="flex justify-center items-center mt-7">
            {weatherdata.weather ? (
                <div className="w-[90%] md:w-[500px] bg-gray-300 shadow-xl rounded-xl p-6 text-black">

                    {/* City Name & Weather Description */}
                    <div className="flex justify-between items-center mb-4">
                        <div>
                            <p className="text-3xl font-semibold">
                                {weatherdata.name}, {weatherdata.sys.country}
                            </p>
                            <p className="text-2xl text-black capitalize">
                                {weatherdata.weather[0].description}
                            </p>
                        </div>
                        <img
                            src={`https://openweathermap.org/img/wn/${weatherdata.weather[0].icon}@2x.png`}
                            alt="Weather Icon"
                            className="w-20 h-20"
                        />
                    </div>

                    {/* Temperature */}
                    <h1 className="text-5xl font-bold text-center text-black">
                        {weatherdata.main.temp.toFixed()}°C
                    </h1>

                    {/* Weather Details */}
                    {weatherdata.name && (
                        <div className="mt-4 space-y-2 text-black text-sm">
                            <div className="flex justify-between">
                                <p>Feels Like</p>
                                <p className="font-bold">{weatherdata.main.feels_like.toFixed()}°C</p>
                            </div>
                            <div className="flex justify-between">
                                <p>Humidity</p>
                                <p className="font-bold">{weatherdata.main.humidity}%</p>
                            </div>
                            <div className="flex justify-between">
                                <p>Wind Speed</p>
                                <p className="font-bold">{weatherdata.wind.speed.toFixed()} KPH</p>
                            </div>
                        </div>
                    )}
                </div>
            ) : null}
        </div>
    );
};

export default Weather;
