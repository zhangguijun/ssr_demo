/*
 * @description 生成水印 - 使用svg
 * @fileName watermarkSvg.js
 * @author zh8
 * @date 2021/01/11 16:08:11
*/

export function __svgVM({
  container = document.body,
  content = '请勿外传',
  width = '300px',
  height = '200px',
  opacity = '0.2',
  fontSize = '12px',
  zIndex = 1000
} = {}) {
  const args = arguments[0];
  const svgStr = `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${width}">
                    <text x="50%" y="50%" dy="12px"
                      text-anchor="middle"
                      stroke="#000000"
                      stroke-width="1"
                      stroke-opacity="${opacity}"
                      fill="none"
                      transform="rotate(-45, 120 120)"
                      style="font-size: ${fontSize};">
                      ${content}
                    </text>
                  </svg>`
  const base64Url = `data:image/svg+xml;base64,${window.btoa(unescape(encodeURIComponent(svgStr)))}`

  const __vm = document.querySelector('.__MTvm');

  const waterMarkDiv = __vm || document.createElement("div");
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

  if (!__vm) {
    container.style.position = 'relative';
    container.insertBefore(waterMarkDiv, container.firstChild)
  }

  const MutationObserver = window.MutationObserver || window.WebKitMutationObserver;

  if (MutationObserver) {
    let mo = new MutationObserver(function () {
      const __vm = document.querySelector('.__vm');
      if ((__vm && __vm.getAttribute('style' !== styleStr)) || !__vm) {
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