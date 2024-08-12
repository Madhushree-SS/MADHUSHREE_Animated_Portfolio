const aboutSection = document.querySelector('.about-section')
const aboutMeBtn = document.querySelector('.about-me-btn')
const xIcon = document.querySelector('.x-icon')
const contactForm = document.querySelector('.contact')
const sendButton = document.querySelector('.submit-btn')

const mainSection = document.querySelector('.main-section')


var contact_section =  document.querySelector(".contact-section")
var label1= contact_section.querySelector(".label1")
var label2= contact_section.querySelector(".label2")
var label3= contact_section.querySelector(".label3")


aboutMeBtn.addEventListener('click', () => {
    aboutSection.classList.add('active')
    overlay.classList.add('active')
    navbar.classList.add('hidden')
    navbar.classList.add('hidden')
    socialIcons.classList.add('hidden')
    disableScroll()
  })
  
  xIcon.addEventListener('click', () => {
    aboutSection.classList.remove('active')
    overlay.classList.remove('active')
    navbar.classList.remove('hidden')
    socialIcons.classList.remove('hidden')
    enableScroll()
  })
  
  overlay.addEventListener('click', () => {
    aboutSection.classList.remove('active')
    overlay.classList.remove('active')
    navbar.classList.remove('hidden')
    socialIcons.classList.remove('hidden')
    enableScroll()
  })
  
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault()
    let myForm = contactForm
    let formData = new FormData(myForm)
    const buttonText = sendButton.innerHTML
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams(formData).toString(),
    })
      .then(() => {
        sendButton.classList.add('sent')
        sendButton.innerHTML = 'Message Sent'
        console.log('Message Sent Successfully')
      })
      .catch((error) => {
        sendButton.classList.add('notSent')
        sendButton.innerHTML = `Something went wrong!`
        console.log(error)
      })
      .finally(() => {
        setTimeout(() => {
          sendButton.classList.remove('sent')
          sendButton.classList.remove('notSent')
          sendButton.innerHTML = buttonText
        }, 3000)
      })
  
    Array.from(contactForm.children).forEach((child, i) => {
      if (!(i % 2)) {
        child.value = ''
      }
    })
  })