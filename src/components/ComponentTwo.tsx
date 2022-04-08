import ComponentThree from "./ComponentThree";

function ComponentTwo() {
  console.count("component2")
  return (
    <div className="App">
      <h6>Component two</h6>
      <ComponentThree/>
    </div>
  )
}

export default ComponentTwo
