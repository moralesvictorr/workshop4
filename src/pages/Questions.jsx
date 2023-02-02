import React from 'react'
import QuestionCSS from '../components/QuestionCSS'
import QuestionJS from '../components/QuestionJS'
import QuestionHTML from '../components/QuestionHTML'
import QuestionFIGMA from '../components/QuestionFIGMA'

function onClickCategory(category) {
    return category
}

const Questions = (tipoDeQuestionario) => {

    let selectedCategory = onClickCategory()

  return (
    <div>Questions</div>
  )
}

export default Questions