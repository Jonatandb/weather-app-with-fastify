import './SpinningIcon.css'
export default function SpinningIcon({ children, ...props }) {
  return (
    <div
      className={`${props.speed ? 'SpinningIcon-' + props.speed : 'SpinningIcon-fast'}`}
      {...props}
    >
      {children}
    </div>
  )
}
