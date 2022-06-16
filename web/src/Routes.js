// In this file, all Page components from 'src/pages` are auto-imported. Nested
// directories are supported, and should be uppercase. Each subdirectory will be
// prepended onto the component name.
//
// Examples:
//
// 'src/pages/HomePage/HomePage.js'         -> HomePage
// 'src/pages/Admin/BooksPage/BooksPage.js' -> AdminBooksPage

import { Set, Router, Route } from '@redwoodjs/router'
import QuestionsLayout from 'src/layouts/QuestionsLayout'

const Routes = () => {
  return (
    <Router>
      <Set wrap={QuestionsLayout}>
        <Route path="/questions/new" page={QuestionNewQuestionPage} name="newQuestion" />
        <Route path="/questions/{id:Int}/edit" page={QuestionEditQuestionPage} name="editQuestion" />
        <Route path="/questions/{id:Int}" page={QuestionQuestionPage} name="question" />
        <Route path="/questions" page={QuestionQuestionsPage} name="questions" />
      </Set>
      <Route path="/login" page={LoginPage} name="login" />
      <Route path="/signup" page={SignupPage} name="signup" />
      <Route path="/forgot-password" page={ForgotPasswordPage} name="forgotPassword" />
      <Route path="/reset-password" page={ResetPasswordPage} name="resetPassword" />
      <Route path="/" page={HomePage} name="home" />
      <Route notfound page={NotFoundPage} />
    </Router>
  )
}

export default Routes
