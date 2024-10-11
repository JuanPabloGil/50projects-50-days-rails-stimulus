import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = ['circle', 'prevButton', 'nextButton', 'progress', 'view']

  connect() {
    this.counter = 1;
    this.maxBound = this.circleTargets.length
  }

  handleNext() {
    this.counter += 1
    this.handleProgressBar()
    this.toggleNextButton()
    this.togglePrevButton()
    this.handleView()
  }

  handlePrev() {
    this.counter -= 1
    this.handleProgressBar()
    this.toggleNextButton()
    this.togglePrevButton()
    this.handleView()
  }

  toggleNextButton() {
    if (this.counter >= this.maxBound) {
      this.nextButtonTarget.disabled = true
      return
    }
    this.nextButtonTarget.disabled = false
  }

  togglePrevButton() {
    if (this.counter <= 1) {
      this.prevButtonTarget.disabled = true
      return
    }
    this.prevButtonTarget.disabled = false
  }


  handleProgressBar() {
    this.circleTargets.forEach((element, index) => {
      if (this.counter > index) {
        element.classList.add('active')
        this.progressTarget.style.width = (((this.counter - 1) / (this.maxBound - 1)) * 100) + '%'
      } else {
        element.classList.remove('active')
      }
    });
  }

  handleView() {
    this.viewTargets.forEach((element, index) => {
      if (this.counter === index + 1) {
        element.classList.remove('hidden')
      } else {
        element.classList.add('hidden')
      }
    });
  }
}