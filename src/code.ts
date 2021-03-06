import { darkenClr, lightenClr } from './util.js'
figma.showUI(__html__, { width: 250, height: 300 })

figma.ui.onmessage = msg => {

  if (msg.type === 'darken') {

      const r = msg.color.r / 255
      const g = msg.color.g / 255
      const b = msg.color.b / 255
      let color = { r: r, g: g, b: b }
      const cent = figma.viewport.center.x 
      for (let i = 0; i < msg.count; i++) {

        const cl = (i == 0 ? color : darkenClr(color, msg.ratio))
        const rect = figma.createRectangle()
        rect.x = (i * 100)+ cent
        rect.fills = [{ type: 'SOLID', color: cl }]
        figma.currentPage.appendChild(rect)
        color = cl;

       

      }

      figma.closePlugin()

  }
  if (msg.type === 'lighten') {

    const r = msg.color.r / 255
    const g = msg.color.g / 255
    const b = msg.color.b / 255
    let color = { r: r, g: g, b: b }
const cent = figma.viewport.center.x 
    for (let i = 0; i < msg.count; i++) {

      const cl = (i == 0 ? color : lightenClr(color, msg.ratio))
      const rect = figma.createRectangle()
      
      rect.x = (i * 100) + cent
      rect.fills = [{ type: 'SOLID', color: cl }]
      figma.currentPage.appendChild(rect)
      color = cl;

    }

    figma.closePlugin()

}

  if (msg.type === 'cancel') {

      figma.closePlugin()
  }
}

