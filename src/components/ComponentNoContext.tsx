import ComponentNoContext2 from "@/components/ComponentNoContext2";

function ComponentNoContext() {
  console.count("componentNoContext")
  return (
    <div>
      <h6>Component no context</h6>
      <ComponentNoContext2/>
    </div>
  )
}

export default ComponentNoContext
