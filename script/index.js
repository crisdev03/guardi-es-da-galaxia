const members = [
  { name: 'Peter Quill', id: 'peter' },
  { name: 'Gamora Titan', id: 'gamora' },
  { name: 'Drax o Destruidor', id: 'drax' },
  { name: 'Mantis', id: 'mantis' },
  { name: 'Rocket Raccoon', id: 'rocket' },
  { name: 'I am Groot', id: 'groot' },
]

  let activeMember = 0
  const images = document.getElementById('images')
  const menu = document.getElementById('menu')
  const membername = document.getElementById('member_name')

  function changeStatusButtons() {
    const prev = document.getElementById('button_prev')
       const isFirst = activeMember === 0
        prev.disabled = isFirst

    const next = document.getElementById('button_next')
    const isLast = activeMember === members.length - 1
    next.disabled = islast 
  }

  function navigationMember(direction){
    activeMember = activeMember + direction
       
       const member = members[activeMember]

       console.log(activeMember, member);

       images.style.transform = 'translatey(${-100 * activeMember}vh)'

       membername.classList = member.id
       chageName(member.name)

       changeStatusButtons()
  }

  function changemenu() {
    menu.classList.toggle('active')
  }

  function setMember(memberId) {
   console.log(memberId)
  }