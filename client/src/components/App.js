import React, { useState, useEffect } from "react"
import companies from './companies'
import items from './items'

function App () {
  const companiesArr = companies.map((item) => item)
  const itemsArr = items.map((item) => item)

  const duplicateCategoriesArr = itemsArr.map(item => {
    return item.category
  })

  const categoriesArr = [ ...new Set(duplicateCategoriesArr) ]

  console.log(categoriesArr)

  return <div><ul></ul></div>
}

export default App