

const Welcome = (props) => {
  return (
    <div style={{ color: props.textColor }}>
			<h2>
				Welcome {props.firstName} {props.lastName}
			</h2>
		</div>
  )
}

export default Welcome