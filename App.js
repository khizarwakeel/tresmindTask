const knowCheck = () => {
  let yourName = prompt("What is your Name?");
  let welcomeUser = prompt(
    `Welcome ${yourName} press "yes" to enter in this game!`
  );

  if (welcomeUser === "yes") {
    let firstCity = prompt(
      "Which is the bigest city of Pakistan?"
    ).toLowerCase();
    if (firstCity === "karachi") {
      let rightCity = firstCity;
      alert(`Good! ${rightCity} is the bigest city of Pakistan.`);
    } else {
      alert(`Sorry! ${rightCity} is not the bigest city of Pakistan.`);
    }
    let firstPm = prompt("Who is the first pm of Pakistan?").toLowerCase();
    if (firstPm === "liaquat ali khan") {
      alert(`Good! ${firstPm} is the the first pm of Pakistan.`);
    } else {
      alert(`Sorry! ${firstPm} is not the the first pm of Pakistan.`);
    }
    let capital = prompt(
      "Which city is the capital of Pakistan?"
    ).toLowerCase();
    if (capital === "islamabad") {
      alert(`Good! ${capital} is the capital of Pakistan.`);
    } else {
      alert(`Sorry! ${capital} is not the capital of Pakistan.`);
    }
    alert("Wow you played very well Bye!");
  }
};