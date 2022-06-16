import {
  Form,
  FormError,
  FieldError,
  Label,
  TextField,
  NumberField,
  Submit,
} from '@redwoodjs/forms'

const QuestionForm = (props) => {
  const onSubmit = (data) => {
    props.onSave(data, props?.question?.id)
  }

  return (
    <div className="rw-form-wrapper">
      <Form onSubmit={onSubmit} error={props.error}>
        <FormError
          error={props.error}
          wrapperClassName="rw-form-error-wrapper"
          titleClassName="rw-form-error-title"
          listClassName="rw-form-error-list"
        />

        <Label
          name="title"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Title
        </Label>

        <TextField
          name="title"
          defaultValue={props.question?.title}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="title" className="rw-field-error" />

        <Label
          name="language"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Language
        </Label>

        <TextField
          name="language"
          defaultValue={props.question?.language}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="language" className="rw-field-error" />

        <Label
          name="definition"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Definition
        </Label>

        <TextField
          name="definition"
          defaultValue={props.question?.definition}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="definition" className="rw-field-error" />

        <Label
          name="other_info"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Other info
        </Label>

        <TextField
          name="other_info"
          defaultValue={props.question?.other_info}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
        />

        <FieldError name="other_info" className="rw-field-error" />

        <Label
          name="userId"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          User id
        </Label>

        <NumberField
          name="userId"
          defaultValue={props.question?.userId}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="userId" className="rw-field-error" />

        <div className="rw-button-group">
          <Submit disabled={props.loading} className="rw-button rw-button-blue">
            Save
          </Submit>
        </div>
      </Form>
    </div>
  )
}

export default QuestionForm
