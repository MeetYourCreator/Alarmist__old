export const formatZoneName = (zoneStr) => {

  // console.log('%c%s','color: green; background: yellow',`time.js, 41 zoneStr: ${zoneStr}`)

  const zoneArr = zoneStr.split('')
  // console.log(`time.js, 44 zoneArr: ${zoneArr}`)

  const indexOfFirstForwardSlash = zoneArr.findIndex((firstForwardSlash) => firstForwardSlash === '/')
  // console.log(`time.js, 47 indexOfFirstForwardSlash: ${indexOfFirstForwardSlash}`)

  const zoneArr2 = zoneStr.split(',')
  // console.log(`time.js, 50 zoneArr2: ${zoneArr2}`)

  const zoneStr2 = zoneArr2.toString()
  // console.log(`time.js, 53 zoneStr2: ${zoneStr2}`)

  const firstForwardSlashRemovedArr = zoneStr2.slice(indexOfFirstForwardSlash).replace('/', '')
  // console.log(`time.js, 56 firstForwardSlashRemovedArr: ${firstForwardSlashRemovedArr}`)

  const indexOfSecondForwardSlash = firstForwardSlashRemovedArr.split('').findIndex((secondForwardSlash) => secondForwardSlash === '/')
  // console.log(`time.js, 59 indexOfSecondForwardSlash: ${indexOfSecondForwardSlash}`)

  if (indexOfSecondForwardSlash >= 0) {
    const country1 = firstForwardSlashRemovedArr.slice(indexOfSecondForwardSlash).replace('/', ' ').replace('_', '  ').replace('_', '  ');
    return country1
  } else {
    const country2 = firstForwardSlashRemovedArr.replace('_', ' ').replace('_', ' ')
    return country2
  }
}

export const searchInput = (input, regexp) => {
  const results = input.filter(entry => entry.toLowerCase().includes(regexp))
  return results
}