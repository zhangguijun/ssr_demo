/*
 * @description 利用canvas 生成水印
 * @fileName watermark.js
 * @author zh8
 * @date 2021/01/11 15:10:57
*/

export function __canvasWM({
  container = document.body,
  width = '300px',
  height = '150px',
  textAlign = 'center',
  textBaseline = 'middle',
  font = "12px Microsoft Yahei",
  fillStyle = 'rgba(184, 184, 184, 0.6)',
  content = '请勿外传',
  rotate = '20',
  zIndex = 1000
} = {}
) {
  const args = arguments[0];
  const canvas = document.createElement('canvas');

  canvas.setAttribute('width', width);
  canvas.setAttribute('height', height);

  const ctx = canvas.getContext("2d");

  ctx.textAlign = textAlign;
  ctx.textBaseline = textBaseline;
  ctx.font = font;
  ctx.fillStyle = fillStyle;
  ctx.rotate(Math.PI / 180 * rotate);
  ctx.fillText(content, parseFloat(width) / 2, parseFloat(height) / 2);

  const base64Url = canvas.toDataURL();

  const __vm = document.querySelector('.__MTvm');

  const waterMarkDiv = __vm || document.createElement('div');
  const styleStr = `
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: ${zIndex};
    pointer-events:none;
    background-repeat:repeat;
    background-image:url('${base64Url}');
  `;
  waterMarkDiv.setAttribute('style', styleStr);
  waterMarkDiv.classList.add('__MTvm');

  if(!__vm) {
    container.style.position = 'relative';
    container.insertBefore(waterMarkDiv, container.firstChild)
  }

  const MutationObserver = window.MutationObserver || window.WebKitMutationObserver;

  if(MutationObserver) {
    let mo = new MutationObserver(function(){
      const __vm = document.querySelector('.__vm');
      if((__vm && __vm.getAttribute('style' !== styleStr)) || !__vm) {
        mo.disconnect();
        mo = null;
        __canvasWM(JSON.parse(JSON.stringify(args)))
      }
    })
    mo.observe(container, {
      attributes: true,
      subtree: true,
      childList: true
    })
  }
}
