const parent = document.querySelector(".product_");
class Rectangle {
  constructor(width, height, background, src, alt) {
    this.width = width;
    this.height = height;
    this.background = background;
    this.src = src;
    this.alt = alt;
  }

  render() {
    const div = document.createElement("div");


    div.style.width = `${this.width}px`;
    div.style.height = `${this.height}px`;
    div.style.backgroundColor = this.background;
    div.style.borderRadius = '12px' 
    div.style.marginLeft = "20px"
    parent.append(div);
  
// 315364
div.innerHTML = `
<img class="product_img"  width="200px" height="250px" src=${this.src} alt=${this.alt}>
<p class="description_">${this.alt}</p>
<button class="buy">купить</button>

`
}
}

const data = [
  [300,
  400, 
  "rgba(121, 88, 51, 1)", 
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAohIsiiaYKCVmhun8gnswmktiqHB-_KgLDkflRNHZNP9Wo65B4Jk2-mC2VQTswIPO1jo&usqp=CAU",
  "папая"],
  [300, 
  400, 
  "rgba(121, 88, 51, 1)", 
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlXlJeJLFc5XXAxrCgVrIM_CIvvp-J2DwXdnVI_rSAnNk5TTQyLQjNyrsfN-skfnt6Jk8&usqp=CAU",
  "киви"
],
  [300, 
  400, 
  "rgba(121, 88, 51, 1)", 
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAohIsiiaYKCVmhun8gnswmktiqHB-_KgLDkflRNHZNP9Wo65B4Jk2-mC2VQTswIPO1jo&usqp=CAU","манго"],

  [300, 
    400, 
    "rgba(121, 88, 51, 1)", 
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAohIsiiaYKCVmhun8gnswmktiqHB-_KgLDkflRNHZNP9Wo65B4Jk2-mC2VQTswIPO1jo&usqp=CAU","манго"],
  
];

data.forEach((arr) => {
  new Rectangle(...arr).render();
});


let button_login = document.querySelector(".login_button")

