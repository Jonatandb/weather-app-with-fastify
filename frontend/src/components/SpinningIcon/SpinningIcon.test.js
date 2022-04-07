const { render } = require('@testing-library/react')
const { default: SpinningIcon } = require('./SpinningIcon')

describe('SpinningIcon', () => {
  it('renders correctly', () => {
    const { container } = render(<SpinningIcon />)
    expect(container).toMatchSnapshot()
  })

  it('renders correctly with icon as child', () => {
    const { container } = render(<SpinningIcon>⚡</SpinningIcon>)
    expect(container).toMatchSnapshot()
  })

  it('renders correctly with icon as child and speed', () => {
    const { container } = render(<SpinningIcon speed='slow'>⚡</SpinningIcon>)
    expect(container).toMatchSnapshot()
  })
})
