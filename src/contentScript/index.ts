console.info('contentScript is running')
// document.querySelectorAll('[is-shorts]').forEach((e) => e.remove())

// start dom listener that removes all elements with is-shorts attribute
const observer = new MutationObserver((mutations) => {
  console.info('mutation observed')
  mutations.forEach((mutation) => {
    mutation.addedNodes.forEach((node) => {
      if (node instanceof HTMLElement) {
        if (isShorts(node) || isShortsLink(node)) {
          console.info('removed node with is-shorts attribute')
          node.remove()
        }
      }
    })
  })
})
observer.observe(document.body, { childList: true, subtree: true })

const isShorts = (node: HTMLElement) => {
  return node.hasAttribute('is-shorts')
}

const isShortsLink = (node: HTMLElement) => {
  return node.title.toLowerCase() === 'shorts'
}
