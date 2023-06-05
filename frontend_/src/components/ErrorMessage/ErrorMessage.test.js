const { render } = require('@testing-library/react')
const { default: ErrorMessage } = require('./ErrorMessage')

describe('ErrorMessage', () => {
  it('should render correctly when there is no error', () => {
    const { container } = render(<ErrorMessage msg={''} />)
    expect(container).toMatchSnapshot()
  })

  it('should render correctly when there is an error', () => {
    const { container } = render(<ErrorMessage msg='Error' />)
    expect(container).toMatchSnapshot()
  })
})
