function interpolation({ step, start, end, callback, duration }) {
  const interval = duration / step;
  const stepSize = (end - start) / step;

  let currentStep = 0;

  const interpolateStep = () => {
    if (currentStep < step) {
      const x = currentStep; 
      const y = start + currentStep * stepSize; 

      callback([x, y]); 
      currentStep++;

      setTimeout(interpolateStep, interval); 
    }
  };

  interpolateStep();
}
