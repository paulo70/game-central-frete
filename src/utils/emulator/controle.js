export const left = (element) => {
  element.current.style.left = parseInt(element.current.style.left) - 5 + '%';
}

export const right = (element) => {
  element.current.style.left = parseInt(element.current.style.left) + 5 + '%';
}

export const up = (element) => {
  element.current.style.top = parseInt(element.current.style.top) - 5 + '%';
}

export const middle = (element) => {
  element.current.style.left = parseInt(element.current.style.left) + 5 + '%';
}