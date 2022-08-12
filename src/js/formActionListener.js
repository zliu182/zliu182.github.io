window.onload = () => {
  // get the radio button element
  // add the change event listener to the radio group
  console.log("Loading Window");
  const typeRadioGroups = document.getElementsByName("type");
  typeRadioGroups.forEach((radio) => {
    radio.onchange = (e) => {
      const radioValue = e.target.value;
      const hireMeSection = document.getElementById("hireMe");
      hireMeSection.innerHTML = "";
      if (radioValue === "Hiring") {
        // reveal the hireme section
        const hourlyRateLabel = document.createElement("label");
        hourlyRateLabel.setAttribute("for", "hourlyRate");
        hourlyRateLabel.innerHTML = "Hourly Rate";
        const hourlyRateInputElem = document.createElement("input");
        hourlyRateInputElem.setAttribute("type", "text");
        hourlyRateInputElem.setAttribute("name", "hourlyRate");
        hourlyRateInputElem.setAttribute("id", "hourlyRate");
        hourlyRateInputElem.setAttribute("pattern", "^\\$\\d{1,3}(,\\d{3})*(.\\d+)?$");
        hourlyRateInputElem.setAttribute("value", "");
        hourlyRateInputElem.setAttribute("placeholder", "$15.55");
        hourlyRateInputElem.required = true;

        const startTimeLabel = document.createElement("label");
        startTimeLabel.setAttribute("for", "startTime");
        startTimeLabel.innerHTML = "Expected Start Date";
        const startTimeInputElem = document.createElement("input");
        startTimeInputElem.setAttribute("type", "date");
        startTimeInputElem.setAttribute("name", "startTime");
        startTimeInputElem.setAttribute("id", "startTime");
        startTimeInputElem.required = true;

        hireMeSection.append(
          hourlyRateLabel,
          hourlyRateInputElem,
          startTimeLabel,
          startTimeInputElem
        );
      }
    };
  });
};
