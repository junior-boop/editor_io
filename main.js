import './style.css'
import Editor from './editor_js/editorjs.mjs'
import bible_ref from './bible_reference/bible-verse.mjs'
import quote_review from './quote_review/quote_review.mjs'
import titre from './titre/titre.mjs'
import heading from './header/header.mjs'
import marker from './marker/marker.mjs'
import delimiter from './delimiter/delimiter.mjs'
import underline  from '@editorjs/underline'
import image from './image/image.mjs'
import Link from './link/link.mjs'

const app = document.querySelector('#app')

const initial_data = () => {

  const data_i = () => {
    const data = document.querySelector('#data')
    alert(data.innerText)
    return JSON.parse(data.innerText)
  }

    const editorjs = new Editor({
      placeholder : 'Entrer votre texte',
      holder : app,
      tools : {
        bible_ref : {
          class : bible_ref,
          inlineToolbar: ['link', 'marker', 'bold', 'italic'],
        },
        titre : titre,
        quote_review : quote_review ,
        image : image,
        heading : {
          class : heading,
          config : {
            placeholder: 'Enter a header',
            levels: [2, 3],
            defaultLevel: 3
          }
        },
        link : Link,
        marker : marker,
        delimiter : delimiter,
        underline : underline, 
        
        
      },
    
    
      onChange: async (api, event) => {
        const output = document.getElementById('output');
        output.innerHTML = JSON.stringify(await api.saver.save())
      },
    
      data : data_i()
    })

  

}

setTimeout(()=>{
  initial_data()
}, 1000)