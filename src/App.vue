<template>
  <div class="app">
    <img src="/boards/test.png" class="bg" />
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
        <div v-for="card in cards" :class="`quality${card.price} ${card.isHighLight ? 'high-light' : ''}`" class="card">
          <div class="image">
            <img class="card-image" :src="card.image.src">
            <div class="relations">
              <span class="relation" v-for="j in card.traits">
                <span class="traits-container">
                  <span class="traits" :class="j"></span>
                </span>
                <span>{{ "羁绊"}}</span>
              </span>
            </div>
          </div>
          <div class="name">{{ card.name }}
            <div class="price">{{ card.price }}</div>
          </div>
        </div>
      </div>
      <div class="lock state-unlocked"></div>
      <div class="wallet-shadow">
        <div class="wallet-outside-border">
          <div class="wallet-outside-background">
            <div class="wallet-inside-border">
              <div class="wallet-inside-background">
                <div class="wallet-content">99</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="aside-traits-container">
      <div class="aside-traits-shadow" :style="calctraitsContainerStyle">
        <div class="aside-traits-outside-border">
          <div class="aside-traits-outside-background">
            <div class="aside-traits-inside-border">
              <ul class="aside-traits-inside-background">
                <li class="traits-item" :class="traits.quality" v-for="traits in traitss">
                  <div class="traits-container">
                    <img class="traits-icon" :src="`/seasons/s8/traits/${traits.id}.png`" alt="">
                  </div>
                  <span class="traits-current">{{ traits.current }}</span>
                  <span class="traits-right">
                    <span class="traits-name">{{ traits.description }}</span>
                    <div class="traits-levels">{{ traits.levels.split(",").join(' > ') }}</div>

                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <br> <br>
</template>

<script setup lang="ts">
import { computed, reactive } from 'vue';
const rate = reactive({
  v1: 19,
  v2: 30,
  v3: 35,
  v4: 15,
  v5: 1
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

const traitss = reactive([
  {
    name: "doushi",
    quality: "diamondous",
    id: 8001,
    description: "斗士",
    current: 3,
    levels: "2,4,6,8"
  },
  {
    name: "doushi",
    quality: "golden",
    id: 8001,
    description: "斗士",
    current: 3,
    levels: "2,4,6,8"
  },
  {
    name: "mishuweishi",
    quality: "silvery",
    id: 8002,
    description: "秘术卫士",
    current: 3,
    levels: "2,3,4,5"
  },
  {
    name: "mishuweishi",
    quality: "coppery",
    id: 8003,
    description: "秘术卫士",
    current: 3,
    levels: "2,3,4,5"
  },
  {
    name: "zhandoujijia",
    quality: "inactive",
    id: 8111,
    description: "战斗机甲",
    current: 1,
    levels: "1,4"
  },
  {
    name: "zhandoujijia",
    quality: "inactive",
    id: 8111,
    description: "战斗机甲",
    current: 1,
    levels: "1,4"
  },
  {
    name: "zhandoujijia",
    quality: "inactive",
    id: 8111,
    description: "战斗机甲",
    current: 1,
    levels: "1,4"
  },
  {
    name: "zhandoujijia",
    quality: "inactive",
    id: 8111,
    description: "战斗机甲",
    current: 1,
    levels: "1,4"
  },
  {
    name: "zhandoujijia",
    quality: "inactive",
    id: 8111,
    description: "战斗机甲",
    current: 1,
    levels: "1,4"
  }
])

const calctraitsContainerStyle = computed(() => {
  return {
    height: `${traitss.length * 71}px`
  }
})

const cards: Array<Card> = reactive([{
  name: "安妮",
  image: {
    src: "/seasons/s8/champion/image/card/2b7821d798e64bd2.png",
  },
  price: 1,
  isHighLight: true,
  traits: ["xiaotiancai", "funiushouhuzhe", "lingnengshi"]
},
{
  name: "薇恩",
  image: {
    src: "/seasons/s8/champion/image/card/0b731a3f329d0153.png",
  },
  price: 2,
  isHighLight: true,
  traits: ["huanlingzhandui", "qingbaotegong", "juedoudashi"]
},
{
  name: "芮尔",
  image: {
    src: "/seasons/s8/champion/image/card/068f8458f18a12e3.png",
  },
  price: 3,
  isHighLight: false,
  traits: ["xingzhishouhuzhe", "huwei"]
},
{
  name: "加里奥",
  image: {
    src: "/seasons/s8/champion/image/card/d14318820844ae60.png",
  },
  price: 4,
  isHighLight: true,
  traits: ["xingzhishouhuzhe", "huwei"]
},
{
  name: "加里奥",
  image: {
    src: "/seasons/s8/champion/image/card/441ce5d35663cbfd.png",
  },
  price: 5,
  isHighLight: false,
  traits: ["xingzhishouhuzhe", "huwei"]
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
  font-family: 'std';
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
  transform-style: preserve-3d;
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
    width: 179px;
    content: "";
    height: 0;
    position: absolute;
    border-right: 36px solid transparent;
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
    font-weight: bold;
    left: 15px;
    top: 8px;
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
    top: 16px;
    letter-spacing: 1px;
    font-weight: bold;
    font-size: 13px;
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
    transition: filter .2s;

    &:hover {
      filter: brightness(1.25);
    }

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
        left: 10px;
        top: 9px;
        letter-spacing: 2px;
        font-size: 18px;
        text-align: left;
        color: rgb(249, 238, 217);
        z-index: 10;

        &::before {
          content: "";
          position: absolute;
          left: -2px;
          top: 30px;
          width: 12px;
          height: 12px;
          display: inline-block;
          background-image: url("/UI/coin.png");
          background-size: 12px 12px;
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
  // opacity: 50%;
  position: absolute;
  left: 170px;
  top: -34px;
  width: 323px;
  height: 31px;
  line-height: 30px;
  padding-right: 7px;
  background-color: rgba(27, 35, 36, 0.6);
  display: flex;
  justify-content: flex-end;
  align-items: center;

  &::before {
    content: "";
    width: 0px;
    // background-color: #000;
    border-top: 31px solid transparent;
    border-left: 24px solid rgba(27, 35, 36, .6);
    // border-left: 24px solid rgba(16, 221, 248, 1);
    position: absolute;
    right: -24px;
  }

  li {
    font-size: 14px;
    font-weight: bold;
    list-style: none;
    margin-left: 2px;

    &::before {
      content: "·";
      font-size: 24px;
      width: 24px;
      transform: scale(4.00);
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
    border-radius: 1px;
    width: 191px;
    margin-right: 10px;
    height: 142px;
    color: rgb(240, 230, 210);
    font-weight: bold;
    position: relative;
    overflow: hidden;
    transition: filter .2s;

    &:hover {
      filter: brightness(1.2);
    }

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
      width: 187px;
      height: 108px;
      margin: 2px;
      position: relative;

      &::after {
        content: "";
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        box-shadow: 0 0 1px 2px rgba(0, 0, 0, 0.9) inset;
      }

      .card-image {
        border: none;
        width: 100%;
        height: 100%;
      }

    }

    .relations {
      position: absolute;
      font-size: 15px;
      left: 4px;
      bottom: 0;

      .relation {
        display: block;
        line-height: 26px;

        span {
          vertical-align: middle;
        }

        .traits-container {
          display: inline-block;
          position: relative;
          width: 22px;
          height: 23px;
          margin-left: 1px;
          margin-bottom: 4px;
          margin-right: 6px;
          transform-style: preserve-3d;
          background-image: url("/jb.png");
          background-repeat: no-repeat;
          background-size: 122px 48px;
          background-position: 0px 0px;

          .traits {
            position: absolute;
            left: 0;
            top: 0;
            width: 22px;
            height: 24px;
          }
        }
      }
    }

    .name {
      color: #fff;
      height: calc(30px - 1px);
      width: calc(100% - 4px);
      margin: -1px auto;
      padding: 0 6px;
      line-height: 26px;
      text-shadow: 1px 1px 1px #000;
      position: relative;

      //价值数字
      .price {
        text-shadow: 1px 1px 1px #000;
        text-align: center;
        position: absolute;
        width: 28px;
        height: 28px;
        top: 0;
        right: -3px;
      }

      // 金币图标
      &::before {
        content: "";
        position: absolute;
        top: 0;
        // background-color: red;
        top: 8px;
        right: 22px;
        height: 13px;
        width: 13px;
        display: inline-block;
        vertical-align: middle;
        background-image: url("/UI/coin.png");
        background-size: 13px 13px;
        background-repeat: no-repeat;
      }
    }

    &.quality1 {
      background-image: linear-gradient(180deg,
          rgb(43, 59, 70),
          rgb(24, 48, 57));


      .name {
        background-image: linear-gradient(45deg,
            rgb(20, 35, 49),
            rgb(38, 48, 57));
      }

    }

    &.quality2 {
      background-image: linear-gradient(180deg,
          rgb(8, 59, 33),
          rgb(9, 101, 48));

      .name {
        background-image: linear-gradient(45deg,
            rgb(19, 53, 44),
            rgb(16, 89, 41));
      }

    }

    &.quality3 {
      background-image: linear-gradient(180deg,
          rgb(16, 99, 125),
          rgb(15, 76, 101));


      .name {
        background-image: linear-gradient(45deg,
            rgb(28, 32, 71),
            rgb(29, 84, 126));
      }
    }

    &.quality4 {
      background-image: linear-gradient(180deg,
          rgb(137, 31, 138),
          rgb(112, 24, 112),
          rgb(183, 40, 184));

      .name {
        background-image: linear-gradient(45deg,
            rgb(70, 13, 73),
            rgb(172, 7, 130));
      }

    }

    &.quality5 {
      background-image: linear-gradient(180deg,
          rgb(181, 140, 43),
          rgb(177, 132, 39),
          rgb(240, 161, 64),
          rgb(248, 158, 61));

      .name {
        background-image: linear-gradient(45deg,
            rgb(99, 44, 9) 0%,
            rgb(117, 82, 10) 50%,
            rgb(125, 75, 5) 59.9%,
            rgb(158, 109, 18) 60%,
            rgb(155, 107, 18) 80%,
            rgb(179, 86, 7) 100%);
      }

    }

  }
}

.lock {
  // display: none;
  position: absolute;
  background-color: rgb(14, 22, 26);
  right: -3px;
  top: -39.5px;
  width: 77px;
  height: 39px;
  border-top: 3px solid rgb(149, 119, 66);
  border-left: 3px solid rgb(149, 119, 66);
  border-right: 3px solid rgb(149, 119, 66);
  transform-style: preserve-3d;
  z-index: 10;

  &.state-locked::before {
    background-image: url("/UI/lock.svg");
  }

  &.state-unlocked::before {
    background-image: url("/UI/unlock.svg");
  }

  // green border and content
  &::before {
    content: "";
    width: calc(100% - 6px);
    height: calc(100% - 3px);
    box-shadow: 0 0 0 2px rgb(34, 91, 91) inset;
    background-color: rgb(21, 32, 33);
    background-repeat: no-repeat;
    background-size: 24px 24px;
    background-position: 21px 4px;
    position: absolute;
    top: 3px;
    left: 3px;
    // box-shadow: 0 0 0 3px rgb(149, 119, 66) inset;
    z-index: 200;
  }

  // shadow
  &::after {
    content: "";
    width: calc(100% + 8px);
    margin-left: -4px;
    height: calc(100% + 0.5px);
    background-color: rgba(0, 0, 0, 0.25);
    position: absolute;
    transform: translateZ(-0.1px) translateY(-4px);
  }
}



.wallet-shadow {
  @wallet-shadow-color: rgba(0, 0, 0, 0.25);
  @wallet-shadow-height: 45px;
  @wallet-shadow-side-width: 35px;
  position: absolute;
  left: 560px;
  top: -49px;
  width: 107px;
  height: @wallet-shadow-height;
  background-color: @wallet-shadow-color;
  z-index: 1;
  transform: translateZ(-0.1px);

  &::before {
    content: "";
    position: absolute;
    left: -@wallet-shadow-side-width;
    top: 0;
    height: 0;
    width: 0;
    border-bottom: @wallet-shadow-height solid @wallet-shadow-color;
    border-left: @wallet-shadow-side-width solid transparent;
  }

  &::after {
    content: "";
    position: absolute;
    right: -@wallet-shadow-side-width;
    top: 0;
    height: 0;
    width: 0;
    border-bottom: @wallet-shadow-height solid @wallet-shadow-color;
    border-right: @wallet-shadow-side-width solid transparent;
  }
}

.wallet-outside-border {
  @wallet-outside-border-color: rgb(149, 120, 66);
  @wallet-outside-border-height: 46px;
  @wallet-outside-border-side-width: 36px;
  position: absolute;
  left: 1px;
  top: 2px;
  width: 105px;
  height: @wallet-outside-border-height;
  background-color: @wallet-outside-border-color;
  z-index: 2;

  &::before {
    content: "";
    position: absolute;
    left: -@wallet-outside-border-side-width;
    top: 0;
    height: 0px;
    width: 0;
    border-bottom: @wallet-outside-border-height solid @wallet-outside-border-color;
    border-left: @wallet-outside-border-side-width solid transparent;
  }

  &::after {
    content: "";
    position: absolute;
    right: -@wallet-outside-border-side-width;
    top: 0;
    height: 0;
    width: 0;
    border-bottom: @wallet-outside-border-height solid @wallet-outside-border-color;
    border-right: @wallet-outside-border-side-width solid transparent;
  }
}

.wallet-outside-background {
  @wallet-outside-background-color: rgb(21, 32, 33);
  @wallet-outside-background-height: 41px;
  @wallet-outside-background-side-width: 32px;
  position: absolute;
  left: 2px;
  top: 3px;
  width: 101px;
  height: @wallet-outside-background-height;
  background-color: @wallet-outside-background-color;
  z-index: 3;

  &::before {
    content: "";
    position: absolute;
    left: -@wallet-outside-background-side-width;
    top: 0;
    height: 0;
    width: 0;
    border-bottom: @wallet-outside-background-height solid @wallet-outside-background-color;
    border-left: @wallet-outside-background-side-width solid transparent;
  }

  &::after {
    content: "";
    position: absolute;
    right: -@wallet-outside-background-side-width;
    top: 0;
    height: 0;
    width: 0;
    border-bottom: @wallet-outside-background-height solid @wallet-outside-background-color;
    border-right: @wallet-outside-background-side-width solid transparent;
  }
}

.wallet-inside-border {
  @wallet-inside-border-color: rgb(30, 88, 90);
  @wallet-inside-border-height: 38px;
  @wallet-inside-border-side-width: 30px;
  position: absolute;
  left: 2px;
  top: 3px;
  width: 97px;
  height: @wallet-inside-border-height;
  background-color: @wallet-inside-border-color;
  z-index: 4;

  &::before {
    content: "";
    position: absolute;
    left: -@wallet-inside-border-side-width;
    top: 0;
    height: 0px;
    width: 0;
    border-bottom: @wallet-inside-border-height solid @wallet-inside-border-color;
    border-left: @wallet-inside-border-side-width solid transparent;
  }

  &::after {
    content: "";
    position: absolute;
    right: -@wallet-inside-border-side-width;
    top: 0;
    height: 0;
    width: 0;
    border-bottom: @wallet-inside-border-height solid @wallet-inside-border-color;
    border-right: @wallet-inside-border-side-width solid transparent;
  }
}

.wallet-inside-background {
  @wallet-inside-background-color: rgb(21, 32, 33);
  @wallet-inside-background-height: 33px;
  @wallet-inside-background-side-width: 26px;
  position: absolute;
  left: 1px;
  top: 2px;
  width: 95px;
  height: @wallet-inside-background-height;
  background-color: @wallet-inside-background-color;
  z-index: 5;

  &::before {
    content: "";
    position: absolute;
    left: -@wallet-inside-background-side-width;
    top: 0;
    height: 0px;
    width: 0;
    border-bottom: @wallet-inside-background-height solid @wallet-inside-background-color;
    border-left: @wallet-inside-background-side-width solid transparent;
  }

  &::after {
    content: "";
    position: absolute;
    right: -@wallet-inside-background-side-width;
    top: 0;
    height: 0;
    width: 0;
    border-bottom: @wallet-inside-background-height solid @wallet-inside-background-color;
    border-right: @wallet-inside-background-side-width solid transparent;
  }
}

.wallet-content {
  position: absolute;
  left: 10px;
  top: 0;
  font-weight: bold;
  font-size: 21px;
  height: 33px;
  width: 80px;
  text-align: center;
  padding-left: 24px;
  padding-right: 12px;
  color: rgb(244, 234, 213);
  text-shadow: 2px 2px 1px #000;
  line-height: 30px;
  z-index: 6;

  // 金币图标
  &::before {
    content: "";
    position: absolute;
    left: 0;
    top: 8px;
    height: 15px;
    width: 15px;
    margin-left: 4px;
    margin-right: 4px;
    display: inline-block;
    background-image: url("/UI/coin.png");
    background-size: 15px 15px;
    background-repeat: no-repeat;
  }

}

@traits-container-width: 36px;

.aside-traits-container {
  position: absolute;
  left: 0;
  top: 0;
  width: @traits-container-width;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @traits-shadow-side-height: 14px;
  @traits-shadow-color: rgba(0, 0, 0, 0.25);

  .aside-traits-shadow {
    width: 100%;
    // height: 530px;
    background-color: @traits-shadow-color;
    position: relative;
    z-index: 1;

    &::before {
      content: "";
      position: absolute;
      left: 0;
      top: -@traits-shadow-side-height;
      width: 100%;
      height: 0;
      border-left: @traits-container-width solid @traits-shadow-color;
      border-top: @traits-shadow-side-height solid transparent;
    }

    &::after {
      content: "";
      position: absolute;
      left: 0;
      bottom: -@traits-shadow-side-height;
      width: 100%;
      height: 0;
      border-left: @traits-container-width solid @traits-shadow-color;
      border-bottom: @traits-shadow-side-height solid transparent;
    }
  }


  .aside-traits-outside-border {
    @traits-outside-border-side-height: 13px;
    @traits-outside-border-width: 34px;
    @traits-outside-border-color: rgb(101, 82, 42);
    top: 1px;
    bottom: 1px;
    width: 34px;
    background-color: @traits-outside-border-color;
    position: absolute;
    z-index: 2;

    &::before {
      content: "";
      position: absolute;
      left: 0;
      top: -@traits-outside-border-side-height;
      width: 100%;
      height: 0;
      border-left: @traits-outside-border-width solid @traits-outside-border-color;
      border-top: @traits-outside-border-side-height solid transparent;
    }

    &::after {
      content: "";
      position: absolute;
      left: 0;
      bottom: -@traits-outside-border-side-height;
      width: 100%;
      height: 0;
      border-left: @traits-outside-border-width solid @traits-outside-border-color;
      border-bottom: @traits-outside-border-side-height solid transparent;
    }
  }

  .aside-traits-outside-background {
    @traits-outside-background-side-height: 12px;
    @traits-outside-background-width: 31px;
    @traits-outside-background-color: rgb(21, 32, 33);
    top: 2px;
    bottom: 2px;
    width: @traits-outside-background-width;
    background-color: @traits-outside-background-color;
    position: absolute;
    z-index: 3;

    &::before {
      content: "";
      position: absolute;
      left: 0;
      top: -@traits-outside-background-side-height;
      width: 100%;
      height: 0;
      border-left: @traits-outside-background-width solid @traits-outside-background-color;
      border-top: @traits-outside-background-side-height solid transparent;
    }

    &::after {
      content: "";
      position: absolute;
      left: 0;
      bottom: -@traits-outside-background-side-height;
      width: 100%;
      height: 0;
      border-left: @traits-outside-background-width solid @traits-outside-background-color;
      border-bottom: @traits-outside-background-side-height solid transparent;
    }
  }

  .aside-traits-inside-border {
    @traits-inside-border-side-height: 11px;
    @traits-inside-border-width: 28px;
    @traits-inside-border-color: rgb(17, 46, 47);
    top: 2px;
    bottom: 2px;
    width: @traits-inside-border-width;
    background-color: @traits-inside-border-color;
    position: absolute;
    z-index: 4;

    &::before {
      content: "";
      position: absolute;
      left: 0;
      top: -@traits-inside-border-side-height;
      width: 100%;
      height: 0;
      border-left: @traits-inside-border-width solid @traits-inside-border-color;
      border-top: @traits-inside-border-side-height solid transparent;
    }

    &::after {
      content: "";
      position: absolute;
      left: 0;
      bottom: -@traits-inside-border-side-height;
      width: 100%;
      height: 0;
      border-left: @traits-inside-border-width solid @traits-inside-border-color;
      border-bottom: @traits-inside-border-side-height solid transparent;
    }
  }

  .aside-traits-inside-background {
    @traits-inside-background-side-height: 11px;
    @traits-inside-background-width: 26px;
    @traits-inside-background-color: rgb(21, 32, 33);
    top: 2px;
    bottom: 2px;
    width: @traits-inside-background-width;
    background-color: @traits-inside-background-color;
    position: absolute;
    z-index: 5;
    display: flex;
    flex-direction: column;
    padding-left: 12px;

    &::before {
      content: "";
      position: absolute;
      left: 0;
      top: -@traits-inside-background-side-height;
      width: 100%;
      height: 0;
      border-left: @traits-inside-background-width solid @traits-inside-background-color;
      border-top: @traits-inside-background-side-height solid transparent;
    }

    &::after {
      content: "";
      position: absolute;
      left: 0;
      bottom: -@traits-inside-background-side-height;
      width: 100%;
      height: 0;
      border-left: @traits-inside-background-width solid @traits-inside-background-color;
      border-bottom: @traits-inside-background-side-height solid transparent;
    }
  }
}

.traits-item {
  list-style: none;
  height: 52px;
  border-radius: 0 6px 6px 0;
  min-width: 200px;
  margin: 8px 0;
  transform: translateX(20px);
  background-color: rgba(0, 0, 0, .4);
  display: flex;
  justify-content: flex-start;
  align-items: center;


  &.diamondous .traits-container {
    background-image: url("/UI/ef13d675a12d6c13.png");

    &:hover {
      background-image: url("/UI/fd77192139bffd68.png");
    }
  }

  &.golden .traits-container {
    background-image: url("/UI/df5c23e66a672d31.png");

    &:hover {
      background-image: url("/UI/b82ce9246865b796.png");
    }
  }

  &.silvery .traits-container {
    background-image: url("/UI/adf2e5d37c424faa.png");

    &:hover {
      background-image: url("/UI/6eea3fc44e037de5.png");
    }
  }

  &.coppery .traits-container {
    background-image: url("/UI/bd6c63e1abb765af.png");

    &:hover {
      background-image: url("/UI/4be95224acf17df1.png");
    }
  }

  &.inactive .traits-container {
    background-image: url("/UI/inactive.png");

    .traits-icon {
      filter: invert(1) hue-rotate(99deg)
    }
  }

  .traits-container {
    flex-shrink: 0;
    height: 58px;
    background-size: 52px 56px;
    background-repeat: no-repeat;
    background-position: 1px 0px;
    margin-left: -27px;

    .traits-icon {
      padding: 8px;
      // padding-top: 7px;
      // padding-bottom: 7px;
      // padding-left: 7px;
      // padding-right: 4px;
      width: 100%;
      height: 100%;
    }
  }

  .traits-current {
    background-color: rgb(57, 57, 57);
    margin-left: 8px;
    margin-right: 8px;
    font-size: 24px;
    border-radius: 6px;
    padding: 6px 8px;
    color: #fff;
  }

  .traits-right {
    color: rgb(240, 230, 210);

    .traits-name {
      font-size: 18px;
      height: 18px;
      line-height: 25px;
      font-weight: bold;
    }

    .traits-levels {
      font-size: 18px;
      font-weight: bold;
    }
  }
}



.bg {
  // opacity: 0%;
}
</style>
