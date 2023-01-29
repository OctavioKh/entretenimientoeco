import * as React from "react";
import Box from "@mui/material/Box";
import ImageList from "@mui/material/ImageList";
// import ImageListItem from "@mui/material/ImageListItem";
// import foto1 from "../assets/randomspic/1.jpg";
// import foto2 from "../assets/randomspic/2.jpg";
// import foto3 from "../assets/randomspic/3.jpg";
// import foto4 from "../assets/randomspic/4.jpg";
// import foto5 from "../assets/randomspic/5.jpg";
// import foto6 from "../assets/randomspic/6.jpg";
// import foto7 from "../assets/randomspic/7.jpg";
// import foto8 from "../assets/randomspic/8.jpg";
// import foto9 from "../assets/randomspic/9.jpg";
// import foto10 from "../assets/randomspic/10.jpg";
// import foto11 from "../assets/randomspic/11.jpg";
// import foto12 from "../assets/randomspic/12.jpg";

// import foto01 from "../assets/randomspic/ctangana/1.jpg";
// import foto02 from "../assets/randomspic/ctangana/2.jpg";
// import foto03 from "../assets/randomspic/ctangana/3.jpg";
// import foto04 from "../assets/randomspic/ctangana/4.jpg";
// import foto05 from "../assets/randomspic/ctangana/5.jpg";
// import foto06 from "../assets/randomspic/ctangana/6.jpg";
// import foto07 from "../assets/randomspic/ctangana/7.jpg";
// import foto08 from "../assets/randomspic/ctangana/8.jpg";
// import foto09 from "../assets/randomspic/ctangana/9.jpg";
// import foto010 from "../assets/randomspic/ctangana/10.jpg";
// import foto011 from "../assets/randomspic/ctangana/11.jpg";
// import foto012 from "../assets/randomspic/ctangana/12.jpg";
// import foto013 from "../assets/randomspic/ctangana/13.jpg";
// import foto014 from "../assets/randomspic/ctangana/14.jpg";
// import foto015 from "../assets/randomspic/ctangana/15.jpg";
// import foto016 from "../assets/randomspic/ctangana/16.jpg";
// import foto017 from "../assets/randomspic/ctangana/17.jpg";
// import foto018 from "../assets/randomspic/ctangana/18.jpg";
// import foto019 from "../assets/randomspic/ctangana/19.jpg";
// import foto020 from "../assets/randomspic/ctangana/20.jpg";

// import foto001 from "../assets/randomspic/fatboy/1.jpg";
// import foto002 from "../assets/randomspic/fatboy/2.jpg";
// import foto003 from "../assets/randomspic/fatboy/3.jpg";
// import foto004 from "../assets/randomspic/fatboy/4.jpg";
// import foto005 from "../assets/randomspic/fatboy/5.jpg";
// import foto006 from "../assets/randomspic/fatboy/6.jpg";
// import foto007 from "../assets/randomspic/fatboy/7.jpg";
// import foto008 from "../assets/randomspic/fatboy/8.jpg";
// import foto009 from "../assets/randomspic/fatboy/9.jpg";
// import foto0010 from "../assets/randomspic/fatboy/10.jpg";
// import foto0011 from "../assets/randomspic/fatboy/11.jpg";
// import foto0012 from "../assets/randomspic/fatboy/12.jpg";
// import foto0013 from "../assets/randomspic/fatboy/13.jpg";
// import foto0014 from "../assets/randomspic/fatboy/14.jpg";
// import foto0015 from "../assets/randomspic/fatboy/15.jpg";
// // import foto0016 from '../assets/randomspic/fatboy/16.jpg';

// import foto0001 from "../assets/randomspic/nicki/1.jpg";
// import foto0002 from "../assets/randomspic/nicki/2.jpg";
// import foto0003 from "../assets/randomspic/nicki/3.jpg";
// import foto0004 from "../assets/randomspic/nicki/4.jpg";
// import foto0005 from "../assets/randomspic/nicki/5.jpg";
// import foto0006 from "../assets/randomspic/nicki/6.jpg";

import images from "../assets/images/gallery/index";

 const Gallery = () => {
  return (
    <div id="">
      {images.map((img, index) => (
        <div>
          <img key={index} src={img} alt={img} />
        </div>
      ))}
    </div>
  );
};
export default Gallery;

// export default function MasonryImageList() {
//   return (
//     <>
//       <Box sx={{ width: "95%" }}>
//         <h1>
//           C TANGANA <i>Live</i>
//         </h1>
//         <ImageList variant="masonry" cols={3} gap={20}>
//           {tanganaData.map((item) => (
//             <ImageListItem key={item.img}>
//               <img
//                 src={`${item.img}?w=248&fit=crop&auto=format`}
//                 srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
//                 alt={item.title}
//                 loading="lazy"
//               />
//             </ImageListItem>
//           ))}
//         </ImageList>
//       </Box>
//       <Box sx={{ width: "95%" }}>
//         <h1>
//           THE BLAZE <i>Live</i>
//         </h1>
//         <ImageList variant="masonry" cols={3} gap={20}>
//           {blazeData.map((item) => (
//             <ImageListItem key={item.img}>
//               <img
//                 src={`${item.img}?w=248&fit=crop&auto=format`}
//                 srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
//                 alt={item.title}
//                 loading="lazy"
//               />
//             </ImageListItem>
//           ))}
//         </ImageList>
//       </Box>
//       <Box sx={{ width: "95%" }}>
//         <h1>
//           NICKI NICOLE <i>Live</i>
//         </h1>
//         <ImageList variant="masonry" cols={3} gap={20}>
//           {nickiData.map((item) => (
//             <ImageListItem key={item.img}>
//               <img
//                 src={`${item.img}?w=248&fit=crop&auto=format`}
//                 srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
//                 alt={item.title}
//                 loading="lazy"
//               />
//             </ImageListItem>
//           ))}
//         </ImageList>
//       </Box>
//       <Box sx={{ width: "95%" }}>
//         <h1>
//           Fatboy SLim <i>Live</i>
//         </h1>
//         <ImageList
//           variant="masonry"

//           //   cols={3}
//           //      gap={20}
//         >
//           {fatboyData.map((item) => (
//             <ImageListItem key={item.img}>
//               <img
//                 src={`${item.img}?w=248&fit=crop&auto=format`}
//                 srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
//                 alt={item.title}
//                 loading="lazy"
//               />
//             </ImageListItem>
//           ))}
//         </ImageList>
//       </Box>
//     </>
//   );
// }

// const blazeData = [
//   {
//     img: `${foto1}`,
//     title: "Books",
//   },
//   //   {
//   //     img: `${foto2}`,    title: 'Sink',
//   //   },
//   {
//     img: `${foto3}`,
//     title: "Kitchen",
//   },
//   //   {
//   //     img: `${foto4}`,    title: 'Blinds',
//   //   },
//   //   {
//   //     img: `${foto5}`,    title: 'Chairs',
//   //   },
//   {
//     img: `${foto6}`,
//     title: "Laptop",
//   },
//   //   {
//   //     img: `${foto7}`,    title: 'Doors',
//   //   },
//   {
//     img: `${foto8}`,
//     title: "Coffee",
//   },
//   {
//     img: `${foto9}`,
//     title: "Storage",
//   },
//   {
//     img: `${foto10}`,
//     title: "Candle",
//   },
//   {
//     img: `${foto11}`,
//     title: "Coffee table",
//   },
//   {
//     img: `${foto12}`,
//     title: "Coffee table",
//   },
// ];

// const tanganaData = [
//   {
//     img: `${foto01}`,
//     title: "Books",
//   },
//   {
//     img: `${foto02}`,
//     title: "Sink",
//   },
//   {
//     img: `${foto03}`,
//     title: "Kitchen",
//   },
//   {
//     img: `${foto04}`,
//     title: "Blinds",
//   },
//   {
//     img: `${foto05}`,
//     title: "Chairs",
//   },
//   {
//     img: `${foto06}`,
//     title: "Laptop",
//   },
//   {
//     img: `${foto07}`,
//     title: "Doors",
//   },
//   {
//     img: `${foto08}`,
//     title: "Coffee",
//   },
//   {
//     img: `${foto09}`,
//     title: "Storage",
//   },
//   {
//     img: `${foto010}`,
//     title: "Candle",
//   },
//   {
//     img: `${foto011}`,
//     title: "Coffee table",
//   },
//   {
//     img: `${foto012}`,
//     title: "Coffee table",
//   },
//   {
//     img: `${foto013}`,
//     title: "Coffee table",
//   },
//   {
//     img: `${foto014}`,
//     title: "Coffee table",
//   },
//   {
//     img: `${foto015}`,
//     title: "Coffee table",
//   },
//   {
//     img: `${foto016}`,
//     title: "Coffee table",
//   },
//   {
//     img: `${foto017}`,
//     title: "Coffee table",
//   },
//   {
//     img: `${foto018}`,
//     title: "Coffee table",
//   },
//   {
//     img: `${foto019}`,
//     title: "Coffee table",
//   },
//   {
//     img: `${foto020}`,
//     title: "Coffee table",
//   },
// ];

// const fatboyData = [
//   {
//     img: `${foto001}`,
//     title: "foto",
//   },
//   {
//     img: `${foto002}`,
//     title: "foto",
//   },
//   {
//     img: `${foto003}`,
//     title: "foto",
//   },
//   {
//     img: `${foto004}`,
//     title: "foto",
//   },
//   {
//     img: `${foto005}`,
//     title: "foto",
//   },
//   {
//     img: `${foto006}`,
//     title: "foto",
//   },
//   {
//     img: `${foto007}`,
//     title: "foto",
//   },
//   {
//     img: `${foto008}`,
//     title: "foto",
//   },
//   {
//     img: `${foto009}`,
//     title: "foto",
//   },
//   {
//     img: `${foto0010}`,
//     title: "foto",
//   },
//   {
//     img: `${foto0011}`,
//     title: "foto",
//   },
//   {
//     img: `${foto0012}`,
//     title: "foto",
//   },
//   {
//     img: `${foto0013}`,
//     title: "foto",
//   },
//   {
//     img: `${foto0014}`,
//     title: "foto",
//   },
//   {
//     img: `${foto0015}`,
//     title: "foto",
//   },
// ];

// const nickiData = [
//   {
//     img: `${foto0001}`,
//     title: "foto",
//   },
//   {
//     img: `${foto0002}`,
//     title: "foto",
//   },
//   {
//     img: `${foto0003}`,
//     title: "foto",
//   },
//   {
//     img: `${foto0004}`,
//     title: "foto",
//   },
//   {
//     img: `${foto0005}`,
//     title: "foto",
//   },
//   {
//     img: `${foto0006}`,
//     title: "foto",
//   },
// ];
