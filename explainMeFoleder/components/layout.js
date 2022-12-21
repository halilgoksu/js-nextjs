import Nav from "./Nav";

export default function Layout({ children }) {
  return (
    <div className="mx-6 md:max-w-2xl md:mx-auto font-poppins">
      <Nav />
      {/* -navbari laaap diye ortaya koymalim ona bir dinamiklik kazandiralim 
       diyorsan bu sekilde layout olusturman lazi bro
      -navbara duzen saglar ayar ceker 
      -bi nevi guruplamak icin kullanilir, nevbar ve digerleri gibi  
      -{children navbarin }
      */}

      <main>{children}</main>
      {/* 
      -app.js de <layout></layout> un wrapp eddigi sey chilreena karsilik geliyor 
      -burdaki childern ise _app.js de rendir edilip propslar ile buraya gelen komponenet bro  
      
      */}
    </div>
  );
}
