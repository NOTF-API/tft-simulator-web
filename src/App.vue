<template>
  <div class="app">
    <img :src="Bg" class="bg" />
    <img :src="jla" class="test" />
    <div class="bottom">
      <div class="ops">
        <button class="buy-exp">
          <span class="inner">
            <span class="text" :price="fee.level">购买经验值</span>
          </span>
          <span class="mask"></span>
        </button>
        <button class="refresh">
          <span class="inner">
            <span class="text" :price="fee.refresh">刷新</span>
          </span>
          <span class="mask"></span>
        </button>
      </div>
      <div class="level">
        <div class="text">{{ exp.level }}级 </div>
        <div class="ex-text"> {{ exp.curr }}/{{ exp.max }}</div>
        <div class="exp-bar-container">
          <div class="exp-bar" :style="{ width: (exp.curr / exp.max) * 100 + '%' }"></div>
        </div>
      </div>
      <ul class="rate">
        <li class="quality1">{{ rate.v1 }}</li>
        <li class="quality2">{{ rate.v2 }}</li>
        <li class="quality3">{{ rate.v3 }}</li>
        <li class="quality4">{{ rate.v4 }}</li>
        <li class="quality5">{{ rate.v5 }}</li>
      </ul>
      <div class="cards">
        <div v-for="card in cards" :class="`quality${card.cost} ${card.isHighLight ? 'high-light' : ''}`" class="card">
          <div class="image">
            <img :src="card.src">
            <div class="mask"></div>
          </div>
          <div class="relations">
            <span class="relation" v-for="j in card.jiban">
              <span class="jiban-container">
                <span class="jiban" :class="j"></span>
              </span>
              <span>{{ "羁绊"}}</span>
            </span>
          </div>
          <div class="name">{{ card.name }}</div>
        </div>
      </div>
      <!-- <div class="lock"></div> -->
    </div>
  </div>
  <br> <br>
</template>

<script setup lang="ts">
import { reactive } from 'vue';
import Bg from './assets/1.png'
import jla from './assets/jla.png'
const rate = reactive({
  v1: 5,
  v2: 15,
  v3: 20,
  v4: 30,
  v5: 40
})
const fee = reactive({
  level: 4,
  refresh: 2
})
const exp = reactive({
  level: 7,
  curr: 10,
  max: 56
})

const cards = reactive([{
  name: "加里奥",
  src: "https://game.gtimg.cn/images/lol/tftstore/s8/624x318/801.jpg",
  cost: 1,
  isHighLight: true,
  jiban: ["pingminyingxiong", "jixiangwu"]
},
{
  name: "加里奥",
  src: "https://game.gtimg.cn/images/lol/tftstore/s8/624x318/801.jpg",
  cost: 2,
  isHighLight: true
},
{
  name: "加里奥",
  src: "https://game.gtimg.cn/images/lol/tftstore/s8/624x318/801.jpg",
  cost: 3,
  isHighLight: true
},
{
  name: "加里奥",
  src: "https://game.gtimg.cn/images/lol/tftstore/s8/624x318/801.jpg",
  cost: 4,
  isHighLight: true
},
{
  name: "加里奥",
  src: "https://game.gtimg.cn/images/lol/tftstore/s8/624x318/801.jpg",
  cost: 5,
  isHighLight: false
}
])
</script>

<style scoped lang="less">
.app {
  width: 1920px;
  height: 1080px;
  background-color: #fff;
  // background-color: rgb(146, 146, 146);
  position: relative;
  overflow: hidden;
}

.test {
  position: absolute;
  left: 930px;
  top: 550px;
  width: 45%;
  aspect-ratio: 16/10;
}

.bottom {
  // opacity: 50%;
  // opacity: 0;
  position: relative;
  width: 1223px;
  height: 165px;
  background-color: rgb(13, 24, 24);
  padding: 2px;
  position: absolute;
  bottom: -4px;
  left: 264px;
  box-shadow: 0 0 0 3px rgb(149, 119, 66), 0 0 0 4px rgba(0, 0, 0, 0.25);
  z-index: 2;
  display: flex;
}

.level {
  width: 220px;
  height: 0;
  position: absolute;
  border-right: 37px solid transparent;
  border-bottom: 42px solid rgb(150, 119, 66);
  // background-color: rgb(13, 24, 24);
  top: -45px;
  left: -3px;
  z-index: 10;
  box-shadow: 0 0 0 4px rgb(149, 119, 66) inset;
  transform-style: preserve-3d;

  &::before {
    width: 178px;
    content: "";
    height: 0;
    position: absolute;
    border-right: 37px solid transparent;
    border-bottom: 41px solid rgb(13, 24, 24);
    top: 3px;
    left: 3px;
    // box-shadow: 0 0 0 3px rgb(149, 119, 66) inset;
    z-index: 1;
  }

  &::after {
    width: 184.5px;
    content: "";
    height: 0;
    position: absolute;
    border-right: 37px solid transparent;
    border-bottom: 42px solid rgba(0, 0, 0, 0.25);
    top: -1px;
    left: -1px;
    // box-shadow: 0 0 0 3px rgb(149, 119, 66) inset;
    transform: translateZ(-0.1px);
  }

  .text {
    display: block;
    position: absolute;
    font-weight: 600;
    left: 16px;
    top: 6px;
    letter-spacing: 2px;
    font-size: 21px;
    text-align: left;
    color: rgb(249, 238, 217);
    z-index: 10;
  }

  .ex-text {
    display: block;
    position: absolute;
    right: 4px;
    top: 14px;
    font-weight: bold;
    font-size: 14px;
    color: rgb(189, 230, 232);
    z-index: 10;
  }

  .exp-bar-container {
    display: block;
    position: absolute;
    left: 14px;
    top: 38px;
    width: 186px;
    height: 6px;
    background-color: rgb(19, 64, 84);
    z-index: 10;
  }

  .exp-bar {
    height: 100%;
    width: 0%;
    background-image: linear-gradient(rgb(102, 242, 242), rgb(152, 239, 246));
  }
}

.ops {
  background-color: rgb(13, 22, 22);
  box-shadow: 0 0 0 2px rgb(12, 30, 31);

  width: 203px;
  height: 160px;
  margin-top: 2px;
  margin-left: 2px;
  // overflow: hidden;

  button {
    position: relative;
    display: block;
    width: 186px;
    height: 63px;

    background-color: rgb(11, 18, 18);
    transform-style: preserve-3d;

    &::before {
      transform: translateZ(-0.1px);
      left: -2px;
      top: -2px;
      width: calc(100% + 4px);
      height: calc(100% + 4px);
    }

    .mask {
      position: absolute;
      left: 2px;
      top: 2px;
      width: calc(100% - 4px);
      height: calc(100% - 4px);
      background-image:
        linear-gradient(rgba(0, 0, 0, 0.2),
          rgba(0, 0, 0, 0) 20%,
          rgba(0, 0, 0, 0) 40%,
          rgba(0, 0, 0, 0.5));
      z-index: 8;
    }

    .inner {
      display: block;
      width: 100%;
      height: 100%;
      background-color: rgb(8, 16, 24);
      box-shadow: 0 0 0 2px rgb(8, 16, 24) inset;
      padding: 8px;
      position: relative;

      &::before {
        content: "";
        position: absolute;
        width: 78px;
        height: 0px;
        border-right: 54px solid transparent;
        left: 2px;
        top: 2px;
        z-index: 1;
      }

      &::after {
        content: "";
        position: absolute;
        width: 47px;
        height: 0px;
        border-left: 54px solid transparent;
        right: 2px;
        top: 2px;
        z-index: 1;
      }

      .text {
        display: block;
        position: absolute;
        font-weight: 600;
        left: 9px;
        top: 7px;
        letter-spacing: 2px;
        font-size: 18px;
        text-align: left;
        color: rgb(249, 238, 217);
        z-index: 10;

        &::before {
          content: "";
          position: absolute;
          left: -7px;
          top: 27px;
          width: 20px;
          height: 20px;
          display: inline-block;
          vertical-align: middle;
          background-image: url(//game.gtimg.cn/images/lol/tft/content-site/spr-default-theme.png?v=1670555229211);
          background-size: 734.4px 143.2px;
          background-position: -168px -67px;
          background-repeat: no-repeat;
          z-index: 9999;
        }

        &::after {
          content: attr(price);
          font-size: 16px;
          position: absolute;
          left: 10px;
          top: 27px;
          width: 18px;
          text-align: center;
          height: 20px;
          z-index: 9999;
        }
      }
    }

    &.buy-exp {
      margin-top: 8px;
      margin-left: 7px;

      &::before {
        content: "";
        position: absolute;
        background-image: linear-gradient(rgb(70, 138, 165), rgb(52, 68, 92));
      }

      .inner {
        &::before {
          border-bottom: 59px solid rgb(24, 39, 46);
        }

        &::after {
          border-top: 59px solid rgb(35, 59, 74);
        }
      }
    }

    &.refresh {
      margin-top: 12px;
      margin-left: 7px;

      &::before {
        content: "";
        position: absolute;
        background-image: linear-gradient(rgb(141, 121, 74), rgb(70, 55, 27));
      }

      .inner {
        &::before {
          border-bottom: 59px solid rgb(35, 36, 27);
        }

        &::after {
          border-top: 59px solid rgb(71, 65, 44);
        }
      }
    }
  }
}

.rate {
  display: block;
  position: absolute;
  left: 170px;
  top: -34px;
  width: 323px;
  height: 30px;
  line-height: 30px;
  text-align: right;
  padding-right: 7px;
  background-color: rgba(27, 35, 36, 0.25);

  &::before {
    content: "";
    width: 0px;
    border-top: 30px solid transparent;
    border-left: 24px solid rgba(27, 35, 36, .25);
    position: absolute;
    right: -24px;
  }

  li {
    display: inline-block;
    margin-left: 12px;
    font-size: 14px;
    font-weight: bold;

    &::before {
      content: "·";
      margin-right: 8px;
      font-size: 16px;
      vertical-align: top;
    }

    &::after {
      content: "%";
    }
  }

  .quality1 {
    color: rgb(155, 150, 135);
  }

  .quality2 {
    color: rgb(63, 187, 91);
  }

  .quality3 {
    color: rgb(64, 195, 255);
  }

  .quality4 {
    color: rgb(214, 17, 204);
  }

  .quality5 {
    color: rgb(251, 143, 1);
  }
}

.cards {
  position: absolute;
  left: 210px;
  margin-top: 2px;
  width: calc(100% - 215px);
  height: 100%;
  box-shadow: 0 0 0 2px rgb(12, 30, 31);
  // box-shadow: 0 0 0 2px rgb(8, 229, 240);

  background-color: rgb(13, 20, 21);
  display: flex;
  padding: 6px;
  padding-right: 0px;
  overflow: hidden;

  .card {
    width: 191px;
    margin-right: 10px;
    height: 142px;
    color: rgb(240, 230, 210);
    font-weight: bold;
    position: relative;
    overflow: hidden;

    &:last-of-type {
      margin-right: 0;
    }

    @keyframes highlight {
      0% {
        background-position: 100% 50%;
      }

      50%,
      100% {
        background-position: 0% 50%;
      }
    }

    &.high-light::after {
      content: "";
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      background-size: 400% 100%;

      background-image:
        linear-gradient(90deg,
          rgba(255, 255, 255, 0) 0%,
          rgba(255, 255, 255, 0) 25%,
          rgba(255, 255, 255, 0.2) 50%,
          rgba(255, 255, 255, 0) 75%,
          rgba(255, 255, 255, 0) 100%);
      animation: highlight 4s linear infinite;
    }

    .image {
      display: block;
      height: 108px;
      margin: 2px;
      position: relative;

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }

      .mask {
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        box-shadow: 0 0 1px 2px #000 inset;
        background-image: linear-gradient(rgba(0, 0, 0, .1), rgba(0, 0, 0, .5));
      }
    }

    .relations {
      font-size: 15px;
      left: 7.5px;
      bottom: 32px;
      position: absolute;

      .relation {
        display: block;
        line-height: 26px;

        span {
          vertical-align: middle;
        }

        .jiban-container {
          display: inline-block;
          position: relative;
          width: 22px;
          height: 24px;
          margin-right: 6px;
          transform-style: preserve-3d;
          background-image: url("/jb.png");
          background-repeat: no-repeat;
          background-size: 122px 48px;
          background-position: 0px 0px;

          .jiban {
            position: absolute;
            left: 0;
            top: 0;
            width: 20px;
            height: 22px;
          }
        }
      }
    }

    .name {
      transform: translateY(-3px);
      height: calc(30px);
      padding: 0 8px;
      line-height: 26px;
      text-shadow: 0 1px 2px #000;

      &::before {
        content: "";
        position: absolute;
        top: 0;
        right: 22px;
        width: 35.2px;
        height: 28.8px;
        transform: scale(0.5) translateX(14px);
        display: inline-block;
        vertical-align: middle;
        background-image: url(//game.gtimg.cn/images/lol/tft/content-site/spr-default-theme.png?v=1670555229211);
        background-size: 1468.8px 286.4px;
        background-position: -339.2px -139.2px;
        background-repeat: no-repeat;
      }

      &::after {
        text-shadow: 0 1px 2px #000;
        text-align: center;
        position: absolute;
        width: 28px;
        height: 28px;
        top: 0;
        right: 0;
      }
    }

    &.quality1 {
      background-image: linear-gradient(45deg, rgb(19, 35, 49), rgb(38, 48, 57));

      .image {
        box-shadow: 0 0 1px 2px rgba(42, 52, 61, 0.5);
      }

      .name {
        box-shadow: 0 0 1px 2px rgba(23, 42, 55, 0.5) inset;
      }

      .name::after {
        content: "1";
      }
    }

    &.quality2 {
      background-image: linear-gradient(45deg, rgb(19, 53, 44), rgb(16, 90, 41));

      .image {
        box-shadow: 0 0 1px 2px rgba(6, 98, 41, 0.5);
      }

      .name {
        box-shadow: 0 0 1px 2px rgba(6, 98, 41, 0.5) inset;
      }

      .name::after {
        content: "2";
      }
    }

    &.quality3 {
      background-image: linear-gradient(45deg, rgb(27, 32, 71), rgb(28, 84, 126));

      .image {
        box-shadow: 0 0 1px 2px rgba(17, 144, 178, 0.5);
      }

      .name {
        box-shadow: 0 0 1px 2px rgba(15, 62, 90, 0.5) inset;
      }

      .name::after {
        content: "3";
      }
    }

    &.quality4 {
      background-image: linear-gradient(45deg, rgb(71, 13, 74), rgb(173, 8, 132));

      .image {
        box-shadow: 0 0 1px 2px rgba(133, 29, 135, 0.5);
      }

      .name {
        box-shadow: 0 0 1px 2px rgba(215, 43, 209, 0.5) inset;
      }

      .name::after {
        content: "4";
      }
    }

    &.quality5 {
      background-image: linear-gradient(-45deg,
          rgb(255, 255, 216),
          rgb(170, 131, 40));

      .name {
        background-image: linear-gradient(45deg,
            rgb(99, 44, 9) 0%,
            rgb(117, 82, 10) 50%,
            rgb(125, 75, 5) 59.9%,
            rgb(158, 109, 18) 60%,
            rgb(155, 107, 18) 80%,
            rgb(179, 86, 7) 100%);
      }

      .name::after {
        content: "5";
      }
    }

  }
}

.lock {
  position: absolute;
  background-color: rgb(14, 20, 20);
  right: -4px;
  top: -37px;
  width: 76px;
  height: 37px;
  border-top: 4px solid rgb(149, 119, 66);
  border-left: 4px solid rgb(149, 119, 66);
  border-right: 4px solid rgb(149, 119, 66);
  box-shadow: 0 0 0 2px rgba(0, 0, 0, 0.25);

  transform-style: preserve-3d;

  &::before {
    width: 176px;
    // content: "";
    height: 0;
    position: absolute;
    top: 4px;
    left: 4px;
    // box-shadow: 0 0 0 3px rgb(149, 119, 66) inset;
    z-index: 1;
  }

  &::after {
    width: 100%;
    height: 100%;
    content: "";
    position: absolute;
    transform: translateZ(-0.1px);
  }
}

.bg {
  width: 100%;
}
</style>
