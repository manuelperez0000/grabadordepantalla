const getName = () => {
    const name = localStorage.getItem('grabador-name')
    if (!name) {
        localStorage.setItem('grabador-name','1')
        return 'rec-1.webm'
    } else {
        const newName = Number(name) + 1
        localStorage.setItem('grabador-name',String(newName))
        return 'rec-' + newName + '.webm'
    }
}
export default getName