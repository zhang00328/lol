// 头部背景图
(function () {
  let bigBg = document.querySelector(".bigBg"),
    html = document.documentElement,
    bigImgBox = document.querySelector(".bigImgBox");
  window.onscroll = function () {
    bigImgBox.style.height = "360px";
    bigImgBox.style.background = "-200px url('	https://img.crawler.qq.com/lolwebschool/0/JAutoCMS_LOLWeb_fb601929f1349f0c9acbe6ddbc106acd/0')";
  };
})();

// 轮播图
(function () {
  let rotationChart = document.querySelector(".rotationChart"),
    rotationImgBox = document.querySelector(".rotationImgBox"),
    rotationImg = document.querySelectorAll(".rotationImg"),
    paginationList = Array.from(document.querySelectorAll(".pagination div"));
  // console.log(paginationList);

  let step = 0,
    timer = null,
    time = 3000,
    count = rotationImg.length,
    j;

  const rotation = function () {
    if (step === count - 1) {
      step = 0;
      rotationImgBox.style.transitionDuration = "0s";
      rotationImgBox.style.left = `${-step*820}px`;
      let a = rotationImgBox.clientHeight;
    }
    step++;
    rotationImgBox.style.transitionDuration = "0.3s";
    rotationImgBox.style.left = `${-step*820}px`;
    pagination();

  }

  timer = setInterval(rotation, time);
  const pagination = function pagination() {
    paginationList.forEach((item, index) => {
      let a;
      a = step;
      if (step === count - 1) {
        a = 0;
      }
      if (a === index) {
        item.className = "active";
        return;
      }
      item.className = "";
    })
  }

  paginationList.forEach((item, index) => {
    item.onclick = function () {
      step = index - 1;
      pagination();
      rotation();
    }
    item.onmouseenter = function () {
      step = index - 1;
      pagination();
      rotation();
    }
  })

})();

// 右侧新闻选项卡
(function () {
  let topTabList = Array.from(document.querySelectorAll(".topTab div")),
    specificItemList = Array.from(document.querySelectorAll(".specificItem .specificItemBox")),
    specificItemBoxList = document.querySelectorAll(".specificItemBox .leftBox"),
    markTitleBox = Array.from(document.querySelectorAll(".markTitle")),
    specificConBox = Array.from(document.querySelectorAll(".specificCon")),
    footernews = document.querySelector(".footernews i");

  for (let i = 0; i < topTabList.length; i++) {

    topTabList[i].onclick = function () {

      for (var j = 0; j < specificItemList.length; j++) {
        topTabList[j].id = "";
        specificItemList[j].id = "";
      }
      topTabList[i].id = "avtiveOne";
      specificItemList[i].id = "avtiveTwo";

    }
  }

  for (let a = 0; a < topTabList.length; a++) {

    topTabList[a].onmouseenter = function () {

      for (var j = 0; j < specificItemList.length; j++) {
        topTabList[j].id = "";
        specificItemList[j].id = "";
      }
      topTabList[a].id = "avtiveOne";
      specificItemList[a].id = "avtiveTwo";

    }
  }
  specificItemBoxList.forEach((item, index) => {
    specificItemBoxList[index].onmouseenter = function (e) {

      let style1 = window.getComputedStyle(markTitleBox[index], ['color']);


      for (let j = 0; j < specificConBox.length; j++) {
        specificConBox[j].style.color = "#424242";
      }

      specificConBox[index].style.color = style1.color;


    }



    specificItemBoxList[index].onmouseleave = function (e) {


      for (let j = 0; j < specificConBox.length; j++) {
        specificConBox[j].style.color = "#424242";
      }
    }




  })

  footernews.onmouseenter = function () {
    footernews.classList.add('animate__shakeX');
    // footernews.className="animate__animated animate__payne";

  }
  footernews.onmouseleave = function () {
    footernews.classList.remove('animate__shakeX');

  }

})();

const getData = function getData() {
  axios.get("./json/hotCon.json").then(data => {
    let dataA = data.data;
    console.log(dataA);
    render(dataA);

  })
}
getData();

const render = function render(data) {
  let activitySelectedBox = document.querySelectorAll(".activitySelectedBox");
  console.log(activitySelectedBox);


  for (let i = 0; i < data.length; i++) {
    let str = ``;
    data[i].forEach((item) => {
      let {
        id,
        img,
        p1,
        p2,
        p3,
        p4,
        p5
      } = item;

      str += ` 
      <div>
      <div class="activityImg data-id="${id}"><img src="${img}" alt="" /></div>
      <p class="imgName">${p1}</p>
      <p class="timeEnd">${p2}</p>
      <i></i>
      <div class="hoverBox">
        <i></i>
        <div>
          <p class="p1">${p3}</p>
          <p class="p2">${p4}</p>
          <p class="p3">${p5}</p>
        </div>
      </div>
      </div>
    `;


    })
    activitySelectedBox[i].innerHTML = str;
    let c = activitySelectedBox.innerHTML;
  }
}

function getData2() {
  axios.get("./json/newVideo.json").then(async data => {
    let dataA = data.data;
    console.log(dataA);
    render2(dataA);
    await rotation();
  })
}
getData2();
const render2 = function render2(data) {
  let ulBox = document.querySelectorAll(".newVCon ul");
  console.log(ulBox);


  for (let i = 0; i < data.length; i++) {
    let str = ``;
    data[i].forEach((item) => {
      let {
        id,
        img,
        time,
        title,
        play,
        release
      } = item;

      str += ` 
      <li data-id="${id}">
      <div class="img"><img
          src="${img}" alt="">
      </div>
      <i class="a"></i>
      <i class="b"></i>
      <div class="videoTime">${time}</div>
      <div class="videoDes">${title}</div>
      <div class="playTimes">${play}</div>
      <div class="release">${release}</div>
    </li>
    `;


    })
    ulBox[i].innerHTML = str;

  }
}

const getData3 = function getData3() {
  axios.get("./json/hero.json").then(data => {
    let dataA = data.data;
    console.log(dataA);
    render3(dataA);

  })
}
getData3();

const render3 = function render3(data) {
  let ulBox = document.querySelectorAll(".heroCon ul");
  console.log(ulBox);


  for (let i = 0; i < data.length; i++) {
    let str = ``;
    data[i].forEach((item) => {
      let {
        id,
        img,
        title
      } = item;

      str += ` 
      <li><img src="${img}" alt="">
              <div><i></i></div>
              <p>${title}</p>
            </li>
    `;


    })
    ulBox[i].innerHTML = str;

  }
}

// 选项卡
function change(bigBox, liList, divList, activeOne, originName, activeTwo) {
  let box = document.querySelector(bigBox);

  let li = box.querySelectorAll(liList);
  let div = box.querySelectorAll(divList);
  // console.log(box, li, div);


  for (let i = 0; i < li.length; i++) {
    (function (i) {
      li[i].onclick = function () {
        for (let i = 0; i < li.length; i++) {
          li[i].className = "";
          div[i].className = originName + "";
        }
        li[i].className = activeOne;
        div[i].className = originName + activeTwo;
      };

      li[i].onmouseenter = function () {
        for (let i = 0; i < li.length; i++) {
          li[i].className = "";
          div[i].className = originName + "";
        }
        li[i].className = activeOne;
        div[i].className = originName + activeTwo;
      };

    })(i);

  }
}
window.onload = () => {

  change('.hotActivity', ".oneTitle div", ".activitySelectedBox", "activefour", "activitySelectedBox", " activeThree");
  change(".newVideo", ".videosmallT div", ".newVCon ul ", "activefive", "", "activeSix");
  change(".album", ".albumsmallT div", ".albumCon .viewPart", " activeSeven", " viewPart", " activeEight");
  change(".competitionCenter", ".competitionsmallT div", ".competitionCon ol", " activeNine", "", "  activeTen", );

}

// 隐藏盒子
const hiddenBox = function hiddenBox() {
  let newSkin = document.querySelector(".newSkin"),
    hidden = document.querySelector(".hiddenBox"),
    imgList = Array.from(hidden.querySelectorAll("img"));
  // console.log(imgList);

  newSkin.onmouseenter = function () {
    hidden.style.height = " 117px";
    hidden.style.marginTop = " 42px";
  }

  imgList.forEach((index, item) => {
    imgList[item].onmouseenter = function (e) {
      imgList[item].style.transform = 'scale(1.2)';
      console.log(imgList[item]);
    }
    imgList[item].onmouseleave = function (e) {
      imgList[item].style.transform = 'scale(1)';

    }
  })




  hidden.onmouseleave = function () {
    hidden.style.height = " 0px";
    hidden.style.marginTop = " 0px";

  }
}
hiddenBox();

// 封装箭头动画
const animation = function (a, b, c, d) {
  let bigBox = document.querySelector(a),
    originName = bigBox.querySelector(b);
  originName.onmouseenter = function () {
    originName.className = c + d;
  }
  originName.onmouseleave = function () {
    originName.className = c;
  }
}
animation(".weekFree", ".animate__animated", "animate__animated", " animate__shakeX");
animation(".album", ".animate__animated", "animate__animated", " animate__shakeX");



// 英雄
const heroSelect = function () {
  let bigBox = Array.from(document.querySelectorAll(".leftTitleTwo>div")),
    divList = Array.from(document.querySelectorAll(".heroCon ul"));
  console.log(divList);

  console.log(bigBox);
  for (let i = 0; i < bigBox.length; i++) {
    bigBox[i].addEventListener("click", () => {
      let smaBox = bigBox[i].querySelector("div");
      console.log(smaBox);
      for (let j = 0; j < bigBox.length; j++) {
        let smaBox1 = bigBox[j].querySelector("div");
        smaBox1.style.background = 'url(https://game.gtimg.cn/images/lol/v3/index-spr.png) no-repeat';
        smaBox1.style.backgroundPosition = '-406px -316px';
      }

      smaBox.style.background = 'url(	https://game.gtimg.cn/images/lol/v3/index-spr.png)';
      smaBox.style.backgroundPosition = '-431px -316px';


    })
    bigBox[i].addEventListener("mouseenter", () => {
      let smaBox = bigBox[i].querySelector("div");
      console.log(smaBox);
      for (let j = 0; j < bigBox.length; j++) {
        let smaBox1 = bigBox[j].querySelector("div");
        smaBox1.style.background = 'url(https://game.gtimg.cn/images/lol/v3/index-spr.png) no-repeat';
        smaBox1.style.backgroundPosition = '-406px -316px';
        divList[j].className = "";
      }
      let specialBox = bigBox[0].querySelector("div");
      specialBox.style.background = 'url(	https://game.gtimg.cn/images/lol/v3/index-spr.png)';
      specialBox.style.backgroundPosition = '-431px -316px';
      smaBox.style.background = 'url(	https://game.gtimg.cn/images/lol/v3/index-spr.png)';
      smaBox.style.backgroundPosition = '-431px -316px';
      divList[i].className = "activeeleven";

    })
  }

};
heroSelect();

// 侧边栏
const rightNav = function rightNav(argument, ary, bounce) {
  let bigBox = document.querySelector(".rightNavH"),
    liList = Array.from(bigBox.querySelectorAll(".picBox"), );
  liList.forEach((item, index) => {
    liList[index].onclick = function () {
      let pic = liList[index].querySelector("div"),
        a = pic.className;
      console.log(a);
      for (let i = 0; i < liList.length; i++) {
        let divBox = liList[i].querySelector("div"),
          imgBox = divBox.querySelector("img");
        divBox.className = ary[i];
        console.log(divBox);
        if (i === 5) {
          imgBox.style.display = "none";
          divBox.style.backgroundSize = "auto auto";
          console.log(divBox);
        }
      }
      if (index === 5) {
        pic.style.backgroundSize = "0";
        let img = pic.querySelector("img");
        console.log(img);
        img.style.display = "block";
        img.className = bounce;
        return;
      }
      pic.className = a + argument[index] + bounce;

    };
    liList[index].onmouseenter = function () {
      let pic = liList[index].querySelector("div"),
        a = pic.className;
      console.log(a);
      for (let i = 0; i < liList.length; i++) {
        let divBox = liList[i].querySelector("div"),
          imgBox = divBox.querySelector("img");
        divBox.className = ary[i];
        console.log(divBox);
        if (i === 5) {
          imgBox.style.display = "none";
          divBox.style.backgroundSize = "auto auto";
          console.log(divBox);
        }
      }
      if (index === 5) {
        pic.style.backgroundSize = "0";
        let img = pic.querySelector("img");
        console.log(img);
        img.style.display = "block";
        img.className = bounce;
        return;
      }
      pic.className = a + argument[index] + bounce;

    }

  })

}
rightNav([" one1", " two1", " three1", " four1", " five1"], ["one", "two", "three", "four", "five", "six"], " animate__bounce");
// 图标旋转
const rotation = function () {
  let newVCon = document.querySelector(".newVCon"),
    liList = Array.from(newVCon.querySelectorAll("ul li"));
  console.log(newVCon, liList);

  for (let i = 0; i < liList.length; i++) {
    liList[i].onmouseleave = function () {
      let img = liList[i].querySelector(".a");
      console.log(img);
      img.style.transform = "0deg";
      img.style.transition = "0s";


    }
  }
}