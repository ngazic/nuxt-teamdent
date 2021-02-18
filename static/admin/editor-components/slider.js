/* global CMS */

CMS.registerEditorComponent({
  id: 'slider',
  label: 'Slider',
  fields: [
    {
      label: 'Slides',
      name: 'slides',
      label_singular: 'slide',
      widget: 'list',
      fields: [
        {
          name: 'image',
          label: 'Image',
          widget: 'image',
          required: true,
        },
        {
          name: 'alt',
          label: 'Description',
          widget: 'string',
          required: true,
        },
      ],
    },
  ],
  pattern: /^{{< slider slides="(.*)" >\}}/,
  fromBlock(match) {
    const items = match[1].split(',')
    const slides = []
    items.forEach((element) => {
      const newEl = element.split('|')
      const image = newEl[0]
      const alt = newEl[1]
      slides.push({ image, alt })
    })

    return {
      slides,
    }
  },
  // Function to create a text block from an instance of this component
  toBlock(obj) {
    const hasBarProperty = Object.prototype.hasOwnProperty.call(obj, 'slides')
    if (hasBarProperty) {
      let params = ''
      obj.slides.forEach((element, idx, array) => {
        params += `${element.image}|${element.alt}`
        if (idx !== array.length - 1) {
          params += ','
        }
      })
      return `<my-slider slides="${params}" ></my-slider>`
    }
    return null
  },
})
