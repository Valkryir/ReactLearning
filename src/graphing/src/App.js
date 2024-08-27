import {LineChart, Line, CartesianGrid, YAxis, ResponsiveContainer, XAxis} from 'recharts';

function App() {

    const data = [
            {
                "a": 400,
                "b": 500
            },
            {
                "a": 600,
                "b": 600
            },
            {
                "a": 200,
                "b": 700
            },
            {
                "a": 800,
                "b": 550
            },
            {
                "a": 350,
                "b": 750
            },
            {
                "a": 900,
                "b": 620
            }
        ]
    ;

    const adds = [
        {
            "heart_rate": 75,
            "oxygen_saturation": 98,
            "respiratory_rate": 16,
            "timestamp": "2024-08-25T00:00:00Z"
        },
        {
            "heart_rate": 80,
            "oxygen_saturation": 97,
            "respiratory_rate": 18,
            "timestamp": "2024-08-25T01:00:00Z"
        },
        {
            "heart_rate": 72,
            "oxygen_saturation": 96,
            "respiratory_rate": 17,
            "timestamp": "2024-08-25T02:00:00Z"
        },
        {
            "heart_rate": 78,
            "oxygen_saturation": 95,
            "respiratory_rate": 19,
            "timestamp": "2024-08-25T03:00:00Z"
        },
        {
            "heart_rate": 82,
            "oxygen_saturation": 94,
            "respiratory_rate": 20,
            "timestamp": "2024-08-25T04:00:00Z"
        },
        {
            "heart_rate": 79,
            "oxygen_saturation": 96,
            "respiratory_rate": 18,
            "timestamp": "2024-08-25T05:00:00Z"
        },
        {
            "heart_rate": 76,
            "oxygen_saturation": 97,
            "respiratory_rate": 17,
            "timestamp": "2024-08-25T06:00:00Z"
        },
        {
            "heart_rate": 74,
            "oxygen_saturation": 98,
            "respiratory_rate": 16,
            "timestamp": "2024-08-25T07:00:00Z"
        },
        {
            "heart_rate": 77,
            "oxygen_saturation": 97,
            "respiratory_rate": 18,
            "timestamp": "2024-08-25T08:00:00Z"
        },
        {
            "heart_rate": 73,
            "oxygen_saturation": 96,
            "respiratory_rate": 17,
            "timestamp": "2024-08-25T09:00:00Z"
        },
        {
            "heart_rate": 81,
            "oxygen_saturation": 95,
            "respiratory_rate": 19,
            "timestamp": "2024-08-25T10:00:00Z"
        },
        {
            "heart_rate": 84,
            "oxygen_saturation": 94,
            "respiratory_rate": 20,
            "timestamp": "2024-08-25T11:00:00Z"
        },
        {
            "heart_rate": 78,
            "oxygen_saturation": 96,
            "respiratory_rate": 18,
            "timestamp": "2024-08-25T12:00:00Z"
        },
        {
            "heart_rate": 75,
            "oxygen_saturation": 97,
            "respiratory_rate": 17,
            "timestamp": "2024-08-25T13:00:00Z"
        },
        {
            "heart_rate": 79,
            "oxygen_saturation": 98,
            "respiratory_rate": 16,
            "timestamp": "2024-08-25T14:00:00Z"
        },
        {
            "heart_rate": 83,
            "oxygen_saturation": 97,
            "respiratory_rate": 18,
            "timestamp": "2024-08-25T15:00:00Z"
        },
        {
            "heart_rate": 76,
            "oxygen_saturation": 96,
            "respiratory_rate": 17,
            "timestamp": "2024-08-25T16:00:00Z"
        },
        {
            "heart_rate": 80,
            "oxygen_saturation": 95,
            "respiratory_rate": 19,
            "timestamp": "2024-08-25T17:00:00Z"
        },
        {
            "heart_rate": 85,
            "oxygen_saturation": 94,
            "respiratory_rate": 20,
            "timestamp": "2024-08-25T18:00:00Z"
        }
    ];

    const formatter = adds.map(timeline => {
        return {
            "timestamp": timeline.timestamp.includes()
        }
    })

    return (
        <div>
            <div className="grid grid-cols-5">
                <div className="min-h-40">
                    time
                </div>
                <ResponsiveContainer className="col-span-4" width="100%" height="100%">
                    <LineChart width={800} height={25} data={formatter}>
                        <XAxis domain={[0, 40]} dataKey="timestamp"/>
                        <YAxis domain={[0, 0]} tickCount="1"/>
                    </LineChart>
                </ResponsiveContainer>

                <div className="min-h-40">
                    respiratory_rate
                </div>
                <ResponsiveContainer className="col-span-4" width="100%" height="100%">
                    <LineChart width={800} height={200} data={adds}>
                        <Line type="monotone" dataKey="respiratory_rate" stroke="#8884d8"/>
                        <CartesianGrid stroke="#ccc"/>
                        <YAxis domain={[0, 40]} tickCount="10"/>
                    </LineChart>
                </ResponsiveContainer>

                <div className="min-h-32">
                    oxygen_saturation
                </div>
                <ResponsiveContainer className="col-span-4" width="100%" height="100%">
                    <LineChart width={800} height={200} data={adds}>
                        <Line type="monotone" dataKey="oxygen_saturation" stroke="#8884d8"/>
                        <CartesianGrid stroke="#ccc"/>
                        <YAxis domain={[80, 100]}/>
                    </LineChart>
                </ResponsiveContainer>

                <div className="min-h-40">
                    heart_rate
                </div>
                <ResponsiveContainer className="col-span-4" width="100%" height="100%">
                    <LineChart width={800} height={300} data={adds}>
                        <Line type="monotone" dataKey="heart_rate" stroke="#8884d8"/>
                        <CartesianGrid stroke="#ccc"/>
                        <YAxis domain={[20, 150]}/>
                    </LineChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
}

export default App;
