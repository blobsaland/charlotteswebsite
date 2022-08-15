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

  folder : "The Dutch Drug Industry",
  title : "The Dutch Drug Industry",
  discription: "a zine I made about the diversity and unpredictability of the dutch drug industry.",
  sketches : []
},{
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
}
]

const sketches = ["1.jpg","2.jpg","3.jpg","4.jpg","5.jpg","6.jpg","7.jpg","8.jpg","9.jpg","10.jpg","11.jpg","12.jpg","13.jpg","14.jpg","16.jpg","17.jpg","18.jpg","19.jpg","20.jpg","21.jpg"]

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
    discription.innerHTML = e.discription;
    console.log(imgs[i].sketches)

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

sketches.forEach((e,i)=>{
  console.log(e)
  const image =  document.createElement("img");
  image.src  = "imgs/sketches/"+e;
  image.alt = e;
  image.classList.add("sketch");
  sketchBox.appendChild(image);

})