import React, { useState, useEffect } from 'react';
import brain from 'brain.js';

const App = () => {
  const [inputData, setInputData] = useState({ input: [0, 1] });
  const [trainingData, setTrainingData] = useState([]);
  const [isTraining, setIsTraining] = useState(false);
  const [trainingProgress, setTrainingProgress] = useState(0);
  const [trainedNetwork, setTrainedNetwork] = useState(null);
  const [predictions, setPredictions] = useState([]);
  const [isPredicting, setIsPredicting] = useState(false);

  useEffect(() => {
    // Load training data from a JSON file
    fetch('/path/to/training-data.json')
      .then((response) => response.json())
      .then((data) => setTrainingData(data));
  }, []);

  const trainNetwork = () => {
    setIsTraining(true);

    const net = new brain.NeuralNetwork();
    net.train(trainingData, {
      iterations: 2000,
      errorThresh: 0.005,
      callback: (progress) => {
        setTrainingProgress(progress);
      },
    });

    setTrainedNetwork(net);
    setIsTraining(false);
  };

  const saveTrainedNetwork = () => {
    if (trainedNetwork) {
      const jsonNetwork = trainedNetwork.toJSON();
      // Save the JSON network to a file or perform other actions
      console.log('Trained network saved:', jsonNetwork);
    }
  };

  const predictOutput = () => {
    setIsPredicting(true);

    if (trainedNetwork) {
      const output = trainedNetwork.run(inputData.input);
      setPredictions((prevPredictions) => [...prevPredictions, output]);

      setTimeout(() => {
        setIsPredicting(false);
      }, 1000); // Disable prediction button for 1 second after prediction
    }
  };

  const clearPredictions = () => {
    setPredictions([]);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-semibold mb-4">Brain.js Integration</h1>

      <div className="mb-4">
        <h2 className="text-lg font-semibold mb-2">Input Data:</h2>
        <input
          type="number"
          className="border rounded px-2 py-1"
          value={inputData.input[0]}
          onChange={(e) =>
            setInputData({ input: [parseFloat(e.target.value), inputData.input[1]] })
          }
        />
        <span className="mx-2">+</span>
        <input
          type="number"
          className="border rounded px-2 py-1"
          value={inputData.input[1]}
          onChange={(e) =>
            setInputData({ input: [inputData.input[0], parseFloat(e.target.value)] })
          }
        />
      </div>

      <button
        className={`bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300 ${isTraining ? 'opacity-50 cursor-not-allowed' : ''}`}
        onClick={trainNetwork}
        disabled={isTraining}
      >
        Train Network
      </button>

      <button
        className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition duration-300"
        onClick={() => setInputData({ input: [0, 1] })}
        disabled={isTraining || isPredicting}
      >
        Reset Inputs
      </button>

      <div className="mt-4">
        <h2 className="text-lg font-semibold mb-2">Training Progress:</h2>
        <progress className="w-full" max="100" value={trainingProgress}></progress>
      </div>

      <button
        className={`bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition duration-300 ${isTraining ? 'opacity-50 cursor-not-allowed' : ''}`}
        onClick={saveTrainedNetwork}
        disabled={isTraining}
      >
        Save Trained Network
      </button>

      <div className="mt-4">
        <h2 className="text-lg font-semibold mb-2">Training Dataset Size:</h2>
        <p>{trainingData.length} data points</p>
      </div>

      <button
        className={`bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600 transition duration-300 ${isTraining || isPredicting ? 'opacity-50 cursor-not-allowed' : ''}`}
        onClick={predictOutput}
        disabled={isTraining || isPredicting}
      >
        {isPredicting ? 'Predicting...' : 'Predict Output'}
      </button>

      {predictions.length > 0 && (
        <div className="mt-4">
          <h2 className="text-lg font-semibold mb-2">Predictions:</h2>
          <ul>
            {predictions.map((prediction, index) => (
              <li key={index}>Prediction {index + 1}: {prediction}</li>
            ))}
          </ul>
          <button
            className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600 transition duration-300 mt-2"
            onClick={clearPredictions}
          >
            Clear Predictions
          </button>
        </div>
      )}
    </div>
  );
};

export default App;
