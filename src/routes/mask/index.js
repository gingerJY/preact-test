import style from './style.module.scss';

export default function Mask() {
  return (
    <div>
      <div class={style.mask}>
        <div class={style.origin}></div>
        <div class={`${style.origin} ${style.maskLinear}`}></div>
        <div class={`${style.origin} ${style.multiImg}`}></div>
        <div class={`${style.origin} ${style.multiImg2}`}></div>
        <div class={`${style.origin} ${style.multiImg3}`}></div>
      </div>
      <div class={style.test1}>
        <div class={style.img1}></div>
        <div class={style.img2}></div>
      </div>
    </div>
  );
}
