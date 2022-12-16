import Nav from "./Nav"

export default function({childeren}){
  return (
    <div className="mx-6 md:max-w-2xl md:mx-auto font-poppins">
      <Nav/>
      <main>{childeren}</main>
    </div>
  );
};

