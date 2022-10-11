const gallery = document.getElementById("gallery");
const popup = document.getElementById("popup");
const procces = document.getElementById("procces");
const title = document.getElementById("title");
const discription = document.getElementById("discription");
const sketchBox = document.getElementById("sketchBox");

const expandedImg = document.getElementById("expandedImg");
expandedIndex = null;


const imgs = [
{
  fileName : "main.jpg",
  fileNameComp : "main comp.jpg",

  folder : "Gossip Girl",
  title : "Gossip Girl",
  discription: "this started out as a nice sketch about gossiping but then I decided to digitalize it and make a few prints to sell.",
  sketches : ["0.jpg","1.jpg","2.jpg","3.jpg","4.jpg"]
},{
  fileName : "main.jpg",
  fileNameComp : "main comp.jpg",

  folder : "Ik ben gestopt",
  title : "Ik ben gestopt",
  discription: "is an illustration I made around the turn of the year, about people making New Year's resolutions to stop smoking",
  sketches : ["0.jpg","1.jpg","2.jpg"]
},{
  fileName : "main.jpg",
  fileNameComp : "main comp.jpg",

  folder : "Free the nipple",
  title : "Free the nipple",
  discription: "stickers and poster design for a school assignment about my alter ego, who is a hippie.",
  sketches : ["0.jpg","1.jpg","2.jpg"]
},{
  fileName : "main.jpg",
  fileNameComp : "main comp.jpg",

  folder : "Doe lief",
  title : "Doe lief",
  discription: "Design I made because I wanted to print on my self-made paper. I also decided to make riso prints.",
  sketches : ["0.jpg","1.jpg","2.jpg"]
},{
  fileName : "main.jpg",
  fileNameComp : "main comp.jpg",

  folder : "Klote auto’s",
  title : "Klote auto’s",
  discription: "stickers and poster design for a school assignment about my alter ego, who is a hippie.",
  sketches : ["0.jpg","1.jpg","2.jpg"]
},{
  fileName : "main.jpg",
  fileNameComp : "main comp.jpg",

  folder : "North Sea Jazz",
  title : "North Sea Jazz",
  discription: "poster I’ve made for the Willem de Kooning elective: North Sea jazz poster competition.",
  sketches : ["0.jpg","1.jpg","2.jpg","3.jpg","4.jpg","5.jpg","6.jpg","7.jpg","8.jpg","9.jpg","10.jpg"]
}
,{
  fileName : "main.jpg",
  fileNameComp : "main comp.jpg",

  folder : "Lentekriebels",
  title : "Lentekriebels",
  discription: "cover drawing I did for my first DJ set.",
  sketches : []
},{
  fileName : "main.jpg",
  fileNameComp : "main comp.jpg",

  folder : "Ik doe ook maar wat",
  title : "Ik doe ook maar wat",
  discription: "is an illustration I made to try out the riso printer.",
  sketches : ["1.jpg","2.jpg"]
},{
  fileName : "main.jpg",
  fileNameComp : "main comp.jpg",

  folder : "Disco Monster",
  title : "Disco Monster",
  discription: "a design for a shirt I’ve made for someone that’s into disco as a birthday gift.",
  sketches : ["0.jpg","1.jpg"]
},{
  fileName : "main.jpg",
  fileNameComp : "main comp.jpg",

  folder : "Bitterzoet",
  title : "Bitterzoet",
  discription: "is a portrait that started out as a sketch but decided to paint.",
  sketches : []
},{
  fileName : "main.jpg",
  fileNameComp : "main comp.jpg",

  folder : "Verdwaald",
  title : "Verdwaald",
  discription: "illustration about the claustrophobia of the city on black paper with oil pastels.",
  sketches : []
},{
  fileName : "beer challenge.jpg",
  folder : "Sketches",
  title : "beer challenge",
},{
  fileName : "bootsy.jpg",
  folder : "Sketches",
  title : "bootsy",
},{
  fileName : "eng wijf lekker aan het roken.jpg",
  folder : "Sketches",
  title : "eng wijf lekker aan het roken",
},{
  fileName : "kijken naar de wolken.jpg",
  folder : "Sketches",
  title : "kijken naar de wolken",
},{
  fileName : "leon droom.jpg",
  folder : "Sketches",
  title : "leon droom",
},{
  fileName : "monster reeks 1.jpg",
  folder : "Sketches",
  title : "monster reeks 1",
},{
  fileName : "monster reeks 2.jpg",
  folder : "Sketches",
  title : "monster reeks 2",
},{
  fileName : "monster reeks 3.jpg",
  folder : "Sketches",
  title : "monster reeks 3",
},{
  fileName : "monster reeks 4.jpg",
  folder : "Sketches",
  title : "monster reeks 4",
},{
  fileName : "naakt.jpg",
  folder : "Sketches",
  title : "naakt",
},{
  fileName : "nix flix.jpg",
  folder : "Sketches",
  title : "nix flix",
},{
  fileName : "paddenstoel met maan.jpg",
  folder : "Sketches",
  title : "paddenstoel met maan",
},{
  fileName : "papa 51.jpg",
  folder : "Sketches",
  title : "papa 51",
},{
  fileName : "slurpen.jpg",
  folder : "Sketches",
  title : "slurpen",
},{
  fileName : "spaans koppel.jpg",
  folder : "Sketches",
  title : "spaans koppel",
},{
  fileName : "strand schets.jpg",
  folder : "Sketches",
  title : "strand schets",
},{
  fileName : "studio 54.jpg",
  folder : "Sketches",
  title : "studio 54",
},{
  fileName : "verdwaald.jpg",
  folder : "Sketches",
  title : "verdwaald",
},
]

// const sketches = ["1.jpg","2.jpg","3.jpg","4.jpg","5.jpg","6.jpg","7.jpg","8.jpg","9.jpg","10.jpg","11.jpg","12.jpg","13.jpg","14.jpg","16.jpg","17.jpg","18.jpg","19.jpg","20.jpg","21.jpg"]

const imgPerCol = Math.ceil(imgs.length/3);

imgs.forEach((e,i)=>{
  const image =  document.createElement("img");
  image.src  = "imgs/"+e.folder+"/"+e.fileName;
  image.alt = e.title;
  image.classList.add("portfolioImage");
    
  gallery.appendChild(image);

  image.addEventListener("click", (event) =>{
    popup.style.display = "block";
    expandedImg.src = "imgs/"+e.folder+"/"+e.fileName;
    title.innerHTML = e.title;
    if(e.discription == undefined){
      discription.innerHTML = "";
    }else{
      discription.innerHTML = e.discription;
    };
    procces.innerHTML = "";
    imgs[i].sketches.forEach((ee,ii)=>{
      const proccesImage = document.createElement("img");
      proccesImage.src = "imgs/"+e.folder+"/"+ee;
      proccesImage.classList.add("sketchImage");
      procces.appendChild(proccesImage);
      console.log(ee)
    })
  })

})

// sketches.forEach((e,i)=>{
//   console.log(e)
//   const image =  document.createElement("img");
//   image.src  = "imgs/sketches/"+e;
//   image.alt = e;
//   image.classList.add("sketch");
//   sketchBox.appendChild(image);

// })