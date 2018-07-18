export const mergeArrayElements = (
  firstArray,
  secondArray,
  compare = (a, b) => a.name === b.name,
) => {
  const mergedElements = []

  firstArray.forEach((elementInFirstArray) => {
    const existingRule = secondArray.find((elementInSecondArray) => {
      return compare(elementInFirstArray, elementInSecondArray)
    })
    if (!existingRule) {
      mergedElements.push({ ...elementInFirstArray })
    }
  })

  secondArray.forEach((elementInSecondArray) => {
    mergedElements.push({
      ...(firstArray.find((elementInFirstArray) =>
        compare(elementInFirstArray, elementInSecondArray),
      ) || {}),
      ...elementInSecondArray,
    })
  })

  return mergedElements
}
