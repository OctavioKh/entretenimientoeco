import { alertTitleClasses, Typography } from "@mui/material";
import HorizontalRuleIcon from "@mui/icons-material/HorizontalRule";

function Fechas({ fechas, _id }) {
  const areSame = (x) => {
    let s = new Set(x);
    return s.size == 1;
  };

  const meses = [...new Set(fechas.map((f) => f.month))];
  const dias = [...new Set(fechas.map((d) => d.day))];
  const location = [...new Set(fechas.map((l) => l.location))];
  const yearS = [...new Set(fechas.map((y) => y.year))];

  // const mesesTotal = () => {

    
  // }
  

  return (
    <>
      {/* DIAS */}
      {areSame(meses) && areSame(location) || !areSame(meses) && areSame(location) && !areSame(dias)
        ? dias.join(",") + "."
        : areSame(meses) && !areSame(location) || !areSame(yearS)
        ? fechas?.map((fecha, _id) => (
            <div key={_id}>
              <div key={fecha.day}>
                {fecha.day}.{fecha.month.toUpperCase()}.{fecha.year}
              </div>
              <Typography
                sx={{
                  color: "white",
                  fontSize: "2vw",
                  fontFamily: "Britti Thin",
                  lineHeight: "2vw",
                  padding: 1,
                }}
              >
                <div key={fecha.location}>{fecha.location?.toUpperCase()}</div>
                <HorizontalRuleIcon
                  sx={{
                    color: "white",
                    fontSize: "2vw",
                    padding: 1,
                  }}
                />
              </Typography>
            </div>
          ))
        : !areSame(meses) && !areSame(location)
        ? fechas?.map((fecha, _id) => (
            <div key={_id}>
              <div key={fecha.day}>
                {fecha.day}.{fecha.month.toUpperCase()}.{fecha.year}
              </div>
              <Typography
                sx={{
                  color: "white",
                  fontSize: "2vw",
                  fontFamily: "Britti Thin",
                  lineHeight: "2vw",
                  padding: 1,
                }}
              >
                <div key={fecha.location}>{fecha.location?.toUpperCase()}</div>
                <HorizontalRuleIcon
                  sx={{
                    color: "white",
                    fontSize: "2vw",
                    padding: 1,
                  }}
                />
              </Typography>
            </div>
          ))
        : ""}
      {/* MESES */}
      {areSame(meses) && areSame(location) || !areSame(meses) && !areSame(yearS) && areSame(location)
        ? [...new Set(fechas?.map((mes) => mes.month.toUpperCase()))].join("/")
        : areSame(meses) && !areSame(location) || !areSame(meses) && !areSame(location)
        ? "" : ""}
      
      {
      !areSame(yearS) && !areSame(dias) && !areSame(location) && !areSame(meses) ? "" :
      areSame(meses) && areSame(location) && areSame(yearS)
       ? "."+ [...new Set(fechas?.map((ano) => ano.year))].join("&") :
     
       !areSame(yearS) ?  "."+ [...new Set(fechas?.map((ano) => ano.year))].join("&")
        : areSame(meses) && !areSame(location) || !areSame(yearS) || !areSame(meses) && !areSame(location)
        
        ? ""
        : ""}
      <Typography
        sx={{
          color: "white",
          fontSize: "2vw",
          fontFamily: "Britti Thin",
          lineHeight: "2vw",
          padding: 1,
        }}
      >
        {areSame(meses) && areSame(location) || !areSame(meses) && !areSame(yearS) && areSame(location)
          ? [...new Set(fechas?.map((loc) => loc.location.toUpperCase()))]
          : areSame(meses) && !areSame(location) ||  !areSame(meses) && !areSame(location)
          ? "" : ""}
      </Typography>
    </>
  );
}

export default Fechas;

{
  /* : [...new Set(fechas?.map((a) => a.month))].join("/").toUpperCase()} */
}

//   const res = [...new Set(fechas.location)];

// alert('res:'+ res)
// function removeDuplicates(fex) {
//   return fex.filter((item,
//       index) => fex.indexOf(item) === index);
// }
// removeDuplicates();

// alert(JSON.stringify(fechas));

// if(fechas)

// const uniq = [...new Set(fechas.location)];

// function fechasCounter(fecha) {
//   let counter = 0;
//   for (const entrada of fecha) {
//     if (entrada.fechas === "0") counter += 1;
//   }
//   return counter;
// }

// fechasCounter(fechas);

// ? const lookup = fechas.reduce((a, e) => {
//   a[e.location] = ++a[e.location] || 0;
//   return a },{}).filter(e => lookup[e.location])

// ? fechas.map(e => e['location'])
// .map((e, i, final) => final.indexOf(e) === i && i)
// .filter(obj=> fechas[obj])
// .map(e => fechas[e])

// fechas.map((d) =>{ d.day.toUpperCase().join("-")

// new Set(fechas.map((a) =>
//   [...a.day?.values()] ))

// new Set(
//   fechas.map((v) => {
//     if (v.month.length >= 2) {
//       return v.month.toLowerCase()
//       // , v.day.toLowerCase()
//     } else if (v.month.length === 1) {
//       return v.day.toUpperCase().join(" - ");
//     }
//   })
// )

// new Set(fechas.map((x) => x.year)) })

// a.month

// if(a.location.length > 1) {
//   return (
//
//   );
// }
