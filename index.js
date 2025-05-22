let froyo = {};
const userAnswer = prompt(
  "Add some flavors",
  "vanilla,vanilla,vanilla,chocolate,strawberry,chocolate"
);

const flavors = userAnswer.split(",");
for (const flavor of flavors) {
  if (flavor in froyo) {
    froyo[flavor] += 1;
  } else {
    froyo[flavor] = 1;
  }
  console.table(froyo);
}
