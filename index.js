const greenCharacter = document.createElement('img')
greenCharacter.src = 'assets/green-character.gif'
greenCharacter.style.position = 'fixed'
greenCharacter.style.left = '100px'
greenCharacter.style.bottom = '100px'
document.body.append(greenCharacter)

const pineTree = document.createElement('img')
pineTree.src = 'assets/pine-tree.png'
pineTree.style.position = 'fixed'
pineTree.style.left = '450px'
pineTree.style.bottom = '200px'
document.body.append(pineTree)


const newImage = (url , styleLeft , styleBottom) => {
    let object = document.createElement('img')
    object.src = url
    object.style.position = 'fixed'
    object.style.left = styleLeft + 'px'
    object.style.bottom = styleBottom + 'px'
    document.body.append(object)
    return object
}

newImage('assets/tree.png', 200, 300)
newImage('assets/pillar.png', 350, 100)
newImage('assets/crate.png', 150, 200)
newImage('assets/well.png', 500, 425)

const newItem = (url, left, bottom) => {
    let sword = document.createElement('img')
    sword.src = url
    sword.position = 'fixed'
    sword.left = left + 'px'
    sword.bottom = bottom + 'px'
    document.body.append(sword)

sword.addEventListener('dblclick', function(){
    sword.remove()
})
}

newItem('assets/sword.png', 500, 405)
newItem('assets/sheild.png', 165, 185)
newItem('assets/staff.png', 600, 100)

