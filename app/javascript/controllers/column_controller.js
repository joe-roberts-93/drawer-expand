import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="column"
export default class extends Controller {

  // next time just use doc query selector all and access index

  show(event){
    const photo = document.getElementById(`photo-${event.target.id}`);
    photo.classList.add("is-active")

  }


  hide(event){
    const photo = document.getElementById(`photo-${event.target.id}`);
    const column = document.querySelector(`.model-${event.currentTarget.id}`)
    photo.classList.remove("is-active")
    photo.classList.remove("fullscreen")
    column.classList.remove("white")
  }

  fullscreen(event){
    const model = document.getElementById(`photo-${event.currentTarget.id}`)
    model.classList.add("fullscreen")
    const menu = document.querySelector(".menu")
    const logo = document.querySelector(".logo")
    const column = document.querySelector(`.model-${event.currentTarget.id}`)
    column.classList.add("white")
  }
}
