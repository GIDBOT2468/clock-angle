function moveHands() {
    var hoursHand = document.getElementById("hoursHand");
    var minutesHand = document.getElementById("minutesHand");
    var hoursInput = document.getElementById("hoursInput").value;
    var minutesInput = document.getElementById("minutesInput").value;
    var answerText = document.getElementById("answerText");

    hoursAngle = hoursInput * 30;
    minutesAngle = minutesInput * 6;

    hoursHand.setAttribute("transform", "rotate(" + hoursAngle + ")");
    minutesHand.setAttribute("transform", "rotate(" + minutesAngle + ")");

    answerText.textContent = "Angle between hands: " + Math.abs(hoursAngle - minutesAngle) + "°";
}