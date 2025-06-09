// 获取轮播图容器
const slideshow = document.getElementById("slideshow");

// 图片数组：可更换为你自己的图片路径
const images = [
  "img1.jpg",
  "img2.jpg",
  "img3.jpg",
  "img4.jpg"
];

let currentIndex = 0;
let intervalId = null;

// 显示下一张图片
function nextImage() {
  slideshow.style.backgroundImage = `url('${images[currentIndex]}')`;
  currentIndex = (currentIndex + 1) % images.length;
}

// 开始轮播
function startSlideshow() {
  intervalId = setInterval(nextImage, 3000); // 每3秒切换
}

// 停止轮播
function stopSlideshow() {
  clearInterval(intervalId);
}

// 鼠标悬停暂停，移开恢复
slideshow.addEventListener("mouseenter", stopSlideshow);
slideshow.addEventListener("mouseleave", startSlideshow);

// 初始显示第一张并启动轮播
nextImage();
startSlideshow();
