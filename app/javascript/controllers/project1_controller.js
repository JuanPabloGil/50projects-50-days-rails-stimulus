import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = ['image']

  connect() {
    console.log('Hello from Project 1 controller')
    console.log(this.imageTargets)
  }

  click(event){
    this.removeActiveClasses()
    event.currentTarget.classList.add('active')
  }

  removeActiveClasses(){
    this.imageTargets.forEach((image) => {
      image.classList.remove('active')
    })
  }
}
