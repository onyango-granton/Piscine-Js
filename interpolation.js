function interpolation({ step, start, end, callback, duration }) {
  const interval = duration / step; // Calculate the delay between steps
  const stepSize = (end - start) / step; // Calculate the size of each step

  let currentStep = 0;

  const interpolateStep = () => {
    if (currentStep < step) {
      const x = currentStep; // The distance (step number)
      const y = start + currentStep * stepSize; // The interpolated point

      callback([x, y]); // Call the callback with [x, y]
      currentStep++; // Move to the next step

      setTimeout(interpolateStep, interval); // Delay the next step
    }
  };

  interpolateStep(); // Start the interpolation
}
